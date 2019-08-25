import React from 'react';

import { timeSince } from '../../utils/helpers';

import ProfilePicture from './ProfilePicture';
import SendIcon from '../../assets/Send.svg';
import Delete from '../../assets/Delete.png'
import '../styles/index.scss';

export const ChatPost = (props) => {
  const {
    deletePost,
    post: {
      author,
      message,
      postId,
      timestamp,
    },
    myDid,
    isModerator
  } = props;
  const isMyPost = author === myDid;

  return (
    <div key={postId} className="dialogue_post">
      <div className="dialogue_post_content">
        <div className="dialogue_post_content_profile">
          <ProfilePicture did={author} />
        </div>
        <p>{message}</p>
      </div>

      <div className="dialogue_post_context">
        {(isMyPost || isModerator) && (
          <button
            className="textButton"
            onClick={() => deletePost(postId)}
          >
            <img
              src={Delete}
              alt="Delete"
              className="dialogue_post_delete"
            />
          </button>
        )}
        <p>{timeSince(timestamp * 1000)}</p>
      </div>
    </div>
  )
}

export const ChatInput = (props) => (
  <div className="postEntry">
    <div className="postEntry_image">
      <ProfilePicture
        myProfilePicture={props.myProfile.image}
        myAddress={props.myAddress}
      />
    </div>

    <input
      name="website"
      type="text"
      className="edit__profile__value"
      value={props.postMsg}
      placeholder="Type your message here..."
      onChange={e => props.handleFormChange(e, 'postMsg')}
    />

    <div className="postEntry_image">
      <button
        onClick={props.postThread}
        disabled={!props.topicTitle}
        className="textButton"
      >
        <img src={SendIcon} alt="Send" />
      </button>
    </div>
  </div>
)