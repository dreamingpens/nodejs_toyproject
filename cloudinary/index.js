const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
}); //link the cloudinary object to cloudinary server address

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'YelpCamp', //folder name in cloudinary
        allowedFormats: ['jpeg', 'png', 'jpg']
    }

});

module.exports = {
    cloudinary,
    storage
}