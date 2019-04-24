import { 
    CHANGE_HEADER, 
} from './appActions'

const defaultState = {
    headerAppearance: {
        headerTitle: 'Roides Javier Cruz Lara', 
        headerSubtitle: 'MSc in Computer Science, Software Engineer, IA Researcher and Frontend Developer' ,
        headerBackground: ''
    }
}

export default function AppReducer(state = defaultState, action) {
    action = action ? action : defaultState
    switch (action.type) {
        case CHANGE_HEADER:
        return {
            ...state, 
            headerTitle:  action.headerAppearance.headerTitle, 
            headerSubtitle: action.headerAppearance.headerSubtitle,
            headerBackground: action.headerAppearanceheaderBackground
            };

        default:
        return state
    }
}