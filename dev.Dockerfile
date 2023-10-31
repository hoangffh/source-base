
FROM node:16-alpine AS development
ENV NODE_ENV development
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
# COPY package.json .
# Copy app files
COPY . .


# FROM ubuntu:latest
# Copying myfile1.txt to the containers /usr/share directory
# COPY template.txt .env

# Expose port
# Start the app
RUN yarn install
RUN yarn build
CMD yarn start
