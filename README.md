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

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
