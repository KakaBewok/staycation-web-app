const Category = require("../models/Category");

module.exports = {
  viewDashboard: (req, res) => {
    res.render("admin/dashboard/view_dashboard", {
      title: "Staycation | Dashboard",
    });
  },

  //Category
  viewCategory: async (req, res) => {
    try {
      const category = await Category.find();

      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");

      const alert = {
        message: alertMessage,
        status: alertStatus,
      };

      res.render("admin/category/view_category", {
        title: "Staycation | Category",
        category,
        alert,
      });
    } catch (error) {
      res.redirect("/admin/category");
    }
  },
  addCategory: async (req, res) => {
    try {
      const { name } = req.body;

      req.flash("alertMessage", "Success add category");
      req.flash("alertStatus", "success");

      await Category.create({ name });
      res.redirect("/admin/category");
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");

      res.redirect("/admin/category");
    }
  },
  editCategory: async (req, res) => {
    try {
      const { id, name } = req.body;

      const category = await Category.findOne({ _id: id });

      req.flash("alertMessage", "Success update category");
      req.flash("alertStatus", "success");

      // Update data category name from db with req payload
      category.name = name;

      // Then save the data
      await category.save();

      // Then redirect to category page
      res.redirect("/admin/category");
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/admin/category");
    }
  },
  deleteCategory: async (req, res) => {
    try {
      const { id } = req.params;
      const category = await Category.findOne({ _id: id });

      req.flash("alertMessage", "Success delete category");
      req.flash("alertStatus", "success");

      category.deleteOne();

      res.redirect("/admin/category");
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/admin/category");
    }
  },

  viewBank: (req, res) => {
    res.render("admin/bank/view_bank", {
      title: "Staycation | Bank",
    });
  },

  viewItem: (req, res) => {
    res.render("admin/item/view_item", {
      title: "Staycation | Item",
    });
  },

  viewBooking: (req, res) => {
    res.render("admin/booking/view_booking", {
      title: "Staycation | Booking",
    });
  },
};
