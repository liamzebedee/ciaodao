import ContentLoader from "react-content-loader"
import React, { Component, useState } from "react";
import { connect } from 'react-redux'

import styled from 'styled-components';
import { useRouter } from 'next/router'


import { Modal, Button, Form, ButtonGroup, CardColumns } from 'react-bootstrap'
import Link from 'next/link'
import { bindActionCreators } from "redux";
import { createSpace, loadSpaces } from '../../actions'

import { format } from "util";
import { Router } from "next/router";

import { SpaceCard } from '../atoms/SpaceCard'

import css from './spaces.less'
import { selectSpaces } from "../../selectors";

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

const Spaces = ({loading, data }) => <div>
  {
  loading 
  ? <MyLoader/>
  : <div>
    <CardColumns className={css.spaces}>
    { 
      data.map((d, i) => <SpaceCard {...d} key={i} />)
    }
    </CardColumns>
  </div>
  }
</div>


function mapStateToProps(state, props) {
  return {
      data: selectSpaces(state),
      loading: false
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

export default connect(mapStateToProps, mapDispatchToProps)(Spaces)