import AboutMe from '../components/AboutMe'
import Works from '../components/Works'

import './Home.css'

export default function Home() {
    return <>
        <div className="general-container">
            <AboutMe />
            <Works />
        </div>
    </>
}