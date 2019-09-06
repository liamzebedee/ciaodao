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
  let [address2, setAddress] = useState(address)

  if(!address) {
    useEffect(() => {
      (async function () {
        setAddress(await getEthAddress(did))
      })()
    }, [did])
  }
  
  let image
  if(profile && profile.image) {
    image = `https://ipfs.infura.io/ipfs/${profile.image[0].contentUrl['/']}`
  } else {
    image = makeBlockie(address2);
  }

  return  <div className="profileTile">
      <div className="profileTile_info">
        <a href={`https://3box.io/${address2}`} className="profileTile_info_link" target="_blank" rel="noopener noreferrer">
          {image ? (
            <img
              src={image}
              className="profileTile_info_image profileTile_info_image-transparent"
              alt="profile"
            />
          ) : <div className="profileTile_info_image" />}
  
        </a>
      </div>
  
    </div>
}


export { ProfileTile }
