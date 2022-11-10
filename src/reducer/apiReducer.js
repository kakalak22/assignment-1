import * as Actions from "../actionsTypes";

const initialState = {
    listPlayer: [
        {
            COUNTRY_ID: 39,
            COUNTRY_NAME: "Brazil",
            FAVOURITE_KEY: "",
            FLAG_ID: 39,
            GENDER_ID: 1,
            ID: "8l36RdAF",
            IMAGE: "https://www.flashscore.com/res/image/data/0GROYajl-YREuAVcC.png",
            NAME: "Messias Junior (AC Milan)",
            PARTICIPANT_TYPE_ID: 2,
            SPORT_ID: 1,
            TITLE: "Messias Junior (AC Milan)",
        }
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {

        case Actions.SAVE_LIST_PLAYER: {
            const { data = {} } = action;
            const { listPlayer } = data;
            console.log(data);
            return {
                ...state,
                listPlayer: listPlayer
            }
        }

        default:
            return state;
    }
}