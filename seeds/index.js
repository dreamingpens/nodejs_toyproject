const mongoose = require('mongoose');
const Campground = require('../models/campground');

const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');

mongoose.connect('mongodb://localhost:27017/yelp-camp')

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"))
db.once("open", () => {
    console.log("Database connected");
});

const random = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const randomPrice = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: '63b0259ce45b300bf1d1cb10',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${random(descriptors)} ${random(places)}`,
            price: randomPrice,
            description: "dummytextsdummytexts...",
            images: [{ url: "https://res.cloudinary.com/dxzitzw65/image/upload/v1672683935/YelpCamp/olctlsen9q8x7bncu8fw.webp", filename: "YelpCamp/olctlsen9q8x7bncu8fw" }, { url: "https://res.cloudinary.com/dxzitzw65/image/upload/v1672683935/YelpCamp/fyfh0qrty7ckgekt0o3q.jpg", filename: "YelpCamp/fyfh0qrty7ckgekt0o3q" }]
        })
        await camp.save();
    }

}

seedDB();