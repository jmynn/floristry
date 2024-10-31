import SubHeader from '@/components/ui/SubHeader'
import styles from './index.module.css'
import { ReactNode } from 'react'
import IconProviders from '@/components/ui/icons/IconProviders'

const Providers = ():ReactNode => {
    return (
        <div className={styles.providers}>
            <SubHeader>наши поставщики</SubHeader>
            <div className={styles.body}>
                <div className={styles.row}>
                    <IconProviders id={1} />
                    <IconProviders id={2} />
                    <IconProviders id={3} />
                </div>
                <div className={styles.row}>
                    <IconProviders id={4} />
                    <IconProviders id={5} />
                </div>
                <div className={styles.row}>
                    <IconProviders id={6} />
                    <IconProviders id={7} />
                    <IconProviders id={8} />
                    <IconProviders id={9} />
                </div>
            </div>
        </div>
    )
}

export default Providers