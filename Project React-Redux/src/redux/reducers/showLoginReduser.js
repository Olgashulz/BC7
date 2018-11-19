export default function  showLogin (state= false, action) {
    switch (action.type){
        case "SHOW_LOGIN":
            return !state
        default:
            return state
    }
}
