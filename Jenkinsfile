pipeline {
    
    agent {
        docker {
            image 'node:lts-buster-slim'
            args '-p 3000:3000'
        }
    }
    
    stages {
        stage("build") {
            steps {
                echo 'Building the application...'
                sh 'node --version'
                sh 'npm install'
                sh 'npm run cy:verify'
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
