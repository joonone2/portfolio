import { Link, withRouter } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import {

  SvgCss,
  SvgDjango,
  SvgGit,
  SvgJava,
  SvgJavaScript,
  SvgMysql,
  SvgOracle,
  SvgPython,
  Svghtml5,
  Svgtensorflow
} from 'Assets/svgs';

import { Chip } from 'Components/molecules';
import classNames from 'classnames/bind';
import experienceLists from './experience.json';
import styles from './styles.module.scss';
import { useResponsive } from 'Utils/responsive';

const cx = classNames.bind(styles);
function About({ history, location }) {
  const [isModalOpen, setIsModalOpen] = useState(!!location?.state?.isModalOpen);
  const { isMobile, isTablet, isDesktop } = useResponsive();
  const languages = [
    {
      
      skills: [

        {
          text: () => {
            return (
              <>
                <SvgPython style={{ fill: '#3776AB' }} />
                Python
              </>
            );
          },
          textColor: '#1b1b1e',
          backgroundColor: '#fffcec',
        },

        {
          text: () => {
            return (
              <>
                <SvgDjango style={{ fill: '#092E20' }} />
                Django
              </>
            );
          },
          textColor: '#1b1b1e',
          backgroundColor: '#fffcec',
        },

        {
          text: () => {
            return (
              <>
                <SvgJava className={cx('java')} />
                JAVA
              </>
            );
          },
          textColor: '#1b1b1e',
          backgroundColor: '#fffcec',
        },
        
        {
          text: () => {
            return (
              <>
                <SvgJavaScript style={{ fill: '#F7DF1E' }} />
                JavaScript(ES6+)
              </>
            );
          },
          textColor: '#1b1b1e',
          backgroundColor: '#fffcec',
        },
        {
          text: () => {
            return (
              <>
                <Svghtml5 style={{ fill: '#E34F26' }} />
                HTML5
              </>
            );
          },
          textColor: '#1b1b1e',
          backgroundColor: '#fffcec',
        },
        {
          text: () => {
            return (
              <>
                <SvgCss style={{ fill: '#1572B6' }} />
                CSS3
              </>
            );
          },
          textColor: '#1b1b1e',
          backgroundColor: '#fffcec',
        },
        
        
        {
          text: () => {
            return (
              <>
                <SvgGit style={{ fill: '#F05032' }} />
                Git
              </>
            );
          },
          textColor: '#1b1b1e',
          backgroundColor: '#fffcec',
        },
        {
          text: () => {
            return (
              <>
                <SvgOracle style={{ fill: '#F80000' }} />
                Oracle / <SvgMysql style={{ fill: '#4479A1' }} />
                mysql
              </>
            );
          },
          textColor: '#1b1b1e',
          backgroundColor: '#fffcec',
        },

        {
          text: () => {
            return (
              <>
                <Svgtensorflow style={{ fill: '#F05032' }} />
                TensorFLow
              </>
            );
          },
          textColor: '#1b1b1e',
          backgroundColor: '#fffcec',
        },
        
        
      ],
    },
    
    
  ];


  useEffect(() => {
    if (isModalOpen) {
      history.replace(undefined, { isModalOpen: false });
    } else {
      window.scrollTo(0, 0);
    }
  }, [isModalOpen]);
  return (
    <div className={cx('about-container')}>
      <section className={cx('junwon-container')} id="junwon">
        <div className={cx('inner-container')}>
          <div className={cx('left-content')}>
            <img
              src={require('../../assets/images/profile_image.jpeg')}
              alt="junwon profile image"
            />
          </div>
          <div className={cx('left-content')}>
            <h1 className={cx('headline1BD')} style={{ paddingBottom: '8px' }}>
              서준원
            </h1>
            <h2 className={cx('headline3BD')} style={{ paddingBottom: '8px' }}>
              2001.10.04
            </h2>
            <div className={cx('chip-container')}>
            <a href="https://www.python.org/">
                <Chip
                  text={`python`}
                  textColor="#1b1b1e"
                  backgroundColor="#fffcec"
                  size="LG"
                  className={cx('label', isTablet ? 'captionBD' : 'overlineBD')}
                />
              </a>
              
              <a href="https://www.java.com/ko/">
                <Chip
                  text={`java`}
                  textColor="#1b1b1e"
                  backgroundColor="#fffcec"
                  size="LG"
                  className={cx('label', isTablet ? 'captionBD' : 'overlineBD')}
                />
              </a>
            </div>
            <div className={cx(isTablet ? 'title2RG' : 'bodyRG')}>
              안녕하세요. 개발과 지식의 성장을 즐기는 개발자 서준원 입니다.
              <br />
              2020년 3월 인하공업전문대학교
              컴퓨터 정보공학과에 입학하여 재학중입니다.
            </div>
          </div>
        </div>
      </section>
      <section className={cx('skill-container')} id="skill">
        <h1 className={cx('headline1BD')}>SKILLS ABILITY</h1>
        <div className={cx('ability-container', 'ability-container-skill')}>
          <h2 className={cx(isTablet ? 'headline2SB' : 'title1BD')}>Language/Framework/Library</h2>
          {languages?.map((language, index) => {
            return (
              <>
                <h3 className={cx(isTablet ? 'headline3MD' : 'title1MD')}>{language?.title}</h3>
                <div className={cx('skill-detail-container')}>
                  {language?.skills?.map((skill, idx) => {
                    return (
                      <Chip
                        text={skill?.text}
                        textColor={skill?.textColor}
                        backgroundColor={skill?.backgroundColor}
                        size="LG"
                        className={cx('label', isTablet ? 'bodyBD' : 'captionBD')}
                      />
                    );
                  })}
                </div>
              </>
            );
          })}
        </div>
        
      </section>
      <section className={cx('career-container')} id="career">
        <h1 className={cx('headline1BD')}>
          PORTFOLIO
        </h1>
        <div className={cx('job-desc-wrapper', 'naamezip-wrapper')}>
          <div >
            
            <div>
              <h2 className={cx(isTablet ? 'headline2SB' : 'title1BD')}>
                <a href="https://github.com/joonone2/SignMaster_Web" target="_blank">
                  SIGNMSATER
                </a>
                <button
                  className={cx(isTablet ? 'bodyMD' : 'captionMD')}
                  onClick={() => {
                    window.location.href = 'https://github.com/joonone2/SignMaster_Web';
                                  }}
                                >
                  더 자세히 보기
                </button>

              </h2>
              <h3 className={cx(isTablet ? 'headline3MD' : 'title1MD')}>
                2024년 3월 <br />- 2024년 6월
              </h3>
            </div>
          </div>
          <div className={cx('activicy-description', isDesktop ? 'title2RG' : 'bodyRG')}>
          <img 
                      src={require('../../assets/images/signmaster_main.png')}
                      alt="SIGNMASTER" 
                      style={{ width: '500px', margin: '15px 0', borderRadius: '8px' }}
                    />

            <h1 className={cx('headline1BD')}>
              개발 내용
            </h1> 
            <ol>
              <li className={cx(isDesktop ? 'title1BD' : isTablet ? 'title2BD' : 'bodyBD')}>
                수화 인식 데이터 준비
              </li>
              <ul>
                <li>
                  OpenCV와 MediaPipe를 이용하여 각 손가락 관절 간의 각도를 계산했습니다.
                </li>
                <li>
                  각 데이터 포인트는 왼손과 오른손의 랜드마크 좌표 및 각도 데이터로 구성된 1차원 배열입니다.
                </li>
                <li>
                  각도 데이터는 각 손의 상대거리와 함께 모델의 입력 데이터로 사용됩니다.
                </li>
                
              </ul>
              <br></br>
              <li className={cx(isDesktop ? 'title1BD' : isTablet ? 'title2BD' : 'bodyBD')}>
                수화 인식 모델 개발
              </li>
              <ul>
                <li>
                  LSTM 모델을 사용하여 데이터를 학습합니다. LSTM 레이어는 시퀀스 데이터를 처리하고, 
                  Dense 레이어는 학습된 패턴을 기반으로 손의 제스처를 분류합니다.
                </li>
                <li>
                학습된 모델을 사용하여 새로운 손의 랜드마크 데이터와 각도 데이터에 대해 제스처를 예측합니다.
                </li>
              </ul>
              <br></br>
            
              <li className={cx(isDesktop ? 'title1BD' : isTablet ? 'title2BD' : 'bodyBD')}>
                홈페이지 제작
              </li>
              <ol>
                <li>DJANGO 프레임워크를 이용하여 아래의 화면들을 구현하였습니다.</li>
                <ol>
                  <li>기능선택</li>

                  <li>배우고 싶은 수어 선택</li>
                  

                  <li>수어 배우기</li>
                  <li>닉네임 설정</li>
                  <li>수어 테스트</li>
                  <li>수어 테스트(정답 시)</li>
                </ol>
                
              </ol>

              
              

              
              
            </ol>
            <br></br><br></br>


            <h1 className={cx('headline1BD')}>
              구현 화면
            </h1>

            <section style={{ display: 'flex', justifyContent: 'center' }}>
              <ul
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)', // 2열 그리드
                  gap: '20px',
                  listStyleType: 'none',
                  padding: 0,
                  margin: 0,
                  width: '100%',
                  maxWidth: '900px',
                }}
              >
                {[
                  { src: 'signmaster_main.png', label: '기능선택' },
                  { src: 'signmaster_select.png', label: '배우고 싶은 수어 선택' },
                  { src: 'signmaster_learn.png', label: '수어 배우기' },
                  { src: 'signmaster_nickname.png', label: '닉네임 설정' },
                  { src: 'signmaster_test.png', label: '수어 테스트' },
                  { src: 'signmaster_correct.png', label: '수어 테스트(정답 시)' },
                ].map((item, index) => (
                  <li
                    key={index}
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      position: 'relative',
                    }}
                  >
                    <img
                      src={require(`../../assets/images/${item.src}`)}
                      alt={item.label}
                      style={{
                        width: '400px',
                        margin: '15px 0',
                        borderRadius: '8px',
                        objectFit: 'cover', // 이미지 비율 유지
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '0px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        color: 'black', // 텍스트 색상
                        padding: '5px 10px',
                        borderRadius: '4px',
                        fontSize: '14px', // 글자 크기
                        fontWeight: 'bold', // 강조된 텍스트
                      }}
                    >
                      {item.label}
                    </div>
                  </li>
                ))}
              </ul>
            </section>

              <br></br>  
              <br></br>  
                    

            <h1 className={cx('headline1BD')}>
              사용 기술
            </h1>
            <ul>
              {[
                {
                  title: 'Python',
                  description: '프로젝트 전반에 사용, 데이터 처리 및 모델 학습.',
                },
                {
                  title: 'OpenCV',
                  description: '실시간 영상 처리 및 손 랜드마크 추출',
                },
                {
                  title: 'TensorFlow/Keras',
                  description: 'LSTM 모델 설계 및 학습',
                },
                {
                  title: 'Django Framework',
                  description: '프로젝트 결과를 웹사이트로 구현, 사용자 인터페이스 제공',
                },
              ].map((item, index) => (
                <li key={index}>
                  <div className={cx(isDesktop ? 'title1BD' : isTablet ? 'title2BD' : 'bodyBD')}>
                    {item.title}
                  </div>
                  <ul>
                    <li>{item.description}</li>
                  </ul>
                  <br></br>
                </li>
              ))}
            </ul>

            <br></br>
            
            <hr className={cx('sub-divider')} />
          </div>
        </div>
        <hr></hr>
        <div className={cx('job-desc-wrapper', 'danble-wrapper')}>
          <div className={cx('company-icon', 'danble')}>
            <div>
              <h2 className={cx(isTablet ? 'headline2SB' : 'title1BD')}>
                <a href="https://github.com/joonone2/OFER" target="_blank">
                  OFER     
                </a>
                <br></br>
                <button
                  className={cx(isTablet ? 'bodyMD' : 'captionMD')}
                  onClick={() => {
                    window.location.href = 'https://github.com/joonone2/OFER';
                                  }}
                                >
                  더 자세히 보기
                </button>
              </h2>
              <h3 className={cx(isTablet ? 'headline3MD' : 'title1MD')}>
                2023년 08월
                <br />- 2023년 11월
              </h3>
            </div>
          </div>
          <div className={cx('activicy-description', isDesktop ? 'title2RG' : 'bodyRG')}>
          <img 
                      src={require('../../assets/images/ofer_main.png')}
                      alt="OFER" 
                      style={{ width: '500px', margin: '15px 0', borderRadius: '8px' }}
                    />


            <h1 className={cx('headline1BD')}>
              개발 내용
            </h1> 
          <ol>
            <li className={cx(isDesktop ? 'title1BD' : isTablet ? 'title2BD' : 'bodyBD')}>About OFER</li>
            <ul>
              <li>
                인스타그램과 네이버 카페와 같은 SNS에서 자주 ‘ootd’ 글로 자신의 코디를 공유하고 있습니다. 그러나 대부분의 SNS는 소통과 일상 공유에 주력하여 패션에만 집중된 공간이 부족합니다.
              </li>
              <li>
                이에 따라, 패션에 관심 있는 사람들이 코디만 공유하고 소통할 수 있는 공간을 만들고자 OFER 게시판을 기획했습니다. 이 공간에서 사용자들이 편리하게 패션 정보를 얻고 나눌 수 있습니다.
              </li>
            </ul>
            <br></br>

            <li className={cx(isDesktop ? 'title1BD' : isTablet ? 'title2BD' : 'bodyBD')}>제공 서비스</li>
            <ol>
              <li class="subtitle">공통 기능</li>
              <ul>
                <li>로그인 및 회원가입: 사용자는 계정을 생성하고 로그인하여 서비스를 이용할 수 있습니다.</li>
                <li>게시글 보기: 모든 사용자는 게시글을 읽을 수 있습니다.</li>
                
              </ul>
              <br></br>

              <li class="subtitle">회원 전용 기능</li>
              <ul>
                <li>게시글 작성: 회원은 게시글을 작성할 수 있습니다.</li>
                <li>게시글 수정 및 삭제: 작성한 게시글을 수정하거나 삭제할 수 있습니다.</li>
                <li>게시글 좋아요 및 댓글달기: 회원은 게시글에 좋아요를 표시하고 댓글을 작성할 수 있습니다.</li>
                <li>마이페이지 관리: 회원은 프로필 사진 업로드, 사용자 프로필 설정 및 수정 등을 통해 개인 정보를 관리할 수 있습니다.</li>
              </ul>
              <br></br>

              <li class="subtitle">비회원 기능</li>
              <ul>
                <li>게시글 보기: 회원가입 및 로그인을 하지 않아도 게시글을 읽을 수 있습니다. 단, 회원 전용 페이지를 열 경우 로그인 화면으로 이동됩니다.</li>
              </ul>

            </ol>
            <br></br>
            <br></br>

            <h1 className={cx('headline1BD')}>
              구현 화면
            </h1> 

            <section style={{ display: 'flex', justifyContent: 'center' }}>
              <ul
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)', // 2열 그리드
                  gap: '20px',
                  listStyleType: 'none',
                  padding: 0,
                  margin: 0,
                  width: '100%',
                  maxWidth: '900px',
                }}
              >
                {[
                  { src: 'ofer_main.png', label: '메인 페이지' },
                  { src: 'ofer_category.png', label: '카테고리별 보기' },
                  { src: 'ofer_profile.png', label: '내 프로필' },
                  { src: 'ofer_comment.png', label: '댓글 기능' },
                  { src: 'ofer_upload.png', label: '업로드' },
                  { src: 'ofer_signin.png', label: '회원가입' },
                ].map((item, index) => (
                  <li
                    key={index}
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      position: 'relative',
                    }}
                  >
                    <img
                      src={require(`../../assets/images/${item.src}`)}
                      alt={item.label}
                      style={{
                        width: '400px',
                        margin: '15px 0',
                        borderRadius: '8px',
                        objectFit: 'center', // 비율을 유지하지 않고 영역에 맞게 잘림
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // 그림자 효과 추가
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '-20px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        color: 'black', // 텍스트 색상
                        padding: '5px 10px',
                        borderRadius: '4px',
                        fontSize: '14px', // 글자 크기
                        fontWeight: 'bold', // 강조된 텍스트
                      }}
                    >
                      {item.label}
                    </div>
                  </li>
                ))}
              </ul>
            </section>




            
        
            

              

            </ol>

            <br></br>
            <br></br>

            <h1 className={cx('headline1BD')}>
              사용 기술
            </h1>
           

            <ul>
              {[
                {
                  title: 'HTML5, CSS3',
                  description: '프로젝트 전반에 사용, 데이터 처리 및 모델 학습.',
                },
                {
                  title: 'JavaScript',
                  description: '프론트엔드 동작 구현, 사용자 인터랙션 및 AJAX 요청 처리',
                },
                {
                  title: 'Django Framework',
                  description: '백엔드 개발, REST API 설계 및 데이터베이스 연동',
                },
                {
                  title: 'SQLite',
                  description: 'SQLite 데이터베이스 활용하여 데이터 저장 및 관리',
                },
              ].map((item, index) => (
                <li key={index}>
                  <div className={cx(isDesktop ? 'title1BD' : isTablet ? 'title2BD' : 'bodyBD')}>
                    {item.title}
                  </div>
                  <ul>
                    <li>{item.description}</li>
                  </ul>
                  <br></br>
                </li>
              ))}
            </ul>



            <hr className={cx('sub-divider')} />
          </div>
        </div>  
      </section>
      <section className={cx('education-container')} id="education">
        <h1 className={cx('headline1BD')}>EDUCATION</h1>
        <div className={cx('education-wrapper')}>
          <div className={cx('school', isTablet ? 'headline2SB' : 'title1BD')}>인하공업전문대학교</div>
          <div className={cx('school-info')}>
            <h4 className={cx(isTablet ? 'title2MD' : 'bodyMD')}>컴퓨터 정보공학과</h4>
            <h5 className={cx(isTablet ? 'title2RG' : 'bodyRG')}>2020년 입학 - 재학 중</h5>
          </div>
        </div>   
      </section>
      <section className={cx('certificate-container')} id="certificate">
        <h1 className={cx('headline1BD')}>CERTIFICATE</h1>
        <div className={cx('certificate-wrapper')}>
          <div className={cx('certificate', isTablet ? 'headline2SB' : 'title1BD')}>
            네트워크 관리사 (2급)
          </div>
          <div className={cx('certificate-info')}>
            <h4 className={cx(isTablet ? 'title2MD' : 'bodyMD')}>한국정보통신자격협회</h4>
            <h5 className={cx(isTablet ? 'title2RG' : 'bodyRG')}>2021년 4월 취득</h5>
          </div>
        </div>  
      </section>
      <section className={cx('experience-container')} id="experience">
        <h1 className={cx('headline1BD')}>EXPERIENCE</h1>
        <div>
          {experienceLists?.map((item, index) => {
            return (
              <Link
                key={`experience-link-${index}`}
                to={{
                  pathname: `/experience/${item?.id}`,
                  state: { modal: true },
                }}
                className={cx('experience-item-container')}
                onClick={() => {
                  history.replace(undefined, { isModalOpen: true });
                }}
              >
                <h3 className={cx(isTablet ? 'title2BD' : 'bodyBD')}>{item?.title}</h3>
                <h4 className={cx(isTablet ? 'bodyRG' : 'captionRG')}> {item?.description}</h4>
                <div className={cx('gotoButton', isTablet ? 'captionMD' : 'overlineMD')}>
                  자세히 보기 &gt;
                </div>
              </Link>
            );
          })}
        </div>
      </section>   
    </div>
  );
}
export default withRouter(About);

export const path = ['/', '/about'];
