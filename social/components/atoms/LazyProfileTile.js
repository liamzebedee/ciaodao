import React, { Component } from 'react';
import makeBlockie from 'ethereum-blockies-base64';
import Box from '3box';
import { fetchProfile } from '../../actions'

import { useState, useEffect } from 'react'
import { isRegExp } from 'util';
import { getProfile } from '../../selectors';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// let image
// if(profile && profile.image) {
// image = `https://ipfs.infura.io/ipfs/${profile.image[0].contentUrl['/']}`
// } else {
// image = makeBlockie('did:muport:QmYqSGLGX9aV52MiGx7ofejMvKh3qsJ2ySrWCuw2XikJkA')
// }

const anonProfile = '/static/anonymous.jpg'

const LazyProfileTile = ({ did, profile, fetchProfile }) => {
    if(!profile) {
        fetchProfile(did)
    }

    return  <div className="profile-tile">
        <div className="profileTile_info">
            <a href={profile ? `https://3box.io/${address}` : '#'} className="profileTile_info_link" target="_blank" rel="noopener noreferrer">
                <img
                style={{ width: 49, height: 49 }}
                src={profile ? image : anonProfile}
                className="profile-img"
                alt="profile"
                />
            </a>
        </div>
    </div>
}


function mapStateToProps(state, props) {
    let profile = getProfile(state, props.did)

    return {
        profile
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            fetchProfile
        },
        dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(LazyProfileTile)
