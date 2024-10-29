import Link from 'next/link'
import styles from './index.module.css'
import { ReactNode } from 'react'
import Logo from '../Logo'
import Navbar from '../Navbar'
import { $PHONE_NUMBER } from '@/data/info'

const Header = ():ReactNode => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href={'/'}><Logo /></Link>
            </div>
            <Navbar />
            <div className={styles.phone}>
                <Link href={`/tel:${$PHONE_NUMBER}`}>{$PHONE_NUMBER}</Link>
            </div>
        </header>
    )
}

export default Header