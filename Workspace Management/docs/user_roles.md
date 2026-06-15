# User Roles

## Purpose

Defines the organizational roles used within the Workspace Management SaaS platform.

This document establishes:

* Role responsibilities
* Operational scope
* Workflow participation
* Organizational hierarchy

Permission definitions are maintained separately in `permissions.md`.

---

# Role Model

The platform uses a fixed role model for Version 1.

```text
Platform Admin
      │
Tenant Admin
      │
Manager
      │
Member
      │
Viewer
```

Role hierarchy represents responsibility and scope.

Authorization decisions must be based on permissions rather than role inheritance.

---

# Platform Admin

## Scope

Platform-wide administration.

Operates outside tenant boundaries.

## Responsibilities

* Organization provisioning
* Subscription management
* Platform governance
* Operational monitoring

## Workflow Participation

Does not participate in tenant-level projects, tasks, or approvals.

---

# Tenant Admin

## Scope

Organization-level administration.

Responsible for workspace governance and configuration.

## Responsibilities

* User management
* Role management
* Workspace administration
* Project oversight

## Workflow Participation

May participate in project and approval workflows when required.

---

# Manager

## Scope

Project and team management.

Responsible for execution oversight within an organization.

## Responsibilities

* Project planning
* Task assignment
* Work review
* Progress monitoring

## Workflow Participation

Acts as the primary reviewer and approver within project workflows.

---

# Member

## Scope

Task execution.

Responsible for completing assigned work.

## Responsibilities

* Task execution
* Progress updates
* Collaboration
* Work submission

## Workflow Participation

Participates in project execution and review submission workflows.

---

# Viewer

## Scope

Read-only access.

Provides visibility without operational responsibility.

## Responsibilities

* Project monitoring
* Progress tracking
* Reporting visibility

## Workflow Participation

Does not participate in workflow execution or approval processes.

---

# Responsibility Matrix

| Capability                  | Platform Admin | Tenant Admin | Manager | Member | Viewer |
| --------------------------- | -------------- | ------------ | ------- | ------ | ------ |
| Platform Governance         | ✅              | ❌            | ❌       | ❌      | ❌      |
| Organization Administration | ❌              | ✅            | ❌       | ❌      | ❌      |
| User Management             | ❌              | ✅            | ❌       | ❌      | ❌      |
| Project Management          | ❌              | ✅            | ✅       | ❌      | ❌      |
| Task Management             | ❌              | ✅            | ✅       | ❌      | ❌      |
| Task Execution              | ❌              | ❌            | ❌       | ✅      | ❌      |
| Work Approval               | ❌              | ✅            | ✅       | ❌      | ❌      |
| Reporting Visibility        | ✅              | ✅            | ✅       | ❌      | ✅      |

---

# Role Assignment Model

Roles are assigned through organizational membership.

```text
User
  ↓
Membership
  ↓
Role
  ↓
Permissions
```

A user's permissions are derived from the role assigned within a specific organization.

---

# Design Principles

1. Roles define responsibilities.
2. Permissions define actions.
3. Authorization is permission-based.
4. Roles do not grant implicit access.
5. Tenant boundaries apply to all organizational roles.
6. Backend authorization is the source of truth.

---

# Future Enhancements

Future releases may introduce:

* Custom Roles
* Team-Level Roles
* Project-Level Roles
* Department Roles
* Attribute-Based Access Control (ABAC)

Version 1 uses a predefined RBAC model with fixed organizational roles.
