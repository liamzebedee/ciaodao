import PageTemplate from '../components/PageTemplate'
import Button from '../components/Button'
import Checkbox from '../components/Checkbox'
import styled from 'styled-components';
import AddLinkContainer from '../components/AddLinkContainer';
import ExpandableAddress from '../components/ExpandableAddress'
import { useState } from 'react'
import { bindActionCreators } from '../../../../../Library/Caches/typescript/3.5/node_modules/redux';
import { registerAccount } from '../actions/users'
import { connect } from 'react-redux'
import UserSelector from "../components/atoms/UserSelector"

const Title = styled.h2`
    font-size: 24px;
`

const Style = styled.div`
    margin: 2em 3em;
    display: flex;
    flex-direction: column;
    align-items: center;
`


function Login() {
    return <PageTemplate>
        <Style>
            <Title>Login</Title>
            <div>
                <UserSelector/>
            </div>

        </Style>
    </PageTemplate>
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
        },
        dispatch
    )
}

export default connect(null, mapDispatchToProps)(Login)