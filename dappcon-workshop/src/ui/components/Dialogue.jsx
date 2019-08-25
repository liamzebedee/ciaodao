
import React, { Component } from 'react';

import { ChatPost, ChatInput } from './ChatComponents';
import '../styles/index.scss';

class Dialogue extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  messagesEndRef = React.createRef();

  componentDidMount() {
    this.scrollToBottom();
    const el = document.getElementsByClassName('edit__profile__value')[0];
    el.addEventListener("keydown", this.searchEnter, false);
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  componentWillUnmount() {
    const el = document.getElementsByClassName('edit__profile__value')[0];
    el.removeEventListener("keydown", this.searchEnter, false);
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  // create thread post from chat input
  postThread = async () => {
    const { activeTopic, postMsg, updateThreadError, handleFormChange } = this.props;
    try {
      await activeTopic.post(postMsg);
      handleFormChange(null, 'postMsg');
      this.scrollToBottom();
    } catch (error) {
      updateThreadError(error);
    }
  }

  // delete your own post from a thread
  deletePost = async (postId) => {
    const { activeTopic, updateThreadPosts, updateThreadError } = this.props;
    try {
      await activeTopic.deletePost(postId);
      updateThreadPosts();
    } catch (error) {
      updateThreadError(error);
    }
  }

  searchEnter = (event) => {
    const { topicTitle } = this.props;
    if (event.keyCode === 13 && topicTitle) {
      this.postThread();
    }
  }

  render() {
    const {
      topicTitle,
      threadData,
      openTopics,
      handleFormChange,
      myAddress,
      myProfile,
      myDid,
      postMsg,
      activeTopic
    } = this.props;
    const isMembersOnly = openTopics[topicTitle] && openTopics[topicTitle]._members;
    const isModerator = activeTopic._firstModerator === myDid;

    return (
      <section className="chatPage_dialogue">
        {topicTitle && (
          <div className="chatPage_dialogue_header">
            <h3>{topicTitle}</h3>
            <p>{isMembersOnly ? 'Members only' : 'Open'}</p>
          </div>
        )}

        <div className="chatPage_dialogue_posts">
          {!!threadData.length && threadData.map(post => (
            <ChatPost
              deletePost={this.deletePost}
              post={post}
              myDid={myDid}
              isModerator={isModerator}
              key={post.postId}
            />
          ))}
          <div ref={this.messagesEndRef} />
        </div>

        <ChatInput
          postThread={this.postThread}
          handleFormChange={handleFormChange}
          myAddress={myAddress}
          myProfile={myProfile}
          postMsg={postMsg}
          topicTitle={topicTitle}
        />
      </section>
    );
  }
}

export default Dialogue;