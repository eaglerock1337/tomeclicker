# TomeClicker Deployment Guide

## Overview

TomeClicker is deployed using a GitOps workflow with ArgoCD managing Kubernetes deployments on a Raspberry Pi cluster.

## Architecture

- **Production**: `tomeclicker.marks.dev` - Kubernetes cluster via ArgoCD
- **Staging**: GitHub Pages at `/tomeclicker` - Static site deployment
- **Development**: Local development server

## Deployment Environments

### Production (tomeclicker.marks.dev)

**Infrastructure:**
- Raspberry Pi Kubernetes cluster
- ArgoCD for GitOps deployment
- Nginx Ingress with Let's Encrypt SSL
- Docker Hub for container images

**Deployment Process:**
1. Code pushed to `main` branch
2. GitHub Actions builds Docker image → Docker Hub
3. ArgoCD detects changes and syncs cluster
4. Rolling deployment with zero downtime

### Staging (GitHub Pages)

**Infrastructure:**
- GitHub Pages static hosting
- Path: `/tomeclicker`
- Automatic deployment from `main` branch

## Setup Instructions

### 1. Docker Hub Setup

Create Docker Hub repository:
```bash
# Repository: eaglerock1337/tomeclicker
# Set up GitHub secrets:
# - DOCKERHUB_USERNAME
# - DOCKERHUB_TOKEN
```

### 2. ArgoCD Application Deployment

Apply the ArgoCD application to your cluster:

```bash
# Create namespace first
kubectl apply -f argocd/namespace.yaml

# Deploy ArgoCD application
kubectl apply -f argocd/application.yaml
```

### 3. DNS Configuration

Point your domain to the cluster:
```bash
# Add A record for tomeclicker.marks.dev
# Point to your cluster's external IP
```

### 4. SSL Certificate

Let's Encrypt will automatically provision SSL certificates via cert-manager.

## Development Workflow

### Local Development
```bash
npm run dev
# Serves at http://localhost:5173
```

### Production Build Test
```bash
npm run build
npm run preview
# Tests production build locally
```

### Container Build Test
```bash
docker build -t tomeclicker-test .
docker run -p 8080:8080 tomeclicker-test
# Tests containerized deployment
```

## Monitoring & Troubleshooting

### ArgoCD Dashboard
- Access ArgoCD UI to monitor deployment status
- View sync status and application health

### Kubernetes Commands
```bash
# Check deployment status
kubectl get pods -n tomeclicker

# View logs
kubectl logs -f deployment/tomeclicker -n tomeclicker

# Check ingress
kubectl get ingress -n tomeclicker

# Check certificate status
kubectl get certificates -n tomeclicker
```

### Common Issues

**Container won't start:**
- Check Docker image build logs in GitHub Actions
- Verify image exists in Docker Hub
- Check pod logs for startup errors

**SSL certificate issues:**
- Verify cert-manager is running
- Check certificate resource status
- Ensure DNS is pointing to cluster

**Application not accessible:**
- Verify ingress configuration
- Check service endpoints
- Confirm nginx-ingress is running

## Configuration

### Environment Variables

**Production (Kubernetes):**
- `NODE_ENV=production` (set in deployment)
- No base path (serves from root domain)

**Staging (GitHub Pages):**
- `GITHUB_PAGES=true` (set in workflow)
- `NODE_ENV=production`
- Base path: `/tomeclicker`

### Resource Limits

Production deployment configured with:
- CPU: 100m request, 200m limit
- Memory: 128Mi request, 256Mi limit
- Suitable for Raspberry Pi cluster constraints

## Security

- Container runs as non-root user (UID 1001)
- Read-only root filesystem where possible
- Security headers configured in nginx
- HTTPS enforced via ingress annotations
- Regular security updates via automated rebuilds

## Future Enhancements

- **ApplicationSet for PR previews**: Dynamic environment creation
- **Monitoring**: Prometheus metrics and Grafana dashboards
- **Backup**: Database backup strategy (when backend is added)
- **Scaling**: Horizontal Pod Autoscaler for load management