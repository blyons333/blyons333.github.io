import React from 'react';
import logo from '../../assets/logo.svg';
import topLeftImage from '../../assets/left-blob-red.svg';
import leftImage from '../../assets/left-blob-green.svg';
import rightImage from '../../assets/right-blob-green.svg';
import bottomImage from '../../assets/bottom-blob-pink.svg';
import './App.scss';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div>
      <span className='d-none d-md-block'>
        <span className='top-left-image'>
          <img src={topLeftImage} alt='' />
        </span>
        <span className='left-image'>
          <img src={leftImage} alt='' />
        </span>
      </span>
      <Container className={['full-height', 'homepage-container'].join(' ')}>
        <Row className='full-height'>
          <Col
            className={[
              'center-vertically',
              'right-align-text',
              'menu-column',
            ].join(' ')}
            md={{ span: '2', offset: '2', order: 1 }}
            xs={{ span: 6, order: 2 }}>
            <div>
              <Link to='/code' className='nav-item'>
                <h1>CODE</h1>
              </Link>
            </div>
            <div>
              <Link to='/design' className='nav-item'>
                <h1>DESIGN</h1>
              </Link>
            </div>
            <div>
              <Link to='/blog' className='nav-item'>
                <h1>BLOG</h1>
              </Link>
            </div>
          </Col>
          <Col
            className='center-vertically'
            md={{ span: 4, offset: 0, order: 2 }}
            xs={{ span: 8, offset: 2, order: 1 }}>
            <img src={logo} alt='Logo' />
          </Col>
          <Col
            className={['center-vertically', 'menu-column'].join(' ')}
            md={{ span: 2, order: 3 }}
            xs={{ span: 6, order: 3 }}>
            <Link to='/about' className='nav-item'>
              <h1>ABOUT</h1>
            </Link>
            <Link to='/contact' className='nav-item'>
              <h1>CONTACT</h1>
            </Link>
            <Link to='/resume' className='nav-item'>
              <h1>RESUME</h1>
            </Link>
          </Col>
        </Row>
      </Container>
      <span className='bottom-image'>
        <img src={bottomImage} alt='' />
      </span>
      <span className='d-none d-sm-none d-md-block'>
        <span className='right-image'>
          <img src={rightImage} alt='' />
        </span>
      </span>
    </div>
  );
}

export default App;
