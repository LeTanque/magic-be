# Use the official Node.js image as the base image
FROM node:19

# Set the working directory in the container
WORKDIR /

# Copy the application files into the working directory
COPY ["package.json", "yarn.lock", "./"]

# Install the application dependencies
RUN yarn install

COPY . .

ENV BACK_PORT 8080

EXPOSE 8080

# Define the entry point for the container
CMD ["yarn", "start"]