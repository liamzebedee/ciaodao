import ContentLoader from "react-content-loader"
import React, { Component, useState } from "react";
import { connect } from 'react-redux'

import styled from 'styled-components';
import { useRouter } from 'next/router'


import { Modal, Button, Form, ButtonGroup } from 'react-bootstrap'
import Link from 'next/link'
import { bindActionCreators } from "redux";

import { format } from "util";
import { Router } from "next/router";

const SpaceCard = styled.div`
width: 18rem;
`
export const Space = ({ name, addr }) => {
    return <SpaceCard className="card">
      <img className="card-img-top" src={null} alt="Card image cap"/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
        <a href={`/spaces/${addr}`} className="btn btn-dark">Open group</a>
      </div>
    </SpaceCard>
}