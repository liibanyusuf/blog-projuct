import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ContextProvider } from './context/Context';


const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
   <ContextProvider>
   <App />
   </ContextProvider>
  </StrictMode>
);

