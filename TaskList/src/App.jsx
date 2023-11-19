import { BrowserRouter as Router } from 'react-router-dom';
import Public from './routes/Public';

const App = () => {
  return (
    <>
    <Router>
      <Public />
    </Router> 
    </>
  );
};

export default App;