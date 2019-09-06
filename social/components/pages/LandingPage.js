import React, { useState } from "react";
import { connect } from 'react-redux'

import styled from 'styled-components';
import PageTemplate from "./PageTemplate"

import { loadBox3, visitSpaces } from '../../actions'

const AppTitle = styled.h1`
    text-transform: lowercase;
    font-family: 'Audiowide', cursive;
    color: #333;
    align-self: center;
    flex: 1;
    padding-right: 1em;
    padding-left: 1em;
    font-size: 16px;
`
const HeaderBar = styled.div`
    padding: 2em;
    background: #eee;
    display: flex;
    flex-direction: row;
`

const Col = `
    display: flex;
    flex-direction: column;
    flex-flow: row wrap;
`
const ColL = styled.div`
    ${Col}
    justify-self: flex-start;
    flex: 1;
`
const ColR = styled.div`
    ${Col}
    justify-self: flex-end;
    justify-items: flex-end;
`

const Row = styled.div`
    display: flex;
    flex-flow: row wrap;
`

const SearchStyle = styled.div`
    flex: 1;
`

const HeroBlock = styled.div`
    text-align: center;
    font-size: 22px;
`
const Hero = styled.h1`
font-size: 62px;
font-family: "Helvetica Neue", sans-serif;
line-height: 1.2;
color: rgb(51, 51, 51);
padding-top: 0em;
margin: 3rem;
margin-bottom: 1rem;
`

const CallToAction = styled.div`
a {
    color: black;
    text-decoration: none;
    :hover {
        opacity: 0.7;
    }
}
font-size: 80%;
`

const Padding = styled.span`
    padding: 0 .5em;
`

const Blocks = styled.div`
    display: flex;
    padding: 3rem;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 0 3em;
`
const Block = styled.div`
    border: 1px solid #ddd;
    border-radius: 1px;
    padding: 1em;
    margin: 1em;
    flex: 1;
    box-shadow: 1px 1px #ddd;
    height: 250px;
    max-width: 350px;
    flex-spacing: space-around;
    font-size: 16px;
    p {
        line-height: 2;
    }

    h2 {
        line-height: 1.2;
    }
`

const FooterCtn = styled.div`
    flex: 1;
    flex-direction: column;
`

const Footer = styled.footer`
    text-align: center;
    flex: 1;
    flex-direction: column;


    a {
        color: black;
        text-decoration: none;
        :hover {
            opacity: 0.7;
        }
    }
`

const AddAnEntryCTA = styled.div`
    
    display: inline-block;
`

import Link from 'next/link'
import { bindActionCreators } from "redux";
import LoggedInUser from "../atoms/LoggedInUser";






function LandingPage({ loadBox3, data, visitSpaces }) {
    const { loadingWeb3, loadingBox3, loggedIn, myAddress } = data

    return <PageTemplate>
        <HeroBlock>
            <Hero>ciao dao.</Hero>
        </HeroBlock>

        <center>
            { 
                loggedIn 
                ? <div>
                    Logged in as <LoggedInUser/>
                    <button type="button" className="btn btn-success" onClick={visitSpaces}>Visit my spaces</button>
                </div> 
                : <button type="button" className={`btn btn-primary`} disabled={loadingBox3} onClick={loadBox3}>Connect with 3Box</button> 
            }
            
        </center>

        <br/><br/>

        <FooterCtn>
        <Footer>
            Built with 🧨 by <a href="https://twitter.com/liamzebedee">@liamzebedee</a> &middot; <a href="https://github.com/liamzebedee/retrust">github</a> &middot; <a href="https://etherscan.io/address/0x201DF8201D9d0DB92A45A21A50E4fcbB00b18839">shout some eth</a>
        </Footer>
        </FooterCtn>
        
    </PageTemplate>
}

function mapStateToProps(state, props) {
    return {
        data: state.data
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            loadBox3,
            visitSpaces
        },
        dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)