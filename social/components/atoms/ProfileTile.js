import React, { Component } from 'react';
import makeBlockie from 'ethereum-blockies-base64';
import Box from '3box';
import resolve from 'did-resolver';

import { useState, useEffect } from 'react'
import { isRegExp } from 'util';

async function getEthAddress(did) {
  const doc = await resolve(did)
  let addrs = doc.publicKey.filter(k => k.ethereumAddress)
  return addrs[0]
}


const ProfileTile = ({ profile, address, did }) => {
  // let [address2, setAddress] = useState(address)

  // if(!address) {
  //   useEffect(() => {
  //     (async function () {
  //       setAddress(await getEthAddress(did))
  //     })()
  //   }, [did])
  // }
  
  let image
  if(profile && profile.image) {
    image = `https://ipfs.infura.io/ipfs/${profile.image[0].contentUrl['/']}`
  } else {
    image = makeBlockie('did:muport:QmYqSGLGX9aV52MiGx7ofejMvKh3qsJ2ySrWCuw2XikJkA')
  }

  return  <div className="profile-tile">
      <div className="profileTile_info">
        <a href={`https://3box.io/${address}`} className="profileTile_info_link" target="_blank" rel="noopener noreferrer">
          <img
            style={{ width: 49, height: 49 }}
            src={image}
            className="profile-img"
            alt="profile"
          />
        </a>
      </div>
  
    </div>
}


export { ProfileTile }
