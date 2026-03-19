const MenuModel = require('../Models/Menu');

// Add Menu Controller
const addMenu = async (req, res) => {
  try {
    // Collect data from request body
    const { name, category, description, price, status } = req.body;

    // File comes from multer
    const imagePath = req.file ? req.file.path : null;

    if (!imagePath) {
      return res.status(400).json({ message: "Image is required" });
    }

    const newMenu = new MenuModel({
      name,
      category,
      description,
      price,
      status,
      image: imagePath  // save path to MongoDB
    });

    await newMenu.save();

    res.status(201).json({
      message: "Menu item created successfully",
      menu: newMenu
    });

  } catch (error) {
    console.error("Error adding menu:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

const getMenu = async (req, res) => {
  try {
    const items = await MenuModel.find();
    res.status(200).json({ success: true, items });
  } catch (err) {
    console.error("Error fetching menu:", err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = { addMenu, getMenu };
