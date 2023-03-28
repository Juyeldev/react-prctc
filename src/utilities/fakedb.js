
const addToDB = id => {
    let shopingCart = {};
    const storCaret = localStorage.getItem('shoping-cart');
    if (storCaret) {

        shopingCart = JSON.parse(storCaret);

    }

    const quantity = shopingCart[id];

    if (quantity) {

        const newQuantity = quantity + 1;
        shopingCart[id] = newQuantity;
        // localStorage.setItem(id, newQuantity);
    }
    else {
        shopingCart[id] = 1;
        // localStorage.setItem(id, 1);

    }
    localStorage.setItem('shoping-cart', JSON.stringify(shopingCart));
}

const removeDB = (id) => {
    const storeCart = localStorage.getItem('shoping-cart');
    if (storeCart) {
        const shopingCart = JSON.parse(storeCart);
        if (id in shopingCart) {

            console.log('remove the cart', id);
        }
    }

}

export { addToDB, removeDB }