import React from 'react';
import { Navbar, Nav, Button, Dropdown, Form, Collapse } from 'bootstrap-4-react';




const Dashboard = () =>{
    return(
        <div class='Dashcontainer'>



            <div class='box'>
            <div class="btn-group" role="group" aria-label="Exemplo básico">



            <button type="button" class="btnbtnprimary">
                <a href="/user">USUÁRIO</a>
            </button>
            <button type="button" class="btnbtnprimary">
                <a href="/endereco">ENDEREÇO</a>
            </button>

            </div>
          


            <h8 style={{padding:"50px 0px 0px"}}>
            
            <br/> Sistema Crud Feito com Reactjs e Firebase
            <p>
                Instituto Federal de Educação, Ciência e tecnologia do estado do Ceará - Campus Tianguá <br />
                Curso: Ciências da Computação <br />
                Disciplina: Topicos especiais em desenvolvimento web. <br />
                Professor: Alexandre. <br />
                Equipe: Geovane, Fransoar, Willas. <br />
            </p></h8>
            </div>
        </div>
    );
}

export default Dashboard