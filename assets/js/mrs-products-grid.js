// Select add to cart button by class
let cartParentClass = document.getElementsByClassName("add_to_cart_button");

for ( let i of cartParentClass ) {
    i.addEventListener("click", function(e) {
        setTimeout(() => {            
            // if product add in cart than hide add to cart and add button class to view cart
            if(e.target.classList.contains("added")){ 
                i.style.display = 'none';
                i.nextElementSibling.classList.add('wp-element-button');
                e.target.nextElementSibling.style.marginTop = "0px";
            } else {
                setTimeout(() => {
                    if(e.target.classList.contains("added")){ 
                        i.style.display = 'none';
                        i.nextElementSibling.classList.add('wp-element-button');
                        e.target.nextElementSibling.style.marginTop = "0px";
                    }else{
                        setTimeout(() => {
                            if(e.target.classList.contains("added")){ 
                                i.style.display = 'none';
                                i.nextElementSibling.classList.add('wp-element-button');
                                e.target.nextElementSibling.style.marginTop = "0px";
                            }else{
                                setTimeout(() => {
                                    if(e.target.classList.contains("added")){ 
                                        i.style.display = 'none';
                                        i.nextElementSibling.classList.add('wp-element-button');
                                        e.target.nextElementSibling.style.marginTop = "0px";
                                    }else{
                                        setTimeout(() => {
                                            if(e.target.classList.contains("added")){ 
                                                i.style.display = 'none';
                                                i.nextElementSibling.classList.add('wp-element-button');
                                                e.target.nextElementSibling.style.marginTop = "0px";
                                            }
                                        }, 500)
                                    }
                                }, 500)
                            }
                        }, 500)
                    }
                }, 500)
            }
        }, 500);
    });
}


