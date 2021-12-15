import React, {useState,useEffect, useRef} from 'react'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationArrow,faHeart, faCircle, faComment, faStickyNote, faEllipsisH, faSmile, faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons"

import FeedCommentComponent from './FeedCommentComponent';

export default function FeedComponent(props){
    const [feedOriginContent,setFeedOriginContent] = useState();
    const [commentData,setCommentData] = useState([]);
    const [feedImgDotPosition,setFeedImgDotPosition] = useState(0);
    const feedImgDotContainerRef = useRef();
    const feedImgUlRef = useRef();
    useEffect(()=>{

        const feedContentsReduce = async () =>{
            const feedContentsCommentBody = document.getElementsByName('feedContentsCommentBody'+props.feedItem.feedID)[0]
            
            let temp = [];
            
            const feedLoopWork = () =>{
                temp.push(feedContentsCommentBody.innerHTML);
                const reduceCommentString = feedContentsCommentBody.innerHTML.slice(0,10).trim() + '...';
                feedContentsCommentBody.innerHTML = reduceCommentString;    
            }

            const setFeedOriginState = () =>{
                setFeedOriginContent(temp[0])
            }

            await feedLoopWork();
            await setFeedOriginState();
            
        }
        feedContentsReduce()
    },[])

    const feedExtendContents = (event) =>{
        event.preventDefault();
        const extendBtn = document.getElementsByName('feedExtendContents'+props.feedItem.feedID)[0]
        
        extendBtn.style.display = 'none';
        const feedContentsCommentBody = document.getElementsByName('feedContentsCommentBody'+props.feedItem.feedID)[0]
        feedContentsCommentBody.innerHTML=feedOriginContent;
    }

    
    const onChangeFeedComment  = (event) =>{
        event.preventDefault();
        const inputCommentsSubmitBtn = document.getElementsByName('inputCommentsSubmitBtn'+props.feedItem.feedID)[0]
        
        if (event.target.value.replace(/(^\s*)|(\s*$)/gi, "")){
            inputCommentsSubmitBtn.style.opacity=1;
            inputCommentsSubmitBtn.style.cursor='pointer';
        }else{
            inputCommentsSubmitBtn.style.opacity=0.3;
            inputCommentsSubmitBtn.style.cursor='inherit'
        }        
    }

    const enterFeedComment = (event) =>{
        if (event.key==='Enter'){
            addFeedComment(event);
        }
    }

    const addFeedComment = (event) =>{
        event.preventDefault();
        const inputCommentsSubmitBtn = document.getElementsByName('inputCommentsSubmitBtn'+props.feedItem.feedID)[0]
        const inputCommentsTextArea = document.getElementsByName('inputCommentsTextarea'+props.feedItem.feedID)[0]
        
        let inputComments = inputCommentsTextArea.value.replace(/\n/g, "");

        if (inputComments.length>0){
            setCommentData((current)=>{
                const obj = {
                    commentID:'test1',
                    commentText:inputComments
                }
                const newList = [...current,obj];
                return newList;
            })
        }
        
        inputCommentsTextArea.focus();
        inputCommentsTextArea.value=null;
        inputCommentsSubmitBtn.style.opacity=0.3;
        inputCommentsSubmitBtn.style.cursor='inherit'
    }

    const checkFeedImgPosition = (event) =>{
        feedImgUlRef.current.style.scrollLeft = event.target.scrollLeft;
        setFeedImgDotPosition(Math.floor(Math.floor(event.target.scrollLeft)/603))
    }

    const feedImgPrev = (event) =>{
        event.preventDefault();
        if(parseInt(feedImgUlRef.current.style.scrollLeft)-603>0){
            feedImgUlRef.current.scrollLeft = parseInt(feedImgUlRef.current.style.scrollLeft)-605;
        }else{
            
        }
    }

    const feedImgNext = (event) =>{
        event.preventDefault();
        if(parseInt(feedImgUlRef.current.scrollLeft)+606>=feedImgUlRef.current.scrollWidth){
            
        }else{
            feedImgUlRef.current.scrollLeft = parseInt(feedImgUlRef.current.style.scrollLeft)+605;
        }
    }

    useEffect(()=>{
        for (let i=0; i<feedImgDotContainerRef.current.children.length; i++){
            if (feedImgDotPosition===i){
                feedImgDotContainerRef.current.children[i].children[0].style.color='rgba(var(--d69,0,149,246),1)';
            }else{
                feedImgDotContainerRef.current.children[i].children[0].style.color='#adadad';
            }
        }
    },[feedImgDotPosition])

    return(
        <>
            <section id='feeds'>
                <header id='feedProfile'>
                    <div id='feedProfileInfo'>
                        <div id='feedProfileImg'>
                    
                        </div>
                        <div id='feedProfileDetail'>    
                            <a href='#!'>{props.feedItem.feedOwner}</a>
                            <a href='#!'>{props.feedItem.feedOwnerLocation}</a>
                        </div>
                    </div>
                    <div id='feedProfileBtn'>
                        <a href='#!'><FontAwesomeIcon icon={faEllipsisH}/></a>
                    </div>
                </header>
                <section id='feedImgContainer'>
                    <section id='feedImg' ref={feedImgUlRef} onScroll={checkFeedImgPosition} style={{scrollLeft:0}}>
                        <ul>
                            <li>
                                <img src='images/cafe_photos.jpg'/>
                            </li>
                            <li>
                                <img src='images/peach.jpg'/>
                            </li>
                            <li>
                                <img src='images/unsplash_instagram.png'/>
                            </li>
                        </ul>
                    </section>
                    <section id='feedImgBtns'>
                        <button onClick={feedImgPrev}><FontAwesomeIcon icon={faChevronLeft}/></button>
                        <button onClick={feedImgNext}><FontAwesomeIcon icon={faChevronRight}/></button>
                    </section>
                    <section id='feedImgDot' ref={feedImgDotContainerRef}>
                        <div id='feedImgLengthDot'>
                                <FontAwesomeIcon id='faCircle' icon={faCircle}/>
                        </div>
                        <div id='feedImgLengthDot'>
                                <FontAwesomeIcon id='faCircle' icon={faCircle}/>
                        </div>
                        <div id='feedImgLengthDot'>
                                <FontAwesomeIcon id='faCircle' icon={faCircle}/>
                        </div>
                    </section>
                </section>
                
                <section id='feedBtns'>
                    <div id='feedOptionBtns'>
                        <FontAwesomeIcon id='feedOptionBtnEach' icon={faHeart}/>
                        <FontAwesomeIcon id='feedOptionBtnEach' icon={faComment}/>
                        <FontAwesomeIcon id='feedOptionBtnEach' icon={faLocationArrow}/>
                    </div>
                    <div id='feedScrapBtn'>
                        <FontAwesomeIcon id='feedOptionScrapBtn' icon={faStickyNote}/>
                    </div>
                </section>
                <section id='feedLikes'>
                    <div id='feedLikesImg'>
                        
                    </div>
                    <div id='feedLikesImg'>

                    </div>
                    <div id='feedLikesCount'>
                        <span id='feedLikesCountBold'>kjh_</span>님 <span id='feedLikesCountBold'>외 n명</span>이 좋아합니다.
                    </div>
                </section>
                <section id='feedContents'>
                    <div id='feedContentsBox'>
                        <span id='feedContentsComment'><span id='feedContentsBold'>{props.feedItem.feedOwner}</span><span id='feedContentsCommentBody' name={'feedContentsCommentBody'+props.feedItem.feedID}>{props.feedItem.feedContentsComment}</span></span>
                        <button id='feedExtendContents' name={'feedExtendContents'+props.feedItem.feedID} onClick={feedExtendContents}>더 보기</button>
                    </div>
                </section>
                <section id='feedComments'>
                    <div id='feedCommentsBox' name={'feedCommentsBox'+props.feedItem.feedID}>
                        {commentData.map((item)=>(
                            <FeedCommentComponent key={item.commentID} feedID={props.feedItem.feedID} commentID={item.commentID} commentText={item.commentText}/>
                        ))}
                    </div>
                </section>
                <section id='feedContentsTime'>
                    <div id='feedContentsTimeBox'>
                        <span>1시간 전</span>
                    </div>
                </section>
                <section id='inputComments'>
                    <div id='inputCommentsBox'>
                        <div id='inputCommentsEmojiBtn'>
                            <FontAwesomeIcon id='inputCommentsEmojiSmile' icon={faSmile}/>
                        </div>
                        <div id='inputCommentsType'>
                            <textarea id='inputCommentsTextarea' name={'inputCommentsTextarea'+props.feedItem.feedID} placeholder='댓글 달기...' onChange={onChangeFeedComment} onKeyPress={enterFeedComment}></textarea>
                        </div>
                        <div id='inputCommentsSubmit'>
                            <button id='inputCommentsSubmitBtn' name={'inputCommentsSubmitBtn'+props.feedItem.feedID} onClick={addFeedComment}>게시</button>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}