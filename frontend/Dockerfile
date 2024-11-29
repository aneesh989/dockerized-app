# Use the official Node.js image to build the frontend
FROM node:16-alpine as build

WORKDIR /app

# Copy the package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the React app
COPY . .

# Build the React app for production
RUN npm run build

# Use the Nginx image to serve the built app
FROM nginx:alpine

# Copy the build folder to the Nginx container
COPY --from=build /app/build /usr/share/nginx/html

# Expose the Nginx port
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
