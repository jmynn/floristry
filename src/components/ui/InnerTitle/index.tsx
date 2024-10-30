import styles from './index.module.css'
import { FunctionComponent, ReactNode } from 'react'

type Props = {
    children: string
}

const InnerTitle: FunctionComponent<Props> = ({children}):ReactNode => {
    return (
        <h3 className={styles.title}>{children}</h3>
    )
}

export default InnerTitle