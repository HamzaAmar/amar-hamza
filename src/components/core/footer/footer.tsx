import React from 'react'
// import { Text } from '@components/ui'
// import Social from '../../ui/social'
import style from './footer.module.css'

const Footer = () => {
    return (
        <div className={style.container}>
            <div className={style.contact}>
                <h3>Thank you</h3>
                <p>
                    Hello thank you for the visit if you like my website and you
                    want to see more staff about me please follow me in social
                    media
                </p>
                {/* <Social /> */}
            </div>

            <div className={style.subscription}>
                <h3>Join the Newsletter</h3>
                <p>Please subscribe to our web site to see all new stuff</p>
                {/* <Text
                    name="subscribe"
                    buttonInside={true}
                    placeholder="yourname@gmail.com"
                    buttonText="Subscribe"
                /> */}
            </div>
            <div className={style.copyRight}>
                <p>© 2020 Hamza Miloud Amar. All Rights Reserved</p>
            </div>
        </div>
    )
}
export default Footer
