import React, { useState, Component } from "react";
import { connect } from 'react-redux'

import styled from 'styled-components';
import PageTemplate from "./PageTemplate"
import { useRouter } from 'next/router'

import { Modal, Button, Form, ButtonGroup, Card, ListGroup } from 'react-bootstrap'
import Link from 'next/link'
import { bindActionCreators } from "redux";
import { loadSpace, addUserProfile } from '../actions'
import Spaces from "../components/spaces";
import { format } from "util";
import { Router } from "next/router";
import PostThing from "./atoms/PostThing";
import Box3Wrapper from "./wrapper/Box3Wrapper";
import { box } from "../sagas";
import { ProfileTile, ProfilePicture } from "./atoms/ProfileTile";
import makeBlockie from "ethereum-blockies-base64";

import Box from '3box';


const Layout = styled.div`
width: 100%;
display: flex;
overflow: hidden;


.left {
    flex: .8;
    padding-top: 1em;
    
    max-width: 40em;
}
.right {
    flex: 0 .2;
    padding-top: 1em;
    padding-right: 2em;
    
}
.menuitems .fas {
    width: 20px;
    text-align: center;
}


 img {
    height: 60px;
    width: 60px;
    border-radius: 50%;
    margin-right: 1em;
}
`

const SpacePage = styled.div`
padding-top: 3em;
padding-left: 2em;

header {
    padding-bottom: 2em;
    margin-top: -1em;
}
`


const TEMPORARY_MODERATOR = '0x1cdad033df958291390ba7265be81b84cb6bfcfb'


const Menu = () => {
    
}

class Page extends Component {
    state = {
        thread: null,
        posts: null,
        postThingKey: 0,
        view: 0
    }

    async componentDidMount() {
        const { addr } = this.props
        
        // open 3chat space
        
        const space = await box.openSpace(addr)

        let myDid = space.DID;

        const thread = await space.joinThread('posts', { 
            members: false,
            firstModerator: TEMPORARY_MODERATOR
        })

        this.setState({
            myDid,
            space,
            thread,
        })

        const posts = await thread.getPosts()

        this.loadPosts(posts)

        this.setState({
            posts
        })

        thread.onUpdate(async res => {
            const posts = await thread.getPosts()
            this.setState({
                posts
            })    
        })
    }

    loadPosts = (posts) => {
        const { profiles } = this.props
        const newUsers = Array.from(new Set(posts.map(post => post.author).filter(did => !profiles[did])))

        newUsers.map(did => {
            Box.getProfile(did).then(profile => {
                this.props.addUserProfile(did, profile)
            })
        })
    }

    render() {
        const { space, thread, posts } = this.state
        if(!space) return '...'

        const name = space && space.name || 'unnamed'
        const { view, postThingKey } = this.state

        const views = {
            home: 0,
            members: 1,
            about: 2
        }

        let content
        switch(view) {
            case views.home:
                content = <div>
                    <PostThing key={postThingKey} submitThing={async (message) => {
                        try { 
                            await thread.post(message) 
                            this.setState({ postThingKey: postThingKey + 1 })
                        }
                        catch(ex) {
                            console.error(ex)
                        }
                    }}/>
                    
                    <br/>
                    <br/>

                    { posts
                    ? posts.map(post => <Post {...post} profile={this.props.profiles[post.author]}/>)
                    : null }
                </div>
                break
            case views.members:
                break;
            case views.about:
                content = <div>
                    This space exists at {this.props.addr}.
                </div>
                break;
        }

        return <PageTemplate className="container">
            <SpacePage>

            <header>
                <a href="/spaces">{`<<`} Back to spaces</a>
            </header>
            
            <h1>{name}</h1>            
            
            <Layout>
                <div className='right'>
                    <Card>
                        <ListGroup style={{ width: '18rem' }} variant="flush" className='menuitems'>
                            <ListGroup.Item action onClick={() => this.setState({ view: views.home })} active={view == views.home}>
                                <i className="fas fa-home"></i>  Home
                            </ListGroup.Item>

                            <ListGroup.Item action onClick={() => this.setState({ view: views.members })}active={view == views.members}>
                                <i className="fas fa-user"></i>  Members
                            </ListGroup.Item>

                            <ListGroup.Item action onClick={() => this.setState({ view: views.about })}active={view == views.about}>
                                <i className="fas fa-info"></i>  About
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>

                <div className='left'>
                    {content}
                </div>
            
            </Layout>
            </SpacePage>
            
        </PageTemplate>
    }
}

const Post = ({ timestamp, message, postId, author, profile }) => {
    return <div key={postId} className="media">
        <ProfileTile profile={profile} did={author}/>

        <div className="media-body">
            <h5 className="mt-0">{(profile && profile.name) || author}</h5>
            {message}
        </div>
    </div>
}


function mapStateToProps(state, props) {
    return {
        space: state.spaces.data[props.addr],
        profiles: state.spaces.profiles
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            loadSpace,
            addUserProfile
        },
        dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)