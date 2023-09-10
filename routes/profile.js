const { createProfile, fethchProfilebyId, updateProfile, deleteProfile } = require('../controllers/profile');
const router = require('express').Router();

router.get("/:id", fethchProfilebyId);
router.post("/create", createProfile);
router.put("/update/:id",updateProfile);
router.delete("/delete/:id",deleteProfile);

module.exports = router;