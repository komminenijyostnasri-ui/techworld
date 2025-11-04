# 🛒 TechWorld - E-commerce Platform

A modern, full-stack e-commerce web application for tech products with cart functionality, user authentication, and a beautiful UI.

## ✨ Features

- 🏠 **Home Page** - Browse products with beautiful card layouts
- 🛍️ **Shopping Cart** - Add products to cart with quantity management
- 👤 **User Authentication** - Login and Register functionality
- 💳 **Checkout Process** - Complete order with shipping information
- 📱 **Responsive Design** - Works seamlessly on all devices
- 💾 **Persistent Cart** - Cart data saved in localStorage
- 🎨 **Modern UI** - Beautiful gradients and smooth animations

## 🛠️ Tech Stack

### Frontend
- React 18
- React Router DOM v6
- Context API for state management
- Modern CSS with gradients and animations

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS enabled

## 📋 Prerequisites

Before running this project, make sure you have installed:

1. **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
2. **MongoDB** - [Download here](https://www.mongodb.com/try/download/community)
   - Make sure MongoDB is running on `mongodb://127.0.0.1:27017`

## 🚀 How to Run This Project in VS Code Windsurf Terminal

### Step 1: Install Dependencies

Open VS Code Windsurf terminal and follow these steps:

#### Install Backend Dependencies
```bash
cd backend
npm install
```

#### Install Frontend Dependencies
```bash
cd ../frontend
npm install
```

### Step 2: Start MongoDB

Make sure MongoDB is running on your system:

**Windows:**
```bash
# Start MongoDB service (Run as Administrator if needed)
net start MongoDB
```

Or manually start MongoDB:
```bash
"C:\Program Files\MongoDB\Server\<version>\bin\mongod.exe" --dbpath="C:\data\db"
```

**Alternative:** If MongoDB is already running as a service, skip this step.

### Step 3: Start the Backend Server

Open a terminal in the backend folder:
```bash
cd backend
node server.js
```

You should see:
```
MongoDB connected
Server running on port 5000
Sample products added
```

Keep this terminal running.

### Step 4: Start the Frontend Development Server

Open a **NEW** terminal (keep the backend running), then:
```bash
cd frontend
npm start
```

The application will automatically open in your browser at `http://localhost:3000`

If it doesn't open automatically, manually navigate to `http://localhost:3000`

## 🎯 Quick Start Commands (Copy-Paste)

### Option 1: Run Backend and Frontend Separately

**Terminal 1 (Backend):**
```bash
cd c:\Techworld\backend
npm install
node server.js
```

**Terminal 2 (Frontend):**
```bash
cd c:\Techworld\frontend
npm install
npm start
```

### Option 2: Run Both at Once (Windows PowerShell)

```powershell
# Start backend in background
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd c:\Techworld\backend; npm install; node server.js"

# Wait a few seconds for backend to start
Start-Sleep -Seconds 5

# Start frontend
cd c:\Techworld\frontend
npm install
npm start
```

## 📱 Using the Application

1. **Home Page** - Browse 10 tech products displayed in a beautiful grid
2. **Add to Cart** - Click "Add to Cart" button on any product
3. **Cart Badge** - See the cart count update in the header
4. **View Cart** - Click "Cart" in the navigation to see your items
5. **Manage Quantity** - Use +/- buttons to adjust quantities
6. **Checkout** - Click "Proceed to Checkout" and fill in shipping details
7. **Login/Register** - Create an account or login to save your preferences

## 🗂️ Project Structure

```
Techworld/
├── backend/
│   ├── node_modules/
│   ├── package.json
│   └── server.js          # Express server with MongoDB
├── frontend/
│   ├── node_modules/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   └── Navbar.js   # Navigation with cart count
│   │   ├── context/
│   │   │   └── CartContext.js  # Cart state management
│   │   ├── pages/
│   │   │   ├── Home.js     # Product listing
│   │   │   ├── Cart.js     # Shopping cart
│   │   │   ├── Login.js    # User login
│   │   │   ├── Register.js # User registration
│   │   │   ├── Checkout.js # Checkout form
│   │   │   └── About.js    # About page
│   │   ├── App.js          # Main app component
│   │   ├── index.js        # App entry point
│   │   └── index.css       # Modern styling
│   └── package.json
└── README.md
```

## 🔧 Troubleshooting

### MongoDB Connection Error
```
Error: connect ECONNREFUSED 127.0.0.1:27017
```
**Solution:** Make sure MongoDB is running. Start it using the commands in Step 2.

### Port Already in Use
```
Error: Port 5000 is already in use
```
**Solution:** Kill the process using port 5000:
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID_NUMBER> /F
```

### Frontend Won't Start
```
Error: react-scripts not found
```
**Solution:** Delete node_modules and reinstall:
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
```

### Cart Not Working
- Check browser console for errors
- Clear localStorage: Open DevTools > Application > Local Storage > Clear
- Refresh the page

## 🎨 Features Breakdown

### Cart System
- **Add to Cart**: Click button on any product
- **Cart Badge**: Shows total item count in header
- **Quantity Control**: Increase/decrease quantities
- **Remove Items**: Delete unwanted products
- **Clear Cart**: Remove all items at once
- **Persistent Storage**: Cart saved in localStorage
- **Real-time Updates**: Cart count updates immediately

### Styling Highlights
- Beautiful gradient backgrounds
- Smooth hover animations
- Card-based layout
- Responsive design
- Modern color scheme
- Shadow effects
- Sticky navigation

## 📝 API Endpoints

### Backend API (http://localhost:5000)

- `POST /api/register` - Register new user
- `POST /api/login` - Login user
- `GET /api/products` - Get all products

## 🌟 Future Enhancements

- User profile page
- Product search and filters
- Wishlist functionality
- Payment gateway integration
- Order history
- Product reviews and ratings
- Admin dashboard

## 👨‍💻 Development

To make changes:
1. Edit files in `frontend/src/` for frontend changes
2. Edit `backend/server.js` for backend changes
3. The frontend will auto-reload on save
4. Backend requires restart after changes

## 📄 License

This project is open source and available for learning purposes.

## 🤝 Contributing

Feel free to fork this project and make improvements!

---

**Enjoy shopping at TechWorld! 🛒✨**
