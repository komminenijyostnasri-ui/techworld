
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/techworld')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const User = mongoose.model('User', new mongoose.Schema({
  email: String,
  password: String
}));

const Product = mongoose.model('Product', new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String
}));

const products = [
  { name: "Laptop Pro 15", description: "High-performance laptop with SSD", price: 1200, image: "/images/laptop.jpg" },
  { name: "Smartphone X", description: "5G enabled smartphone", price: 800, image: "/images/mobile.jpg" },
  { name: "Smartwatch Z", description: "Track fitness and health", price: 250, image: "/images/watch.jpg" },
  { name: "Wireless Earbuds", description: "Noise-cancelling sound", price: 150, image: "/images/earbuds.jpg" },
  { name: "Gaming Mouse", description: "RGB lighting and precision", price: 90, image: "/images/mouse.jpg" },
  { name: "Mechanical Keyboard", description: "Backlit and durable keys", price: 110, image: "/images/keyboard.jpg" },
  { name: "Tablet A10", description: "Large screen tablet", price: 500, image: "/images/tablet.jpg" },
  { name: "Bluetooth Speaker", description: "Portable sound system", price: 180, image: "/images/speaker.jpg" },
  { name: "4K Monitor", description: "Ultra HD display", price: 600, image: "/images/monitor.jpg" },
  { name: "External SSD", description: "Fast data storage", price: 200, image: "/images/ssd.jpg" }
];

Product.countDocuments().then(count => {
  if (count === 0) {
    Product.insertMany(products);
    console.log("Sample products added");
  }
});

app.post('/api/register', async (req, res) => {
  const { email, password } = req.body;
  const exists = await User.findOne({ email });
  if (exists) return res.status(400).json({ message: "User already exists" });
  await User.create({ email, password });
  res.json({ message: "Registration successful" });
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user) return res.status(400).json({ message: "Invalid credentials" });
  res.json({ message: "Login successful" });
});

app.get('/api/products', async (req, res) => {
  const items = await Product.find();
  res.json(items);
});

app.listen(5000, () => console.log("Server running on port 5000"));
