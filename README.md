# 🟡 Drybar Clone
A full-stack e-commerce application with authentication, OTP verification, and a shopping cart system.

## 🚀 Features
✅ User Authentication (Login, Signup, Email OTP Verification, Unique Email Restriction)  
✅ Secure Passwords (Hashed using bcrypt)  
✅ JWT-based Authentication (Protected Routes)  
✅ Add to Cart (Users can add products, update quantity, and delete items)  
✅ Cart Summary (Total calculation based on quantity)  
✅ Fully Responsive (Mobile & Desktop)  
✅ MVC Pattern Backend (Separation of Concerns)  

## 🛠 Tech Stack
### **Frontend (React)**
- ⚛️ React
- 🎨 React Bootstrap
- 🔀 React Router
- 📡 Axios (For API calls)
- 🍪 JS-Cookie & React-Cookie (For authentication handling)
- 🔔 React Toastify (For notifications)

### **Backend (Node.js + Express + MongoDB)**
- 🏗️ Framework: Express.js
- 🛢️ Database: MongoDB Atlas
- 🔗 ORM: Mongoose
- 🔐 Security: JWT, Bcrypt
- 📧 Email Services: Nodemailer (for OTP verification)

## 🔗 Live Demo
🌐 [Drybar Clone Live](https://drybarclonedhruv.vercel.app)

## 📦 Installation
### 🖥️ Frontend Setup
🔗 Backend Repository: [Drybar Backend Server](https://github.com/dhruvbarapatre/drybar_clone_client)
```sh
# Clone the repository
git clone https://github.com/dhruvbarapatre/drybar_clone_client.git

# Install dependencies
npm install

# Start the development server
npm run dev
```

### 🖥 Backend Setup
🔗 Backend Repository: [Drybar Backend Server](https://github.com/dhruvbarapatre/drybar_bcakend_server)
```sh
# Clone the repository
git clone https://github.com/dhruvbarapatre/drybar_bcakend_server.git

# Install dependencies
npm install

# Start the server
npm run server
```

## ⚙️ Environment Variables
🚨 **You need to run the backend server before starting the frontend.** 🚨

Create a `.env` file in both the frontend and backend directories and add the following:

### 🖥 Backend `.env`
```sh
MONGO_URL=<your_mongo_connection_string>
PORT=8080
EMAIL=<your_email>
PASSWORD=<your_email_password>
SECRET_KEY=dhruvBhai123456789
```

### 🖥️ Frontend `.env`
```sh
VITE_APP_BE_URL=http://localhost:8080
```

## 📚 Dependencies
### 🖥️ Frontend
```json
{
  "axios": "^1.7.9",
  "bootstrap": "^5.3.3",
  "js-cookie": "^3.0.5",
  "react": "^18.3.1",
  "react-bootstrap": "^2.10.4",
  "react-cookie": "^7.2.2",
  "react-dom": "^18.3.1",
  "react-icons": "^5.2.1",
  "react-loader-spinner": "^6.1.6",
  "react-otp-input": "^3.1.1",
  "react-router-dom": "^6.26.0",
  "react-toastify": "^11.0.3",
  "uuid": "^10.0.0"
}
```

### 🖥 Backend
```json
{
  "axios": "^1.7.9",
  "bcrypt": "^5.1.1",
  "cookie-parser": "^1.4.7",
  "cors": "^2.8.5",
  "dotenv": "^16.4.7",
  "ejs": "^3.1.10",
  "email-existence": "^0.1.6",
  "email-verifier": "^0.4.1",
  "express": "^4.21.2",
  "jsonwebtoken": "^9.0.2",
  "mongoose": "^8.10.0",
  "nodemailer": "^6.10.0",
  "nodemon": "^3.1.9",
  "otp-generator": "^4.0.1"
}
```

## 📂 Project Structure
### 🖥️ Frontend
```
drybar_clone_client/
├── public/             # Static assets and public files
├── src/                # Source code for the React application
│   ├── components/     # Reusable React components
│   ├── pages/          # React components representing pages
│   ├── services/       # API service functions
│   ├── App.js          # Root component
│   └── index.js        # Entry point of the React application
├── .gitignore          # Specifies files to ignore in version control
├── README.md           # Project documentation
├── index.html          # Main HTML file
├── package-lock.json   # Lockfile for dependencies
├── package.json        # Project metadata and dependencies
└── vite.config.js      # Configuration file for Vite
```

### 🖥 Backend
```
drybar_bcakend_server/
├── controller/       # Contains controller functions handling requests
├── middleware/       # Middleware functions for request processing
├── model/            # Mongoose models defining data schemas
├── routes/           # Express route definitions
├── utils/            # Utility functions and helpers
├── views/            # EJS templates for server-side rendering
├── .gitignore        # Specifies files to ignore in version control
├── README.md         # Project documentation
├── index.js          # Entry point of the backend server
└── package.json      # Project metadata and dependencies
```
---
🚀 **Now your project is ready to run!** 🚀

