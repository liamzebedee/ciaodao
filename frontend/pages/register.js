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
import { FormRow } from '../components/AddLink';

const Title = styled.h2`
    font-size: 24px;
`

const Style = styled.div`
margin: 2em 3em;
`

const UsernameInput = styled.div`
    width: 400px;
`

const theFounder = '0x28EF2d65f77E2F51752776c53fC341980ED746B2'

function Register({ registerAccount }) {
    let [accepted, setAccepted] = useState(false)
    let [username, setUsername] = useState('')

    return <PageTemplate>
        <Style>
            <Title>Join in</Title>
            <div>
                <p>Welcome to an experiment</p>
                <p>Guac is the first openly curated index</p>
                <p>To become part of our community, you have to have a stake</p>

                <p>It's a $5 deposit to join. This price is set by the community.</p>
                <h4>What happens if I decide to leave?</h4>
                <p>Your stake will be refunded, minus the 5% commons fee.</p>
                
                <p>
                <label style={{ cursor: 'pointer' }}>
                    <Checkbox type="checkbox" name="checkbox" value={accepted} onChange={() => setAccepted(!accepted)}/>
                    I get the idea
                </label>
                </p>

                <UsernameInput>
                <FormRow>
                    <label>Username</label>
                    <textarea rows={1} type='text' onChange={ev => setUsername(ev.target.value)} placeholder="Satoshi_Nakamoto" value={username}/>
                </FormRow>
                </UsernameInput>

                <Button disabled={!(accepted && username !== '')} onClick={() => registerAccount(username)}>Register</Button>
            </div>

        </Style>
    </PageTemplate>
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            registerAccount
        },
        dispatch
    )
}

export default connect(null, mapDispatchToProps)(Register)