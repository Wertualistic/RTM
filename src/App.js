import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './Components/Sidebar';

function App() {
  return (
   <div className='app'>
    <Router>
      <Sidebar/>
    </Router>
   </div>
  );
}

export default App;
