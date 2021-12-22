import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactDOM from 'react-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faHome,
  faCompass,
  faPlus,
  faLocationArrow,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';

import SearchResultArrayComponent from './SearchResultArrayComponent';

export default function MainNavBar(props) {
  const [searchResultArr, setSearchResultArr] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const [memberID, setMemberID] = useState([
    { id: 'wecode', desc: '>wecode | 위코드' },
    { id: 'westudy', desc: '>wecode | 위코드 스터디' },
    { id: 'KJH', desc: 'leit_motif' },
    { id: 'abcdefg', desc: 'alphabet' },
    { id: 'lovepet', desc: 'love_pet' },
  ]);

  const navigate = useNavigate();

  useEffect(() => {
    if (searchInput.length > 2) {
      const result = memberID.filter(member =>
        member.id.toLowerCase().includes(searchInput.toLowerCase())
      );
      setSearchResultArr(result);
    } else {
      setSearchResultArr([]);
    }
  }, [searchInput]);

  const getSearchedResult = event => {
    event.preventDefault();
    setSearchInput(event.target.value);
  };

  const mainSearchInputFocusIn = event => {
    event.preventDefault();
    const searchIcon = document.querySelector('#searchIcon');
    const searchResultBox = document.querySelector('#searchResultBox');
    searchIcon.style.display = 'none';
    searchResultBox.style.display = 'block';
    event.target.style.paddingLeft = '12px';
  };

  const mainSearchInputFocusOut = event => {
    event.preventDefault();
    const searchIcon = document.querySelector('#searchIcon');
    const searchResultBox = document.querySelector('#searchResultBox');
    searchIcon.style.display = 'inline';
    searchResultBox.style.display = 'none';
    event.target.style.paddingLeft = '30px';
  };

  const navGoMain = event => {
    event.preventDefault();
    navigate('/main-hyun');
  };

  const navDirectMessage = event => {
    event.preventDefault();
    const floatingArea = document.querySelector('#navBtnsFloatingArea');
    if (floatingArea.children.length === 0) {
      ReactDOM.render(<span>new Direct message area</span>, floatingArea);
    }
    document.querySelector('#navBtnsFloatingBox').classList.add('active');
    document.querySelector('#hideContainer').classList.add('active');
    document.querySelector('#navBtnsArrowDiv').style.transform =
      'translateX(1.8em) rotate(45deg)';
  };

  const navNewPost = event => {
    event.preventDefault();
    const floatingArea = document.querySelector('#navBtnsFloatingArea');
    if (floatingArea.children.length === 0) {
      ReactDOM.render(<span>new Post area</span>, floatingArea);
    }
    document.querySelector('#navBtnsFloatingBox').classList.add('active');
    document.querySelector('#hideContainer').classList.add('active');
    document.querySelector('#navBtnsArrowDiv').style.transform =
      'translateX(3.7em) rotate(45deg)';
  };

  const navTripFeeds = event => {
    event.preventDefault();
    const floatingArea = document.querySelector('#navBtnsFloatingArea');
    if (floatingArea.children.length === 0) {
      ReactDOM.render(<span>trip Feeds area</span>, floatingArea);
    }
    document.querySelector('#navBtnsFloatingBox').classList.add('active');
    document.querySelector('#hideContainer').classList.add('active');
    document.querySelector('#navBtnsArrowDiv').style.transform =
      'translateX(5.5em) rotate(45deg)';
  };

  const navViewLikes = event => {
    event.preventDefault();
    const floatingArea = document.querySelector('#navBtnsFloatingArea');
    if (floatingArea.children.length === 0) {
      ReactDOM.render(<span>view Favorite posts area</span>, floatingArea);
    }
    document.querySelector('#navBtnsFloatingBox').classList.add('active');
    document.querySelector('#hideContainer').classList.add('active');
    document.querySelector('#navBtnsArrowDiv').style.transform =
      'translateX(7.46em) rotate(45deg)';
  };

  const navViewProfile = event => {
    event.preventDefault();
    const floatingArea = document.querySelector('#navBtnsFloatingArea');
    if (floatingArea.children.length === 0) {
      ReactDOM.render(<span>profile option area</span>, floatingArea);
    }
    document.querySelector('#navBtnsFloatingBox').classList.add('active');
    document.querySelector('#hideContainer').classList.add('active');
    document.querySelector('#navBtnsArrowDiv').style.transform =
      'translateX(9.4em) rotate(45deg)';
  };
  return (
    <article id="navContainer">
      <nav id="navRowBar">
        <header>
          <span onClick={navGoMain}>Westagram</span>
        </header>
        <section id="navRowBarSearch">
          <div id="navRowBarSearchInput">
            <FontAwesomeIcon icon={faSearch} id="searchIcon" />
            <input
              id="mainSearchInput"
              type="text"
              placeholder="검색"
              value={searchInput}
              onFocus={mainSearchInputFocusIn}
              onBlur={mainSearchInputFocusOut}
              onChange={getSearchedResult}
            />
          </div>
          <div id="searchResultBox">
            <div id="searchArrowDiv" />
            <div id="searchResult">
              <SearchResultArrayComponent searchResult={searchResultArr} />
            </div>
          </div>
        </section>
        <section id="navBtns">
          <div id="navBtnsBox">
            <section id="navBtnsArea">
              <FontAwesomeIcon
                icon={faHome}
                id="navBtnsAreaEach"
                onClick={navGoMain}
              />
              <FontAwesomeIcon
                icon={faLocationArrow}
                id="navBtnsAreaEach"
                onClick={navDirectMessage}
              />
              <FontAwesomeIcon
                icon={faPlus}
                id="navBtnsAreaEach"
                onClick={navNewPost}
              />
              <FontAwesomeIcon
                icon={faCompass}
                id="navBtnsAreaEach"
                onClick={navTripFeeds}
              />
              <FontAwesomeIcon
                icon={faHeart}
                id="navBtnsAreaEach"
                onClick={navViewLikes}
              />
              <div id="profileImg" onClick={navViewProfile} />
            </section>
            <section id="navBtnsFloatingBox">
              <div id="navBtnsArrowDiv" />
              <div id="navBtnsFloatingArea" />
            </section>
          </div>
        </section>
      </nav>
    </article>
  );
}
