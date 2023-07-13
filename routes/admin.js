const router = require("express").Router();
const adminController = require("../controllers/adminController");
const { uploadSingle } = require("../middleware/multer");

router.get("/dashboard", adminController.viewDashboard);

// category
router.get("/category", adminController.viewCategory);
router.post("/category", adminController.addCategory);
router.put("/category", adminController.editCategory);
router.delete("/category/:id", adminController.deleteCategory);

//bank
router.get("/bank", adminController.viewBank);
router.post("/bank", uploadSingle, adminController.addBank);
router.put("/bank", uploadSingle, adminController.editBank);

router.get("/item", adminController.viewItem);
router.get("/booking", adminController.viewBooking);

module.exports = router;
