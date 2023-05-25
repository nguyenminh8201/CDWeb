import CategoryManager from './adcomponents/CategoryManager';
import MenuSidebar from './adcomponents/MenuSidebar';
import OrderManagerment from './adcomponents/OrderManagement';
import PageContent from './adcomponents/Statistical';
import ProductManager from './adcomponents/ProductManager';
import Statistical from './adcomponents/Statistical';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Statistical/>}></Route>,
      <Route path="/category" element={<CategoryManager/>}></Route>,
      <Route path="/product" element={<ProductManager/>}></Route>
      <Route path="/order" element={<OrderManagerment/>}></Route>
      
    </Routes>
  </BrowserRouter>
      
  );
}

export default App;
