import * as React from 'react';
import { styles } from './card.css';

const Card = (props) => {
    return (
        <div className={styles.cardContainer}>
            <h2 className={styles.title}>Spending - Last 7 Days</h2>
            {props.children}
        </div>
    )
}

export default Card;