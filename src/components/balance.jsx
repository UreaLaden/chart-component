import * as React from 'react';
import { Stack } from '@fluentui/react';
import { styles } from './balance.css';

const Balance = () => {
    return (
    <div className={styles.balanceContainer}>
        <Stack className={styles.infoContainer}>
            <div className={styles.text}>My Balance</div>
            <div className={styles.amount}>$921.48</div>
        </Stack>
        <div className={styles.image}>
            <div className={styles.circle}></div>
            <div className={styles.secondaryCircle}></div>
        </div>
    </div>)
}

export default Balance;