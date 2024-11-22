import React, { useEffect, useState } from 'react';

import { Chip } from 'Components/molecules';
import { Link } from 'react-router-dom';
import Popup from 'Components/organisms/Modal/Popup';
import SvgCopy from 'Assets/svgs/copy.svg';
import SvgGitHub from 'Assets/svgs/github.svg';
import SvgGmail from 'Assets/svgs/gmail.svg';
import classNames from 'classnames/bind';
import copy from 'clipboard-copy';
import styles from './styles.module.scss';
import { useResponsive } from 'Utils/responsive';

const cx = classNames.bind(styles);
function Contact() {
  const [isCopied, setIsCopied] = useState(false);
  const { isMobile, isTablet, isDesktop } = useResponsive();
  return (
    <div className={cx('contact-container')}>
      <section id="contact">
        <h1 className={cx('headline1BD')}>CONTACT</h1>
        <div className={cx('contact-item-container')}>
          <div>
            <a href="https://github.com/joonone2" target="_blank">
              <SvgGitHub />
            </a>
            <span className={cx(isTablet ? 'title2MD' : 'bodyMD')}>USER NAME</span>
            <button
              onClick={() => {
                copy('https://github.com/joonone2');
                setIsCopied(true);
              }}
              className={cx(isTablet ? 'headline2SB' : 'title1BD')}
            >
              <SvgCopy />
              joonone2
            </button>
          </div>
          <div>
            <a href="mailto:buzzbean15@naver.com">
              <SvgGmail />
            </a>
            <span className={cx(isTablet ? 'title2MD' : 'bodyMD')}>MAIL</span>
            <button
              onClick={() => {
                copy('buzzbean15@naver.com');
                setIsCopied(true);
              }}
              className={cx(isTablet ? 'headline2SB' : 'title1BD')}
            >
              <SvgCopy />
              buzzbean15@naver.com
            </button>
          </div>
        </div>
        {<div className={cx('resume')}>
          <h2 className={cx(isTablet ? 'headline1BD' : 'headline3BD')}> My resume is Here!!</h2>
          <Link
            className={cx(isTablet ? 'headline2SB' : 'title1BD')}
            to="/resume.pdf"
            download="서준원_이력서"
            target="_blank"
          >
            Download
          </Link>
        </div>}
      </section>
      <Popup
        openModal={isCopied}
        title={'복사되었습니다'}
        onCancel={() => setIsCopied(false)}
        onConfirm={() => setIsCopied(false)}
      />
    </div>
  );
}
export default Contact;

export const path = '/contact';