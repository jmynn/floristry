import Link from 'next/link'
import styles from './index.module.css'
import { FunctionComponent, ReactNode } from 'react'

type Props = {
    children: string;
    href: `/${string}`
}

const InnerMore: FunctionComponent<Props> = ({children, href}):ReactNode => {
    return (
        <Link className={styles.view} href={href}>{children}</Link>
    )
}

export default InnerMore