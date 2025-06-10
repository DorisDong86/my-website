import React from 'react';
import styles from "../../css/time/TimeColumn.module.css";
import TimeUnit from './TimeUnit';

function TimeColumn({index, types}) {
    return (
        <div className={styles.TimeColumnContainer}>
            <div className={styles.label}>{index}:00</div>
            {
                types.map((type, i) => {
                    return (
                        <TimeUnit key={i} idx={index*2+i} initColor={type.color} initContent={type.content} />
                    );
                })
            }
        </div>
    );
}

export default TimeColumn;