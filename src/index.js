import React from 'react';
import ReactDOM from 'react-dom/client';
import RouterIndex from './Router/RouterIndex';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { Store } from './Redux/Store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import './index.css';

const persistor = persistStore(Store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PersistGate persistor={persistor}>
      <Provider store={Store}>
        <RouterIndex />
      </Provider>
    </PersistGate>
  </React.StrictMode>
);

reportWebVitals();
