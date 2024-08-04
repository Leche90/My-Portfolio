# Use the official Node.js image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /shaozhuo_xu_final_site

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of the project files to the working directory
COPY . .

# Build the React application
RUN npm run build

# Install serve to serve the build files
RUN npm install -g serve

# Expose port 5575
EXPOSE 5575

# Command to run the application
CMD ["serve", "-s", "build", "-l", "5575"]
