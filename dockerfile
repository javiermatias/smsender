# Use an official Node.js image with the desired version as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install --force

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port your Angular app will run on
EXPOSE 4200

# Command to start your Angular app
CMD ["npm", "start"]