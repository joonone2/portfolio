import React, { Component, useEffect, useRef, useState } from 'react';
import { useLocation, withRouter } from 'react-router-dom';

import SvgClose from 'Assets/svgs/close.svg';
import classNames from 'classnames/bind';
import experienceLists from './experience.json';
import moment from 'moment';
import numberToComma from 'Utils/numberToComma';
import styles from './ExperienceModalPage.module.scss';
import { useResponsive } from 'Utils/responsive';
import { useScroll } from 'Utils/customHooks';

const cx = classNames.bind(styles);

function ExperienceModalPage({ match, history, ...props }) {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  const location = useLocation();
  const modalRef = useRef();
  const experienceId = match.params?.experienceId;
  const [isModal, setIsModal] = useState(props?.isModal);
  const [experienceData, setExperienceData] = useState(
    experienceLists?.filter((list) => {
      return list?.id === parseInt(experienceId);
    })[0],
  );

  //   useEffect(() => {
  //     setTimeout(() => {
  //       window.scrollTo(0, 0);
  //     }, 10);
  //   }, []);

  useEffect(() => {
    if (isModal) {
      document.documentElement.style.overflow = 'hidden';
    }
    return () => {
      document.documentElement.style.overflow = '';
    };
  });

  if (isModal) {
    return (
      <div ref={modalRef} className={cx('modal-wrapper')} onClick={() => history.goBack()}>
        <div
          id={'modal-id'}
          className={cx('modal', 'experience-container')}
          onClick={(e) => e.stopPropagation()}
        >
          <span className={cx(isTablet ? 'bodyRG' : 'captionRG')}>experience</span>
          <h1 className={cx('headline1BD')}>{experienceData?.title}</h1>
          <h2 className={cx(isTablet ? 'headline2SB' : 'title1BD')}>
            {experienceData?.description}
          </h2>
          <div className={cx('info-wrapper', isTablet ? 'title1RG' : 'bodyRG')}>
            <h3>활동기간</h3>
            <div>{experienceData?.duration}</div>
          </div>
          <h3 className={cx(isTablet ? 'title1BD' : 'bodyBD')}>활동내역</h3>
          <div className={cx('detail-container', isTablet ? 'title1RG' : 'bodyRG')}>
            {experienceData?.detail?.map((data, index) => {
              return (
                <div className={cx('detail-wrapper')} key={`detail-wrapper-modal-${index}`}>
                  {data?.title && (
                    <h4 className={cx(isTablet ? 'title1RG' : 'bodyRG')}>∙ {data?.title}</h4>
                  )}
                  {data?.images?.length > 0 &&
                    (data?.images?.length === 1 ? (
                      <div className={cx('image-container')}>
                        <img src={data?.images[0]?.url} />
                        {data?.images[0]?.caption && (
                          <div
                            className={cx('image-caption', isTablet ? 'captionMD' : 'overlineMD')}
                          >
                            {data?.images[0]?.caption}
                          </div>
                        )}
                      </div>
                    ) : (
                      data?.images?.length > 1 && (
                        <div className={cx('img-slide-container')}>
                          {data?.images?.map((image, idx) => {
                            return (
                              <div
                                className={cx('image-container')}
                                key={`image-slide-modal-${idx}`}
                              >
                                <img src={image?.url} />
                                {image?.caption && (
                                  <div
                                    className={cx(
                                      'image-caption',
                                      isTablet ? 'captionMD' : 'overlineMD',
                                    )}
                                  >
                                    {image?.caption}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )
                    ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else if (!isModal) {
    return (
      <div className={cx('experience-container')}>
        <span className={cx(isTablet ? 'bodyRG' : 'captionRG')}>experience</span>
        <h1 className={cx('headline1BD')}>{experienceData?.title}</h1>
        <h2 className={cx(isTablet ? 'headline2SB' : 'title1BD')}>{experienceData?.description}</h2>
        <div className={cx('info-wrapper', isTablet ? 'title1RG' : 'bodyRG')}>
          <h3>활동기간</h3>
          <div>{experienceData?.duration}</div>
        </div>
        <h3 className={cx(isTablet ? 'title1BD' : 'bodyBD')}>활동내역</h3>
        <div className={cx('detail-container', isTablet ? 'title1RG' : 'bodyRG')}>
          {experienceData?.detail?.map((data, index) => {
            return (
              <div className={cx('detail-wrapper')} key={`detail-wrapper-${index}`}>
                {data?.title && (
                  <h4 className={cx(isTablet ? 'title1RG' : 'bodyRG')}>∙ {data?.title}</h4>
                )}
                {data?.images?.length > 0 &&
                  (data?.images?.length === 1 ? (
                    <div className={cx('image-container')}>
                      <img src={data?.images[0]?.url} />
                      {data?.images[0]?.caption && (
                        <div className={cx('image-caption', isTablet ? 'captionMD' : 'overlineMD')}>
                          {data?.images[0]?.caption}
                        </div>
                      )}
                    </div>
                  ) : (
                    data?.images?.length > 1 && (
                      <div className={cx('img-slide-container')}>
                        {data?.images?.map((image, idx) => {
                          return (
                            <div className={cx('image-container')} key={`image-slide-${index}`}>
                              <img src={image?.url} />
                              {image?.caption && (
                                <div
                                  className={cx(
                                    'image-caption',
                                    isTablet ? 'captionMD' : 'overlineMD',
                                  )}
                                >
                                  {image?.caption}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )
                  ))}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default withRouter(ExperienceModalPage);
