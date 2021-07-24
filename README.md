# SCA-Cloud-School-Application
# A guide on the processes of running the docker container and testing the application.
Created a simple Node.js web app that displays a text "Welcome to SCA Cloud School Application , this is my first assessment". the application runs on port 8090 (localhost:8090).
Run "npm start" to start the application.

sca.png<img width="1278" alt="sca" src="https://user-images.githubusercontent.com/43972492/126873734-a33b25e6-7f36-4941-ab61-4f3db9f8e27e.png">


# Dockerizing the application
Created a Dockerfile in the project folder that contains the commands to build the docker image.

Built the docker image by running the docker build command in the root directory. 

Finally running the docker image with the command ($ docker run -p 49000:8090) 

Mapped the port of the host operating system - 49000 and the port inside the container - 8090, 

Which is specified as the "-p 49000:8090> argument", beacause each container is an isolated environment in itself.
The Port 8090 was mapped by docker inside of the container to the port 49000 on the local machine.

The application is sucessfully running on a docker container. 

# Pushing to docker hub
Created a repository on Docker hub where the image was pushed and has been saved in the Docker registry. 
The Docker hub repository is located at https://hub.docker.com/repository/docker/lyndaae/sca-cloud
