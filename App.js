import Navigations from './src/navigations';
import { store } from './store';
import { Provider } from 'react-redux';

export default function App() {
    return (
        <Provider store={store}>
            <Navigations />
        </Provider>
    );
}
