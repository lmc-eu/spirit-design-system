#!/usr/bin/env groovy

pipeline {
  options {
    disableConcurrentBuilds()
    buildDiscarder(logRotator(daysToKeepStr: '7', numToKeepStr: '3', artifactNumToKeepStr: '3'))
  }

  parameters {
    string(name: 'GIT_BRANCH', defaultValue: 'origin/master')
  }

  environment {
    GIT_BRANCH_LOCAL = sh (
      script: "echo ${GIT_BRANCH} | sed -e 's|origin/||g'",
      returnStdout: true
  ).trim()
    sonarScannerHome = tool 'SonarQubeScanner'
  }

  agent any

  stages {
    stage('Normal deps checks') {
      stages {
        stage('Prepare') {
          steps {
            step([$class: 'StashNotifier', prependParentProjectKey: true])
            sh "composer install"
            sh "mkdir -p coverage"
          }
        }

        stage('PHPStan') {
          steps {
            sh "composer run phpstan"
          }
        }

        stage('UT') {
          steps {
            sh "composer run phpunit:coverage";
          }

          post {
            success {
              step([
                $class: "CloverPublisher",
                cloverReportDir: "coverage",
                cloverReportFileName: "clover.xml",
                healthyTarget: [methodCoverage: 70, conditionalCoverage: 80, statementCoverage: 80],
                unhealthyTarget: [methodCoverage: 50, conditionalCoverage: 50, statementCoverage: 50],
                failingTarget: [methodCoverage: 0, conditionalCoverage: 0, statementCoverage: 0]
            ])
            }
          }
        }

        stage('Coding style') {
          steps {
            sh "composer run ecs"
          }
        }
      }
    }

    stage('lowest deps checks') {
      stages {
        stage('Prepare') {
            steps {
                sh "composer --prefer-lowest --prefer-stable update"
            }
        }

        stage('UT') {
          steps {
            sh "composer run phpunit";
          }
        }
      }
    }

    stage('SonarQube analysis') {
      steps {
        script {
          withSonarQubeEnv('sonarqube') {
            sh "${sonarScannerHome}/bin/sonar-scanner -Dsonar.branch.name=${GIT_BRANCH_LOCAL}"
          }
        }
      }
    }
  }

  post {
    always {
      script {
        currentBuild.result = currentBuild.result ?: 'SUCCESS'
        step([$class: 'StashNotifier', prependParentProjectKey: true])
        cleanWs()
      }
    }
  }
}