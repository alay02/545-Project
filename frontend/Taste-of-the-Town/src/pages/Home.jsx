import { HomeAbout } from "../components/HomeAbout"
import { HomeGrid } from "../components/HomeGrid"
import { useEffect } from 'react';

export default function Home() {
    

    useEffect(() => {
        document.title = 'Taste of the Town - Home';
        }, []);

    return (
        <div id="Home" className="fill flex-row">
            <HomeAbout />
            <HomeGrid />
        </div>
    )
}