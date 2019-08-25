

import React, { Component } from "react";
import { loadBox3 } from "../../actions";
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";



class Box3Wrapper extends Component {
    componentDidMount() {
        this.props.loadBox3()
    }

    render() {
        let { loading } = this.props
        return <div>
            {loading 
            ? this.props.children
            : '...'
            }
        </div>
    }
}


function mapStateToProps(state, props) {
    return {
        loading: state.flows.BOX3_LOADING == false
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            loadBox3
        },
        dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Box3Wrapper)