pipeline {
    
    agent {
        docker {
            image 'drupal:php7.4-fpm-bullseye'
        }
    }
    
    stages {
        stage("Build") {
            steps {
                echo 'Building the application...'
                sh 'composer install'
            }
        }
        
        stage("Test") {
            steps {
                echo 'Testing the application...'
                sh './vendor/bin/phpunit --verbose tests'
            }
        }
        
        stage("Deploy") {
            steps {
                echo 'Deploying the appliation...'
            }
        }
    }
}
