pipeline {

    agent none

 

    stages {
        stage('Clone Code for Agent 1') {
            
            agent {
                label "slave"
            }

            steps {
                echo 'Clone code tren gitlab'
                checkout([$class: 'GitSCM', branches: [[name: '*/main']],
                userRemoteConfigs: [[url: 'https://github.com/Hoann03/testJenkins']]])
            }
        }
    
        
        stage('Build') {
            agent {
                label "slave"
            }
            steps {
                dir("angular-demo"){
                    echo 'Build'
                    sh "sudo apt update"
                    sh "sudo apt install nodejs -y"
                    sh "sudo apt install npm"
                    sh "ng build"
                    echo 'Build done'
                }
                
            }
        }
    }
}
