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
                sh 'php --version'
                sh 'pwd'
                sh 'ls -la'
                sh 'composer --version'
                sh 'composer install'
                sh './vendor/bin/phpunit --verbose tests'
            }
        }
        
        stage("Test") {
            steps {
                echo 'Testing the application...'
            }
        }
        
        stage("Deliver") {
            steps {
                echo 'Deploying the appliation...'
            }
        }
    }
}
