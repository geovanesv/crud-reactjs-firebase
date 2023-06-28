import React, { useEffect, useState } from 'react';
import { Button, Form, Row, Col} from 'bootstrap-4-react';
import {db} from '../../services/firebaseConnection'

import { addDoc, collection} from 'firebase/firestore';
import { Alert } from 'bootstrap-4-react/lib/components';
import {useNavigate} from 'react-router-dom'

const NewUsuario = () =>{
    const[nome,setNome] = useState()
    const[sobrenome,setSobrenome] = useState()
    const[idade,setIdade] = useState()
    const[telefone,setTelefone] = useState()
    const[email,setEmail] = useState()

    const navigate = useNavigate()

    async function registerUser(e) {
        e.preventDefault()
        try {
            const docRef = await addDoc(collection(db,"pessoa"),{
                nome:nome,
                sobrenome:sobrenome,
                email:email,
                telefone:telefone,
                idade:idade
            })
            setNome('')
            setSobrenome('')
            setEmail('')
            setTelefone('')
            setIdade('')
            alert('salvo no banco de dados')

        } catch (error) {
            
        }
    }
    return(
       <div className='container'>
            <Form onSubmit={registerUser}>
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

                <Button onClick={() => navigate(-1)} primary type="submit">Salvar</Button>
            </Form>
            <div className='btnCancelar'>
                <Button onClick={() => navigate(-1)} secundary >Cancelar</Button>
            </div>
        </div>
    );
}

export default NewUsuario