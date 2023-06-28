import React from "react";
import{ BrowserRouter, Routes, Route} from 'react-router-dom'
import MyNavbar from "./components/nav";
import Dashboard from "./pages/dashboard"

import MyUser from "./pages/user";
import EditarUser from "./pages/user/edit";
import NewUsuario from "./pages/user/newUser";

import MyEndereco from "./pages/endereco";
import NewEndereco from "./pages/endereco/newEndereco";
import EditarEndereco from "./pages/endereco/edit";


const RoutesApp = () =>{
    return(
        
        <>
            <BrowserRouter>
                <MyNavbar />
                <Routes>
                    <Route path='/' element={<Dashboard/>} />
                    <Route path='/user' element={<MyUser/>} />
                    <Route path='/editUser' element={<EditarUser/>} />
                    <Route path='/newUser' element={<NewUsuario/>} />
                    
                    <Route path='/endereco' element={<MyEndereco/>} />
                    <Route path='/newEndereco' element={<NewEndereco/>} />
                    <Route path='/editEndereco' element={<EditarEndereco/>} />

                </Routes>
            </BrowserRouter>
        </>
    )
}


export default RoutesApp