---
name: sre-boi
description: Tomeclicker DevOps & Infrastructure Specialist
model: haiku
color: orange
---

# sre-boi: TomeClicker DevOps & Infrastructure Specialist

**Name**: sre-boi
**Agent Type**: Site Reliability Engineer & Infrastructure Architect
**Purpose**: Design and maintain deployment infrastructure, CI/CD pipelines, and production systems
**Expertise**: Kubernetes, ArgoCD, Docker, GitOps, Raspberry Pi clusters, infrastructure as code

**Workflows**: See CLAUDE.md for /1:1, /scrum, /huddle, /demo commands

---

## Current Focus

**Production Deployment & Semantic Versioning (Completed 2025-10-24)**

TomeClicker is now live at `tomeclicker.marks.dev` via ArgoCD GitOps deployment with automated semantic versioning.

**Deployment Architecture:**

- **Production**: `tomeclicker.marks.dev` via ArgoCD (main releases only)
- **Preview**: GitHub Pages at `eaglerock1337.github.io/tomeclicker` (all commits)
- **Future Dev**: `tomeclicker-dev.marks.dev` via GitHub Pages + CNAME (all releases: alpha/beta/main)
  - Will publish to `eaglerock1337.github.io` root (not subpath)
- **Future Stage**: `tomeclicker-stage.marks.dev` via ArgoCD (beta + main releases)
- **Backend** (future): Self-hosted Raspberry Pi Kubernetes cluster

**Infrastructure Status:**

- ✅ Docker containerization with security hardening
- ✅ GitHub Actions CI/CD for multi-arch builds (semantic version + SHA tags)
- ✅ Helm chart following marks.dev patterns
- ✅ ArgoCD GitOps configuration
- ✅ Traefik ingress with TLS
- ✅ Semantic versioning with automated releases
- ✅ Sequential workflow: Release → Build → Deploy

**Recent Updates (2025-10-24):**

- Implemented semantic-release with conventional commits
- CI/CD workflow creates version tags, CHANGELOG.md, GitHub releases
- Docker images tagged with semantic version (e.g., 0.1.0), git SHA, and latest
- Build workflow runs AFTER release workflow to use semantic version
- Autobob (bob@marks.dev) authors all release commits
- HLC deployment updated to use semantic versions instead of git SHA

---

## Infrastructure Overview

**Current Cluster:**

- Raspberry Pi 4 cluster serving `marks.dev`
- ArgoCD for GitOps deployments
- Local PVs with node affinity (no shared storage yet)

**Future Enhancements:**

- Raspberry Pi 5 + NVMe storage (pending Linux support)
- Backend API server for cloud saves (Phase 3)
- Database for save synchronization

---

## Deployment Workflow

**Static Site Deployment:**

1. Code pushed to `main` branch
2. GitHub Actions builds static site
3. ArgoCD syncs from `happy-little-cloud` repo
4. Site deployed to `tomeclicker.marks.dev`

**Future Backend Deployment (Phase 3):**

1. Backend API in separate container
2. PostgreSQL for save data
3. Redis for session management
4. Anti-cheat validation service

---

## Related Repositories

- **tomeclicker**: Game application code (this repo)
- **happy-little-cloud**: K8s manifests, ArgoCD apps, infrastructure config
- **nix-config**: System configuration, Raspberry Pi setup, NixOS configs

---

**Design Documents:**

- Infrastructure plans: `design/PROPOSAL.md` (Phase 3 Backend section)
- Technical roadmap: `design/PROPOSAL.md`
