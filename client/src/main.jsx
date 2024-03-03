import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Auth0Provider
    domain="dev-68ncwyoi4owafq41.us.auth0.com"
    clientId="Dwqh1ouTTQjVgBwuvGzpxeGvfBhWAcQg"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
    </Auth0Provider>
  </BrowserRouter>
);


