# Weather App

Weather App is Angular Based web application which can be used to get latest 
weather information like temperature, min and max temperature, humidity 
and wind. Users can search for their city weather by entering on search city 
text field.

## Technology Used

* Visual Studio
* Angular
* Docker
* Node
* HTML
* CSS
* Open Weather API
* AWS EC2 Instance 

## Installation Instructions

Users need to install docker on their machine and run the following 
command

```
docker run -d -p 80:80 abhilash456a/weatherapp:latest
```

Users can open the weatherapp by going to docker desktop and selecting 
the container that’s running and click on vertical dot menu and select 
open in browser option to view inside the browser. 

![image](https://github.com/abhilashlegend/weatherapp/assets/24253084/a07ca428-5212-4d76-9648-acc2898e43d7)


To Download the source users can download from the github repository 
at https://github.com/abhilashlegend/weatherapp.git . After 
downloading into your computer. Run npm install to download the 
packages and dependencies. And Run ng serve to launch on the browser. 
The angular app is usually hosted at http://localhost:4200

## Home Page

![image](https://github.com/abhilashlegend/weatherapp/assets/24253084/c6fe5ca3-891a-4487-ba35-6914c1da9540)


Weather App is a single page application that displays weather details. 
On the home page you can see the details of default city that is 
Bengaluru. The main temperature is 30 degrees Celsius. At the bottom 
there is min and max temperature of the city, humidity and wind. User 
can change the city by clicking on the top text field and entering.


## Dockerizing Angular App

Steps to dockerizing the angular App
1. Install Docker Desktop
2. Create Dockerfile in the project root folder.

```
1 # Use an official Node.js runtime as the base image
2 FROM node:latest as build
3
4 # Set the working directory in the container
5 WORKDIR /usr/local/app
6
7 # Copy package.json and package-lock.json to the container
8 COPY ./ /usr/local/app/
9
10 # Install application dependencies
11 RUN npm install
12
13 # Generate the build of the application
14 RUN npm run build
15
16 # Stage 2: Serve app with nginx server
17
18 # Use official nginx image as the base image
19 FROM nginx:latest
20
21 # Copy the build output to replace the default nginx contents.
22 COPY --from=build /usr/local/app/dist/weatherapp
/usr/share/nginx/html
23
24 # Expose port 80
25 EXPOSE 80
26
```

3.	Run ng build command to build the angular application
4.	Use the following command to generate the Docker image for the Angular application using Dockerfile:
Example: docker build -t dockerhub_name/image_name:tag dockerfile_location

```
docker build -t abhilash456a/weatherapp:latest .
```
5.	Get the list of Docker images using the following command:

```
Docker image ls
```

6.	You need to push the Docker image to Docker Hub or any container registry(AWS ECR, Azure CR) if you want to deploy the application on the Cloud server.
To push the Docker image to the Docker hub you need a Docker hub account. Once you created a Docker hub account, then log in to the Docker hub on your terminal.

```
docker login
```

7.	Use the following command to push the Docker image to Docker Hub:

```
docker push abhilash456a/weatherapp:latest
```

8. Run Docker Container
Run the Angular application using the following command

```
docker run -d -p 80:80 abhilash456a/weatherapp:latest
```

It runs on port number 80. Access the Angular application using the IP address and port number. http://localhost:80/ 

9. list the containers by below command->

```
docker ps
```


## Deploying on AWS EC2 Instance

Steps to deploy on AWS EC2 Instance

1.	open https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html 

2.	  Click on Linux/MacOS or Windows as per your Operating system
    For Windows:
    Download and run the AWS CLI MSI installer for Windows (64-bit)

3.	To confirm the installation, open the Start menu, search for cmd to open a command prompt window, and at the command prompt use the aws --version command.
    C:\> aws --version

4.	Go to AWS and login to your account and select EC2 Instance 	
Click services -> EC2 (or search for it if unable to find)

![image](https://github.com/abhilashlegend/weatherapp/assets/24253084/d186ae76-09b8-478d-9611-1537be363e4f)


5.	 Click EC2 dashboard->Launch instance

![image](https://github.com/abhilashlegend/weatherapp/assets/24253084/e763539f-e204-42d0-aefd-010a05b68e08)


a.	Give name as weatherapp 

![image](https://github.com/abhilashlegend/weatherapp/assets/24253084/b94f4a83-8ede-41c8-baf3-86dc08ab95f6)


b.	In Application and OS Images select Ubuntu 
Amazon Machine Image -> Ubuntu Server 22.04 LTS (HVM), SSD Volume Type ( Free Tier eligible) 

![image](https://github.com/abhilashlegend/weatherapp/assets/24253084/2315cdb4-3329-44a0-a28e-4ea8e58da12c)


c.	Instance type->t2.micro (free tier eligible)

![image](https://github.com/abhilashlegend/weatherapp/assets/24253084/e0f2a942-1884-4060-86b1-67b30d73a280)


d.	Keypair (login) 

![image](https://github.com/abhilashlegend/weatherapp/assets/24253084/7b74c5d7-abfc-48af-b167-7e54c94036ab)


A create key pair window will open. 
*	Enter key pair name -> weatherappkeys. 
*	Select Key pair type -> RSA
*	Private key file format -> .pem
*	Click create new Key pair

![image](https://github.com/abhilashlegend/weatherapp/assets/24253084/ed80ca44-7e6a-4513-a74a-84ab0431ae84)


The keys file(weatherappkeys.pem) will get downloaded in your system, you will need them later to connect to EC2 instance.

6.	 create a folder in c: by name weatherappkeys. Save the weatherappkeys.pem file in c:/weatherappkeys
7.	Click Launch Instance(No changes required for other settings )

![image](https://github.com/abhilashlegend/weatherapp/assets/24253084/2ae9e6fc-b09b-4f07-838d-4449eac9d3e0)

![image](https://github.com/abhilashlegend/weatherapp/assets/24253084/51bbcde9-81a8-4f97-a223-55bd6110c17a)


8.	Click on instances

![image](https://github.com/abhilashlegend/weatherapp/assets/24253084/09a224c6-8cda-42b1-8022-1f046687a769)


9.	To connect this instance select checkbox before this row and click on connect

![image](https://github.com/abhilashlegend/weatherapp/assets/24253084/45e9b8a2-846a-4254-a156-f27efb6c9e47)

![image](https://github.com/abhilashlegend/weatherapp/assets/24253084/75964318-ad5b-4e91-a1a5-164345cea20b)


Click on SSH client copy the command 
copy the command below Example:

```
ssh -i "weatherappkeys.pem" ubuntu@ec2-44-193-73-144.compute-1.amazonaws.com
```

10.	 Open git bash(you can search for it in search area next to start menu)
browse to location where u saved the keys i.e c:/weatherappkeys by

> cd c:
> cd weatherappkeys

To check ur current location
>pwd

![image](https://github.com/abhilashlegend/weatherapp/assets/24253084/77c7215c-32ba-4155-9bf3-8c31854b2466)


11.	Now paste(use right click paste as ctrl v will not work) the command copied earlier

```
ssh -i "weatherappkeys.pem" ubuntu@ec2-44-193-73-144.compute-1.amazonaws.com
```

![image](https://github.com/abhilashlegend/weatherapp/assets/24253084/cace721b-d0c1-427f-b37f-d2e89f7e199a)

![image](https://github.com/abhilashlegend/weatherapp/assets/24253084/cec60333-0548-45bc-95bd-1d971c280036)


12.	 Again give same command i.e.

![image](https://github.com/abhilashlegend/weatherapp/assets/24253084/b235bc77-6601-4bb6-bd9a-11101f961791)


13.	Run the following command to install NGINX

```
sudo -s 
sudo apt update 
sudo apt install nginx 
```

14.	Check if git is installed

```
git --version
```
To install git in EC2 virtual machine->
```
 sudo apt install git -y
```

To check if git is successfully installed run the command again 

```
git –-version
```

15.	Install docker in this virtual EC2 machine
// install most recent package

```
sudo apt install docker.io
```

Check if docker was installed by running the command 

```
docker --version
```
![image](https://github.com/abhilashlegend/weatherapp/assets/24253084/f43e209b-0c8e-48c9-a6e0-6cb71022665c)


16.	 Start the service docker

```
sudo service docker start
```

17.	 Pull the docker image

```
sudo docker pull abhilash456a/weatherapp
```

![image](https://github.com/abhilashlegend/weatherapp/assets/24253084/134041f4-c475-42e8-84c9-50e820a04ea3)


18.	List the images

```
sudo docker images
```

![image](https://github.com/abhilashlegend/weatherapp/assets/24253084/ac195b0f-87a6-4540-adba-dc43ffe14f17)


* click instance->security tab-> click security groups link sg-04b7f86c89500d771 (launch-wizard-1) 

![image](https://github.com/abhilashlegend/weatherapp/assets/24253084/2cce2bf6-8746-4800-9f66-375afdc77740)


* Go to inbound rules tab and click on edit inbound rules 

![image](https://github.com/abhilashlegend/weatherapp/assets/24253084/9d28f064-64a7-4ba8-b8ac-76ab58b2b5ed)

* Click Add Rule

![image](https://github.com/abhilashlegend/weatherapp/assets/24253084/891c6be2-118b-4f14-9052-5322e168b2f7)


Select Custom TCP, Port Range 8081, change custom to Anywhere-IPv4 
And save changes

19.	In gitbash run the container using the command

```
sudo docker run -d -p 8081:80 abhilash456a/weatherapp
```

20.	 Check your public ip address and go to port 8081 Eg: http://54.196.220.154:8081

![image](https://github.com/abhilashlegend/weatherapp/assets/24253084/01b7dcc9-8ccd-4f5c-82ae-779642815276)



