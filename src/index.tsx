import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './Routes/App';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App  title='titulo' name='Giancarlos' />,
    document.getElementById('app'),
  );
});
