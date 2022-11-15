//Importação dos estilos
import './index.scss';

//Importação React
import React from 'react';
import ReactDOM from 'react-dom/client';

//Importação do component
import App from './pages/App';

//Principal variável que vai renderizar toda a aplicação
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

//Chama o método render, portanto tudo que estiver dentro será renderizado na página
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
