// import React from "react";
import axios from 'axios';
import { useDispatch } from "react-redux";

function AddProduct(product) {
    const dispatch = useDispatch()
    // console.log(product);

    axios
        .put("/cart/" + product._id)
        .then(updatedCart => {
            dispatch({ type: 'ADD_TO_BASKET', payload: product })
            console.log(updatedCart.data.products.cartQuantity);
        })
        .catch(err => {
            /*Do something with error, e.g. show error to user*/
        });
}
export { AddProduct }