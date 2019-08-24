import { connect } from "react-redux";
import Results from './Results'
import React, { useState, useEffect } from "react"

import styled from 'styled-components';

const Title = styled.h3`
    font-size: 22px;
    display: inline-block;
    background: #333;
    color: white;
    padding: .5em;
    border-radius: 5px;
    margin-bottom: 0;
`

const EntryStyle = styled.div`
    margin: 2em 3em;
`

const SmallText = styled.div`
    font-size: 11px;
    margin-bottom: 1em;
`



const RegisteredItem = ({ name, description, twitter, website, discord }) => {
    return <div>
        <h1>{name}</h1>
        <p>{description}</p>
        <div>
            <label>Twitter</label>
            {twitter}
        </div>
        <div>
            <label>Website</label>
            {website}
        </div>
        <div>
            <label>Discord</label>
            {discord}
        </div>
    </div>
}


function Entry({ load, title, results }) {
    return <EntryStyle>
        {/* <SmallText>search results for:</SmallText>
        <Title>{title}</Title>
        <Results results={results}/> */}

        <RegisteredItem {...{}}/>
        DAPP	Teaser	Description	Site	DApp URL	GitHub	Reddit	Chat	Blog	Twitter	Facebook	Android URL	iOS URL	Who?	Category	Tags	License	Platform	Status	Submitted	Last Update	Contract Address (mainnet)	Contract Address (ropsten)	Contract Address (kovan)	Contract Address (rinkeby)	POA (mainnet)	GoChain (mainnet)	xDai (mainnet)	EOS (mainnet)	Steem (mainnet)	Loom (PlasmaChain)	Loom (DAppChain)	Klaytn (mainnet)	NEO (mainnet)	Logo	Icon	Product image	Alert



        
    </EntryStyle>
}

export default Entry