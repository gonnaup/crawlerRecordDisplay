import { BrowserRouter, useRoutes } from 'react-router-dom';
import { routes } from './configs/router.config';

const RawApp = () => useRoutes(routes);

const App = () => (
  <BrowserRouter>
    <RawApp />
  </BrowserRouter>
);

export default App;
