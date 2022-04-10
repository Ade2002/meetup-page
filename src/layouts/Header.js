import React,{useEffect} from 'react'

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
            <a href="/" className="logo">
                <h1 width="34" height="43">MEETUPS</h1>
            </a>
            <nav className="navigate none">
                <a href="/"> Tech Acad</a>
                <a href="/"> QHSE</a>
                <a href="/"> Stem Acad</a>
                <a href="/"> Workstation </a>
                <a href="/"> Contact </a>
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