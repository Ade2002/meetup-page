import React from 'react'
import classes from './Layout.module.scss'
import Header from './Header'
const Layout = (props) => {
    return (
        <div>
            <Header />
            <main className={classes.main}>{props.children}</main>
        </div>
    )
}

export default Layout