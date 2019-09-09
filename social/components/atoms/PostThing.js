
import React, { useState } from "react";
import styled from 'styled-components';
import { Form, Button } from "react-bootstrap";
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

const PostThingForm = styled.div`
`


const PostThing = ({ submitThing }) => {
    const [text, setText] = useState('')
    const [submitted, setSubmitted] = useState(false)

    return <div>
        <PostThingForm>
            <Form.Control as="textarea" rows="3" value={text} onChange={ev => setText(ev.target.value)}/>
            
            <Button onClick={async () => {
                setSubmitted(true)
                submitThing(text)
            }} disabled={submitted}>👋 ciao</Button>
        </PostThingForm>
    </div>
}

function mapStateToProps(state, props) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
        },
        dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(PostThing)