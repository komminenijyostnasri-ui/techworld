# 🚀 Quick Start Guide - TechWorld

## Run in 3 Simple Steps:

### Step 1: Start MongoDB
Make sure MongoDB is running on your system (port 27017)

### Step 2: Start Backend (Terminal 1)
```bash
cd c:\Techworld\backend
npm install
node server.js
```

**Expected Output:**
```
MongoDB connected
Server running on port 5000
Sample products added
```

### Step 3: Start Frontend (Terminal 2)
```bash
cd c:\Techworld\frontend
npm install
npm start
```

**Expected Output:**
```
Compiled successfully!
You can now view techworld-frontend in the browser.
Local: http://localhost:3000
```

## ✅ That's It!

Your browser will automatically open to `http://localhost:3000`

## 🎯 Testing the Cart Feature:

1. **Browse Products** - You'll see 10 tech products on the home page
2. **Add to Cart** - Click "Add to Cart" button on any product
3. **See Cart Badge** - Notice the red badge number appear on "Cart" in the header
4. **View Cart** - Click "Cart" to see all added items
5. **Manage Items** - Use +/- buttons to change quantities or click "Remove"
6. **Checkout** - Click "Proceed to Checkout" when ready

## 🎨 Features to Try:

- Add multiple products to cart
- Increase/decrease quantities
- Remove individual items
- Clear entire cart
- Navigate between pages (cart persists!)
- Register a new account
- Login with your account

## 💡 Tips:

- Cart data is saved even if you refresh the page
- The cart badge shows total quantity of all items
- All products have beautiful hover effects
- Try it on mobile - it's fully responsive!

## 🐛 Quick Troubleshooting:

**MongoDB not running?**
```bash
net start MongoDB
```

**Port 5000 already in use?**
```bash
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

**Need to reset?**
- Clear browser localStorage (F12 > Application > Local Storage > Clear)
- Restart both servers

---

**Happy Shopping! 🛍️**
