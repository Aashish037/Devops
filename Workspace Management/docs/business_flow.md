# Business Flow

## Purpose

Defines the business workflows governing user onboarding, project execution, task management, review processes, notifications, and ownership within the Workspace Management SaaS platform.

This document serves as the source of truth for workflow behavior and supports:

* Database Design
* API Design
* Authorization Design
* Frontend Workflows
* Future Workflow Automation

---

# Workflow Overview

```text
Organization Setup
        ↓
User Onboarding
        ↓
Project Creation
        ↓
Task Assignment
        ↓
Task Execution
        ↓
Review Process
        ↓
Approval / Rework
```

---

# Organization Lifecycle

## Organization Creation

An Organization is created by a Platform Admin.

Upon creation:

* Tenant ownership is assigned.
* Initial configuration becomes available.
* User onboarding can begin.

## Organization Configuration

Tenant Admins are responsible for:

* Organization configuration
* User management
* Role assignment
* Project governance

---

# User Onboarding Workflow

## Invitation

Users join an organization through an invitation process.

Invitation workflow:

```text
Invite User
      ↓
Accept Invitation
      ↓
Activate Account
      ↓
Assign Role
```

## Outcome

A user becomes an active member of the organization with an assigned role and associated permissions.

---

# Project Lifecycle

Projects represent business initiatives managed within an organization.

## Project Creation

Projects may be created by authorized users.

## Project Configuration

A project defines:

* Ownership
* Timeline
* Members
* Scope of work

## Project States

```text
Draft
  ↓
Active
  ↓
On Hold
  ↓
Completed
```

## Completion Rules

A project cannot transition to Completed while open tasks remain.

---

# Task Lifecycle

Tasks represent actionable work within a project.

## Task Assignment

Tasks are assigned to a single responsible user.

## Task States

```text
Todo
   ↓
In Progress
   ↓
Ready For Review
   ↓
Approved
```

## Rework Flow

```text
Ready For Review
      ↓
Needs Changes
      ↓
In Progress
```

---

# Review Workflow

Tasks requiring review follow an approval process.

## Submission

The assignee marks the task as Ready For Review.

## Review

Authorized reviewers evaluate task completion against project requirements.

## Review Outcomes

### Approved

```text
Ready For Review
      ↓
Approved
```

Task execution is considered complete.

### Rejected

```text
Ready For Review
      ↓
Needs Changes
```

The task is returned to the assignee for further work.

---

# Collaboration Workflow

## Comments

Comments provide discussion and feedback related to projects and tasks.

Supported use cases:

* Clarifications
* Progress updates
* Review feedback
* Team communication

## Attachments

Attachments support document and file association with business entities.

Supported targets:

* Projects
* Tasks

---

# Activity Logging

Significant system events generate audit records.

Examples include:

* Organization creation
* User invitation
* Project creation
* Task assignment
* Task approval
* Role modification

Activity logs provide operational visibility and auditability.

---

# Notification Workflow

Notifications communicate system events to users.

Supported events include:

* Task assignment
* Review requests
* Approval decisions
* Mentions
* Project updates

---

# Dashboard Responsibilities

## Tenant Admin

Provides visibility into:

* Organization activity
* User management
* Project portfolio
* Operational reporting

## Manager

Provides visibility into:

* Assigned projects
* Team progress
* Pending reviews

## Member

Provides visibility into:

* Assigned tasks
* Deadlines
* Notifications

## Viewer

Provides read-only visibility into organizational activity and reporting.

---

# Ownership Model

## Project Ownership

Every project must have a designated owner responsible for project execution and governance.

## Task Ownership

Every task must have a designated assignee responsible for task completion.

---

# Business Rules

1. Tenant isolation must be enforced across all workflows.
2. Users may access only authorized resources.
3. Members may modify only tasks they are authorized to manage.
4. Viewers have read-only access.
5. Tasks requiring review must pass through the review workflow before approval.
6. Only authorized roles may approve work.
7. Projects cannot be completed while active tasks remain.

---

# Future Workflow Extensions

Future releases may introduce:

* Multi-stage approvals
* Department-based workflows
* Escalation policies
* SLA management
* Workflow automation
* Configurable approval chains
