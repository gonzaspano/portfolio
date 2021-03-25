import './AboutMe.css'
import macbook from '../assets/macbook.png'
import imgProfile from '../assets/IMG_0208.jpeg'
import Welcome from '../components/Welcome'
import Knowledge from './Knowledge'
import Tools from './Tools'

export default function AboutMe() {
    return <>
        <div className="container-aboutme-all">
            <div className="aboutme-container1" >
                <img src={imgProfile} className="aboutme-imgprofile" alt="profile img" />
            </div>
            <div className="aboutme-container2">
                <Welcome />
                <div className="aboutme-subcontainer">
                    <h3 className="aboutme-container2-title">About me</h3>
                    <p>Since beginning my journey as a freelance designer a year ago,</p>
                    <p>I don't stop learning. I've developed my programmer's skills</p>
                    <p>as much as my perseverance. And this makes me better.</p>
                    <p> I'm quietly confident, naturally curious, and perpetually working on</p>
                    <p>to improve myself. </p>
                </div>
                <Knowledge />
                <Tools />
            </div>
        </div>
    </>
}