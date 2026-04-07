import mongoose from "mongoose";
import Product from "./Model/Product.model.js"; // path check karo
import dotenv from "dotenv";

dotenv.config();

// MongoDB connect
mongoose.connect(process.env.MONGO_URI)  // ✅ remove old options
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const products = [
  { name: "Casual T-Shirt", price: 799, category: "Tops", rating: 4.5, popularity: 100, img: "https://img.freepik.com/free-photo/white-t-shirt_125540-452.jpg", description: "Comfortable cotton casual t-shirt" },
  { name: "Denim Jacket", price: 1999, category: "Jackets", rating: 4.8, popularity: 200, img: "https://img.freepik.com/free-photo/jeans-jacket_1203-8092.jpg", description: "Stylish denim jacket" },
  { name: "Summer Dress", price: 1499, category: "Dresses", rating: 4.2, popularity: 150, img: "https://img.freepik.com/free-photo/woman-summer-dress_23-2148899394.jpg", description: "Light and breezy summer dress" },
  { name: "Hoodie", price: 1299, category: "Tops", rating: 4.3, popularity: 180, img: "https://img.freepik.com/free-photo/hoodie_1203-8093.jpg", description: "Comfortable hoodie for casual wear" },
  { name: "Formal Shirt", price: 999, category: "Shirts", rating: 4.6, popularity: 120, img: "https://img.freepik.com/free-photo/shirt_1203-8094.jpg", description: "Elegant formal shirt for office" },
  { name: "Black Jeans", price: 1499, category: "Pants", rating: 4.4, popularity: 170, img: "https://img.freepik.com/free-photo/black-jeans_1203-8095.jpg", description: "Slim fit black jeans" },
  { name: "Kurti", price: 899, category: "Tops", rating: 4.7, popularity: 140, img: "https://img.freepik.com/free-photo/indian-kurti_23-2148748270.jpg", description: "Traditional Indian kurti" },
  { name: "Blazer", price: 2499, category: "Jackets", rating: 4.9, popularity: 90, img: "https://img.freepik.com/free-photo/blazer_1203-8096.jpg", description: "Smart blazer for formal events" },
  { name: "Crop Top", price: 699, category: "Tops", rating: 4.1, popularity: 160, img: "https://img.freepik.com/free-photo/crop-top_23-2148674175.jpg", description: "Trendy crop top" },
  { name: "Sweatshirt", price: 1199, category: "Tops", rating: 4.3, popularity: 130, img: "https://img.freepik.com/free-photo/sweatshirt_1203-8097.jpg", description: "Warm and cozy sweatshirt" },
  { name: "Skirt", price: 999, category: "Bottoms", rating: 4.2, popularity: 110, img: "https://img.freepik.com/free-photo/skirt_1203-8098.jpg", description: "Elegant skirt for casual or party wear" },
  { name: "Jumpsuit", price: 1799, category: "Dresses", rating: 4.5, popularity: 100, img: "https://img.freepik.com/free-photo/jumpsuit_23-2148899395.jpg", description: "Comfortable stylish jumpsuit" },
  { name: "Tracksuit", price: 1599, category: "Sportswear", rating: 4.4, popularity: 150, img: "https://img.freepik.com/free-photo/tracksuit_1203-8099.jpg", description: "Perfect for workouts" },
  { name: "Leather Jacket", price: 2999, category: "Jackets", rating: 4.8, popularity: 80, img: "https://img.freepik.com/free-photo/leather-jacket_1203-8100.jpg", description: "Premium leather jacket" },
  { name: "Party Dress", price: 2199, category: "Dresses", rating: 4.7, popularity: 95, img: "https://img.freepik.com/free-photo/party-dress_23-2148899396.jpg", description: "Perfect dress for parties" },
  { name: "Winter Coat", price: 3499, category: "Outerwear", rating: 4.9, popularity: 70, img: "https://img.freepik.com/free-photo/winter-coat_1203-8101.jpg", description: "Keep warm in style" }
];

const importData = async () => {
  try {
    await Product.deleteMany(); // purane products delete
    await Product.insertMany(products); // naya insert
    console.log("16 Products seeded successfully");
    process.exit();
  } catch (err) {
    console.log("Error seeding products:", err);
    process.exit(1);
  }
};

importData();