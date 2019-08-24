
// import React, { Component } from 'react';
// import {
//   Switch,
//   Route,
//   withRouter
// } from 'react-router-dom';
import Box from '3box';

import Cover from '../3box/Cover';


import React, { Component } from 'react'



const Box3Context = React.createContext({})




export class KebabChain extends Component {
  constructor(props) {
    super(props);
    this.state = {
        loggedIn: false,
      box: {},
      chatSpace: {},
      myAddress: '',
      myDid: '',
      myProfile: {},
      isAppReady: false,
      topicList: [],
      topicManager: {},
      disableLogin: false,
    };
  }

  componentDidMount() {
    const { box } = this.state;

    // if you haven't openedBox, return to login
    this.setState({ isAppReady: true });
  }

  handleLogin = async () => {
    const { history } = this.props;
    const addresses = await window.ethereum.enable();
    const myAddress = addresses[0];
    this.setState({ disableLogin: true });

    // get my box and profile
    const box = await Box.openBox(myAddress, window.ethereum, {});
    const myProfile = await Box.getProfile(myAddress);
    await new Promise((resolve, reject) => box.onSyncDone(resolve));

    // open 3chat space
    const chatSpace = await box.openSpace('3chat');
    const myDid = chatSpace.DID;

    // set all to state and continue
    const loggedIn = true
    this.setState({ chatSpace, box, myProfile, myAddress, myDid, loggedIn });
  }


  render() {
    const {
      isAppReady,
      chatSpace,
      topicManager,
      topicList,
      myProfile,
      myAddress,
      myDid,
      disableLogin,
      loggedIn
    } = this.state;

    const contextValue = {
        myProfile,
      myAddress,
      myDid,
    }

    return (
        <Box3Context.Provider value={contextValue}>
            {
             loggedIn || <Cover handleLogin={this.handleLogin} disableLogin={disableLogin} />
            }

            {this.props.children}
        </Box3Context.Provider>
    );
  }
}


export function with3Box(Child) {
    return (props) => (
        <Box3Context.Consumer>
            {(props2) => <Child {...props} {...props2} />}
        </Box3Context.Consumer>
    )
}
