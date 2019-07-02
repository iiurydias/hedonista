export default function clicked(state = null, action){
    switch (action.type){
        case 'SET_CLICKED':
                return action.clicked;
        default:
            return state;
    }
}