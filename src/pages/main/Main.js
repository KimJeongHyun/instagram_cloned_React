import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import MainNavBar from './MainNavBar';
import MainFeedFriends from './MainFeedFriends';
import FeedComponent from './FeedComponent';
import MainSideBar from './MainSideBar';

import './main.scss';

function Main(props) {
  const [feedData, setFeedData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/feedData.json', { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        setFeedData(data);
      });

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = () => {
    const sideWrapper = document.querySelector('#sideWrapper');
    const bodyContainer = document.querySelector('#bodyContainer');
    const searchBar = document.querySelector('#navRowBarSearch');

    if (window.innerWidth <= 627) {
      searchBar.style.display = 'none';
    } else {
      searchBar.style.display = 'inline-block';
      if (window.innerWidth <= 1001 && window.innerWidth > 690) {
        sideWrapper.style.display = 'none';
        bodyContainer.style.marginLeft = '7vw';
      } else if (window.innerWidth <= 690) {
        bodyContainer.style.marginLeft = '0vw';
      } else {
        bodyContainer.style.marginLeft = '0px';
        sideWrapper.style.display = 'block';
      }
    }
  };

  const removeNavActive = event => {
    event.preventDefault();
    document.querySelector('#navBtnsFloatingBox').classList.remove('active');
    document.querySelector('#hideContainer').classList.remove('active');
    const floatingArea = document.querySelector('#navBtnsFloatingArea');
    ReactDOM.unmountComponentAtNode(floatingArea);
  };

  return (
    <>
      <article id="hideContainer" onClick={removeNavActive} />
      <main id="mainContainer">
        <MainNavBar />
        <article id="bodyContainer">
          <article id="feedContainer">
            <MainFeedFriends />
            {feedData.map(item => {
              return <FeedComponent key={item.userName} feedItem={item} />;
            })}
          </article>
          <MainSideBar />
        </article>
      </main>
    </>
  );
}

export default Main;
