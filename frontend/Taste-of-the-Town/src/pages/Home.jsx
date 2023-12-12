import { HomeAbout } from "../components/HomeAbout"
import { HomeGrid } from "../components/HomeGrid"
import { useEffect } from 'react';

export default function Home() {
    
    

    function tutorial() {
        introJs().setOptions({
        steps:[
            {
                title:'Welcome!',
                intro:'Let\'s go through a quick tour!'
            },
            {
                element:document.querySelector('.first'),
                title:'Welcome!',
                intro:'Clicking this will take you back to the page you are currently viewing'
            },
            {
                element:document.querySelector('.second'),
                title:'Welcome!',
                intro:'Click to Look at what people have to say about the restaurants in your town!'
            },
            {
                element:document.querySelector('.third'),
                title:'Welcome!',
                intro:'Click to look at some of the best restaurants your town has to offer!'
            },
            {
                element:document.querySelector('.fourth'),
                title:'Welcome!',
                intro:'Click to see the latest and greatest food trends and where to get them near you!'
            },
            {
                element:document.querySelector('.fifth'),
                title:'Welcome!',
                intro:'Read up on the area!'
            },
            {
                element:document.querySelector('.sixth'),
                title:'Welcome!',
                intro:'Click restaurant names or images to view more, click "website" to view website, or click "Write a review" to tell us about your experience!'
            },
            {
                element:document.querySelector('.seventh'),
                title:'Welcome!',
                intro:'Read some recent comments, click on the restaurant to view more!'
            },
            {
                element:document.querySelector('.eighth'),
                title:'Welcome!',
                intro:'Type in a restaurant or town, and click on the search icon to get more info!'
            },
            {
                element:document.querySelector('.nineth'),
                title:'Welcome!',
                intro:'Click to sign-in to post post reviews and access more content!'
            },
        ]}).start();
    }


    
    const handleMouseEnter = () => {
        if (localStorage.getItem('hasSeenIntro') !== 'true') {
            tutorial();
        }
    
        localStorage.setItem('hasSeenIntro', 'true'); 
    };    

    useEffect(() => {
        document.title = 'Taste of the Town - Home';
        }, []);

    return (
        <>
        <div id="Home" className="fill flex-row"  onMouseEnter={handleMouseEnter}>
            <HomeAbout />
            <HomeGrid />
        </div>
        </>
    )
}