import React, { useState } from "react";
import { connect } from 'react-redux'

import styled from 'styled-components';
import PageTemplate from "./PageTemplate"


import { Modal, Button, Form, ButtonGroup } from 'react-bootstrap'
import Link from 'next/link'
import { bindActionCreators } from "redux";
import { createSpace } from '../actions'
import { Spaces } from "../components/spaces";


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

function Page({ createSpace }) {
    const [name, setName] = useState('')
    const [membershipType, setMembershipType] = useState('')
    const [addressDetails, setAddressDetails] = useState([])
    const [showCreateSpaceModal, setShowCreateSpaceModal] = useState(true);

    function renderMembershipType() {
        const onChange = (ev) => {
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

    function handleSubmit() {
        createSpace(name, membershipType, addressDetails)
    }

    return <PageTemplate className="container">
        <h1>My spaces</h1>
        <button className="btn btn-primary" onClick={() => setShowCreateSpaceModal(true)}>Create space</button>
        <Spaces/>

        <Modal show={showCreateSpaceModal} onHide={() => setShowCreateSpaceModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Create a space</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
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

            </Modal.Body>
            <Modal.Footer>
            
            <Button variant="secondary" onClick={() => {
                setShowCreateSpaceModal(false)
            }}>
                Cancel
            </Button>

            <Button variant="primary" disabled={!(name != "" && membershipType != "" && addressDetails.length > 0)} onClick={handleSubmit}>
                Submit
            </Button>
            </Modal.Footer>
        </Modal>
    </PageTemplate>
}

function mapStateToProps(state, props) {
    return {
        ...state.data
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