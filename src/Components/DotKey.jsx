import React from 'react'
import styles from "./Branch.module.css"
import { useNavigate } from 'react-router-dom'

const DotKey = () => {
    let navigate =useNavigate()
    let handleBack =() => {
        navigate('/home')
        console.log("hello")
    }

    return (<>

        <div className={styles.container}>

            <div className={styles.head}>
                <div className={styles.head_but}>
                    <button onClick={handleBack}>
                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="12.5" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
                </button>
                </div>
                <p className={styles.head_brand}>Dot & Key</p>
            </div>

            <div className={styles.middle_parent}>
                <div className={styles.middle_part1}>
                    <img className={styles.images} 
                                src="https://vanitywagon.in/cdn/shop/collections/Dot-_-Key-Top-Banner_2268x630.jpg?v=1665826237" />
                    <img className={styles.logo} 
                                src="https://content.jdmagicbox.com/comp/thiruvananthapuram/c5/0471px471.x471.230909103916.l6c5/catalogue/dot-and-key-balaramapuram-thiruvananthapuram-stationery-shops-49l6gda3uf.jpg" alt="" />
                </div>

                <div className={styles.middle_part2}>
                    <div className={styles.info}>
                        <p style={{ marginLeft: '1rem', fontSize: '1.5rem', fontWeight: 'lighter' }}>Dot & Key</p>
                        <div >
                        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="17.5" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                        </div>
                    </div>
                    <div className={styles.but}>

                        <div className={styles.but_part}>
                            <button className={styles.but_style}>Eligibility</button>
                        </div >

                        <div className={styles.but_part}>
                            <button className={styles.but_style}>Instructions</button>
                        </div>
                        <div style={{ borderRight: '0rem' }} className={styles.but_part}>

                            <button className={styles.but_style}>Payouts</button>
                        </div>
                    </div>

                </div>
            </div>

            <div className={styles.content}>

                <div className={styles.eligibility}>
                    <h4>Eligibility Criteria</h4>
                    <ul style={{ marginTop: '0.5rem' }}>
                        <li><p>Minimun 20000 followers</p></li>
                        <li><p>Inclusive Beauty,Skincare,Haircare,Makeup,
                            <br />Fragrances,Beauty Tools and Personal Care</p></li>

                    </ul>

                </div>
                <div className={styles.instructions}>
                    <h4>Campaign Instructions</h4>
                    <ul>
                        <li> <p style={{ marginTop: '0.5rem' }}>
                            Once hired,influencers have:<br />
                            1.Select and submit the products in milstone 1 that they want to get barter.<br />
                            2.Submit other deliverables in further milstonesas required.</p></li>
                    </ul>
                </div>
                <div className={styles.payouts}>
                    <h4>Payouts</h4>
                    <ul style={{ marginTop: '0.5rem' }}>
                        <li><p>
                            You will get the products delivered to you on approval of milstone 1.
                        </p></li>
                        <li><p>Products wroth of INR undefined</p></li>
                    </ul>

                </div>

            </div>



            <footer className={styles.foot} >
                <div className={styles.last}>
                    <div className={styles.footpart}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512"><path d="M480 32c0-12.9-7.8-24.6-198-29.6s-25.7-2.2-34.9 6.9L381.7 53c-48 48-113.1 75-181 75l-8.7 0-32 0-96 0c-35.3 0-64 28.7-64 64l0 96c0 35.3 28.7 64 64 64l0 
                    128c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-128 8.7 0c67.9 0 133 27 181 75l43.6 43.6c9.2 9.2 22.9 11.9 34.9 6.9s19.
                    8-16.6 19.8-29.6l0-147.6c18.6-8.8 32-32.5 32-60.4s-13.4-51.6-32-60.4L480 32zm-64 76.7L416 240l0 131.3C357.2 317.8 280.5 288 
                     200.7 288l-8.7 0 0-96 8.7 0c79.8 0 156.5-29.8 215.3-83.3z"/></svg>
                        <p>Catorgies</p>
                    </div>
                    <div className={styles.footpart}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path d="M160 368c26.5 0 48 21.5 48 
                   48l0 16 72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6L448 368c8.8 0 16-7.2 16-16l0-288c0-8.8-7.2-16-16-16L64 48c-8.8 0-16 7.2-16 16l0 
                   288c0 8.8 7.2 16 16 16l96 0zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-21.3 0-6.4 0-.3 
                   0-4 0-48-48 0-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-138.
                   7 0L208 492z"/></svg>
                        <p>Messages</p>
                    </div>
                    <div className={styles.footpart}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="17.5" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 
                   80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.
                   7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.
                   7L29.7 512C13.3 512 0 498.7 0 482.3z"/></svg>
                        <p>Profile</p>
                    </div>
                </ div>
            </footer>
        </div>

    </>
    )
}

export default DotKey
