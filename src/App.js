import Navbar from './componenets/Navbar.js'
import Cards from './componenets/Card.js'
import WorldTable from './componenets/WorldTable.js';
import './App.css';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Cards/>
     <WorldTable/> 
    </div>
  );
}

export default App;
