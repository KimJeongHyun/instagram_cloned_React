import React, {useEffect} from 'react'

export default function MainSideBar(props){
    useEffect(()=>{
        const followOrNotReduce = () =>{
            const followOrNot = document.getElementsByClassName('followOrNot');
            for (let i=0; i<followOrNot.length; i++){
                if (followOrNot[i].innerHTML.length>24){
                    followOrNot[i].innerHTML = followOrNot[i].innerHTML.slice(0,25).trim()+'...';
                }
            }
        }
    
        followOrNotReduce();
    },[])
    return(
        <article id='sideWrapper'>
            <section id='sideContainer'>
                <section id='profileSwap'>
                    <div id='profileSwapBox'>
                        <div id='profileImg'></div>
                        <div id='profileInfo'>
                            <a href='#!'>lIlIlIlI</a>
                            <a href='#!'>김정현</a>
                        </div>
                        <button id='profileSwapBtn'>전환</button>
                    </div>
                </section>
                <section id='recommendFriends'>
                    <div id='recommendTextBar'>
                        <span>회원님을 위한 추천</span>
                        <a href='#!'>모두 보기</a>
                    </div>
                    <div id='recommendFriendList'>
                        <ul>
                            <li id='recommendFriendListTag'>
                                <div className='recommendFriendImg'>
                                    
                                </div>
                                <div className='recommendFriendInfo'>
                                    <span className='recommendFriendID'>friends1</span>
                                    <span className='followOrNot'>abcdefghijklmnop님 외 n명이 팔로우합니다.</span>
                                </div>
                            </li>
                            <li id='recommendFriendListTag'>
                                <div className='recommendFriendImg'>
                                    
                                </div>
                                <div className='recommendFriendInfo'>
                                    <span className='recommendFriendID'>friends2</span>
                                    <span className='followOrNot'>회원님을 팔로우합니다.</span>
                                </div>
                            </li>
                            <li id='recommendFriendListTag'>
                                <div className='recommendFriendImg'>
                                    
                                </div>
                                <div className='recommendFriendInfo'>
                                    <span className='recommendFriendID'>friends3</span>
                                    <span className='followOrNot'>strong_strawberry님 외 n명이 팔로우합니다.</span>
                                </div>
                            </li>
                            <li id='recommendFriendListTag'>
                                <div className='recommendFriendImg'>
                                    
                                </div>
                                <div className='recommendFriendInfo'>
                                    <span className='recommendFriendID'>friends4</span>
                                    <span className='followOrNot'>회원님을 팔로우합니다.</span>
                                </div>
                            </li>
                            <li id='recommendFriendListTag'>
                                <div className='recommendFriendImg'>
                                    
                                </div>
                                <div className='recommendFriendInfo'>
                                    <span className='recommendFriendID'>friends5</span>
                                    <span className='followOrNot'>회원님을 팔로우합니다.</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                <section id='sideFooter'>
                    <div id='sideFooterTextBar'>
                        <span id='sideFooterPartText'>소개</span>
                        <span id='sideFooterPartText'>도움말</span>
                        <span id='sideFooterPartText'>홍보 센터</span>
                        <span id='sideFooterPartText'>API</span>
                        <span id='sideFooterPartTextEnd'>채용 정보</span>
                    </div>
                    <div id='sideFooterTextBar'>
                        <span id='sideFooterPartText'>개인정보처리방침</span>
                        <span id='sideFooterPartText'>약관</span>
                        <span id='sideFooterPartText'>위치</span>
                        <span id='sideFooterPartText'>인기 계정</span>
                        <span id='sideFooterPartText'>해시태그</span>
                        <span id='sideFooterPartTextEnd'>언어</span>
                    </div>
                    <div id='sideFooterBottom'>
                        <span>© 2021 WESTAGRAM FROM KJH</span>
                    </div>
                </section>
            </section>
        </article>   
    )
}