# Authentication

## What is Authentication?

Authentication is the process of verifying a user's identity.

It answers the question:

> Who are you?

Before a system allows access to resources, it must verify that the user is who they claim to be.

---

## Authentication vs Authorization

Many developers confuse these concepts.

### Authentication

Verifies identity.

Example:

* Login with email and password
* Login with Google
* Login with GitHub

Question answered:

> Who are you?

---

### Authorization

Determines permissions.

Example:

* Can create users?
* Can delete records?
* Can access admin dashboard?

Question answered:

> What are you allowed to do?

---

## Real World Example

Imagine entering an office building.

### Step 1

Security checks your ID card.

This is Authentication.

You prove you are Asish.

### Step 2

You enter the building.

Some rooms are restricted.

Your access card determines which rooms you can enter.

This is Authorization.

---

## Common Authentication Methods

### Username and Password

Most common approach.

Flow:

1. User enters email and password.
2. Backend validates credentials.
3. Backend creates session or token.
4. User gains access.

---

### Social Login

Examples:

* Google
* GitHub
* Facebook
* Microsoft

Benefits:

* Easier user experience
* No password management
* Trusted identity providers

---

### Multi-Factor Authentication (MFA)

Requires additional verification.

Examples:

* OTP
* Authenticator App
* SMS Verification

Flow:

1. Password entered
2. OTP verified
3. Login successful

---

## Authentication Flow

```text
User
  |
  | Email + Password
  v
Backend
  |
  | Validate Credentials
  v
Database
  |
  | User Exists?
  v
Backend
  |
  | Generate Token/Session
  v
User Logged In
```

---

## Registration Flow

### Step 1

User submits:

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

---

### Step 2

Backend validates request.

Checks:

* Email format
* Password strength
* Existing account

---

### Step 3

Password is hashed.

Never store plain text passwords.

Example:

```text
password123
```

Stored as:

```text
$2b$10$xxxxxxxxxxxxxxxxxxxx
```

---

### Step 4

User record saved.

Database:

```text
Users

id
email
password_hash
created_at
```

---

## Login Flow

### Step 1

User enters credentials.

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

---

### Step 2

Backend finds user.

```sql
SELECT * FROM users
WHERE email='user@example.com';
```

---

### Step 3

Compare password with stored hash.

Example:

```javascript
bcrypt.compare(password, storedHash);
```

---

### Step 4

If valid:

* Create Session
* Or Generate JWT

Return success.

---

## Password Hashing

Passwords should never be stored directly.

Bad:

```text
password123
```

Good:

```text
$2b$10$hashedpassword...
```

Popular hashing algorithms:

* bcrypt
* Argon2
* PBKDF2

Preferred today:

* Argon2
* bcrypt

---

## Sessions

Traditional authentication approach.

Server stores session data.

Database:

```text
SessionID -> UserID
```

Browser stores:

```text
Session Cookie
```

Advantages:

* Easier revocation
* More control

Disadvantages:

* Server state required
* Scaling complexity

---

## Token-Based Authentication

Modern applications often use JWT.

Flow:

```text
Login
   |
Generate Token
   |
Send Token
   |
Store Token
   |
Send Token with Requests
```

Advantages:

* Stateless
* Easy scaling

Disadvantages:

* Revocation complexity
* Token management

---

## Security Best Practices

### Never Store Plain Passwords

Always hash passwords.

---

### Use HTTPS

Never transmit credentials over HTTP.

---

### Implement Rate Limiting

Protect against brute force attacks.

Example:

```text
5 failed attempts
within 10 minutes
```

---

### Strong Password Policy

Requirements:

* Minimum length
* Uppercase
* Lowercase
* Number
* Special character

---

### Use MFA

Adds additional security layer.

---

### Secure Token Storage

Avoid insecure storage mechanisms.

Use:

* HttpOnly Cookies
* Secure Cookies

when possible.

---

## Common Authentication APIs

### Register

```http
POST /api/auth/register
```

---

### Login

```http
POST /api/auth/login
```

---

### Logout

```http
POST /api/auth/logout
```

---

### Forgot Password

```http
POST /api/auth/forgot-password
```

---

### Reset Password

```http
POST /api/auth/reset-password
```

---

## Interview Questions

### What is Authentication?

Process of verifying user identity.

---

### What is Authorization?

Process of determining user permissions.

---

### Why hash passwords?

To protect passwords if the database is compromised.

---

### What is bcrypt?

A password hashing algorithm designed to securely store passwords.

---

### Why should passwords never be stored in plain text?

Database breaches would expose all user passwords immediately.

---

### Difference Between Session and JWT?

Session:

* Stateful
* Stored on server

JWT:

* Stateless
* Stored on client

---

## Production Considerations

A production-ready authentication system should include:

* Password Hashing
* JWT or Session Management
* Refresh Tokens
* MFA
* Rate Limiting
* Password Reset Flow
* Audit Logging
* HTTPS
* Account Lockout Policies

---

## Summary

Authentication verifies user identity.

The typical authentication lifecycle is:

```text
Register
    ↓
Hash Password
    ↓
Store User
    ↓
Login
    ↓
Verify Password
    ↓
Generate Session/JWT
    ↓
Access Protected Resources
```

Authentication answers:

> Who are you?

Authorization answers:

> What are you allowed to do?
