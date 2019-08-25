import React, { Component } from "react";
import { loadWeb3 } from "../../actions";
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";



class Web3Wrapper extends Component {
    componentDidMount() {
        this.props.loadWeb3()
    }

    render() {
        return <>
            {this.props.children}
        </>
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            loadWeb3
        },
        dispatch
    )
}

export default connect(null, mapDispatchToProps)(Web3Wrapper)