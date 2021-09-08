
import Index from './page';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Route path='/' exact component={Index} />
    </BrowserRouter>
      
    </>
  );
}

export default App;
