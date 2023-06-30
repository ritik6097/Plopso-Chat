import React from 'react';
import { ChatScreen } from './Chat';
import { globalStyles as styles } from './assets/styles';
import { Provider } from 'react-redux';

import { store } from './store';
const App = () => {
    return (
        <Provider store={store}>
            <ChatScreen />
        </Provider>
    );
};

export default App;