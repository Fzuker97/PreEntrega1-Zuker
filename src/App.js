
//import './App.css';
import{BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { ItemListContainer } from './container/itemListContainer/ItemListContainer';
import { NavBar } from './NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './container/itemDetailContainer/itemDetailContainer';
import CartContainer from './container/cartContainer/CartContainer';


function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer/>} welcome={'En construccion'}/>
          <Route path='/detail/:detalleId' element={<ItemDetailContainer/>} />
          <Route path='/categoria/:categoryId' element={<ItemListContainer/>} />
          <Route path='/cart' element={<CartContainer/>} />
          <Route path='*' element={<Navigate to="/"/>} />

        </Routes>
    </BrowserRouter>
  )
}

export default App;
