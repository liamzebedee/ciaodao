import React, { useState } from "react";
import { connect } from 'react-redux'

import styled from 'styled-components';
import PageTemplate from "./PageTemplate"
import { useRouter } from 'next/router'


import { Modal, Button, Form, ButtonGroup } from 'react-bootstrap'
import Link from 'next/link'
import { bindActionCreators } from "redux";
import { createSpace } from '../actions'
import Spaces from "../components/spaces";
import { format } from "util";
import { Router } from "next/router";


export const MEMBERSHIP_TYPE_TOKEN = 'token'
export const MEMBERSHIP_TYPE_INVITE = 'invite'

const PreTextarea = styled.div`
    textarea {
        font-family: monospace;
    }
`

const addresses = [
    '0x863df6bfa4469f3ead0be8f9f2aae51c91a907b4',
    '0xb794F5eA0ba39494cE839613fffBA74279579268'
]
const memes = [
    'OopsIKilledIt',
    'Bitconeeeeeect',
    'toThEMooN'
]
const memedAddresses = addresses.map((addr, i) => {
    const meme = memes[i]
    return addr.slice(0, addr.length - meme.length) + meme
}).join('\n')


function Page({ createSpace, form }) {
    const router = useRouter()
    

    const [showCreateSpaceModal, setShowCreateSpaceModal] = useState(false);
    const [submitted, setSubmitted] = useState(false)
    const [modalReset, setModalReset] = useState(+new Date)
    const [name, setName] = useState('')
    const [membershipType, setMembershipType] = useState('')
    const [addressDetails, setAddressDetails] = useState([])

    function handleSubmit() {
        setSubmitted(true)
        createSpace(name, membershipType, addressDetails)
    }


    function renderMembershipType() {
        let onChange = (ev) => {
            const str = ev.target.value
            const addresses = str.split('\n')
            setAddressDetails(addresses)
        }
    
        switch(membershipType){
            case MEMBERSHIP_TYPE_TOKEN:
                return <div>
                    <small>Add ERC20 and ERC721 tokens:</small>
                    <PreTextarea><Form.Control as="textarea" rows="3" placeholder={memedAddresses} onChange={onChange}/></PreTextarea>
                </div>
            case MEMBERSHIP_TYPE_INVITE:
                return <div>
                    <small>Add Ethereum addresses:</small>
                    <PreTextarea><Form.Control as="textarea" rows="3" placeholder={memedAddresses} onChange={onChange}/></PreTextarea>
                </div>
            default:
                return null
        }
    }

    let title;
    let body;
    let footer = <Modal.Footer>
        <Button variant="secondary" disabled={submitted} onClick={() => {
            setShowCreateSpaceModal(false)
        }}>
            Cancel
        </Button>
        
        <Button variant="primary" disabled={submitted || !(name != "" && membershipType != "" && addressDetails.length > 0)} onClick={handleSubmit}>
            Submit
        </Button>

    </Modal.Footer>

    if(form.step == 'success') {
        title = 'Space created!'
        body = <div>
            {/* <Button variant="secondary" onClick={() => {
                setShowCreateSpaceModal(false)
            }}>
                Back to spaces
            </Button>
             */}
            <Button variant="primary" onClick={() => {
                router.push(`/spaces/${form.space}`)
            }}>
                Go to space
            </Button>
        </div>
        footer = null
    } else {
        title = 'Create a space'
        body = <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label><i className="fas fa-layer-group"></i> Name</Form.Label>
                <Form.Control type="text" placeholder="Döner DAO" onChange={(ev) => setName(ev.target.value)}/>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label><i className='fa fa-user'/> How can people join?</Form.Label>
                
                <div>
                <ButtonGroup>
                <Button variant="outline-primary" active={membershipType == MEMBERSHIP_TYPE_TOKEN} onClick={() => {
                    setMembershipType(MEMBERSHIP_TYPE_TOKEN)
                }}>
                By token
                </Button>

                <Button variant="outline-secondary" active={membershipType == MEMBERSHIP_TYPE_INVITE} onClick={() => {
                    setMembershipType(MEMBERSHIP_TYPE_INVITE)
                }}>
                By invite
                </Button>
                </ButtonGroup>
                </div>
                
                <br/>
                {renderMembershipType(membershipType)}
                
            </Form.Group>
        </Form>
    }

    return <PageTemplate className="container">
        <h1>Spaces</h1>
        <button className="btn btn-primary" onClick={() => {
            setSubmitted(false)
            setName('')
            setMembershipType('')
            setAddressDetails([])
            setShowCreateSpaceModal(true)
        }}>Create space</button>

        <Modal 
        show={showCreateSpaceModal} 
        onHide={() => {
            setShowCreateSpaceModal(false)
            setModalReset(+new Date)
        }}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {body}
            </Modal.Body>
            {footer}

        </Modal>
        
        <h2>My spaces</h2>
        <Spaces/>

        <h2>Recommended</h2>
        <Spaces/>
        
    </PageTemplate>
}

function mapStateToProps(state, props) {
    return {
        ...state.data,
        form: state.flows['FLOW_CREATE_GROUP']
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            createSpace
        },
        dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)