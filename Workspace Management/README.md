# Workspace Management SaaS

A multi-tenant B2B SaaS application built as part of the DevOps & Production Engineering Journey.

The purpose of this project is to apply Backend Engineering, Database Design, System Design, Cloud Infrastructure, and DevOps concepts in a real-world application.

---

# Vision

Build a production-oriented workspace management platform where organizations can manage teams, projects, tasks, approvals, and operational workflows within their own isolated workspace.

The primary focus is not the business domain itself.

The focus is learning how to design, build, deploy, scale, and maintain a production-grade SaaS application.

---

# Business Model

The platform follows a multi-tenant architecture.

Each organization receives its own isolated workspace.

```text
Platform

├── Company A
│   ├── Users
│   ├── Projects
│   └── Tasks
│
├── Company B
│   ├── Users
│   ├── Projects
│   └── Tasks
│
└── Company C
```

Data from one organization must never be accessible to another organization.

---

# User Roles

## Platform Admin

Platform-level administrator.

Responsibilities:

* Create tenants
* Disable tenants
* View platform metrics
* Manage subscriptions
* Monitor system health

Restrictions:

* Cannot participate in tenant projects
* Cannot complete tenant tasks

---

## Tenant Admin

Organization owner.

Responsibilities:

* Manage workspace settings
* Invite users
* Manage teams
* Create projects
* Assign managers
* Configure permissions

Restrictions:

* Cannot access other tenants

---

## Manager

Team or department lead.

Responsibilities:

* Create projects
* Create tasks
* Assign tasks
* Review completed work
* Approve tasks
* View reports

Restrictions:

* Cannot manage tenant settings
* Cannot manage subscriptions

---

## Member

Regular workspace user.

Responsibilities:

* View assigned work
* Update task status
* Add comments
* Upload files

Restrictions:

* Cannot create projects
* Cannot manage users
* Cannot approve tasks

---

## Viewer

Read-only access.

Responsibilities:

* View projects
* View tasks
* View reports

Restrictions:

* Cannot modify data

---

# Core Workflow

## Project Creation

Tenant Admin or Manager creates a project.

Example:

* Website Redesign
* Mobile Application
* Internal Operations Project

---

## Task Creation

Managers create tasks inside projects.

Example:

* Design Homepage
* Implement Login API
* Create Database Schema

---

## Task Assignment

Managers assign tasks to members.

```text
Manager
   ↓
Assign Task
   ↓
Member
```

---

## Task Execution

Members:

* Start work
* Update progress
* Add comments
* Upload attachments

Task statuses:

```text
Todo
↓
In Progress
↓
Ready For Review
↓
Completed
```

---

## Approval Workflow

Managers review completed work.

If approved:

```text
Ready For Review
      ↓
   Approved
```

If rejected:

```text
Ready For Review
      ↓
Needs Changes
```

with review comments.

---

# Activity Logging

All important actions are recorded.

Examples:

* User Created
* User Login
* Project Created
* Task Assigned
* Role Changed
* Permission Updated

This provides traceability and auditability.

---

# Notifications

Users receive notifications for:

* Task Assignment
* Task Approval
* Mentions
* Project Updates
* Team Announcements

---

# Technical Goals

This project will be used to learn and implement:

## Backend

* Node.js
* TypeScript
* Express
* Authentication
* Authorization
* JWT
* Refresh Tokens
* Middleware
* API Design

## Database

* PostgreSQL
* Relational Modeling
* Multi-Tenant Design
* Indexing
* Query Optimization
* Transactions

## DevOps

* GitHub Actions
* CI/CD Pipelines
* Docker
* Monitoring

## Cloud

* AWS EC2
* AWS RDS
* AWS S3
* IAM
* Networking

## System Design

* Multi-Tenant Architecture
* RBAC
* Caching
* Background Jobs
* Scalability
* Distributed Systems

---

# Future Architecture

```text
Frontend
    │
    ▼
Backend API
    │
    ├── PostgreSQL
    ├── Redis
    ├── File Storage
    └── Background Workers
```

Future production deployment:

```text
Docker
   ↓
GitHub Actions
   ↓
AWS
   ↓
Kubernetes
```

---

# Initial Database Domains

Planned entities:

* Tenants
* Users
* Roles
* Permissions
* Teams
* Projects
* Tasks
* Comments
* Attachments
* Activity Logs
* Notifications

Every business entity will be associated with a tenant.

---

# Development Roadmap

## Phase 1

* Authentication
* User Management
* Role Management
* RBAC

## Phase 2

* Projects
* Teams
* Tasks

## Phase 3

* Comments
* Attachments
* Activity Logs

## Phase 4

* Notifications
* Background Jobs
* Email Integration

## Phase 5

* Docker
* CI/CD
* Cloud Deployment

## Phase 6

* Monitoring
* Scaling
* Production Optimization

---

# Project Goal

The goal is not simply to build a CRUD application.

The goal is to design, implement, deploy, and operate a production-style SaaS application while learning modern software engineering, cloud, DevOps, database, and system design practices.
