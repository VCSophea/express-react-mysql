const express = require("express");
const router = express.Router();
const { Users } = require("../../models");

// list of posts
router.get("/list", async (req, res) => {
  try {
    const listOfPosts = await Users.findAll();
    res.json(listOfPosts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// add new post
router.post("/add", async (req, res) => {
  try {
    const post = req.body;
    await Users.create(post);
    res.json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// find one by id
router.get("/find/:id", async (req, res) => {
  try {
    const post = await Users.findByPk(req.params.id);
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ error: "Post not found." });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// update posts
router.put("/update/:id", async (req, res) => {
  try {
    const [updated] = await Users.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedPost = await Users.findByPk(req.params.id);
      res.status(200).json(updatedPost);
    } else {
      res.status(404).json({ error: "Post not found." });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// delete post
router.delete("/delete/:id", async (req, res) => {
  try {
    const deleted = await Users.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(200).json({ message: "Post deleted successfully." });
    } else {
      res.status(404).json({ error: "Post not found." });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
