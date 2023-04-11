# Use the official Node.js image as the base image
FROM node:19
ENV NODE_ENV=production
ENV BACK_PORT=8080
# Set the working directory in the container
WORKDIR /dist
# Install the application dependencies
RUN yarn install
RUN yarn build
COPY ["package.json", "yarn*", "./"]
# COPY . .
EXPOSE 8080
# Define the entry point for the container
CMD ["node", "app.js"]
