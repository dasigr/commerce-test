pipeline {
    
    agent {
        docker {
            image 'node:lts-bullseye-slim' 
            args '-p 3000:3000' 
        }
    }
    
    stages {
        stage("build") {
            steps {
                echo 'Building the application...'
                sh 'node --version'
            }
        }
        
        stage("test") {
            steps {
                echo 'Testing the application...'
            }
        }
        
        stage("deploy") {
            steps {
                echo 'Deploying the appliation...'
            }
        }
    }
}
