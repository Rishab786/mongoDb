const Product= require("../models/product");
exports.addProduct = (request, response, next) => {
    const title = request.body.title;
    const price = request.body.price;
    const description = request.body.description;
    const product = new Product(title,price,description);
    product.save()
    .then(result=>{
        response.send(result);
    })
    .catch(err =>{
        console.log(err);
    })

}