export default function duration(state = null, action){
    switch (action.type){
        case 'SET_DURATION':
                return action.duration;
        default:
            return state;
    }
}