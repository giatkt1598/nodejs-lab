import { Slider } from 'antd';
import React, { useState } from 'react'
import styles from "./index.module.scss";

export default function ButtonWithPseudoClass() {
    const [width, setWidth] = useState(30);
    return (
        <div className="sandbox">
            <span
                style={{ width: width }}
                className={styles.myButton}>
                <span>Button</span>
            </span>
            <Slider onChange={(value) => setWidth(value)} min={30} max={1000} />
        </div>
    )
}
