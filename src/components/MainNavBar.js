import React, {useState, useEffect} from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch,faHome,faCompass,faPlus,faLocationArrow,faHeart} from "@fortawesome/free-solid-svg-icons"

import SearchResultArrayComponent from './SearchResultArrayComponent';


export default function MainNavBar(props){
    const [searchResultArr,setSearchResultArr] = useState([]);

    const [searchInput,setSearchInput] = useState('');

    const [memberID,setMemberID] = useState([
        {id:'wecode', desc:'>wecode | 위코드'},
        {id:'westudy', desc:'>wecode | 위코드 스터디'},
        {id:'KJH', desc:'leit_motif'},
        {id:'abcdefg', desc:'alphabet'},
        {id:'lovepet', desc:'love_pet'}
    ]);

    const getSearchedResult = (event) =>{
        event.preventDefault();
        setSearchInput(event.target.value)
    }

    useEffect(()=>{
        if (searchInput.length>2){
            const result = memberID.filter(member=>member['id'].toLowerCase().includes(searchInput.toLowerCase()))
            setSearchResultArr(result);
        }else{
            setSearchResultArr([]);
        }
    },[searchInput])


    const mainSearchInputFocusIn = (event) =>{
        event.preventDefault();
        const searchInput = document.getElementById('mainSearchInput');
        const searchIcon = document.getElementById('searchIcon');
        const searchResultBox = document.getElementById('searchResultBox');
        searchIcon.style.display='none'
        searchResultBox.style.display='block'
        searchInput.style.paddingLeft='12px'
    }

    const mainSearchInputFocusOut = (event) =>{
        event.preventDefault();
        const searchInput = document.getElementById('mainSearchInput');
        const searchIcon = document.getElementById('searchIcon');
        const searchResultBox = document.getElementById('searchResultBox');
        searchIcon.style.display='inline'
        searchResultBox.style.display='none'
        searchInput.style.paddingLeft='30px'
    }

    const navGoMain = (event) =>{
        event.preventDefault();
        window.location.href='Main'
    }

    const navDirectMessage = (event) =>{
        event.preventDefault();
        const floatingArea = document.querySelector('#navBtnsFloatingArea')
        if (floatingArea.children.length===0){
            const newDmSpan = document.createElement('span');
            newDmSpan.innerHTML = 'new direct message area';
            floatingArea.appendChild(newDmSpan);
        }
        document.querySelector('#navBtnsFloatingBox').classList.add('active');
        document.querySelector('#hideContainer').classList.add('active');
        document.querySelector('#navBtnsArrowDiv').style.transform='translateX(2.3em) rotate(45deg)'
    }

    const navNewPost = (event) =>{
        event.preventDefault();
        const floatingArea = document.querySelector('#navBtnsFloatingArea')
        if (floatingArea.children.length===0){
            const newPostSpan = document.createElement('span');
            newPostSpan.innerHTML = 'new post area';
            floatingArea.appendChild(newPostSpan);
        }
        document.querySelector('#navBtnsFloatingBox').classList.add('active');
        document.querySelector('#hideContainer').classList.add('active');
        document.querySelector('#navBtnsArrowDiv').style.transform='translateX(4.2em) rotate(45deg)'
    }

    const navTripFeeds = (event) =>{
        event.preventDefault();
        const floatingArea = document.querySelector('#navBtnsFloatingArea')
        if (floatingArea.children.length===0){
            const tripSpan = document.createElement('span');
            tripSpan.innerHTML = 'trip feeds area';
            floatingArea.appendChild(tripSpan);
        }
        document.querySelector('#navBtnsFloatingBox').classList.add('active');
        document.querySelector('#hideContainer').classList.add('active');
        document.querySelector('#navBtnsArrowDiv').style.transform='translateX(6em) rotate(45deg)'
    }

    const navViewLikes = (event) =>{
        event.preventDefault();
        const floatingArea = document.querySelector('#navBtnsFloatingArea')
        if (floatingArea.children.length===0){
            const likeSpan = document.createElement('span');
            likeSpan.innerHTML = 'like area';
            floatingArea.appendChild(likeSpan);
        }
        document.querySelector('#navBtnsFloatingBox').classList.add('active');
        document.querySelector('#hideContainer').classList.add('active');
        document.querySelector('#navBtnsArrowDiv').style.transform='translateX(7.96em) rotate(45deg)'
    }

    const navViewProfile = (event) =>{
        event.preventDefault();
        const floatingArea = document.querySelector('#navBtnsFloatingArea')
        if (floatingArea.children.length===0){
            const profileSpan = document.createElement('span');
            profileSpan.innerHTML = 'profile area'
            floatingArea.appendChild(profileSpan);
        }
        document.querySelector('#navBtnsFloatingBox').classList.add('active');
        document.querySelector('#hideContainer').classList.add('active');
        document.querySelector('#navBtnsArrowDiv').style.transform='translateX(9.9em) rotate(45deg)'
    }
    return(
        <article id='navContainer'>
            <nav id='navRowBar'>
                <header><span onClick={navGoMain}>Westagram</span></header>
                <div id='navRowBarSearch'>
                    <div id='navRowBarSearchInput'>
                        <FontAwesomeIcon icon={faSearch} id='searchIcon'/>
                        <input id='mainSearchInput' type='text' placeholder="검색" value={searchInput} onFocus = {mainSearchInputFocusIn} onBlur={mainSearchInputFocusOut} onChange={getSearchedResult}/>
                    </div>
                    <div id='searchResultBox'>
                        <div id='searchArrowDiv'>
    
                        </div>
                        <div id='searchResult'>
                            <SearchResultArrayComponent searchResult={searchResultArr}/>
                        </div>
                    </div>
                </div>
                <section id='navBtns'>
                    <div id='navBtnsBox'>
                        <section id='navBtnsArea'>
                            <FontAwesomeIcon icon={faHome} id='navBtnsAreaEach' onClick={navGoMain}/>
                            <FontAwesomeIcon icon={faLocationArrow} id='navBtnsAreaEach' onClick={navDirectMessage}/>
                            <FontAwesomeIcon icon={faPlus} id='navBtnsAreaEach' onClick={navNewPost}/>
                            <FontAwesomeIcon icon={faCompass} id='navBtnsAreaEach' onClick={navTripFeeds}/>
                            <FontAwesomeIcon icon={faHeart} id='navBtnsAreaEach' onClick={navViewLikes}/>
                            <div id='profileImg' onClick={navViewProfile}></div>
                        </section>
                        <section id='navBtnsFloatingBox'>
                            <div id='navBtnsArrowDiv'>
    
                            </div>
                            <div id='navBtnsFloatingArea'>
                                
                            </div>
                        </section>
                    </div>
                </section>
            </nav>
        </article>     
    )
}