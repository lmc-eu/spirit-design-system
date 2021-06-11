#!groovy
@Library('lmc-jenkins2-shared-library@feat/npm-command')
@Library('compres-jenkins2-shared-libraries@2.2.2') _

import eu.lmc.compres.Helper
import eu.lmc.compres.Narwhal
import eu.lmc.compres.NarwhalPackage
import eu.lmc.compres.Release
import eu.lmc.pipeline.DockerRegistry
import groovy.json.JsonOutput
import eu.lmc.pipeline.NpmRegistry

Map envListToInstall = [
  dev: ["dev-internal"],
  prod: ["prod-internal"]
]

pipeline {
  options {
    disableConcurrentBuilds()
    buildDiscarder(logRotator(numToKeepStr: '5'))
  }
  triggers {
    GenericTrigger(
      genericVariables: [
        [key: 'payload', value: '$'],
        [key: 'branch', value: '$.changes[0].ref.displayId'],
        [key: 'actor_name', value: '$.actor.displayName'],
        [key: 'actor_email', value: '$.actor.emailAddress']
      ],
      causeString: BRANCH_NAME,
      token: 'spirit-design-system',
      regexpFilterText: '$branch',
      regexpFilterExpression: BRANCH_NAME
    )
  }
  agent any
  environment {
    CI = 'true'
    SHARED_WORKSPACE = ''

    projectName = 'spirit-design-system'
    IMAGE_NAME = 'lmc-spirit-design-system'
    NARWHAL_ARTIFACT = 'compres-spiritdesignsystem-common'
    CERT_KEY = "${NOMAD_SECRETS_DIR}/jenkins-cse.key"
    CERT_CRT = "${NOMAD_SECRETS_DIR}/jenkins-cse.crt"
    sonarScannerHome = tool 'SonarQubeScanner'
    YARN_CACHE_DIR = '/var/jenkins_home/.cache/yarn'
  }

  stages {
    stage('Prepare environment') {
      steps {
        sendNotifications(projectName, 'STARTED')
        script {
          baseWorkspace = getWorkspaceDirOnHost("${HOST_JENKINS_JOBS}")
          currentBuild.result == null
          notifyBitbucket()
          appEnv = "dev"
          if ( "${GIT_BRANCH}" == "main" ) {
            appEnv = "prod"
          }
          buildVersion = Helper.getBuildVersion(this, appEnv)
          narwhalRelease = ""
        }
      }
    }
    stage('CI skip') {
      when {
        branch 'main'
      }
      steps {
        script {
          def skipBuild = shouldSkipBuild()
          if ( "${skipBuild}" != "") {
            echo ("'ci skip' spotted in git commit. Aborting.")
            step([$class: 'WsCleanup'])
            currentBuild.result = 'ABORTED'
            error('Stopping early…')
          }

          if (!actor_name || !actor_email) {
            echo ("No actor found! Aborting.")
            step([$class: 'WsCleanup'])
            currentBuild.result = 'ABORTED'
            error('Stopping early…')
          }
        }
      }
    }
    stage('Testing') {
      agent {
        dockerfile {
          filename 'docker/development/Dockerfile'
          dir '.'
          label 'spirit-design-system-node'
          additionalBuildArgs  '--build-arg NODE_ENV=development'
          reuseNode true
        }
      }
      stages {
        stage('Install dependencies') {
          steps {
            sh "node --version"
            sh "npm --version"
            sh "yarn --version"
            // far more better using existing cache
            sh "yarn config set cache-folder $YARN_CACHE_DIR"
            sh "yarn install --frozen-lockfile"
          }
        }
        stage('Testing') {
          parallel {
            /* stage('Lint') {
              steps {
                script {
                  sh "yarn lint"
                }
              }
            } */
            /* stage('Check types') {
              steps {
                script {
                  sh "yarn types"
                }
              }
            } */
            /* stage('Test') {
              steps {
                script {
                  sh "yarn test:coverage"
                }
              }

              post {
                success {
                  publishHTML target: [
                    allowMissing: false,
                    alwaysLinkToLastBuild: false,
                    keepAll: true,
                    reportDir: './coverage/lcov-report',
                    reportFiles: 'index.html',
                    reportName: 'Test Coverage Report'
                  ]
                  stash name: 'coverage-info', includes: 'coverage/*'
                  step([
                    $class: 'CloverPublisher',
                    cloverReportDir: './coverage',
                    cloverReportFileName: 'clover.xml',
                    healthyTarget: [methodCoverage: 70, conditionalCoverage: 80, statementCoverage: 80],
                    unhealthyTarget: [methodCoverage: 50, conditionalCoverage: 50, statementCoverage: 50],
                    failingTarget: [methodCoverage: 0, conditionalCoverage: 0, statementCoverage: 0]
                  ])
                }
                always {
                  junit 'coverage/junit.xml'
                }
              }
            } */
            stage('Coding standarts') {
              steps {
                script {
                  sh "yarn format:check"
                }
              }
            }
            stage('Lint commit message') {
              steps {
                script {
                  sh 'yarn commitlint --from $(git describe --tags --abbrev=0) --to HEAD'
                }
              }
            }
          }
        }
        stage('SonarQube analysis') {
          steps {
            script {
              /* dir('coverage-info') {
                unstash 'coverage-info'
              } */

              try {
                withSonarQubeEnv('sonarqube') {
                  sh "${sonarScannerHome}/bin/sonar-scanner -Dsonar.branch.name=${GIT_BRANCH}"
                }
              } catch(error) {
                echo error.getMessage()
              }
            }
          }
        }
        stage('Publish package') {
          when {
            beforeAgent true
            branch 'main'
          }
          steps {
            script {
              def skipBuild = shouldSkipBuild()
              if ( "${skipBuild}" == "" ) {
                sh "git config push.default simple"

                sh "yarn lerna version $WORKSPACE/bin/conventional-semver.sh`"
                new NpmRegistry(this, 'yarn lerna publish from-package --yes --registry %s', false).publishParallel()
              }
            }
          }
          post {
            always {
              archiveArtifacts artifacts: 'dist/*', fingerprint: true
            }
          }
        }
        stage('Build storybook') {
          when {
            beforeAgent true
            anyOf {
                branch 'main';
                branch 'integration/*';
            }
          }
          steps {
            sh "yarn storybook:build"
          }
          post {
            always {
              archiveArtifacts artifacts: '.storybook/build/*', fingerprint: true
            }
          }
        }
      }
      post {
        always {
          script {
            currentBuild.result = currentBuild.result ?: 'SUCCESS'
          }
        }
        failure {
          script {
            if ("${GIT_BRANCH}" == "main" || GIT_BRANCH.startsWith('integration/')) {
              sendNotifications(
                projectName,
                'FAILURE',
                null,
                ':boom:',
                null,
                '#compres-devs'
              )
            }
          }
        }
      }
    }
    stage('Building') {
      when {
        anyOf {
          branch 'integration/*'
          branch 'main'
        }
      }
      stages {
        stage('Prepare build environment') {
          steps {
            script {
              println "Version: ${buildVersion}"
              baseWorkspace = getWorkspaceDirOnHost("${HOST_JENKINS_JOBS}")
              new DockerRegistry(this).login('dcreg.service.consul')
              narwhal = new Narwhal(CERT_KEY, CERT_CRT, envListToInstall[appEnv], this)
              release = new Release(appEnv, this)
            }
          }
        }
        stage('Build container') {
          steps {
            script {
              SHARED_WORKSPACE = WORKSPACE
            }
            script {
              def latestTag = getLatestTag()
              String dockerArgAndLabelParams = release.getDockerArgAndLabelParams(buildVersion, latestTag)
              dockerImage = docker.build(IMAGE_NAME, "-f docker/storybook/Dockerfile ${dockerArgAndLabelParams} .")
              dockerImageToInstall = tagAndPushImageParallelIfNotExist("${appEnv}", "${IMAGE_NAME}", "${buildVersion}")
            }
          }
          post {
            success {
              script {
                sh "docker rmi --force `docker images -q ${IMAGE_NAME} | uniq`"
              }
            }
          }
        }
      }
    }
    stage('Shipping') {
      when {
        anyOf {
          branch 'integration/*'
          branch 'main'
        }
      }
      stages {
        stage('Update Nomad teplate') {
          steps {
            script {
              configStoreUrl = sendConfigToConfigStore([
                'source': baseWorkspace,
                'destination': '/compres/services/spiritdesignsystem-common/nomad/jobs',
                'name': NARWHAL_ARTIFACT,
                'template': "nomad/template.hcl",
                'owner': 'compres'
              ])
              /* Update default configstore URL in artefacts */
              if ( "${GIT_BRANCH}" == "main" ) {
                narwhal.updateDefaultConfigUrl(NARWHAL_ARTIFACT, configStoreUrl)
              }
            }
          }
        }
        stage('Deploy') {
          when {
            anyOf {
              branch 'main'
              branch 'integration/*'
            }
          }
          steps {
            script {
              def latestTag = getLatestTag()
              def packageMetaList = [:]
              packageMetaList[NARWHAL_ARTIFACT] = new NarwhalPackage(
                configStoreUrl,
                NarwhalPackage.convertMetadataToJson([
                  'app_version': latestTag - "@",
                  'build_version': buildVersion,
                  'build_type': appEnv,
                  'image': IMAGE_NAME,
                  'containers_count': 1
                ])
              )
              narwhalRelease = narwhal.createRelease(NARWHAL_ARTIFACT,buildVersion,packageMetaList)
              narwhalTasks = narwhal.createTasks(
                narwhalRelease,
                envListToInstall[appEnv],
                "Task Actor: ${actor_name} <${actor_email}>"
              )
              narwhalReleaseAndTask = narwhal.getReleaseAndTaskNotificationText(narwhalRelease, narwhalTasks)
            }
          }
        }
      }
      post {
        always {
          script {
            currentBuild.result = currentBuild.result ?: 'SUCCESS'
          }
        }
        failure {
          script {
            if ("${env.BRANCH_NAME}" == "main") {
              sendNotifications(
                projectName,
                'FAILURE',
                null,
                ':boom:',
                null,
                '#compres-devs'
              )
            }
          }
        }
      }
    }
  }
  post {
    always {
      script {
        currentBuild.result = currentBuild.result ?: 'SUCCESS'
        def desc = "${appEnv}: ${buildVersion}"
        def releaseUrl = ""
        def releaseLink = ""
        if ( "${narwhalRelease}" != "") {
          releaseUrl = narwhal.getReleaseWebUrl(narwhalRelease)
          releaseLink = "<${releaseUrl}|Release #${narwhalRelease}>"
          desc += "\n<a href=\"${releaseUrl}\" target=\"_blank\">Release #${narwhalRelease}</a>"
        }
        wrap([$class: 'BuildUser']) { currentBuild.description = desc }
        sendNotifications(projectName, currentBuild.result, releaseLink)
        notifyBitbucket()
        deleteDir()
        script {
          step([$class: 'WsCleanup'])
        }
      }
    }
  }
}
