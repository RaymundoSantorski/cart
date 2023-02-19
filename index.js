const closeButton = document.getElementById('close_button');
const cartContainer = document.querySelector('.cart_container');

const hideCart = () => {
    cartContainer.classList.add('hide');
}

closeButton.addEventListener('click', hideCart);