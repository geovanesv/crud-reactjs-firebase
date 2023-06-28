import React from 'react';
import { Navbar, Nav, Button, Dropdown, Form, Collapse } from 'bootstrap-4-react';

const MyNavbar = () =>{
    return(
        <>

        <Navbar expand="lg" dark bg="primary" mb="5">
            <Navbar.Toggler target="#navbarColor" />
            <Collapse navbar id="navbarColor">
                <Navbar.Nav mr="auto">
                    <Nav.ItemLink href="/" active>Home</Nav.ItemLink>
                    <Nav.ItemLink href="/user">Usuario</Nav.ItemLink>
                    <Nav.ItemLink href="/endereco">endereco</Nav.ItemLink>
                </Navbar.Nav>
            </Collapse>
        </Navbar>
                
                
        </>
        /*
            import React from 'react';
import { Sidbar, Nav, Button, Dropdown, Form, Collapse } from 'bootstrap-4-react';
<link href="/assets/css/material-dashboard.css?v=2.1.2" rel="stylesheet" />


const MyNavbar = () => {
    return (
        <>

            <div class="sidebar" data-color="purple" data-background-color="white" data-image="/assets/img/sidebar-1.jpg">

                <div class="logo">
                    <a href="/home" class="simple-text logo-normal">
                        Cadastro de Usuarios
                    </a>
                </div>

                <div class="sidebar-wrapper">
                    <ul class="nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="/home">
                                <i class="material-icons">dashboard</i>
                                <p>Dashboard</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/produtos/allProdutos">
                                <i class="material-icons">store</i>
                                <p>Produtos</p>
                            </a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="/fornecedores/allFornecedores">
                                <i class="material-icons">storage</i>
                                <p>Fornecedores</p>
                            </a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="/clientes/allClientes">
                                <i class="material-icons">group</i>
                                <p>Clientes</p>
                            </a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="/usuarios/allusuarios">
                                <i class="material-icons">person_add</i>
                                <p>Usuarios</p>
                            </a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="/vendas/listarVendas">
                                <i class="material-icons">thumbs_up_down</i>
                                <p>Vendas</p>
                            </a>
                        </li>

                    </ul>
                </div>
            </div>


        </>
    );
}

export default MyNavbar
        */
    );
}

export default MyNavbar