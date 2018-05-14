import { createStore } from 'redux';
import rootReducer from '../reducers';

const nextRootReducer = require('../reducers/index');

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState);

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
