import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    form: formReducer
    // Reducers to be added here
});

export default rootReducer;
