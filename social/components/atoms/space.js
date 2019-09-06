import ContentLoader from "react-content-loader"
import React, { Component, useState } from "react";
import { connect } from 'react-redux'

import styled from 'styled-components';
import { useRouter } from 'next/router'


import { Modal, Button, Form, ButtonGroup, Card } from 'react-bootstrap'
import Link from 'next/link'
import { bindActionCreators } from "redux";

import { format } from "util";
import { Router } from "next/router";


export const Space = ({ name, addr }) => {
    return <Card style={{ width: '300px' }}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text"><small className="text-muted">last active today &middot; 4 members</small></p>
        <a href={`/spaces/${addr}`} className="btn btn-dark">Open group</a>
      </div>
    </Card>
}