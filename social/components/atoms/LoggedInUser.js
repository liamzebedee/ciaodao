import makeBlockie from 'ethereum-blockies-base64';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import styled from 'styled-components'
import { ProfileTile } from './ProfileTile';

const Style = styled.div`
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;

    .media {
        align-items: center;
    }
    
    img {
        height: 60px;
        width: 60px;
        border-radius: 50%;
        margin-right: 1rem;
    }
`

const Component = ({ myAddress, myDid, myProfile }) => {
    const blockie = makeBlockie(myAddress);

    return <Style>
        <div className="media">
            <ProfileTile profile={myProfile} did={myDid} address={myAddress}/>
            {myAddress}
        </div>
        {/* <a href={`https://3box.io/${myAddress}`} className="profileTile_info_link" target="_blank" rel="noopener noreferrer">
            <img
              src={blockie}
              alt="profile"
            />
            
        </a> */}
    </Style>
}

function mapStateToProps(state, props) {
    let { myAddress, myProfile, myDid } = state.data
    return {
        myAddress,
        myProfile,
        myDid
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
        },
        dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)