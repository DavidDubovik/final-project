const initialState = {
    isModal: false,
};
export default function modal(state = initialState, action) {
    const { type } = action;

    switch (type) {
        case "OPEN_MODAL":
            return { ...state, isModal: !state.isModal };
        default:
            return state;
    }
}
