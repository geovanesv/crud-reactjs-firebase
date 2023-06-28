import React, { useEffect, useState } from 'react';
import { Button, Form, Row, Col } from 'bootstrap-4-react';
import { db } from '../../services/firebaseConnection'

import { addDoc, collection, deleteDoc, getDocs, doc } from 'firebase/firestore';
import { Alert } from 'bootstrap-4-react/lib/components';
import { useNavigate } from 'react-router-dom'

const MyEndereco = () => {

    const [enderecos, setEnderecos] = useState([])
    const navigate = useNavigate()


    async function findAllEnderecos() {
        const enderecosRef = collection(db, 'enderecos')
        await getDocs(enderecosRef)
            .then((snapshot) => {
                let listaEnderecos = []
                snapshot.forEach((doc) => {
                    listaEnderecos.push({
                        id: doc.id,
                        cep: doc.data().cep,
                        endereco: doc.data().endereco,
                        estado: doc.data().estado,
                        cidade: doc.data().cidade,
                        bairro: doc.data().bairro,
                    })
                })
                setEnderecos(listaEnderecos)
            })
    }
    useEffect(() => {
        findAllEnderecos()
        //console.log(endere)
    }, [enderecos])



    //editar user
    async function handleDelete(id) {
        const docRef = doc(db, 'enderecos', id)
        await deleteDoc(docRef)
            .then(() => {
                Alert('Endereço Deletado')
            })
            .catch(() => {
                Alert('erro ao deletar')
            })
    }

    function handleEdit(idEndereco) {
        navigate('/editEndereco', { state: { id: idEndereco } })

    }


    return (
        <div className='container'>

            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <br />
                            <div class="d-flex flex-row-reverse">
                                <Button primary onClick={() => navigate('/newEndereco')}>
                                    Novo Endereço
                                </Button>
                            </div>
                            <div class="card">
                                <div class="card-header card-header-primary">
                                    <h4 class="card-title ">Endereços Cadastrados</h4>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table">
                                            <thead class=" text-primary">
                                                <tr>
                                                    <th>CEP</th>
                                                    <th>ENDEREÇO</th>
                                                    <th>Cidade</th>
                                                    <th>Estado</th>
                                                    <th>Bairro</th>
                                                    <th>AÇÕES</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                 {/* <tr>
                                                    <td>aaa</td>
                                                    <td>bbb</td>
                                                    <td>ccc</td>
                                                    <td>ddd</td>
                                                    <td>eee</td>
                                                    <td>
                                                        <button style={{ border: "none", background: "none", cursor: "pointer" }} onClick={() => handleDelete(item.id)}>
                                                            <img src="./src/assets/imagens/excluir.png" alt="delete" width="40" />
                                                        </button>
                                                        <button style={{ border: "none", background: "none", cursor: "pointer" }} onClick={() => handleEdit(item.id)}>
                                                            <img src="./src/assets/imagens/lapis (1).png" alt="delete" width="41" />
                                                        </button>
                                                    </td>
                                                </tr> */}
                                                {
                                                    enderecos.map((item) => (
                                                        <tr>
                                                            <td>{item.cep}</td>
                                                            <td>{item.endereco}</td>
                                                            <td>{item.estado}</td>
                                                            <td>{item.cidade}</td>
                                                            <td>{item.bairro}</td>
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

export default MyEndereco