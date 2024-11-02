import { Link, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie-player';
import { TypeAnimation } from 'react-type-animation';
import classNames from 'classnames/bind';
import { observer } from 'mobx-react';
import scrollDownJson from 'Assets/lottie/scroll-down.json';
import style from './NavigationBar.module.scss';
import { useResponsive } from 'Utils/responsive';
import { withRouter } from 'react-router-dom';

const cx = classNames.bind(style);

function NavigationBar(props) {
  const { isTablet } = useResponsive();
  const location = useLocation();
  const pathname = location.pathname;
  const [isEnter, setIsEnter] = useState(false);

  // 내비게이션 아이템
  const index = [
    {
      id: 1,
      text: `Home`,
      to: '/',
      title: `JUNWON\nPORTFOLIO`,
      activeReg: [/^$/, /\/about/],
    },
    {
      id: 3,
      text: 'Contact',
      to: '/contact',
      title: 'CONTACT',
      activeReg: [/^\/contact/],
    },
  ];

  const [currentTitle, setCurrentTitle] = useState('');

  useEffect(() => {
    // 페이지 변경 시 애니메이션 재시작
    setIsEnter(false);
    const foundItem = index.find(item => item.to === pathname);
    if (foundItem) {
      setCurrentTitle(foundItem.title);
      setTimeout(() => {
        setIsEnter(true);
      }, 300);
    }
  }, [pathname]);

  return (
    <div className={cx('header-container')}>
      {/* 홈 및 연락처 페이지에서만 애니메이션 표시 */}
      {['/', '/contact'].includes(pathname) && (
        <div className={cx('introduce-container')}>
          <div
            className={cx(
              'content-wrapper',
              'job-wrapper',
              isTablet ? 'headline1MD' : 'title1MD',
            )}
          >
            Developer
            <div className={cx('border', isEnter ? 'active' : '')} />
          </div>
          <div className={cx('content-wrapper')}>
            {isEnter && (
              <TypeAnimation
                sequence={[currentTitle]}
                wrapper="div"
                cursor={false}
                className={cx('typing-area', 'headline1BD')}
              />
            )}
          </div>

          <Lottie
            animationData={scrollDownJson}
            play
            loop
            className={cx('lottie-wrapper')}
          />
        </div>
      )}
      <div className={cx('content-container')}>
        <div className={cx('index-container')}>
          {index.map((item) => (
            <Link
              key={item.id}
              to={item.to}
              className={cx(
                item.activeReg.some(reg => new RegExp(reg).test(pathname)) || pathname === item.to ? 'active' : '',
                item.activeReg.some(reg => new RegExp(reg).test(pathname)) || pathname === item.to ? 'title1BD' : 'title1RG',
              )}
            >
              {item.text}
            </Link>
          ))}
        </div>
        <div className={cx('children-container')}>{props.children}</div>
      </div>
    </div>
  );
}

export default withRouter(observer(NavigationBar));
