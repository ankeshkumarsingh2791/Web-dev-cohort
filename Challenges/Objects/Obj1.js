const products = 
    {
        name: "Laptop",
        price: 1000,
        discount: 10
    }
   

function check(products){
    
    if(products.hasOwnProperty('discount') && products.discount != null){
        return true;
    }
    return false
}

console.log(check(products))
