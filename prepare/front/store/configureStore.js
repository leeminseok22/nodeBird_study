
import { applyMiddleware, createStore, compose } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
// import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers'
const configureStore = () => {
    const store = createStore(reducer)
    return store;
}

const wrapper = createWrapper(configureStore, {
    debug:process.env.NODE_ENV === 'development'
});

export default wrapper;