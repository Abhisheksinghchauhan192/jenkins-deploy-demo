pipeline {
    agent {label 'agent1'}

    environment {
        IMAGE_NAME = "demo-app"
    }

    stages {

        stage('Cleanup') {
            steps {
                sh 'docker rm -f demo-container || true'
            }
        }

        

        stage('Build Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Test') {
            steps {
                sh '''
                docker build -t test-image .
                docker run --rm test-image node test.js
                '''
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker-compose down && docker-compose up '
            }
        }

    }
}
