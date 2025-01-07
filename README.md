# login-page
# React Auth Backend Project

This project is a Node.js backend for authentication that includes user registration, login, and protected routes using JSON Web Tokens (JWT) and MongoDB for data storage. The backend is deployed on Render.

---

## Table of Contents

1. [Project Structure](#project-structure)
2. [Setup Instructions](#setup-instructions)
3. [Environment Variables](#environment-variables)
4. [Commands](#commands)
5. [Endpoints](#endpoints)
6. [Deployment Instructions](#deployment-instructions)
7. [Testing Endpoints](#testing-endpoints)
8. [Final Outcome](#final-outcome)

---

## Project Structure

The project structure is as follows:

```
react-auth-app/
  backend/
    node_modules/
    routes/
      authRoutes.js
    models/
      User.js
    .env
    package.json
    package-lock.json
    server.js
```

---

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/gopichand1939/login-page.git
   cd login-page/backend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Setup Environment Variables**
   Create a `.env` file in the `backend/` directory with the following variables:
   ```env
   MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/react-auth-app?retryWrites=true&w=majority
   JWT_SECRET=mySuperSecureSecretKey123!@#
   PORT=5000
   ```

   Replace `<username>` and `<password>` with your MongoDB credentials.

4. **Connect to MongoDB**
   Ensure your MongoDB URI is correct and accessible. Use MongoDB Atlas for cloud storage or a local MongoDB instance.

5. **Start the Server**
   ```bash
   node server.js
   ```
   The server will start at `http://localhost:5000`.

---

## Environment Variables

The following environment variables are required:

| Variable Name  | Description                       |
|----------------|-----------------------------------|
| `MONGO_URI`    | MongoDB connection URI            |
| `JWT_SECRET`   | Secret key for JWT authentication |
| `PORT`         | Server port (default: 5000)       |

---

## Commands

### Install Dependencies
```bash
npm install
```

### Start the Server
```bash
node server.js
```

### Deploy to GitHub
```bash
git add .
git commit -m "Your commit message"
git push origin main
```

---

## Endpoints

### **Base URL:**
Deployed URL: `https://login-page-gopichand.onrender.com`

### **Endpoints Overview:**

1. **Register a User**
   - **URL:** `POST /api/auth/register`
   - **Body:**
     ```json
     {
       "username": "newuser",
       "email": "newuser@example.com",
       "password": "newpassword123"
     }
     ```
   - **Response:**
     ```json
     {
       "message": "User registered successfully"
     }
     ```

2. **Login a User**
   - **URL:** `POST /api/auth/login`
   - **Body:**
     ```json
     {
       "email": "newuser@example.com",
       "password": "newpassword123"
     }
     ```
   - **Response:**
     ```json
     {
       "message": "Login successful",
       "token": "<JWT Token>"
     }
     ```

3. **Access Protected Route**
   - **URL:** `GET /api/auth/protected`
   - **Headers:**
     ```json
     {
       "Authorization": "Bearer <JWT Token>"
     }
     ```
   - **Response:**
     ```json
     {
       "message": "You have accessed the protected route",
       "user": {
         "id": "<User ID>",
         "iat": 1736184703,
         "exp": 1736188303
       }
     }
     ```

---

## Deployment Instructions

1. **Push Changes to GitHub**
   ```bash
git add .
git commit -m "Deploy update"
git push origin main
   ```

2. **Deploy on Render**
   - Create a new Web Service in Render.
   - Connect the repository and select the `main` branch.
   - Specify the build and start commands:
     - **Build Command:** `npm install`
     - **Start Command:** `node server.js`
   - Add environment variables in Render.
   - Deploy the service and test the URL provided.

---

## Testing Endpoints

Use Postman or any REST client to test the endpoints:

### **Steps to Test:**

1. Register a user using the `/register` endpoint.
2. Login with the registered email and password using the `/login` endpoint.
3. Copy the token from the login response and use it in the Authorization header to access the `/protected` route.

### **Example:**

**Headers for Protected Route:**
```json
{
  "Authorization": "Bearer <JWT Token>"
}
```

---

## Final Outcome

The project successfully demonstrates:

1. User Registration.
2. User Login with JWT Authentication.
3. Access to Protected Routes with token-based authentication.

The deployed backend can be tested at:
[https://login-page-gopichand.onrender.com](https://login-page-gopichand.onrender.com)

---

For any issues or improvements, please submit an issue or pull request in the GitHub repository: [https://github.com/gopichand1939/login-page](https://github.com/gopichand1939/login-page)

