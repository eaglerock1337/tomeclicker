# ---------- Build ----------
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

# Accept version as build arg (defaults to package.json version)
ARG APP_VERSION
ENV NODE_ENV=production
ENV APP_VERSION=${APP_VERSION}

RUN npm run prepare
RUN npm run build

# ---------- Runtime ----------
FROM nginxinc/nginx-unprivileged:alpine
COPY --from=builder /app/build /usr/share/nginx/html
