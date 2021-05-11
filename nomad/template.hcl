job {{job_name}} {
  datacenters = [
    "cdev",
    "cprod",
    "pprod",
    "pprodttc",
    "pprodcecolo"
  ]
  spread {
    attribute = "${node.datacenter}"
  }
  region = "{{env.name}}"
  priority = 50
  group "compres-spiritdesignsystem" {
    count = {{containers_count}}
    task "compres-spiritdesignsystem-apache" {
      driver = "docker"
      config {
        image = "{{docker.image}}"
        hostname = "${NOMAD_TASK_NAME}-${NOMAD_ALLOC_INDEX}"
        port_map = {
          //application
          http = 80
        }
        logging {
          type = "gelf"
          config {
            gelf-address = "udp://gray:12201"
            tag = "compres-spiritdesignsystem-apache"
          }
        }
      }
      resources {
        memory = 48
        network = {
          //dynamic port
          port "http" {}
        }
      }
      logs = {
        max_files     = 3
        max_file_size = 3
      }
      constraint {
        attribute = "${node.class}"
        operator = "="
        value = "internal-dcall"
      }
      service {
        "name"= "{{job_name}}",
        tags = [
          "compres",
          "spiritdesignsystem",
          "apache",
          "react",
          "{{build_type}}",
          "{{app_version}}/{{version}}"
        ]
        port = "http"
        check {
          name = "alive"
          type = "tcp"
          interval = "10s"
          timeout = "2s"
          port = "http"
        }
      }
    }
    task "compres-spiritdesignsystem-prometheus-apache" {
      driver = "docker"
      config {
        image = "dcreg.service.consul/prod/lmc-sys-prometheus-apache-exporter:latest"
        port_map = {
          //application
          apache_exporter = 9117
        }
        logging {
          type = "gelf"
          config {
            gelf-address = "udp://gray:12201"
            tag = "compres-spiritdesignsystem-prometheus-apache"
          }
        }
      }
      env {
        // name of variable with apache container server IP and port
        "EXPORTER_SCRAPE_VARIABLE" = "NOMAD_ADDR_compres_spiritdesignsystem_apache_http"
      }
      resources {
        memory = 32
        network = {
          //dynamic port
          port "apache_exporter" {}
        }
      }
      logs = {
        max_files     = 3
        max_file_size = 3
      }
      constraint {
        attribute = "${node.class}"
        operator = "="
        //runtime
        value = "internal-dcall"
      }
      service {
        "name"= "{{job_name}}--apacheprometheus",
        tags = [
          "compres",
          "spiritdesignsystem",
          "apacheprometheus"
        ]
        port = "apache_exporter"
        check {
          name = "alive"
          type = "tcp"
          interval = "10s"
          timeout = "5s"
          port = "apache_exporter"
        }
      }
    }
    ephemeral_disk {
      migrate = false
      sticky = false
      size = "20"
    }
  }
  update = {
    auto_revert = false
    auto_promote = {{ auto_promote }}
    canary = {{ canary }}
    healthy_deadline = "3m"
    max_parallel = 1
    health_check = "checks"
    min_healthy_time = "10s"
  }
}
