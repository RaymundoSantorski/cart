const closeButton = document.getElementById('close_button');
const cartContainer = document.querySelector('.cart_container');
const cartButton = document.querySelector('.cart_button');

const hideCart = () => {
    cartContainer.classList.add('hide');
}

const showCart = () => {
    cartContainer.classList.remove('hide');
}

const outClick = (e) =>{
    if(!e.target.classList.contains('cart_panel')) hideCart();
}

const handleEscape = (e) => {
    if(e.key === 'Escape') hideCart();
}

closeButton.addEventListener('click', hideCart);
cartButton.addEventListener('click', showCart);
cartContainer.addEventListener('click', outClick);
document.addEventListener('keyup', handleEscape);