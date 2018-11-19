export default function  showRegistration (state= false, action) {
    switch (action.type){
        case "SHOW_REGISTRATION":
            return !state
        default:
            return state
    }
}


