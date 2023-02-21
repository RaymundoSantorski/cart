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
            <button onClick="handleAddClick(${movie.id})">Agregar al carrito</button>
        </div>
        `;
    });
    products.innerHTML += html;
    if(window.location.hash === '#cart') showCart();
    initilizeCart();
}

const initilizeCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    let html = '';
    cart.forEach(item => {
        const movie = spidermanMovies.filter(movie => movie.id === item.id)[0];
        html += `
            <div class="cart_item" id="${movie.id}">
                <div class="cart_item_image">
                    <img src="${movie.img}" alt="${movie.img_alt}">
                </div>
                <span>${item.cant}</span>
                <button onClick="handleRemoveClick(${movie.id})">Eliminar del carrito</button>
            </div>
        `;
    });
    cartPanel.innerHTML = html;
}

const handleRemoveClick = (id) => {
    const cartItems = JSON.parse(localStorage.getItem('cart'));
    const filteredItems = cartItems.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(filteredItems));
    window.location.reload();
}

const handleAddClick = (id) => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if(cart.some(value => value.id === id)) return;
    const cartItems = [...cart, {id, cant: 1}];
    localStorage.setItem('cart', JSON.stringify(cartItems));
    window.location.reload();
}

const hideCart = () => {
    console.log('Aqui se cerro');
    history.replaceState({}, null, '/');
    cartContainer.classList.add('hide');
}

const showCart = () => {
    window.location.hash = 'cart';
    cartContainer.classList.remove('hide');
}

const outClick = (e) =>{
    const parentList = [...e.target.parentNode.classList];
    console.log();
    if( 
        !e.target.classList.contains('cart_panel')
        && !parentList.some(parentClass => parentClass.includes('cart_item'))
    ) hideCart();
}

const handleEscape = (e) => {
    if(e.key === 'Escape') hideCart();
}

closeButton.addEventListener('click', hideCart);
cartButton.addEventListener('click', showCart);
cartContainer.addEventListener('click', outClick);
document.addEventListener('keyup', handleEscape);
initilize();