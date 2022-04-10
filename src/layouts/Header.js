import React,{useEffect} from 'react'

import { Link } from 'react-router-dom'
export const Header = () => {
    useEffect(() => {
         document.title = 'hi'

        })
        const headerFunction = () => {
            const nav = document.querySelector('nav')
            nav.classList.toggle('none')
        }
 
    return (
        <header>
            <Link to="/" className="logo">
                <h1 width="34" height="43">HOOKUPS</h1>
            </Link>
            <nav className="navigate none">
                <Link to="/new"> New</Link>
                <Link to="/favorites"> Favorites</Link>
            </nav>
            <span className="mobile" onClick={headerFunction}>
                <svg className="bar" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd"
                    clipRule="evenodd">
                    <path d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z" fill="#1040e2" stroke="black"
                        strokeWidth="1.5"></path>
                    <path d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z"></path>
                </svg>
            </span>
        </header>
    )
}
export default Header;