const closeButton = document.getElementById('close_button');
const cartContainer = document.querySelector('.cart_container');
const cartPanel = document.querySelector('.cart_panel');
const cartButton = document.querySelector('.cart_button');

localStorage.setItem('cart', localStorage.getItem('cart') || JSON.stringify([]));

const initilize = () => {
    console.log(spidermanMovies);
}

const handleAddClick = (e) => {
    const cartItems = [...JSON.parse(localStorage.getItem('cart')), {id: this.dataset.target, cant: 1}];
    localStorage.setItem('cart', JSON.stringify(cartItems));
}

const hideCart = () => {
    cartContainer.classList.add('hide');
}

const showCart = () => {
    cartContainer.classList.remove('hide');
    showCartItems();
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
initilize();