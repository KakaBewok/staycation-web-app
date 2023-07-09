const Category = require("../models/Category");

module.exports = {
  viewDashboard: (req, res) => {
    res.render("admin/dashboard/view_dashboard", {
      title: "Staycation | Dashboard",
    });
  },

  //Category
  viewCategory: async (req, res) => {
    const category = await Category.find();

    res.render("admin/category/view_category", {
      title: "Staycation | Category",
      category,
    });
  },
  addCategory: async (req, res) => {
    const { name } = req.body;

    await Category.create({ name });
    res.redirect("/admin/category");
  },
  editCategory: async (req, res) => {
    const { id, name } = req.body;

    const category = await Category.findOne({ _id: id });

    // Update data category name from db with req payload
    category.name = name;

    // Then save the data
    await category.save();

    // Then redirect to category page
    res.redirect("/admin/category");
  },
  deleteCategory: async (req, res) => {
    const { id } = req.params;
    const category = await Category.findOne({ _id: id });

    category.deleteOne();

    res.redirect("/admin/category");
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
