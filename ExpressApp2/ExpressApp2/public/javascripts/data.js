var product =
[
 {
   "id"         :1 ,
  "productName" : "Pen",
 "productPrice" : "200",
 'productStock' : "false"
 },
 {
  "id" :2 ,
  "productName" : "Pencil",
 "productPrice" : "200",
 "productStock" : "false"
 },
 ];


exports.getProducts = function(req,res){
    
       res.send(product);
    };

exports.addProduct = function(req,res)
{       
       var data = req.body;
       product.push(data);     
       res.send(product);
}

exports.deleteProduct = function(req,res)
{
    
    var id = parseInt(req.params.id)-1; 
    var itemdeleted = product.splice(id,1)
    if(itemdeleted===undefined)
        {
            res.send("Not Deleted");
        }
    else
      {
         ;
         res.send(product);
     }
}
       

exports.updateProduct = function(req,res)
{
    var id = parseInt(req.params.id)-1;
    var productToUpdate = product[id];  
    var data = req.body;
    
    if(productToUpdate===undefined)
        {

            res.send("Not Updated");
        }
    else
      {
          productToUpdate.productName = data.productName;
          productToUpdate.productPrice = data.productPrice;
          productToUpdate.productStock = data.productStock;

     res.send(product);
     }      
    
}
