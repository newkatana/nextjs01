import Link from 'next/link'
import styles from '../styles/Home.module.css'
import React from 'react'

const Navbar = () => {
    return (
        <nav>
            <div>
                <h1>PAGE LIST</h1>
            </div>
            <ul>
                <li><Link href="/"><a>Home</a></Link></li>
                <li><Link href="/attractions"><a>attractions</a></Link></li>
            </ul>
        </nav>
    )
}

export default Navbar