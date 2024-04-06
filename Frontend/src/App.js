import React from "react";
import Home from "./routes/Home";
import Menu from "./routes/Menu";
import Tables from "./routes/Tables";
import Kitchen from "./routes/kitchen";
import Form from "./components/PageBody/Table/Form.js";
import Bill from "./components/PageBody/Menu/Bill.js";
import Add from "./components/PageBody/Menu/Add.js";
import AddTable from "./components/PageBody/Table/AddTable.js";
import Menu2 from "./components/PageBody/Menu/menu2.js";

import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const App=()=>{
   return (
      <>
      <Router>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/tables" element={<Tables/>}/>
      <Route path="/tables/addtable" element={<AddTable/>}/>
      <Route path="/kitchen" element={<Kitchen/>}/>
      <Route path="/form" element={<Form/>}/>
      <Route path="/menu/bill" element={<Bill/>}/>
      <Route path="/menu/add" element={<Add/>}/>
      <Route path="/menu2" element={<Menu2/>}/>
      
      
      </Routes>
    </Router>
       </>
   )
}
export default App;