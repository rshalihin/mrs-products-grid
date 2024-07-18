// Select add to cart button by class
let cartParentClass = document.getElementsByClassName("mrs-product-buy-btn-cart");

for ( let i of cartParentClass ) {
    let cartChildClass = i.querySelector(".add_to_cart_button");
    if ( cartChildClass ) {
        cartChildClass.addEventListener("click", function(e) {
            let mrsInterval = setInterval( () => {
                if ( e.target.classList.contains("added")) {
                    cartChildClass.style.display = 'none';
                    cartChildClass.nextElementSibling.classList.add('wp-element-button');
                }
            })
            setTimeout(() => {
                clearInterval(mrsInterval);
            }, 4500);
        })
    }
        
   
}


