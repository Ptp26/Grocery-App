let express = require("express");
let router = express.Router();  //router reference. 
let UserItemController = require("../controller/user-items.controller");

router.get("/userItemDetails/:uid", UserItemController.viewItemsByUser);
router.post("/storeItems", UserItemController.selectItemsByUser);
router.delete("/deleteItem/:uid/:pid", UserItemController.deleteItemsByUser);
router.put("/updateQuantity", UserItemController.changeQuantityByUser);

module.exports = router;