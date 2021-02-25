pipeline {
    
    environment {
        ProjectCode = "DevopsTraining";
        BUILD_ID = "${env.BUILD_ID}";        
        BUILD_RELEASE = true;
        WORKSPACE = "${env.WORKSPACE}";
        VERSION = "0.1";

 

        NexusRepoURL         = "localhost:8081/"; 
        NexusProtocol       = "http";
        NexusCredentialsId    = "aa1e6d8b-55c6-43df-89d7-1270f16c686e";
        NexusVersion        = "nexus3";
        

  }
    
    agent none

 

    // stages {
    //     stage('Clone Code for Agent 1') {
            
    //         agent {
    //             label "Agent01"
    //         }

    //         steps {
    //             echo 'Clone code tren gitlab'
    //             checkout([$class: 'GitSCM', branches: [[name: '*/master']],
    //             userRemoteConfigs: [[url: 'http://192.168.146.128/root/hoan-nguyen/tree/master/angular-demo']]])
    //         }
    //     }
    stages {
        stage('Clone Code for Agent 2') {
            agent {
                label "Agent02"
            }
            steps {
                echo 'Clone code angular'
                //checkout([$class: 'GitSCM', branches: [[name: '*/master']],
                //userRemoteConfigs: [[url: 'http://192.168.146.128/root/hoan-nguyen']]])
            }//
        }
        stage('Build') {
            agent {
                label "Agent02"
            }
            steps {
                dir("angular-demo"){
                    echo 'Build'
                   // bat "ng build"
                    echo 'Build done'
                }
                
            }
        }
        stage('Zip Package') {
            agent {
                label "Agent02"
            }
            steps {
               
                    bat "\"C://Program Files//7-Zip//7z.exe\" u -tzip Angular.zip angular-demo"
                    nexusArtifactUploader artifacts: [ 
                                        [ 
                                        classifier: '', 
                                        type: "zip",
                                        file: "Angular.zip",
                                        artifactId: "Angular"
                                        ]
                                    ],
                                    nexusUrl: "$NexusRepoURL", nexusVersion: "$NexusVersion", protocol: "$NexusProtocol", credentialsId: "$NexusCredentialsId",
                                    repository: "GlobalConnection",
                                    groupId: "DevopsTraining",
                                    version: "$BUILD_NUMBER"       
                
            }
        }
        stage('Sonar') {
            agent {
                label "Agent02"
            }
            steps {
               dir("angular-demo"){
                   bat "sonar-scanner.bat -D\"sonar.projectKey=tesst\" -D\"sonar.sources=.\" -D\"sonar.host.url=http://localhost:9000\" -D\"sonar.login=232fd6e2d88501a2426f8ffaf861937a39700ea6\""       
               }
                
            }
        }
        stage('UnitTest') {
            agent {
                label "Agent01"
            }
            steps {
                dir('angular-demo'){
                    echo 'UnitTest'
                    bat "ng test"
                    echo 'Test done'
                }    
                    
                
            }
        
        
        }    
    }
}
