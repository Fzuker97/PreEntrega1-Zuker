
//import './App.css';
import { ItemListContainer } from './container/itemListContainer/ItemListContainer';
import { NavBar } from './NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    
     <NavBar />
    <ItemListContainer welcome={'En construccion'}/>
    </>
  );
}

export default App;
