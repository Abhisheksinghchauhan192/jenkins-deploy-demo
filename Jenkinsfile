pipeline {
    agent any 
    stages {
        stage('Cleanup'){
            steps{
                sh 'docker rm -f demo-container || true'
            }
        }
        stage('Build Image'){
            steps{
                sh'docker build -t demo-app .'
            }
        }
        stage('Run Container'){
            steps{
                sh 'docker run -d --name demo-container -p 3001:3000 demo-app'
            }
        }

    }
}
