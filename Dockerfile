# Use the official Node.js image as the base image
FROM node:16

ENV NODE_ENV=production
ENV BACK_PORT=8080

# Set the working directory in the container
WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

# Install the application dependencies
RUN npm install --omit-dev

COPY . .

EXPOSE 8080/tcp

# Define the entry point for the container
CMD [ "node", "dist/app.js", "0.0.0.0:8080" ]
