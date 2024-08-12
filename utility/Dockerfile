# Base image
FROM node:20

# Working directory
WORKDIR /utility

# Copy package.json and package-lock.json and install dependencies
COPY package*.json ./
RUN npm ci

# Copy the rest of the project files
COPY . .

# Expose the server port
EXPOSE 8500

# Command to start the server
CMD ["npm", "run", "start:standalone"]