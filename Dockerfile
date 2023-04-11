# Use the official Node.js image as the base image
FROM node:16

ENV NODE_ENV=production
ENV BACK_PORT=8080

# Set the working directory in the container
WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

# Install the application dependencies
RUN npm install --production

COPY . .

EXPOSE 8080

# Define the entry point for the container
CMD [ "npm", "start" ]