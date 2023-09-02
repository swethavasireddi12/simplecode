import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="Header">
            <h1>Blog Post</h1>
            <nav>
                <ul>
                    <button className="newpostbutton"><Link to="/">Home</Link></button>
                    <button className="newpostbutton"><Link to="post" className="link">New Post</Link></button>
                </ul>
            </nav>
        </header>
    )
}

export default Header