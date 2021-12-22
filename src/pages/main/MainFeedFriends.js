import React, { useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

export default function MainFeedFriends(props) {
  useEffect(() => {
    if (
      document.querySelector('#friendsFeedUl').scrollWidth ===
      document.querySelector('#friendsFeed').clientWidth
    ) {
      document.querySelector('#friendsFeedNext').style.visibility = 'hidden';
    }
  }, []);

  const friendsFeedScrollPrev = event => {
    event.preventDefault();
    const friendsFeedWidth = document.querySelector('#friendsFeed').clientWidth;
    const ulWidth = document.querySelector('#friendsFeedUl').scrollWidth;
    const scrollEndPos = ulWidth - friendsFeedWidth;
    document.querySelector('#friendsFeed').scrollLeft -= scrollEndPos * 0.6;
  };

  const friendsFeedScrollNext = event => {
    event.preventDefault();
    const friendsFeedWidth = document.querySelector('#friendsFeed').clientWidth;
    const ulWidth = document.querySelector('#friendsFeedUl').scrollWidth;
    const scrollEndPos = ulWidth - friendsFeedWidth;
    document.querySelector('#friendsFeed').scrollLeft += scrollEndPos * 0.6;
  };

  const friendsFeedScroll = event => {
    const ulWidth = document.querySelector('#friendsFeedUl').scrollWidth;
    const { clientWidth, scrollLeft } = event.target;

    const targetScrollEndPos = ulWidth - clientWidth;
    const targetScrollLeft = Math.floor(scrollLeft);
    const prevBtn = document.querySelector('#friendsFeedPrev');
    const nextBtn = document.querySelector('#friendsFeedNext');

    if (targetScrollLeft === 0) {
      prevBtn.style.visibility = 'hidden';
      nextBtn.style.visibility = 'visible';
    } else if (targetScrollLeft === targetScrollEndPos) {
      prevBtn.style.visibility = 'visible';
      nextBtn.style.visibility = 'hidden';
    } else if (targetScrollLeft > 0 && scrollLeft < targetScrollEndPos) {
      prevBtn.style.visibility = 'visible';
      nextBtn.style.visibility = 'visible';
    }
  };

  return (
    <>
      <section id="friendsFeed" onScroll={friendsFeedScroll}>
        <ul id="friendsFeedUl">
          <li>
            <div id="friendImgBorder">
              <div id="friendImg" />
            </div>
            <span>friends1</span>
          </li>
          <li>
            <div id="friendImgBorder">
              <div id="friendImg" />
            </div>
            <span>friends2</span>
          </li>
          <li>
            <div id="friendImgBorder">
              <div id="friendImg" />
            </div>
            <span>friends3</span>
          </li>
          <li>
            <div id="friendImgBorder">
              <div id="friendImg" />
            </div>
            <span>friends3</span>
          </li>
          <li>
            <div id="friendImgBorder">
              <div id="friendImg" />
            </div>
            <span>friends3</span>
          </li>
          <li>
            <div id="friendImgBorder">
              <div id="friendImg" />
            </div>
            <span>friends3</span>
          </li>
          <li>
            <div id="friendImgBorder">
              <div id="friendImg" />
            </div>
            <span>friends3</span>
          </li>
          <li>
            <div id="friendImgBorder">
              <div id="friendImg" />
            </div>
            <span>friends3</span>
          </li>
        </ul>
      </section>
      <section id="friendsFeedsBtnArea">
        <button id="friendsFeedPrev" onClick={friendsFeedScrollPrev}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button id="friendsFeedNext" onClick={friendsFeedScrollNext}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </section>
    </>
  );
}
