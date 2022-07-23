import styles from './Navbar.module.css'
import clsx from 'clsx'
export default function Nabbar()
{
    return (
        <div className={styles.navbar}>
            <div className={styles.navbar_icon}>
                <a  aria-hidden="false" aria-label="Facebook" href="/" role="link" tabIndex={0}><svg viewBox="0 0 36 36"  fill="url(#jsc_s_d)" height="40" width="40">
                <defs><linearGradient x1="50%" x2="50%" y1="97.0782153%" y2="0%" id="jsc_s_d">
                <stop offset="0%" stop-color="#0062E0"></stop>
                <stop offset="100%" stop-color="#19AFFF"></stop>
                </linearGradient></defs>
                <path  d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"></path>
                <path style={{fill:"white"}} d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"></path></svg></a>
            </div>
            <div className={clsx(styles.navbar_search, styles.navbar_search_unclicked)}>
                <label htmlFor={styles.navbar_search_input}>
                <svg className={styles.navbar_search_icon} fill="currentColor" viewBox="0 0 16 16" width="1em" height="1em" >
                    <g fill-rule="evenodd" transform="translate(-448 -544)"><g fill-rule="nonzero"><path d="M10.743 2.257a6 6 0 1 1-8.485 8.486 6 6 0 0 1 8.485-8.486zm-1.06 1.06a4.5 4.5 0 1 0-6.365 6.364 4.5 4.5 0 0 0 6.364-6.363z" transform="translate(448 544)"></path><path d="M10.39 8.75a2.94 2.94 0 0 0-.199.432c-.155.417-.23.849-.172 1.284.055.415.232.794.54 1.103a.75.75 0 0 0 1.112-1.004l-.051-.057a.39.39 0 0 1-.114-.24c-.021-.155.014-.356.09-.563.031-.081.06-.145.08-.182l.012-.022a.75.75 0 1 0-1.299-.752z" transform="translate(448 544)"></path><path d="M9.557 11.659c.038-.018.09-.04.15-.064.207-.077.408-.112.562-.092.08.01.143.034.198.077l.041.036a.75.75 0 0 0 1.06-1.06 1.881 1.881 0 0 0-1.103-.54c-.435-.058-.867.018-1.284.175-.189.07-.336.143-.433.2a.75.75 0 0 0 .624 1.356l.066-.027.12-.061z" transform="translate(448 544)"></path><path d="m13.463 15.142-.04-.044-3.574-4.192c-.599-.703.355-1.656 1.058-1.057l4.191 3.574.044.04c.058.059.122.137.182.24.249.425.249.96-.154 1.41l-.057.057c-.45.403-.986.403-1.411.154a1.182 1.182 0 0 1-.24-.182zm.617-.616.444-.444a.31.31 0 0 0-.063-.052c-.093-.055-.263-.055-.35.024l.208.232.207-.206.006.007-.22.257-.026-.024.033-.034.025.027-.257.22-.007-.007zm-.027-.415c-.078.088-.078.257-.023.35a.31.31 0 0 0 .051.063l.205-.204-.233-.209z" transform="translate(448 544)"></path></g></g>
                </svg>
                </label>
                <input placeholder="Tìm kiếm trên Facebook" id={styles.navbar_search_input}/>
            </div>
        </div>
    )
}