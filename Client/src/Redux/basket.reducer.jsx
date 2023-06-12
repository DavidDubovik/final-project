
const initialState = {
    basket: [],
};

export default function logicBasket(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {

        case "ADD_TO_BASKET":

            let filterBasket = state.basket.filter(res => payload.itemNo !== res.itemNo)
            if (filterBasket.length === state.basket.length || state.basket.length === 0) {

                return { ...state, basket: [...state.basket, payload] };
            }
            //    не потрібно {
            // const object = state.basket.find(obj => obj.itemNo === payload.itemNo)
            // if (object) {
            //     const index = state.basket.findIndex(obj => obj === payload)
            //     let sumCounter = payload.counter + object.counter
            //     let editProduct = { ...payload, counter: sumCounter }
            //     state.basket.splice(index, 1, editProduct)
            // }

            // }
            return { ...state, basket: state.basket };
        case "CLEAR_BASKET":
            const filterProduct = state.basket.filter(res => res._id !== payload)
            return { ...state, basket: filterProduct };
        //не потрібно {
        // case "EDIT_OBJECT":
        //     const object = state.basket.find(obj => obj._id === payload.id)
        //     const index = state.basket.findIndex(obj => obj._id === payload.id)
        //     let editProduct = { ...object, counter: payload.productCounter }
        //     state.basket.splice(index, 1, editProduct)

        //    }
        default:
            return state;
    }
}


