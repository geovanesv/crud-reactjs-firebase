import React from 'react';
import { Button, Form, Row, Col, Card} from 'bootstrap-4-react';
import {useLocation} from 'react-router-dom'
import { useState, useEffect } from 'react';
import {doc, getDoc, updateDoc} from 'firebase/firestore'
import {db} from '../../services/firebaseConnection'
import { useNavigate } from 'react-router-dom'

const EditarEndereco = () =>{
    const [cep, setCep] = useState()
    const [endereco, setEndereco] = useState()
    const [bairro, setBairro] = useState()
    const [cidade, setCidade] = useState()
    const [estado, setEstado] = useState()

    const navigate = useNavigate()
    const location = useLocation()

    const id = location?.state?.id

    async function findOnEnderecos() {
        if (id !== '') {
            const enderecosRef = doc(db,'enderecos',id)
            await getDoc(enderecosRef)
            .then((enderecos)=>{
                setCep(enderecos.data().cep)
                setEndereco(enderecos.data().endereco)
                setBairro(enderecos.data().bairro)
                setCidade(enderecos.data().cidade)
                setEstado(enderecos.data().estado)
            })
            .catch((Error)=>{
                alert(`error ao buscar endereço ${error}`)
            })
        }
        
    }
    useEffect(() =>{
        findOnEnderecos()
    },[])

    async function handleEditSave(e) {
        e.preventDefault()
        try{
            const docRef = doc(db,'enderecos',id)
            await updateDoc(docRef,{
                cep: cep,
                endereco: endereco,
                bairro: bairro,
                cidade: cidade,
                estado: estado
            })
            .then(() =>{
                alert('Dados Atualizados')
            })
        } catch(error){
            alert("Erro ao Editar Dados")
        }
        
    }

    return(
        <div className='container'>
                 {/* onSubmit={handleEditSave} */}
                 <Form onSubmit={handleEditSave}>
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
                <Button onClick={() => navigate(-1)} primary type="submit">Atualizar</Button>
                {/* <Button onClick={(e) => handleEditSave(e)} primary type="submit">Atualizar</Button> */}
            </Form>
            <div className='btnCancelarEdit'>
                <Button onClick={() => navigate(-1)} secundary >Cancelar</Button>
            </div>
        </div>
    );
}

export default EditarEndereco