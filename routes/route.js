const router = require("express").Router();

const cloudinary = require("../utils/cloudinary");
const Image = require("../models/Image");

//add conversation
router.get("/", async (req, res) => {
  try {
    const imageList = await Image.find({});
    res.status(200).json({ status: "success", imageList });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  const newImage = new Image(req.body);
  try {
    const savedImage = await newImage.save();
    res.status(200).json({
      status: "success",
      savedImage,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:imageId", async (req, res) => {
  try {
    await cloudinary.uploader.destroy(req.params.imageId);
    await Image.findOneAndDelete({
      imageId: req.params.imageId,
    });
    res
      .status(200)
      .json({ status: "success", message: "image deleted Successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
