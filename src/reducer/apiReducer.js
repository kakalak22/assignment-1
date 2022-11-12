import * as Actions from "../actionsTypes";

const initialState = {
    listDog: [
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {

        case Actions.SAVE_LIST_PLAYER: {
            const { data = {} } = action;
            const { listDog } = data;
            console.log(data);
            return {
                ...state,
                listDog: listDog
            }
        }

        default:
            return state;
    }
}