import styles from './index.module.css'
import { FunctionComponent, ReactNode } from 'react'

type Props = {
    children: string
}

const InnerText: FunctionComponent<Props> = ({children}):ReactNode => {
    return (
        <div className={styles.text}>{children}</div>
    )
}

export default InnerText