import HomePage from '../components/HomePage'
import { connect } from 'react-redux'
import { loadNewestEntries } from '../actions/registry'
import React, { Component } from 'react';

import { with3Box } from '../components/wrapper/KebabChain'

class HomePageContainer extends Component {
    componentDidMount() {
    }

    render() {
        return <>
            <HomePage/>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer)