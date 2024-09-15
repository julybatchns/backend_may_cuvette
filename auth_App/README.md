# Authentication is the process of verifying the identity of a user (i.e., who they claim to be).

# Authorization is the process of determining what resources or actions the authenticated user is allowed to access.

# JWT (JSON Web Token) is a compact, URL-safe means of representing claims to be transferred between two parties.

# jsonwebtoken (JWT): A library used to securely transmit data between parties as a JSON object, typically for authentication and authorization purposes.

<!-- Flow of Authorization and Authentication -->

## 1. Register or Sign up as a New user.

## 2. User logs in /Sign in with credentials.

## 3. Server verifies credentials and generates a JWT.

## 4. JWT is sent back to the user and stored (usually in localStorage or cookies).

## 5. For subsequent requests, the user sends the JWT in the request headers.

## 6. Server verifies the JWT to authorize the user for specific actions.
