import React from 'react'

export const Header = () => {
  return ( <header>
    <a href="/" class="logo">
        <h1 width="34" height="43">LOGO</h1>
    </a>
    <nav class="navigate none">
        <a href="/"> Tech Acad</a>
        <a href="/"> QHSE</a>
        <a href="/"> Stem Acad</a>
        <a href="/"> Workstation </a>
        <a href="/"> Contact </a>
    </nav>
    <span class="mobile">
            <svg class="bar" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"
                clip-rule="evenodd">
                <path d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z" fill="#1040e2" stroke="black"
                    stroke-width="1.5"></path>
                <path d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z"></path>
            </svg>
    </span>
</header>
  )
}
