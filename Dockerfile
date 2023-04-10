# Use the official Node.js image as the base image
FROM node:19

# Set the working directory in the container
WORKDIR /dist

# Copy the application files into the working directory
COPY . /dist

# Install the application dependencies
RUN yarn install

# Define the entry point for the container
CMD ["yarn", "start"]