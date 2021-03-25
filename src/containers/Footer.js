import './Footer.css'
const date = new Date().getFullYear()


export default function Footer() {
    
    return <>
        <div className="footer-container">
            <p>Copyrigth © {date} SpanoG </p>
        </div>
    </>
}