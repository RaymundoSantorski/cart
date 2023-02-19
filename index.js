const closeButton = document.getElementById('close_button');
const cartContainer = document.querySelector('.cart_container');
const cartButton = document.querySelector('.cart_button');

const hideCart = () => {
    cartContainer.classList.add('hide');
}

const showCart = () => {
    cartContainer.classList.remove('hide');
}

closeButton.addEventListener('click', hideCart);
cartButton.addEventListener('click', showCart);