import React from 'react';

import ProfilePicture from './ProfilePicture';
import CrossOut from '../../assets/CrossOut.svg';
import '../styles/index.scss';

const Members = (props) => {
  const {
    handleAppModals,
    threadMemberList,
    threadModeratorList,
    topicTitle,
    activeTopic,
  } = props;

  const { _firstModerator } = activeTopic;

  return (
    <section className="chatPage_members">
      <p className="chatPage_members_header">
        MEMBERS
      </p>

      <div className="chatPage_members_list">
        {threadModeratorList && threadModeratorList.map(author => (
          <div className="chatPage_members_list_tile" key={author}>
            <ProfilePicture
              did={author}
              isOwner={_firstModerator === author}
              isModerator={_firstModerator !== author}
              isTile
              isUseHovers
            />
          </div>
        ))}

        {threadMemberList && threadMemberList.map(author => (
          <div className="chatPage_members_list_tile" key={author}>
            <ProfilePicture
              did={author}
              isTile
              isUseHovers
            />
          </div>
        ))}
      </div>

      {topicTitle && (
        <div className="chatPage_members_list-add">
          <button
            className="textButton"
            onClick={() => handleAppModals('AddNewModeratorModal')}
          >
            <span>
              <img src={CrossOut} alt="close" />
            </span>
            Add mods
          </button>

          <button
            className="textButton"
            onClick={() => handleAppModals('AddNewMemberModal')}
          >
            <span>
              <img src={CrossOut} alt="close" />
            </span>
            Add members
          </button>
        </div>
      )}
    </section>
  )
};

export default Members;