# Use an official Node.js runtime as the base image
FROM node:latest as build 

# Set the working directory in the container
WORKDIR /usr/local/app

# Copy package.json and package-lock.json to the container
COPY ./ /usr/local/app/

# Install application dependencies
RUN npm install

# Generate the build of the application
RUN npm run build

# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest

# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/dist/weatherapp /usr/share/nginx/html

# Expose port 80
EXPOSE 80
