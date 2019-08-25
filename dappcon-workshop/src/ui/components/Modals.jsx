import React from 'react';

import CrossOut from '../../assets/CrossOut.svg';
import '../styles/index.scss';

export const ModalBackground = () => <div className="modal_overlay" />;

export const NewTopicModal = (props) => {
  const {
    handleAppModals,
    handleCreateTopic,
    topicName,
    handleFormChange,
    newTopicError,
  } = props;

  return (
    <div className="modal__container">
      <div className="modal">
        <button
          className="modal_closeModal"
          onClick={() => handleAppModals('NewTopicModal')}
        >
          <img src={CrossOut} alt="close" />
        </button>

        <div className="modal_form">
          <h2>What do you want to discuss?</h2>
          <input
            className="modal_form_input"
            type="text"
            placeholder="Name your topic"
            value={topicName}
            onChange={e => handleFormChange(e, 'topicName')}
          />
          {newTopicError && <p className="modal_form_error">{newTopicError}</p>}
        </div>

        <div className="modal_options">
          <p>
            Who can join this topic?
          </p>
          <div className="modal_options_menu">
            <div className="modal_options_menu_choice">
              <label for="topicOpen">
                Anyone
              </label>
              <input
                type="radio"
                name="members"
                defaultChecked
                value={false}
                onChange={e => handleFormChange(e, 'isMembersOnly')}
                id="topicOpen"
              />
            </div>

            <div className="modal_options_menu_choice">
              <label for="topicClosed">
                Members
              </label>
              <input
                type="radio"
                name="members"
                value={true}
                onChange={e => handleFormChange(e, 'isMembersOnly')}
                id="isMembersOnly"
              />
            </div>
          </div>
        </div>

        {console.log('!topicName', !topicName)}
        <button onClick={handleCreateTopic} disabled={!topicName}>
          CREATE
        </button>
      </div>
    </div>
  )
};

export const AddNewModeratorModal = (props) => {
  const {
    handleAppModals,
    handleAddThreadMod,
    handleFormChange,
    threadMod,
    threadACError,
  } = props;

  return (
    <div className="modal__container">
      <div className="modal">
        <button
          className="modal_closeModal"
          onClick={() => handleAppModals('AddNewModeratorModal')}
        >
          <img src={CrossOut} alt="close" />
        </button>

        <div className="modal_form">
          <h2>Add new moderator</h2>
          <input
            className="modal_form_input"
            type="text"
            placeholder="Paste Eth address"
            value={threadMod}
            onChange={e => handleFormChange(e, 'threadMod')}
          />
          {threadACError && <p className="modal_form_error">{threadACError}</p>}
        </div>

        <button onClick={handleAddThreadMod}>
          ADD
        </button>
      </div>
    </div>
  )
};

export const AddNewMemberModal = (props) => {
  const {
    handleAppModals,
    handleAddThreadMember,
    threadMember,
    handleFormChange,
    threadACError,
  } = props;

  return (
    <div className="modal__container">
      <div className="modal">
        <button
          className="modal_closeModal"
          onClick={() => handleAppModals('AddNewMemberModal')}
        >
          <img src={CrossOut} alt="close" />
        </button>

        <div className="modal_form">
          <h2>Add new member</h2>
          <input
            className="modal_form_input"
            type="text"
            placeholder="Paste Eth address"
            value={threadMember}
            onChange={e => handleFormChange(e, 'threadMember')}
          />
          {threadACError && <p className="modal_form_error">{threadACError}</p>}
        </div>

        <button onClick={handleAddThreadMember}>
          ADD
        </button>
      </div>
    </div>
  )
};
