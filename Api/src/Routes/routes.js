const express = require("express");
const router = express.Router();

const data = require("./data.json");

router.get("/", (req, res) => {
    res.json(data);
});

router.get("/:id", (req, res) => {
    const [id] = req.params;
    tiers.forEach(tier => {
        if(tier.id == id) {
            res.json(tier);
        }
    });
});

module.exports = router;