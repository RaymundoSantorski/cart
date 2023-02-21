const closeButton = document.getElementById('close_button');
const cartContainer = document.querySelector('.cart_container');
const cartPanel = document.querySelector('.cart_panel');
const cartButton = document.querySelector('.cart_button');
const cards = document.querySelectorAll('.product_card');

localStorage.setItem('cart', localStorage.getItem('cart') || JSON.stringify([]));

cards.forEach(card => {
    card.innerHTML += `
        <button data-target="${card.dataset.key}" class="button">Agregar al carrito</button>
    `;
});

const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', handleAddClick);
});

function handleAddClick(e){
    const cartItems = [...JSON.parse(localStorage.getItem('cart')), this.dataset.target];
    localStorage.setItem('cart', JSON.stringify(cartItems));
}

const showCartItems = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart'));
    let html = '';
    cartItems.forEach(item => {
        const prod = document.getElementById(item);
        console.log(prod.dataset);
    });
    cartPanel.innerHTML += html;
}

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

showCartItems();
