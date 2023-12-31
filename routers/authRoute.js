const express = require("express");
const {
  createUser,
  getAllUser,
  getUser,
  deleteUser,
  updateUser,
  blockUser,
  unblockUser,
  handleRefeshToken,
  logout,
  updatePassword,
  forgotPasswordToken,
  resetPassword,
  loginUser,
  getWishList,
  saveAddress,
  addProductToCart,
  getUserCart,
  emptyCart,
  applyCoupon,
  createOrder,
  getOrder,
  updateOrderStatus,
  removeProductInCart,
  getSoldOrders,
  getRevenueByDay,
  getRevenueByMonth,
} = require("../controller/userCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();
router.post("/register", createUser);
router.post("/forgot-password", forgotPasswordToken);
router.put("/reset-password/:token", resetPassword);
router.put("/order/update-order/:id", authMiddleware, isAdmin, updateOrderStatus);
router.put("/password", authMiddleware, updatePassword);
router.post("/login", loginUser);
router.post("/cart", authMiddleware, addProductToCart);
router.post("/cart/apply-coupon", authMiddleware, applyCoupon);
router.post("/cart/create-order", authMiddleware, createOrder);
router.delete("/cart", authMiddleware, emptyCart);
router.delete("/cart/delete-by-id/:id", authMiddleware, removeProductInCart);
router.get("/all-user", getAllUser);
router.get("/chart/:date", getRevenueByDay);
router.get("/chart/month/:year/:month", getRevenueByMonth);
router.get("/get-order", authMiddleware, getOrder);
router.get("/sold-order", getSoldOrders);
router.get("/refresh", handleRefeshToken);
router.get("/logout", authMiddleware, logout);
router.get("/wishlist", authMiddleware, getWishList);
router.get("/cart", authMiddleware, getUserCart);
router.get("/:id", getUser);
router.put("/edit-user", authMiddleware, updateUser);
router.put("/save-address", authMiddleware, saveAddress);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);
router.delete("/:id", deleteUser);
module.exports = router;
