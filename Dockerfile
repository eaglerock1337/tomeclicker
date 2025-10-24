# ---------- Build ----------
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
ENV NODE_ENV=production
RUN npm run prepare
RUN npm run build

# ---------- Runtime ----------
FROM nginxinc/nginx-unprivileged:alpine

# (Optional) install curl for healthcheck
USER root
RUN apk add --no-cache curl
USER 1001

# Copy site (image listens on 8080 by default and is non-root ready)
COPY --chown=1001:1001 --from=builder /app/build /usr/share/nginx/html

EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -fsS http://localhost:8080/ >/dev/null || exit 1
