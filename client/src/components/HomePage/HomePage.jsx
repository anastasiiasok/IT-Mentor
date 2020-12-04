import React from 'react';
import { Link } from 'react-router-dom';
import  styles from './Home.module.css';
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
      <div className={styles.homePage}>
        <div className={styles.mainHeading}>
          Learn technology, solve complex problems, <br />
          prepare for future online interviews
        </div>
        <Link to='/mentors'>
          <div className={styles.findBottom}>
            <div className={styles.findText}>Find Mentor</div>
          </div>
        </Link>
        <p className={styles.subheading}>Find your mentor among 90+ professionals</p>

        <div className={styles.tagBox}>
          {/* {tags.map((tag) => (
            <Tag value={tag.value} />
          ))} */}
          <span className={styles.toRight}>
            <Link to='/mentors'>
              <span className={styles.tag}>&#123; JAVA &#125;</span>
            </Link>
          </span>
          <span className={styles.toRight}>
            <Link to='/mentors'>
              <span className={styles.tag}>&#123; Python &#125;</span>
            </Link>
          </span>
          <span className={styles.toRight}>
            <Link to='/mentors'>
              <span className={styles.tag}>&#123; JavaScript &#125;</span>
            </Link>
          </span>
          <span className={styles.toRight}>
            <Link to='/mentors'>
              <span className={styles.tag}>&#123; React &#125;</span>
            </Link>
          </span>
          <span className={styles.toRight}>
            <Link to='/mentors'>
              <span className={styles.tag}>&#123; NodeJS &#125;</span>
            </Link>
          </span>
        </div>
        <div className={styles.tagBox_second}>
          <span className={styles.toRight}>
            <Link to='/mentors'>
              <span className={styles.tag}>&#123; Machine Learning &#125;</span>
            </Link>
          </span>
          <span className={styles.toRight}>
            <Link to='/mentors'>
              <span className={styles.tag}>&#123; Team Lead &#125;</span>
            </Link>
          </span>
          <span className={styles.toRight}>
            <Link to='/mentors'>
              <span className={styles.tag}>&#123; DevOps &#125;</span>
            </Link>
          </span>
          <span className={styles.toRight}>
            <Link to='/mentors'>
              <span className={styles.tag}>&#123; Algorithms &#125;</span>
            </Link>
          </span>
        </div>

        <div className={styles.profileSection}>
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={styles.col3}>
                <div className={styles.profilioImg}>
                  <Link to='/profile'>
                    <img
                      className={styles.photo}
                      src='/img/1.png'
                      width='290'
                      height='350'
                      alt='Profile'
                    />
                  </Link>
                </div>
                <div className={styles.portfolioTitle}>Roman Dubinkin</div>
                <div className={styles.portfolioText}>
                  <p>Front-end Developer at Elbrus</p>
                  <p>JavaScript, React</p>
                  <Link to='/profile'>
                    <p className={styles.moreA}>More Details</p>
                  </Link>
                </div>
              </div>

              <div className={styles.col3}>
                <div className={styles.profilioImg}>
                  <Link to='/profile'>
                    <img
                      className={styles.photo}
                      src='/img/3.png'
                      width='290'
                      height='350'
                      alt='Profile'
                    />
                  </Link>
                </div>
                <div className={styles.portfolioTitle}>Gayane Zurnachyan</div>
                <div className={styles.portfolioText}>
                  <p>Front-end Developer at Elbrus</p>
                  <p>JavaScript, React</p>
                  <Link to='/profile'>
                    <p className={styles.moreA}>More Details</p>
                  </Link>
                </div>
              </div>

              <div className={styles.col3}>
                <div className={styles.profilioImg}>
                  <Link to='/profile'>
                    <img
                      className={styles.photo}
                      src='/img/2.png'
                      width='290'
                      height='350'
                      alt='Profile'
                    />
                  </Link>
                </div>
                <div className={styles.portfolioTitle}>Anastasia Soktoeva</div>
                <div className={styles.portfolioText}>
                  <p>Back-end Developer at Elbrus</p>
                  <p>JavaScript, React</p>
                  <Link to='/profile'>
                    <p className={styles.moreA}>More Details</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.infoSection}>
          <ul className={styles.listInfo}>
            <li>
              <img
                className={styles.checklist}
                src='img/checklist.png'
                alt='checklist'
              />
              Create an individual program
            </li>
            <li>
              <img
                className={styles.checklist}
                src='img/checklist.png'
                alt='checklist'
              />
              Prepare for the interview
            </li>
            <li>
              <img
                className={styles.checklist}
                src='img/checklist.png'
                alt='checklist'
              />
              Network
            </li>
            <li>
              <img
                className={styles.checklist}
                src='img/checklist.png'
                alt='checklist'
              />
              Choose the best materials and practices for self-study
            </li>
            <li>
              <img
                className={styles.checklist}
                src='img/checklist.png'
                alt='checklist'
              />
              Motivate to keep up your studying pace and refrain from giving up
            </li>
          </ul>
          <div>
            <Link to='/mentors'>
              <div className={styles.findBtn}>Find Mentor</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
