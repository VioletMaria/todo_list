import React from "react";
import styles from './myTextStyle.module.css'

const TaskStyle = props => {
    return(
        <div className={styles.noLineThrough}>
            {props.text}
        </div>
    )
}

export default TaskStyle;