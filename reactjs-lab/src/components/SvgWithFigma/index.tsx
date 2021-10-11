import React from 'react'
import styles from './index.module.scss';
import image from './back-ground-image.svg';

export default function SvgWithFigma() {
    return (
        <div>
            <div>
                Complex button: <br />
            </div>
            <hr />
            <div className={styles.myButton}>
                Button
            </div>
            <br />
            <svg width="391" height="542" viewBox="0 0 391 542" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29 165.5C52.6667 106.833 178.928 -75.3361 306 35.9999C419.16 135.147 199.5 421 353 460.5C506.5 500 148 552.666 1 539C75.4446 430.217 192.034 412.926 29 165.5Z" fill="#932020" stroke="black" />
            </svg>
            <br />
            <div className={styles.box}></div>
            <br />
            <img src={image} width={300} />
            <br />
            <div className={styles.figmaStyle}>
                Get css from figma
            </div>
            <div
                style={{
                    backgroundColor: 'yellow',
                    padding: 20
                }}>
                <div style={{
                    backgroundImage: `url(${image})`,
                    objectFit: 'cover',
                    width: 100,
                    height: 50
                }}>
                    Background svg
                </div>
            </div>
            <br />

        </div>
    )
}
