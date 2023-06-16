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

[Image]

To Download the source users can download from the github repository 
at https://github.com/abhilashlegend/weatherapp.git . After 
downloading into your computer. Run npm install to download the 
packages and dependencies. And Run ng serve to launch on the browser. 
The angular app is usually hosted at http://localhost:4200

## Home Page

[Image]

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

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
