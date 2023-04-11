# Use the official Node.js image as the base image
FROM node:19
RUN apk add --no-cache npm@9.3.1 yarn@1.22.19  

# Set the working directory in the container
WORKDIR /
# Copies all files to main folder of docker container
COPY . .

# Set environment variables
ENV NODE_ENV=production
ENV BACK_PORT=3000

# Install the application dependencies
RUN yarn install --prod

# Define the entry point for the container
CMD [ "node", "dist/app.js" ]

# Copies package.json and lock to root (redundant)
# COPY ["package.json", "package-lock.json*", "./"]

# Expose port
EXPOSE 3000/tcp
