# Server Application

## Purpose

The server application provides the backend services for the Workspace Management SaaS platform.

It is responsible for:

* Authentication
* Authorization
* Business logic execution
* Workflow management
* Data persistence
* Activity logging
* Notification generation

The server acts as the system's source of truth.

---

# Technology Stack

## Core

* Node.js
* Express
* TypeScript
* PostgreSQL
* Drizzle ORM
* Neon PostgreSQL
* pnpm

## Infrastructure

* Docker
* GitHub Actions
* AWS

## Planned Integrations

* AWS S3
* Redis
* BullMQ

---

# Backend Architecture

The backend follows a Modular Monolith architecture.

Business domains are separated into modules while remaining part of a single deployable application.

This approach provides:

* Simpler deployments
* Clear domain boundaries
* Easier development
* Future microservice migration paths

---

# Planned Folder Structure

```text
src/

├── modules/
│   ├── auth/
│   ├── users/
│   ├── teams/
│   ├── projects/
│   ├── tasks/
│   ├── comments/
│   ├── attachments/
│   ├── notifications/
│   └── activity-logs/
│
├── middlewares/
│
├── database/
│
├── config/
│
├── shared/
│
├── types/
│
├── utils/
│
└── app.ts
```

---

# Module Structure

Each module should follow a consistent structure.

Example:

```text
projects/

├── project.controller.ts
├── project.service.ts
├── project.repository.ts
├── project.routes.ts
├── project.validation.ts
├── project.types.ts
└── index.ts
```

---

# Authorization Architecture

Authorization follows:

```text
Authentication
      ↓
Permission Validation
      ↓
Ownership Validation
      ↓
Business Rule Validation
```

All authorization decisions are enforced by the backend.

---

# Multi-Tenancy

Organizations act as tenant boundaries.

Requirements:

* Tenant data isolation
* Tenant-aware authorization
* Tenant-scoped business operations

---

# Development Principles

* TypeScript-first development
* Modular architecture
* Feature-based modules
* Database-first consistency
* Centralized authorization
* Auditability
* Production-oriented design

---

# Future Enhancements

* Redis caching
* Background workers
* BullMQ job processing
* Email service
* WebSocket notifications
* Event-driven architecture
* Kubernetes deployment
