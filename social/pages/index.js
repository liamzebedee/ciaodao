import LandingPage from '../components/LandingPage'
import { connect } from 'react-redux'
import React, { Component } from 'react';

import { with3Box } from '../components/wrapper/KebabChain'

class Container extends Component {
    componentDidMount() {
    }

    render() {
        return <>
            <LandingPage/>
        </>
    }
}


function mapStateToProps(state, ownProps) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)