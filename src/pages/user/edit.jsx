import React from 'react';
import { Button, Form, Row, Col, Card} from 'bootstrap-4-react';
import {useLocation} from 'react-router-dom'
import { useState, useEffect } from 'react';
import {doc, getDoc, updateDoc} from 'firebase/firestore'
import {db} from '../../services/firebaseConnection'
import { useNavigate } from 'react-router-dom'

const EditarUser = () =>{
    const[nome,setNome] = useState()
    const[sobrenome,setSobrenome] = useState()
    const[idade,setIdade] = useState()
    const[telefone,setTelefone] = useState()
    const[email,setEmail] = useState()

    const navigate = useNavigate()
    const location = useLocation()

    const id = location?.state?.id

    async function findOnUsers() {
        if (id !== '') {
            const usersRef = doc(db,'pessoa',id)
            await getDoc(usersRef)
            .then((user)=>{
                setNome(user.data().nome)
                setSobrenome(user.data().sobrenome)
                setEmail(user.data().email)
                setTelefone(user.data().telefone)
                setIdade(user.data().idade)
            })
            .catch((Error)=>{
                alert(`error ao buscar usuraio ${error}`)
            })
        }
        
    }
    useEffect(() =>{
        findOnUsers()
    },[])

    async function handleEditSave(e) {
        e.preventDefault()
        try{
            const docRef = doc(db,'pessoa',id)
            await updateDoc(docRef,{
                nome: nome,
                sobrenome: sobrenome,
                email: email,
                telefone: telefone,
                idade: idade
            })
            .then(() =>{
                alert('Dados Atualizados')
            })
        } catch(error){
            alert("Erro ao Editar Dados")
        }
        
    }

    return(
        <div class='container'>
                 {/* onSubmit={handleEditSave} */}
            <Form onSubmit={handleEditSave} >
                <Form.Group>
                    <Row>
                        <Col col="sm-6">
                            <label>Nome</label>
                            <Form.Input type="text" value={nome}
                            onChange={(e) => setNome(e.target.value)}  />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group>
                    <Row>
                        <Col col="sm-6">
                            <label>SobreNome</label>
                            <Form.Input type="text" value={sobrenome} 
                            onChange={(e)=> setSobrenome(e.target.value)}  />
                        </Col>
                    </Row>
                </Form.Group>
            
                <Form.Group>
                    <Row>
                        <Col col="sm-6">
                            <label>E-mail</label>
                            <Form.Input type="email" value={email} 
                            onChange={(e)=> setEmail(e.target.value)} />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group>
                    <Row>
                        <Col col="sm-6">
                            <label>Telefone</label>
                            <Form.Input type="text" value={telefone} 
                            onChange={(e) =>setTelefone(e.target.value)} />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Row>
                        <Col col="sm-6">
                            <label>Idade</label>
                            <Form.Input type="number" value={idade} 
                            onChange={(e)=> setIdade(e.target.value)}  />
                        </Col>
                    </Row>
                </Form.Group>

                <Button onClick={() => navigate(-1)} primary type="submit">Atualizar</Button>
                {/* onClick={(e) => handleEditSave(e)} */}
            </Form>
            <div className='btnCancelarEdit'>
                <Button onClick={() => navigate(-1)} secundary >Cancelar</Button>
            </div>
        </div>
    );
}

export default EditarUser