import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
// import Tag from '../Tag/Tag';

function HomePage() {
  // const tags = [
  //   { value: 'express', label: 'Express', isFixed: true, color: 'pink' },
  //   { value: 'postman', label: 'Postman' },
  //   { value: 'nodejs', label: 'NodeJS' },
  //   { value: 'restapi', label: 'REST API' },
  //   { value: 'saga', label: 'Saga' },
  //   { value: 'react', label: 'React' },
  //   { value: 'mongodb', label: 'MongoDB' },
  //   { value: 'sass', label: 'Sass' },
  //   { value: 'ubuntu', label: 'Ubuntu' },
  // ];
  return (
    <>
      <div className='homePage'>
        <div className='mainHeading'>
          Learn technology, solve complex problems, <br />
          prepare for future online interviews
        </div>
        <Link to='/mentors'>
          <div className='findBottom'>
            <div className='findText'>Find Mentor</div>
          </div>
        </Link>
        <p className='subheading'>Find your mentor among 90+ professionals</p>

        <div className='tagBox'>
          {/* {tags.map((tag) => (
            <Tag value={tag.value} />
          ))} */}
          <span className='toRight'>
            <Link to='/mentors'>
              <span className='tag'>&#123; JAVA &#125;</span>
            </Link>
          </span>
          <span className='toRight'>
            <Link to='/mentors'>
              <span className='tag'>&#123; Python &#125;</span>
            </Link>
          </span>
          <span className='toRight'>
            <Link to='/mentors'>
              <span className='tag'>&#123; JavaScript &#125;</span>
            </Link>
          </span>
          <span className='toRight'>
            <Link to='/mentors'>
              <span className='tag'>&#123; React &#125;</span>
            </Link>
          </span>
          <span className='toRight'>
            <Link to='/mentors'>
              <span className='tag'>&#123; NodeJS &#125;</span>
            </Link>
          </span>
        </div>
        <div className='tagBox second'>
          <span className='toRight'>
            <Link to='/mentors'>
              <span className='tag'>&#123; Machine Learning &#125;</span>
            </Link>
          </span>
          <span className='toRight'>
            <Link to='/mentors'>
              <span className='tag'>&#123; Team Lead &#125;</span>
            </Link>
          </span>
          <span className='toRight'>
            <Link to='/mentors'>
              <span className='tag'>&#123; DevOps &#125;</span>
            </Link>
          </span>
          <span className='toRight'>
            <Link to='/mentors'>
              <span className='tag'>&#123; Algorithms &#125;</span>
            </Link>
          </span>
        </div>

        <div className='profileSection'>
          <div className='container'>
            <div className='row'>
              <div className='col3'>
                <div className='profilioImg'>
                  <Link to='/profile'>
                    <img
                      className='photo'
                      src='/img/1.png'
                      width='290'
                      height='350'
                      alt='Profile'
                    />
                  </Link>
                </div>
                <div className='portfolioTitle'>Roman Dubinkin</div>
                <div className='portfolioText'>
                  <p>Front-end Developer at Elbrus</p>
                  <p>JavaScript, React</p>
                  <Link to='/profile'>
                    <p className='moreA'>More Details</p>
                  </Link>
                </div>
              </div>

              <div className='col3'>
                <div className='profilioImg'>
                  <Link to='/profile'>
                    <img
                      className='photo'
                      src='/img/3.png'
                      width='290'
                      height='350'
                      alt='Profile'
                    />
                  </Link>
                </div>
                <div className='portfolioTitle'>Gayane Zurnachyan</div>
                <div className='portfolioText'>
                  <p>Front-end Developer at Elbrus</p>
                  <p>JavaScript, React</p>
                  <Link to='/profile'>
                    <p className='moreA'>More Details</p>
                  </Link>
                </div>
              </div>

              <div className='col3'>
                <div className='profilioImg'>
                  <Link to='/profile'>
                    <img
                      className='photo'
                      src='/img/2.png'
                      width='290'
                      height='350'
                      alt='Profile'
                    />
                  </Link>
                </div>
                <div className='portfolioTitle'>Anastasia Soktoeva</div>
                <div className='portfolioText'>
                  <p>Back-end Developer at Elbrus</p>
                  <p>JavaScript, React</p>
                  <Link to='/profile'>
                    <p className='moreA'>More Details</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='infoSection'>
          <ul className='listInfo'>
            <li>
              <img
                className='checklist'
                src='img/checklist.png'
                alt='checklist'
              />
              Create an individual program
            </li>
            <li>
              <img
                className='checklist'
                src='img/checklist.png'
                alt='checklist'
              />
              Prepare for the interview
            </li>
            <li>
              <img
                className='checklist'
                src='img/checklist.png'
                alt='checklist'
              />
              Network
            </li>
            <li>
              <img
                className='checklist'
                src='img/checklist.png'
                alt='checklist'
              />
              Choose the best materials and practices for self-study
            </li>
            <li>
              <img
                className='checklist'
                src='img/checklist.png'
                alt='checklist'
              />
              Motivate to keep up your studying pace and refrain from giving up
            </li>
          </ul>
          <div>
            <Link to='/mentors'>
              <div className='findBtn'>Find Mentor</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
