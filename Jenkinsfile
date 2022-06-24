pipeline {
    
    agent {
        docker {
            image 'cypress/base:16.14.2'
            args '-p 3000:3000'
        }
    }
    
    environment {
        HOME = "${env.WORKSPACE}"
        npm_config_cache = 'npm-cache'
    }
    
    stages {
        stage("build") {
            steps {
                echo 'Building the application...'
                sh 'npm ci'
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
