# ---- Backend Dockerfile ----
FROM node:14-alpine

# Set working directory inside the container
WORKDIR /app

# Copy dependency files first (for better Docker layer caching)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Expose the backend port
EXPOSE 9000

# Start the server
CMD ["node", "server.js"]
