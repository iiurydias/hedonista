export default function distance(state = null, action){
    switch (action.type){
        case 'SET_DISTANCE':
            return action.distance;
        default:
            return state;
    }
}