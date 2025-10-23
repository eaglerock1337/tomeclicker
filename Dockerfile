# Multi-stage Dockerfile for TomeClicker SvelteKit static site
# Stage 1: Build the application
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files for dependency installation
COPY package*.json ./

# Install dependencies
RUN npm ci --omit=dev --ignore-scripts

# Copy source code
COPY . .

# Build the static site for production
ENV NODE_ENV=production
RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:alpine

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy built static files from builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S tomeclicker -u 1001 -G nodejs

# Set proper permissions
RUN chown -R tomeclicker:nodejs /usr/share/nginx/html && \
    chown -R tomeclicker:nodejs /var/cache/nginx && \
    chown -R tomeclicker:nodejs /var/log/nginx && \
    chown -R tomeclicker:nodejs /etc/nginx/conf.d

# Switch to non-root user
USER tomeclicker

# Expose port 8080 (non-privileged port)
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:8080/ || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]