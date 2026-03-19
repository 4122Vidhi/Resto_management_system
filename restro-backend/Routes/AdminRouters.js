const multer = require("multer");
const path = require("path");

const { addMenu,getMenu } = require('../Controllers/MenuController');

const router =require('express').Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // make sure "uploads" folder exists
  },
  filename: (req, file, cb) => {
    cb(null, "menu-" + Date.now() + path.extname(file.originalname));
  }
});

// Create multer instance
const upload = multer({ storage });

router.post('/addmenu', upload.single("image"), addMenu);
router.get('/getmenu',  getMenu);

module.exports = router;