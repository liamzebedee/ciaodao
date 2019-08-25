import ContentLoader from "react-content-loader"
import React, { useState } from "react";
import { connect } from 'react-redux'

import styled from 'styled-components';
import PageTemplate from "./PageTemplate"
import { useRouter } from 'next/router'


import { Modal, Button, Form, ButtonGroup } from 'react-bootstrap'
import Link from 'next/link'
import { bindActionCreators } from "redux";
import { createSpace } from '../actions'

import { format } from "util";
import { Router } from "next/router";

const MyLoader = () => (
    <ContentLoader 
      height={160}
      width={400}
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
    >
      <circle cx="10" cy="20" r="8" /> 
      <rect x="25" y="15" rx="5" ry="5" width="220" height="10" /> 
      <circle cx="10" cy="50" r="8" /> 
      <rect x="25" y="45" rx="5" ry="5" width="220" height="10" /> 
      <circle cx="10" cy="80" r="8" /> 
      <rect x="25" y="75" rx="5" ry="5" width="220" height="10" /> 
      <circle cx="10" cy="110" r="8" /> 
      <rect x="25" y="105" rx="5" ry="5" width="220" height="10" />
    </ContentLoader>
)


const SpaceCard = styled.div`
width: 18rem;
`
const Space = ({ name, id }) => {
    return <SpaceCard className="card">
      <img className="card-img-top" src={null} alt="Card image cap"/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
        <a href={`/spaces/${id}`} className="btn btn-dark">Open group</a>
      </div>
    </SpaceCard>
}

export class Spaces extends React.Component {
    render() {
        const spaces = [
            {
                name: "Foobar",
                id: "0x"
            },
        ]
        return <div>
            <MyLoader/>
            {spaces.map((d, i) => <Space {...{d}} key={i} />)}
        </div>
    }
}


function mapStateToProps(state, props) {
  return {
      ...state.data,
      spaces: state.spaces
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
      {
      },
      dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Spaces)