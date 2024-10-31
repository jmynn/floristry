import styles from './index.module.css'
import { FunctionComponent, ReactNode } from 'react'

type Props = {
    children: string
}

const SubHeader: FunctionComponent<Props> = ({children}):ReactNode => {
    return (
        <h2 className={styles.subtitle}>{children}</h2>
    )
}

export default SubHeader
