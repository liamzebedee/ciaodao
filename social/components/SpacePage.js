import React, { useState, Component } from "react";
import { connect } from 'react-redux'

import styled from 'styled-components';
import PageTemplate from "./PageTemplate"
import { useRouter } from 'next/router'

import { Modal, Button, Form, ButtonGroup, Card, ListGroup } from 'react-bootstrap'
import Link from 'next/link'
import { bindActionCreators } from "redux";
import { loadSpaces } from '../actions'
import Spaces from "../components/spaces";
import { format } from "util";
import { Router } from "next/router";
import PostThing from "./atoms/PostThing";
import Box3Wrapper from "./wrapper/Box3Wrapper";
import { box } from "../sagas";



class Page extends Component {
    state = {
        thread: null
    }

    async componentDidMount() {
        // this.props.loadSpaces()
        debugger
        let space = await box.openSpace(this.props.addr)
        let thread = await space.joinThread('postssssssssss')
        this.setState({
            thread,
        })
    }

    render() {
        const { thread } = this.state;
        return <PageTemplate className="container">
            
            {/* <ul class="nav nav-pills">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Active</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Disabled</a>
                </li>
            </ul> */}


            <h1>asdsad</h1>
            <PostThing  submitThing={async () => {
                await thread.post('hello world')
            }}/>
            
            
            <Card style={{ width: '18rem' }}>   
                <Card.Header>Featured</Card.Header>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <ListGroup variant="flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </Card>

            <Card>

                <Card.Body>This is a post.</Card.Body>
            </Card>
            
        </PageTemplate>
    }
}

function mapStateToProps(state, props) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            loadSpaces
        },
        dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)