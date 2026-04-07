import Product from "../Model/Product.model.js";

// GET all products with filter & sort
export const getProducts = async (req, res) => {
  try {
    const { category, minPrice, maxPrice, rating, sort } = req.query;
    let filter = {};

    if (category) filter.category = category;
    if (rating) filter.rating = { $gte: Number(rating) };
    if (minPrice || maxPrice) filter.price = {};
    if (minPrice) filter.price.$gte = Number(minPrice);
    if (maxPrice) filter.price.$lte = Number(maxPrice);

    let query = Product.find(filter);

    if (sort === "newest") query = query.sort({ createdAt: -1 });
    if (sort === "priceLow") query = query.sort({ price: 1 });
    if (sort === "priceHigh") query = query.sort({ price: -1 });
    if (sort === "popularity") query = query.sort({ popularity: -1 });

    const products = await query;
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Error fetching products" });
  }
};

// GET single product by ID
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Error fetching product" });
  }
};