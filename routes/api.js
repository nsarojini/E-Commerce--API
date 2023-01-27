const productController = require("../app/controller/productController")
function initRoutes(app) {
    //  API routes   *//
    app.get('/', productController().user);

    //  Post 
    app.post('/products/create', productController().create);

    //  Get  
    app.get('/products/:id', productController().find);


    //  Put  
    app.put('/products/:id', productController().update);


    //  Get   All  Products
    app.get('/products', productController().index);



    // delete 
    app.delete('/products/:id', productController().delete);

}
module.exports = initRoutes

