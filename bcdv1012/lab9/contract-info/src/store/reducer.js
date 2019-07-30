export const rootReducer = (state, action) => {
    switch(action.type) {
        case 'TRANSACTION_REQUEST': 
            return [...state, action.payload];
        default: 
            return state;
    }
}