import React, {useEffect} from 'react'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft,faChevronRight} from "@fortawesome/free-solid-svg-icons"

export default function MainFeedFriends(props){
    
    useEffect(()=>{
        document.getElementById('friendsFeed').addEventListener('scroll',function(event){
            const ulWidth = document.getElementById('friendsFeedUl').scrollWidth
            const scrollEndPos = ulWidth-event.target.clientWidth;
            const scrollLeft = Math.round(event.target.scrollLeft);
            
            if (scrollLeft===0){
                document.getElementById('friendsFeedPrev').style.visibility='hidden'
                document.getElementById('friendsFeedNext').style.visibility='visible'
            }else if (scrollLeft===scrollEndPos){
                document.getElementById('friendsFeedPrev').style.visibility='visible'
                document.getElementById('friendsFeedNext').style.visibility='hidden'
            }else if (scrollLeft>0 && scrollLeft<scrollEndPos){
                document.getElementById('friendsFeedPrev').style.visibility='visible'
                document.getElementById('friendsFeedNext').style.visibility='visible'
            }
        })

        if (document.getElementById('friendsFeedUl').scrollWidth === document.getElementById('friendsFeed').clientWidth){
            document.getElementById('friendsFeedNext').style.visibility='hidden';
        }
    },[])

    const friendsFeedScrollPrev = (event) =>{
        event.preventDefault();
        const friendsFeedWidth = document.getElementById('friendsFeed').clientWidth;
        const ulWidth = document.getElementById('friendsFeedUl').scrollWidth
        const scrollEndPos = ulWidth-friendsFeedWidth;
        document.getElementById('friendsFeed').scrollLeft-=scrollEndPos*0.6;
    }

    const friendsFeedScrollNext = (event) =>{
        event.preventDefault();
        const friendsFeedWidth = document.getElementById('friendsFeed').clientWidth;
        const ulWidth = document.getElementById('friendsFeedUl').scrollWidth;
        const scrollEndPos = ulWidth-friendsFeedWidth;
        document.getElementById('friendsFeed').scrollLeft+=scrollEndPos*0.6;
    }

    return(
        <>
            <section id='friendsFeed'>
                <ul id='friendsFeedUl'>
                    <li>
                        <div id='friendImgBorder'>
                            <div id='friendImg'></div>
                        </div>
                        <span>friends1</span>
                    </li>
                    <li>
                        <div id='friendImgBorder'>
                            <div id='friendImg'></div>
                        </div>
                        <span>friends2</span>
                    </li>
                    <li>
                        <div id='friendImgBorder'>
                            <div id='friendImg'></div>
                        </div>
                        <span>friends3</span>
                    </li>
                    <li>
                        <div id='friendImgBorder'>
                            <div id='friendImg'></div>
                        </div>
                        <span>friends3</span>
                    </li>
                    <li>
                        <div id='friendImgBorder'>
                            <div id='friendImg'></div>
                        </div>
                        <span>friends3</span>
                    </li>
                    <li>
                        <div id='friendImgBorder'>
                            <div id='friendImg'></div>
                        </div>
                        <span>friends3</span>
                    </li>
                    <li>
                        <div id='friendImgBorder'>
                            <div id='friendImg'></div>
                        </div>
                        <span>friends3</span>
                    </li>
                    <li>
                        <div id='friendImgBorder'>
                            <div id='friendImg'></div>
                        </div>
                        <span>friends3</span>
                    </li>
                </ul>         
            </section>
            <section id='friendsFeedsBtnArea'>
                <button id='friendsFeedPrev' onClick={friendsFeedScrollPrev}> <FontAwesomeIcon icon={faChevronLeft}/> </button>
                <button id='friendsFeedNext' onClick={friendsFeedScrollNext}> <FontAwesomeIcon icon={faChevronRight}/> </button>
            </section>
        </>
    )    
}