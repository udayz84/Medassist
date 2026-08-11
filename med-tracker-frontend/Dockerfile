# ---- Stage 1: Build the React app ----
FROM node:14-alpine AS build

WORKDIR /app

# Copy dependency files first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the production bundle
RUN npm run build

# ---- Stage 2: Serve with Nginx ----
FROM nginx:alpine

# Copy the built React app to nginx's serve directory
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom nginx config for API proxying
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
