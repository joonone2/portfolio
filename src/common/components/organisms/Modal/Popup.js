import Modal from 'react-modal';
import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
const cx = classNames.bind(styles);

Modal.setAppElement('#root');

const Popup = ({
  type = 'alert',
  openModal = false,
  onCancel,
  onConfirm,
  title,
  description,
  renderDescription,
  confirmText = '확인',
  style,
  titleStyle,
  descriptionStyle,
}) => {
  return (
    <div>
      <Modal
        className={cx('custom-modal', 'popup-modal')}
        overlayClassName={cx('custom-overlay')}
        isOpen={openModal ? true : false}
        onRequestClose={onCancel}
        contentLabel="Default Modal"
        style={{ content: style }}
      >
        {title && (
          <h2 className={cx('popup-title', 'title1BD')} style={titleStyle}>
            {title}
          </h2>
        )}
        {description && (
          <p
            className={cx('popup-description', 'bodyMD')}
            style={descriptionStyle}
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
        )}
        {renderDescription && <div className={cx('modal-description')}>{renderDescription()}</div>}
        <div className={cx('modal-button-group', type === 'confirm' && 'popup-modal-button-group')}>
          <button onClick={onConfirm} className={cx('button1BD')}>
            {confirmText}
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Popup;