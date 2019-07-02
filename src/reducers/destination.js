export default function destination(state = null, action){
    switch (action.type){
        case 'SET_DESTINATION':
                return action.destination;
        default:
            return state;
    }
}