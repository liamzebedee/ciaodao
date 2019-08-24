import React, { useState } from "react";
import { connect } from 'react-redux'

import styled from 'styled-components';
import PageTemplate from "./PageTemplate"


import { Modal, Button, Form, ButtonGroup } from 'react-bootstrap'
import Link from 'next/link'
import { bindActionCreators } from "redux";
import { Spaces } from "../components/spaces";


const MEMBERSHIP_TYPE_TOKEN = 'token'
const MEMBERSHIP_TYPE_INVITE = 'invite'

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

function Page({ }) {
    const [showCreateSpaceModal, setShowCreateSpaceModal] = useState(true);
    const [membershipType, setMembershipType] = useState('')


    function renderMembershipType() {
        switch(membershipType){
            case MEMBERSHIP_TYPE_TOKEN:
                return <div>
                    <small>Add ERC20 and ERC721 tokens:</small>
                    <PreTextarea><Form.Control as="textarea" rows="3" placeholder={memedAddresses} /></PreTextarea>
                </div>
            case MEMBERSHIP_TYPE_INVITE:
                return <div>
                    <small>Add Ethereum addresses:</small>
                    <PreTextarea><Form.Control as="textarea" rows="3" /></PreTextarea>
                </div>
            default:
                return null
        }
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
                        <Form.Label><i class="fas fa-layer-group"></i> Name</Form.Label>
                        <Form.Control type="text" placeholder="Indian Kebabs" />
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
                        

                        {/* Add Ethereum addresses:
                        <Form.Control as="textarea" rows="3" />
                        
                        or--

                        Membership by token
                        <Form.Control as="textarea" rows="3" /> */}
                        

                        
                    </Form.Group>
                </Form>


                


            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={() => {
                setShowCreateSpaceModal(false)
            }}>
                Cancel
            </Button>
            <Button variant="primary" onClick={() => {
                setShowCreateSpaceModal(false)
            }}>
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
        },
        dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)