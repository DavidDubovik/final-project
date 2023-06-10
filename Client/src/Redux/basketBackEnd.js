// import React from "react";
import axios from 'axios';
import { useDispatch } from "react-redux";

function useAddProduct() {
    const dispatch = useDispatch()
    const add = async (product) => {
        dispatch({ type: 'ADD_TO_BASKET', payload: product })
        await axios
            .put("/cart/" + product._id)
            .then(updatedCart => {

                // console.log(updatedCart.data.products);
            })
            .catch(err => {
                /*Do something with error, e.g. show error to user*/
            });
    }
    return add


}

export { useAddProduct }