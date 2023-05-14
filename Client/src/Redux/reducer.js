const initialState = {

    products: [],
    basket: [],
    isModal: false,
};
export default function reducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case "OPEN_MODAL":
            return { ...state, isModal: !state.isModal };
        case "ADD_TO_BASKET":
            // const defaultFavorite = localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')) : []
            return { ...state, basket: [...state.basket, payload] };
        case "CLEAR_BASKET": 
            return {...state, basket: []};
        case "ASYNC_LOAD":
            const productsBasket = localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')) : []
            return { ...state, basket: productsBasket };
        default:
            return state;
    }
}
export const loadProductsAsync = () => {
    return async (dispatch) => {
        dispatch({ type: 'ASYNC_LOAD' })

    }
}
