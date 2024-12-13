const express = require('express');
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;

const router = express.Router();

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Set up Multer with Cloudinary storage
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'uploads',
        allowed_formats: ['jpg', 'png', 'jpeg'], // Adjust formats as needed
    },
});

const upload = multer({ storage });

// Upload Route
router.post('/upload', upload.single('image'), (req, res) => {
    res.json({ url: req.file.path, id: req.file.filename });
});

// Delete Route (Optional)
router.delete('/delete/:id', async (req, res) => {
    try {
        await cloudinary.uploader.destroy(req.params.id);
        res.json({ msg: 'Image deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
