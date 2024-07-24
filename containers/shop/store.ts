import reducer from '@/stores/feature/products-slice';
import { createStore } from 'redux';

const store = createStore(reducer);
export default store;