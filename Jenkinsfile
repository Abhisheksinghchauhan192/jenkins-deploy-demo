pipeline {
    agent any

    environment {
        IMAGE_NAME = "demo-app"
    }

    stages {

        stage('Cleanup') {
            steps {
                sh 'docker rm -f demo-container || true'
            }
        }

        stage('Test') {
            steps {
                sh 'node test.js'
            }
        }

        stage('Build Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d --name demo-container -p 3001:3000 $IMAGE_NAME'
            }
        }

    }
}
