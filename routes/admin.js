const router = require("express").Router();
const adminController = require("../controllers/adminController");
const { uploadSingle, uploadMultiple } = require("../middleware/multer");
const auth = require("../middleware/auth");

// sign in endpoint
router.get("/signin", adminController.viewSignin);
router.post("/signin", adminController.actionSignin);
//If you wanna go to the dashboard and logout, you have to go through the auth middleware
router.use(auth);
router.get("/logout", adminController.actionLogout);
router.get("/dashboard", adminController.viewDashboard);

// category endpoint
router.get("/category", adminController.viewCategory);
router.post("/category", adminController.addCategory);
router.put("/category", adminController.editCategory);
router.delete("/category/:id", adminController.deleteCategory);

// bank endpoint
router.get("/bank", adminController.viewBank);
router.post("/bank", uploadSingle, adminController.addBank);
router.put("/bank", uploadSingle, adminController.editBank);
router.delete("/bank/:id", adminController.deleteBank);

// item endpoint
router.get("/item", adminController.viewItem);
router.post("/item", uploadMultiple, adminController.addItem);
router.get("/item/show-image/:id", adminController.showImageItem);
router.get("/item/:id", adminController.showEditItem);
router.put("/item/:id", uploadMultiple, adminController.editItem);
router.delete("/item/:id/delete", adminController.deleteItem);

// endpoint detail item
router.get("/item/show-detail-item/:itemId", adminController.viewDetailItem);
router.post("/item/add/feature", uploadSingle, adminController.addFeature);
router.put("/item/update/feature", uploadSingle, adminController.editFeature);
router.delete("/item/:itemId/feature/:id", adminController.deleteFeature);
router.post("/item/add/activity", uploadSingle, adminController.addActivity);
router.put("/item/update/activity", uploadSingle, adminController.editActivity);
router.delete("/item/:itemId/activity/:id", adminController.deleteActivity);

// booking endpoint
router.get("/booking", adminController.viewBooking);
router.get("/booking/:id", adminController.showDetailBooking);
router.put("/booking/:id/confirmation", adminController.actionConfirmation);
router.put("/booking/:id/reject", adminController.actionReject);

module.exports = router;
