import React, { useEffect, useState } from 'react';
import { Button, Form, Row, Col} from 'bootstrap-4-react';
import {db} from '../../services/firebaseConnection'

import { addDoc, collection, deleteDoc, getDocs, doc } from 'firebase/firestore';
import { Alert } from 'bootstrap-4-react/lib/components';
import {useNavigate} from 'react-router-dom'

const NewEndereco = () =>{
    const [cep, setCep] = useState()
    const [endereco, setEndereco] = useState()
    const [bairro, setBairro] = useState()
    const [cidade, setCidade] = useState()
    const [estado, setEstado] = useState()

    const navigate = useNavigate()


    async function registerEndereco(e) {
        e.preventDefault()
        try {
            const docRef = await addDoc(collection(db, "enderecos"), {
                cep: cep,
                endereco: endereco,
                estado: estado,
                cidade: cidade,
                bairro: bairro
            })
            setCep('')
            setEndereco('')
            setBairro('')
            setCidade('')
            setEstado('')
            alert('salvo no banco de dados')

        } catch (error) {

        }
    }



    return(
       <div className='container'>

            <Form onSubmit={registerEndereco}>
                <Form.Group>
                    <Row>
                        <Col col="sm-6">
                            <label>Cep</label>
                            <Form.Input type="text" value={cep}
                            onChange={(e) => setCep(e.target.value)}  />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group>
                    <Row>
                        <Col col="sm-6">
                            <label>Endereço</label>
                            <Form.Input type="text" value={endereco} 
                            onChange={(e)=> setEndereco(e.target.value)}  />
                        </Col>
                    </Row>
                </Form.Group>
               
                <Form.Group>
                    <Row>
                        <Col col="sm-6">
                            <label>Bairro</label>
                            <Form.Input type="text" value={bairro} 
                            onChange={(e)=> setBairro(e.target.value)} />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group>
                    <Row>
                        <Col col="sm-6">
                            <label>Cidade</label>
                            <Form.Input type="text" value={cidade} 
                            onChange={(e) =>setCidade(e.target.value)} />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Row>
                        <Col col="sm-6">
                            <label>Estado</label>
                            <Form.Input type="text" value={estado} 
                            onChange={(e)=> setEstado(e.target.value)}  />
                        </Col>
                    </Row>
                </Form.Group>

                <Button onClick={() => navigate(-1)} primary type="submit">Salvar</Button>
            </Form>
            <div className='btnCancelar'>
                <Button onClick={() => navigate(-1)} secundary>Cancelar</Button>
            </div>
        </div>
    );
}

export default NewEndereco