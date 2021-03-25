import './Works.css'
import work1 from '../assets/l10messi.png'
import work2 from '../assets/lafloreria.png'
import work3 from '../assets/todomate.png'
import work4 from '../assets/alrojovivoradio.png'


const works = [
    {
        img: work1,
        info: "HTML, CSS, BOOTSTRAP, SASS, JAVASCRIPT.",
        url: "https://l10messi.herokuapp.com/"
    },
    {
        img: work2,
        info: "REACT JS, BOOTSTRAP, FIREBASE.",
        url: "https://lafloreriaecommerce.herokuapp.com/"
    },
    {
        img: work3,
        info: "REACT JS, BOOTSTRAP, NODEJS.",
        url: "https://todomatecommerce.herokuapp.com/"
    },
    {
        img: work4,
        info: "WORDPRESS",
        url: "http://www.alrojovivoradio.com.ar/"
    }
]

export default function Works() {
    return <>
        <div className="works-container-title" id="work">
            <h3>Recent work</h3>
        </div>
        <div>
            <div className="work-container-examples">
                {works.map((e, i) =>
                    <div key={i} className="work-container-each">
                        <a href={e.url} target="_blank">
                            <div className="work-card">
                                <img src={e.img} alt={e.img} className="works-img" />
                            </div>
                        </a>

                        <div className="work-info">
                            <p className="work-info-text">Developed with:</p>
                            <p className="work-info-text">{e.info}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </>
}