// Select add to cart button by class
let cartParentClass = document.getElementsByClassName("add_to_cart_button");

for ( let i of cartParentClass ) {
    i.addEventListener("click", function(e) {
        let mrsInterval = setInterval(() => {
            if(e.target.classList.contains("added")){ 
                i.style.display = 'none';
                i.nextElementSibling.classList.add('wp-element-button');
                e.target.nextElementSibling.style.marginTop = "0px";
            }
        },);
        setTimeout(() => {
            clearInterval(mrsInterval);
        }, 4000);
    });
}


