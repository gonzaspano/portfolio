import './Navbar.css'

const categories = [
    {
        name: "Linkedin",
        href: "https://www.linkedin.com/in/gonzalospano/"
    },
    {
        name: "Github",
        href: "https://github.com/gonzaspano"
    },
]


export default function Navbar() {
    return <>
        <div className="navbar-container">
            <div className="title-container">
                <h1 className="title-navbar">Gonzalo Spano</h1>
            </div>
            <div className="categories-container">
                {categories.map((c, i) =>
                    <a href={`${c.href}`} target="_blank" className="link-category" key={i}>
                        <p className="category-text">{c.name}</p>
                    </a>
                )}
            </div>
        </div>
    </>
}