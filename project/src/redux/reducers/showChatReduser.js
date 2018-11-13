export default function showChatHendler (state= false, action) {
    switch (action.type){
        case "SHOW_CHAT":
        return !state;
        default:
            return state;
    }

}