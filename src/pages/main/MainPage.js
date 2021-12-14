import React, {useState,useEffect} from 'react'

import MainNavBar from './MainNavBar';
import MainFeedFriends from './MainFeedFriends';
import FeedComponent from '../../components/FeedComponent';
import MainSideBar from './MainSideBar';

import './main.scss'

function MainPage(props){
    const [feedData,setFeedData] = useState([
        [
            {
                feedID:1,
                feedOwner:'KJH',
                feedOwnerLocation:'서울 강서구',
                feedContentsComment:'하하!'
            },
            {
                feedID:2,
                feedOwner:'PARK',
                feedOwnerLocation:'서울 강서구',
                feedContentsComment:'하하!asdfaslkfsjdlfjlaksdfjlkasdjlfkjlsdfj'
            }
        ]
    ]);

    useEffect(()=>{
        window.addEventListener('resize',function(event){
            const sideWrapper = document.querySelector('#sideWrapper')
            const bodyContainer = document.querySelector('#bodyContainer');
            if (window.innerWidth<=627){
                document.getElementById('navRowBarSearch').style.display='none'
            }else{
                document.getElementById('navRowBarSearch').style.display='inline-block'
                if (window.innerWidth<=1001 && window.innerWidth>690){
                    sideWrapper.style.display='none'
                    bodyContainer.style.marginLeft='7vw'
                }else if(window.innerWidth<=690){
                    bodyContainer.style.marginLeft='0vw'
                }else{
                    bodyContainer.style.marginLeft='0px'
                    sideWrapper.style.display='block'   
                }
            }
        })
    },[])

    const removeNavActive = (event) =>{
        event.preventDefault();
        document.querySelector('#navBtnsFloatingBox').classList.remove('active');
        document.querySelector('#hideContainer').classList.remove('active');
        const floatingArea = document.querySelector('#navBtnsFloatingArea')
        if (floatingArea.hasChildNodes){
            for (let i=0; i<floatingArea.children.length; i++){
                floatingArea.removeChild(floatingArea.children[i])
            }
        } 
    }

    return(
        <>
            <article id='hideContainer' onClick={removeNavActive}/>
            <main id='mainContainer'>
                <MainNavBar/>
                <article id='bodyContainer'>
                    <article id='feedContainer'>
                        <MainFeedFriends/>
                        {
                            feedData.map((item)=>{
                                return item.map((item)=>{
                                    return <FeedComponent key={item.feedOwner} feedItem={item}/>
                                })
                            })
                        }
                    </article>
                    <MainSideBar/>
                </article>
            </main>
        </>
    )
}

export default MainPage