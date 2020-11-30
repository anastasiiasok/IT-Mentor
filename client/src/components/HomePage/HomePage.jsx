import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function HomePage() {
  return (
    <>
      <div>
        <div className='mainHeading'>
          Learn technology, solve complex problems, <br />
          prepare for future online interviews
        </div>
        <div className='find-bottom'>
          <div className='find-text'>
            <Link to='/mentors'>Find Mentor</Link>
          </div>
        </div>
        <p className='subheading'>Find your mentor among 90+ professionals</p>

        <div className='tag-box'>
          <span className='tag'>
            <Link to='/mentors'>&#123; JAVA &#125;</Link>
          </span>
          <span className='tag'>
            <Link to='/mentors'>&#123; Python &#125;</Link>
          </span>
          <span className='tag'>
            <Link to='/mentors'>&#123; JavaScript &#125;</Link>
          </span>
          <span className='tag'>
            <Link to='/mentors'>&#123; React &#125;</Link>
          </span>
          <span className='tag'>
            <Link to='/mentors'>&#123; NodeJS &#125;</Link>
          </span>
        </div>
        <div className='tag-box second'>
          <span className='tag'>
            <Link to='/mentors'>&#123; Machine Learning &#125;</Link>
          </span>
          <span className='tag'>
            <Link to='/mentors'>&#123; Team Lead &#125;</Link>
          </span>
          <span className='tag'>
            <Link to='/mentors'>&#123; DevOps &#125;</Link>
          </span>
          <span className='tag'>
            <Link to='/mentors'>&#123; Algorithms &#125;</Link>
          </span>
        </div>

        <div className='profile-section'>
          <div className='container'>
            <div className='row'>
              <div className='col-3'>
                <div className='profilio-img'>
                  <Link to='/profile'>
                    <img
                      src='/img/girl.jpg'
                      width='290'
                      height='350'
                      alt='Profile'
                    />
                  </Link>
                </div>
                <div className='portfolio-title'>Anastasia Soktoeva</div>
                <div className='portfolio-text'>
                  <p>Front-end Developer at Elbrus</p>
                  <p>JavaScript, React</p>
                  <a href='#' className='more-a'>
                    More Details
                  </a>
                </div>
              </div>

              <div className='col-3'>
                <div className='profilio-img'>
                  <Link to='/profile'>
                    <img
                      src='/img/girl.jpg'
                      width='290'
                      height='350'
                      alt='Profile'
                    />
                  </Link>
                </div>
                <div className='portfolio-title'>Gayane Zurnachyan</div>
                <div className='portfolio-text'>
                  <p>Front-end Developer at Elbrus</p>
                  <p>JavaScript, React</p>
                  <a href='#' className='more-a'>
                    More Details
                  </a>
                </div>
              </div>

              <div className='col-3'>
                <div className='profilio-img'>
                  <Link to='/profile'>
                    <img
                      src='/img/man.jpg'
                      width='290'
                      height='350'
                      alt='Profile'
                    />
                  </Link>
                </div>
                <div className='portfolio-title'>Roman Dubinkin</div>
                <div className='portfolio-text'>
                  <p>Back-end Developer at Elbrus</p>
                  <p>JavaScript, React</p>
                  <a href='#' className='more-a'>
                    More Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='info-section'>
          <ul className='list-info'>
            <li>Create an individual program</li>
            <li>Prepare for the interview</li>
            <li>Network</li>
            <li>Choose the best materials and practices for self-study</li>
            <li>
              Motivate to keep up your studying pace and refrain from giving up
            </li>
          </ul>
          <div className='find-btn'>
            <Link to='/mentors'>Find Mentor</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
