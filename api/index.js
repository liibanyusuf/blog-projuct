const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const postRoute = require("./routes/post");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const path = require("path");

dotenv.config();
const app = express();
app.use(express.json());
 

// Allow all origins with CORS
app.use(cors());
app.use("/images", express.static(path.join(__dirname, "/images")));

// MongoDB connection
mongoose.connect('mongodb+srv://libanow2:12345@cluster0.fqezi.mongodb.net/myDatabase?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true, // To avoid deprecation warning
})
.then(() => {
  console.log('MongoDB connected');
  
  // Use the User model after connection
  const User = require('./models/User'); // Adjust the path as necessary

  User.createIndexes([{ key: { username: 1 }, unique: true }])
    .then(() => console.log('Indexes created'))
    .catch(err => console.error('Error creating indexes:', err));
})
.catch(err => console.error('MongoDB connection error:', err));

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

// Define routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);


// app.listen(5000, () => {
//   console.log("Backend is running.");
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

