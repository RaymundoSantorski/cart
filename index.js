const closeButton = document.getElementById('close_button');
const cartContainer = document.querySelector('.cart_container');
const cartPanel = document.querySelector('.cart_panel');
const cartButton = document.querySelector('.cart_button');
const products = document.querySelector('.products');

localStorage.setItem('cart', localStorage.getItem('cart') || JSON.stringify([]));

const initilize = () => {
    let html = '';
    spidermanMovies.forEach(movie => {
        html += `
        <div class="product_card" id="${movie.id}">
            <div class="card_image">
                <img src="${movie.img}" alt="${movie.img_alt}">
            </div>
            <div class="card_description">
                <span>
                    ${movie.description}
                </span>
            </div>
        </div>
        `;
    });
    products.innerHTML += html;
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