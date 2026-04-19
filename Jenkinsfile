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
                sh 'docker run -d --name demo-container -p 3001:3000 $IMAGE_NAME'
            }
        }

    }
}
