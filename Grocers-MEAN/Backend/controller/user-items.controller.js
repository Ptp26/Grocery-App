let UserItemModel = require("../model/user-items.model");
// let ProductModel = require("../model/product.model")

const viewItemsByUser =  (req, res)=>{
    let uid = req.params.uid;
    UserItemModel.find({userId: uid}, (err, result)=>{
        if(!err){
            res.json(result);
        }
    })
}

// const viewAllItems = (res, res)=>{
//     UserItemModel.find({}, (err, result)=>{
//         if(!err){
//             res.json(result);
//         }
//     })
// }

const selectItemsByUser = (req, res)=>{
    const {userId, productId, quantity, name, imageUrl} = req.body;
    UserItemModel.insertMany({
        userId,
        productId,
        quantity,
        name,
        imageUrl
    }, (err, result)=>{
        if(!err){
            res.send("Item stored Successfully");
        }else{
            res.send(err);
        }
    })
}

const deleteItemsByUser = (req, res)=>{
    let uid = req.params.uid;
    let pid = req.params.pid;
    UserItemModel.deleteOne({userId: uid, productId: pid}, (err, result)=>{
        if(!err){
            if(result.deletedCount > 0){
                res.send("Record deleted successfully");
            }else{
                res.send("Record does not exist");
            }
        }else{
            res.send("Error generated " + err);
        }
    })
}

const changeQuantityByUser = (req, res)=>{
    const {userId, productId, quantity} =  req.body;
    
    UserItemModel.updateOne(
        {userId, productId},
        {$set:
            {
                quantity: quantity
            }
        },(err,result)=>{
            if (!err) {
                if (result.nModified > 0) {
                    res.send("Record updated succesfully")
                } else {
                    res.send("Record is not available");
                }
            } else {
                res.send("Error generated " + err);
            }
        })
}

module.exports = {viewItemsByUser, selectItemsByUser, deleteItemsByUser, changeQuantityByUser}