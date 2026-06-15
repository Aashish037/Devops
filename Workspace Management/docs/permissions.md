# Permissions & RBAC Design

## Purpose

Defines the authorization model for the Workspace Management SaaS platform.

This document specifies:

* Authorization architecture
* Permission structure
* Role definitions
* Ownership validation
* Access control principles

The authorization model applies to API access, workflow execution, and user interface visibility.

---

# Authorization Model

The platform uses Role-Based Access Control (RBAC).

Authorization hierarchy:

```text
User
  ↓
Membership
  ↓
Role
  ↓
Permissions
```

Roles group permissions.

Permissions authorize actions.

Memberships associate users with roles within an organization.

---

# Authorization Architecture

Authorization is evaluated using four layers.

```text
Authentication
      ↓
Permission Validation
      ↓
Ownership Validation
      ↓
Business Rule Validation
      ↓
Action Execution
```

---

## Authentication

Establishes user identity.

Responsibilities:

* User authentication
* Token validation
* Session verification

---

## Permission Validation

Determines whether a user is authorized to perform a specific action.

Examples:

```text
project:create
project:update
task:approve
```

---

## Ownership Validation

Determines whether a user has authority over a specific resource.

Examples:

```text
task:update:own
comment:update:own
```

Ownership validation is applied after permission validation.

---

## Business Rule Validation

Enforces workflow and domain constraints.

Examples:

* Invalid state transitions
* Approval requirements
* Project completion rules

---

# Permission Convention

Permissions follow the format:

```text
resource:action
```

Examples:

```text
user:create
project:update
task:approve
```

Ownership-based permissions follow:

```text
resource:action:own
```

Examples:

```text
task:update:own
comment:delete:own
```

---

# Resources

The platform manages the following protected resources:

```text
Organization
User
Role
Project
Task
Comment
Attachment
Notification
Activity Log
```

---

# Permission Definitions

## Organization

```text
organization:view
organization:update
organization:suspend
```

---

## User

```text
user:view
user:create
user:update
user:delete
user:invite
user:assign-role
```

---

## Role

```text
role:view
role:create
role:update
role:delete
```

---

## Project

```text
project:view
project:create
project:update
project:delete
project:archive
```

---

## Task

```text
task:view
task:create
task:update
task:delete
task:assign
task:approve

task:update:own
```

---

## Comment

```text
comment:view
comment:create
comment:update
comment:delete

comment:update:own
comment:delete:own
```

---

## Attachment

```text
attachment:view
attachment:upload
attachment:delete
```

---

## Notification

```text
notification:view
notification:manage
```

---

## Activity Log

```text
activity:view
```

Activity records are immutable.

---

# Role Definitions

## Platform Admin

Platform-level administrative authority.

Responsibilities:

* Tenant governance
* Platform oversight
* Operational visibility

Permissions:

```text
organization:view
organization:update
organization:suspend

user:view

activity:view
```

Platform Admins do not participate in tenant workflows.

---

## Tenant Admin

Administrative authority within an organization.

Permissions:

```text
user:view
user:create
user:update
user:delete
user:invite

role:view
role:update

project:view
project:create
project:update
project:delete

task:view
task:create
task:update
task:delete
task:assign
task:approve

comment:view
comment:create
comment:delete

attachment:view
attachment:upload
attachment:delete

activity:view
notification:manage
```

---

## Manager

Project and team management authority.

Permissions:

```text
project:view
project:create
project:update

task:view
task:create
task:update
task:assign
task:approve

comment:view
comment:create

attachment:view
attachment:upload

activity:view
notification:view
```

---

## Member

Execution-focused role responsible for assigned work.

Permissions:

```text
project:view

task:view
task:update:own

comment:view
comment:create
comment:update:own

attachment:view
attachment:upload

notification:view
```

---

## Viewer

Read-only access role.

Permissions:

```text
project:view
task:view
comment:view
activity:view
notification:view
```

---

# Permission Matrix

| Capability         | Platform Admin | Tenant Admin | Manager | Member | Viewer |
| ------------------ | -------------- | ------------ | ------- | ------ | ------ |
| View Users         | ✅              | ✅            | ❌       | ❌      | ❌      |
| Create Users       | ❌              | ✅            | ❌       | ❌      | ❌      |
| Manage Roles       | ❌              | ✅            | ❌       | ❌      | ❌      |
| Create Projects    | ❌              | ✅            | ✅       | ❌      | ❌      |
| Update Projects    | ❌              | ✅            | ✅       | ❌      | ❌      |
| Create Tasks       | ❌              | ✅            | ✅       | ❌      | ❌      |
| Assign Tasks       | ❌              | ✅            | ✅       | ❌      | ❌      |
| Approve Tasks      | ❌              | ✅            | ✅       | ❌      | ❌      |
| Update Own Tasks   | ❌              | ✅            | ✅       | ✅      | ❌      |
| Upload Attachments | ❌              | ✅            | ✅       | ✅      | ❌      |
| View Activity Logs | ✅              | ✅            | ✅       | ❌      | ✅      |

---

# Authorization Principles

1. Authorization is permission-based.
2. Roles exist to group permissions.
3. Ownership validation is independent of role validation.
4. Business rules are evaluated after authorization checks.
5. Tenant isolation must be enforced for all resources.
6. Backend authorization is the source of truth.
7. Frontend authorization controls visibility, not security.

---

# Future Enhancements

Future releases may introduce:

* Custom Roles
* Custom Permission Sets
* Project-Level Roles
* Team-Level Roles
* Attribute-Based Access Control (ABAC)

Version 1 uses a fixed RBAC model with predefined roles and permissions.
