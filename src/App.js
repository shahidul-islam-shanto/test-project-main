//import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './component/details/Details';
import Header from './component/header/Header';
import Manege from './component/manege/Manege';
import NotFound from './component/notFound/NotFound';
import Review from './component/review/Review';
import Shop from './component/shop/Shop';

function App() {
  return (
    <div className="App">
       <Header></Header>
       
       <BrowserRouter>
         <Routes>
           <Route exact path='/'element={<Shop></Shop>}/>
           <Route path='/home'element={<Shop></Shop>}/>
           <Route path='/review' element={<Review></Review>}/>
           <Route path='/manege' element={<Manege></Manege>}/>
           <Route path='/product/:productKey' element={<Details></Details>}/>
           <Route path='/*' element={<NotFound></NotFound>}/>
         </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
