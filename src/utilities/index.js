// get all card from local storage
const getAllCarts = () =>{
    const allCartFromLocalStorage = localStorage.getItem('Carts')

    if(allCartFromLocalStorage){
        const allCarts = JSON.parse(allCartFromLocalStorage);
        console.log(allCarts);
        return allCarts
    }
    else{
        return [];
    }
}



// add a cart card to local storage
const addCart = (card) => {
    // get all previously stored card from local storage
   const carts = getAllCarts();
   const isExist = carts.find(item =>{
    item.product_id == card.product_id
   })
   if(isExist) {return alert('Already Exist')}
    carts.push(card);
   localStorage.setItem('Carts', JSON.stringify(carts));

}

// remove a card from local storage
const removeCart = (id) =>{
    const carts = getAllCarts();
    const remainingCarts = carts.filter(card => card.product_id != id)
    localStorage.setItem('Carts', JSON.stringify(remainingCarts));
    alert('successfully removed')

}

// ...............................WishList...................................................
// get all wishlist card from local storage
const getAllWishList = () =>{
    const allWishCardFromLocalStorage = localStorage.getItem('WishLists')

    if(allWishCardFromLocalStorage){
        const allWishCards = JSON.parse(allWishCardFromLocalStorage);
        // console.log(allWishCards);
        return allWishCards
    }
    else{
        return [];
    }
}
// add a wishlist card to local storage
const addWishList = (card) => {
    const wishLists = getAllWishList();
   const isExist = wishLists.find(item =>{
    item.product_id == card.product_id
   })
   if(isExist) {return alert('Already Exist')}
   wishLists.push(card);
   localStorage.setItem('WishLists', JSON.stringify(wishLists));
}


// remove a card from local storage
const removeWishCards = (id) =>{
    const wishLists = getAllWishList();
    const remainingCarts = wishLists.filter(card => card.product_id != id)
    localStorage.setItem('WishLists', JSON.stringify(remainingCarts));
    // alert('successfully removed')

}


export {addCart,addWishList, getAllCarts,getAllWishList,removeCart,removeWishCards}