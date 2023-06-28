import React, { useEffect, useState } from 'react';
import { Button } from 'bootstrap-4-react';
import { db } from '../../services/firebaseConnection'

import { collection, deleteDoc, getDocs, doc } from 'firebase/firestore';
import { Alert } from 'bootstrap-4-react/lib/components';
import { useNavigate } from 'react-router-dom'


const MyUser = () =>{
    const[nome,setNome] = useState()
    const[sobrenome,setSobrenome] = useState()
    const[idade,setIdade] = useState()
    const[telefone,setTelefone] = useState()
    const[email,setEmail] = useState()
    const[users, setUsers] = useState([])

    const navigate = useNavigate()

    
async function findAllUsers() {
    const usersRef = collection(db,'pessoa')
    await getDocs(usersRef)
    .then((snapshot)=>{
        let listaUsers = []
        snapshot.forEach((doc)=>{
            listaUsers.push({
                id: doc.id,
                nome: doc.data().nome,
                sobrenome: doc.data().sobrenome,
                email: doc.data().email,
                telefone: doc.data().telefone,
                idade: doc.data().idade,
            })
        })
        setUsers(listaUsers)
    })
}
    useEffect(()=>{
        findAllUsers()
        //console.log(users)
    }, [users])



    //editar user
    async function handleDelete(id) {
        const docRef = doc(db,'pessoa',id)
        await deleteDoc(docRef)
        .then(() => {
            Alert('Usuario Deletado')
        })
        .catch(() => {
            Alert('erro ao deletar')
        })
    }

    function handleEdit(idUser) {
        navigate('/editUser',{state: { id: idUser }})
        
    }


    return (
        <div className='container'>

            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <br />
                            <div class="d-flex flex-row-reverse">
                            <Button  onClick={() => navigate('/newUser')} primary >
                                Novo usuario
                            </Button>
                            </div>
                            <div class="card">
                                <div class="card-header card-header-primary">
                                    <h4 class="card-title ">Usuarios Cadastrados</h4>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table">
                                            <thead class=" text-primary">
                                                <tr>
                                                    <th>NOME</th>
                                                    <th>SOBRENOME</th>
                                                    <th>EMAIL</th>
                                                    <th>TELEFONE</th>
                                                    <th>IDADE</th>
                                                    <th>AÇÕES</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    users.map((item) => (
                                                        <tr>
                                                            <td>{item.nome}</td>
                                                            <td>{item.sobrenome}</td>
                                                            <td>{item.email}</td>
                                                            <td>{item.telefone}</td>
                                                            <td>{item.idade}</td>
                                                            <td>
                                                            <button style={{ border: "none", background: "none", cursor: "pointer" }} onClick={() => handleDelete(item.id)}>
                                                                    <img src="./src/assets/imagens/excluir.png" alt="delete" width="40" />
                                                                </button>
                                                                <button style={{ border: "none", background: "none", cursor: "pointer" }} onClick={() => handleEdit(item.id)}>
                                                                    <img src="./src/assets/imagens/lapis (1).png" alt="delete" width="41" />
                                                                </button>
                                                            </td>
                                                        </tr>

                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default MyUser



//     return(
//        <div className='container'>

            
            
//             <div className="container-table">
//                 <br />
//                 <h1>Lista de Usuarios</h1>
//                 <Button onClick={()=> navigate('/newUser')}>Novo usuario</Button>
//                 <ol>
//                     {
//                         users.map((item)=>(
//                             <li key={item.id}><b>Nome:</b>  {item.nome} -
//                                <b>Sobrenome: </b>{item.sobrenome} -
//                                <b>Email: </b>{item.email} -
//                                 <b>Telefone</b>{item.telefone} -
//                                 <b>Idade: </b>{item.idade} -
//                                 <button onClick={()=> handleDelete(item.id)}>
//                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
//                                         <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
//                                         <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
//                                     </svg>
//                                 </button>
//                                 <button onClick={()=> handleEdit(item.id)}>
//                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
//                                         <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
//                                         <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
//                                     </svg>
//                                 </button>

//                             </li>
//                         ))
//                     }
//                 </ol>

//             </div>
//        </div>
//     );
// }

// export default MyUser