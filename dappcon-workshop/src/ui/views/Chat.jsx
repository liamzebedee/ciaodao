import React, { Component } from 'react';

import Topics from '../components/Topics';
import Dialogue from '../components/Dialogue';
import Members from '../components/Members';
import AppModals from './AppModals';
import '../styles/index.scss';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTopic: {},
      openTopics: {},
      threadMemberList: [],
      threadModeratorList: [],
      threadData: [],
      topicTitle: '',
      threadACError: '',
      postMsg: '',
      topicName: '',
      threadMember: '',
      threadMod: '',
      showNewTopicModal: false,
      showAddNewModeratorModal: false,
      showAddNewMemberModal: false,
      isMembersOnly: false,
    };
  }

  handleAppModals = (modalName) => {
    const modalStateName = `show${modalName}`;
    const modalState = this.state[modalStateName];
    this.setState({ [modalStateName]: !modalState });
  }

  handleViewTopic = (topic) => {
    const { openTopics } = this.state;
    const { chatSpace, topicManager } = this.props;

    // clean topic state
    this.setState({
      topicTitle: topic,
      threadData: [],
      threadMemberList: [],
      threadModeratorList: [],
    });

    // if topic fetched before, use again
    if (openTopics[topic]) {
      this.setState({ activeTopic: openTopics[topic] }, () => {
        this.updateThreadPosts();
        this.updateThreadCapabilities();
      });
      return
    }

    // fetch topic data
    topicManager.getOwner(topic, (err, owner) => {
      topicManager.getMembers(topic, async (err, members) => {
        const thread = await chatSpace.joinThread(topic, { firstModerator: owner, members });
        openTopics[topic] = thread;
        this.setState({ activeTopic: openTopics[topic] });

        thread.onUpdate(() => this.updateThreadPosts());
        thread.onNewCapabilities(() => this.updateThreadCapabilities());

        this.updateThreadPosts();
        this.updateThreadCapabilities();
      })
    })
  }

  updateThreadPosts = async () => {
    const { activeTopic } = this.state;
    this.updateThreadError();

    let threadData = [];
    const posts = await activeTopic.getPosts();
    posts.map(post => threadData.push(post))
    this.setState({ threadData });
  }

  updateThreadCapabilities = async () => {
    const { activeTopic } = this.state;

    // add thread members to state
    let threadMemberList = [];
    if (activeTopic._members) {
      const members = await activeTopic.listMembers();
      members.map(member => threadMemberList.push(member));
    };
    this.setState({ threadMemberList });

    // add thread mods to state
    let threadModeratorList = [];
    const moderators = await activeTopic.listModerators();
    moderators.map(moderator => threadModeratorList.push(moderator));
    this.setState({ threadModeratorList });
  }

  handleFormChange = (e, property) => { // for inputs in app modals
    const value = e ? e.target.value : '';
    this.setState({ [property]: value });
  }

  updateThreadError = (e = '') => {
    console.log('error', e);
    this.setState({ threadACError: e });
  }

  render() {
    const {
      showNewTopicModal,
      isMembersOnly,
      showAddNewModeratorModal,
      showAddNewMemberModal,
      topicTitle,
      threadData,
      threadMemberList,
      openTopics,
      postMsg,
      topicName,
      threadMod,
      threadMember,
      threadModeratorList,
      activeTopic,
      threadACError
    } = this.state;

    const {
      myAddress,
      myProfile,
      myDid,
      topicList,
      topicManager,
      addToTopicList
    } = this.props;

    return (
      <React.Fragment>
        <AppModals
          handleAppModals={this.handleAppModals}
          handleFormChange={this.handleFormChange}
          updateThreadCapabilities={this.updateThreadCapabilities}
          updateThreadError={this.updateThreadError}
          showNewTopicModal={showNewTopicModal}
          showAddNewModeratorModal={showAddNewModeratorModal}
          showAddNewMemberModal={showAddNewMemberModal}
          isMembersOnly={isMembersOnly}
          topicName={topicName}
          threadMod={threadMod}
          threadMember={threadMember}
          topicManager={topicManager}
          addToTopicList={addToTopicList}
          activeTopic={activeTopic}
          threadACError={threadACError}
        />

        <div className="chatPage">
          <Topics
            handleAppModals={this.handleAppModals}
            handleViewTopic={this.handleViewTopic}
            myProfile={myProfile}
            topicList={topicList}
            myAddress={myAddress}
            topicTitle={topicTitle}
          />

          <Dialogue
            handleFormChange={this.handleFormChange}
            updateThreadPosts={this.updateThreadPosts}
            updateThreadError={this.updateThreadError}
            topicTitle={topicTitle}
            threadData={threadData}
            openTopics={openTopics}
            myProfile={myProfile}
            postMsg={postMsg}
            activeTopic={activeTopic}
            myAddress={myAddress}
            myDid={myDid}
          />

          <Members
            handleAppModals={this.handleAppModals}
            activeTopic={activeTopic}
            topicTitle={topicTitle}
            threadMemberList={threadMemberList}
            threadModeratorList={threadModeratorList}
          />
        </div>
      </React.Fragment>
    );
  }
}
export default Chat;
