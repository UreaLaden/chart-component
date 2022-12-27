import { Stack } from '@fluentui/react';
import * as React from 'react';
import { styles } from './totals.css';

const Totals = () => {
    return (
        <div className={styles.container}>
            <Stack className={styles.infoContainer}>
                <div className={styles.text}>Total this month</div>
                <div className={styles.amount}>$478.33</div>
            </Stack>
            <Stack className={styles.stats}>
                <div className={styles.change}>+2.4%</div>
                <div className={styles.timeFrame}>from last month</div>
            </Stack>
        </div>
    )
}

export default Totals;