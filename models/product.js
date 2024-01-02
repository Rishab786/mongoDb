const getDb = require("../utils/database").getDb;
class Product {
    constructor(title,price ,description){
        this.description = description;
        this.title = title;
        this.price = price;
    }
    save(){
        const db = getDb();
        return db.collection('products')
        .insertOne(this)
        .then(result => {
            console.log(result);
        })
        .catch((err)=>{
            console.log(err);
        })

    }

}
module.exports = Product;