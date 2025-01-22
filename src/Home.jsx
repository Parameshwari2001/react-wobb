import React from 'react'
import styles from './Home.module.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
// import { fas } from '@awesome.me/kit-KIT_CODE/icons'


const Home = () => {
    let navigate=useNavigate()

    let handletrends=()=>{
        navigate('/trend')
        console.log("trnds")
    }
    let handleAaravati=()=>{
        navigate('/aaruvi')
    }
    let handleMamaearth=()=>{
        navigate('/mamaearth')
    }
    let handleWow=()=>{
        navigate('/wow')
    }
    let handleGiva=()=>{
        navigate('/giva')
    }
    let handleNykka=()=>{
        navigate('/nykka')
    }
    let handleDotKey=()=>{
        navigate('/dotkey')
    }
    let handleUc=()=>{
        navigate('/uc')
    }
    let handleMeesho=()=>{
        navigate('/meesho')
    }
    



    // let handleAaravati=()=>{

    // }
    // let handleDotKey=()=>{
    // 
    // } 
    // let handleGiva=()=>{
    // 
    // }
    // let handleMamaearth=()=>{
    // 
    // }
    // let handleMeesho=()=>{
    // 
    // }
    // let handleNykka=()=>{
    // 
    // }
    // let handletrends=()=>{
    // 
    // }
    // let handleUc=()=>{
    // 
    // }
    // let handleWow=()=>{
    // 
    // }



    return (
        <div className={styles.container} >
            <div className={styles.attach}>
                <header className={styles.first}>
                    <h1 className={styles.wobb}>Hi,Wobber</h1>
                    <button className={styles.wobbutton}>
                        🔔
                    </button>
                </header>
                <main >
                    <div className={styles.symbols}>
                        <div className={styles.part1}>
                        <svg  xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path d="M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"/></svg>
                        </div>
                        <ul className={styles.part2} >
                            <div className={styles.list}>All</div>
                            <div className={styles.list}>Applied</div>
                            <div className={styles.list}>Hired</div>
                            <div style={{borderRight:'0em'}}
                            className={styles.list}>Closed</div>
                        </ul>
                    </div>
                </main>
            </div>
            <div className={styles.catagories}>
                <div className={styles.row}>
                    <div className={styles.boxes} >
                        <div className={styles.box1}>
                            <button onClick={handletrends}>
                            <img   className={styles.images} src="https://static.wixstatic.com/media/3f3442_df728349d21e4ce0ba0343165c13bb5a~mv2.jpg/v1/fill/w_1920,h_1080,al_c/3f3442_df728349d21e4ce0ba0343165c13bb5a~mv2.jpg=" />
                            </button>
                        </div>
                        <div className={styles.parent_logo}>
                            <img className={styles.logo} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7_d3eU4wojCrD5_-jIjnyQBd89y-ddUp16lrIc7bn2V29nQCyf2FT230BMjays4wCINU&usqp=CAU" alt="" />
                        </div>
                        <div>
                            <div className={styles.boxtext}>
                                <div style={{ marginBottom: '0.70em' }}>Trends</div>
                                <div style={{ fontWeight: 'lighter' }}> Barter Worth</div>
                                <div>INR 1096</div>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                    <div className={styles.boxes}>

                        <div className={styles.box1}>
                            <button onClick={handleAaravati}>
                            <img className={styles.images}
                                src="https://aaruvi.com/cdn/shop/files/Main_Banner_Aaruvi_Ruchi_Verma_Updated_03_jan_2022_4.jpg?v=1672749553&width=3840" />
                        </button>
                        </div>
                        <div className={styles.parent_logo}>
                            <img className={styles.logo}
                       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBWIf8w6Sdh3IBOQbrdswgeHK0Pq4CA8CGJA&s" alt="" />
                
                        </div>
                        <div>
                            <div className={styles.boxtext}>
                                <div style={{ marginBottom: '0.70em' }}>Trends</div>
                                <div style={{ fontWeight: 'lighter' }}> Barter Worth</div>
                                <div>INR 1096</div>
                            </div>
                            <div>
                            </div>
                        </div>


                    </div>
                    <div className={styles.boxes}>

                        <div className={styles.box1}>
                            <button onClick={handleMamaearth}>
                            <img className={styles.images}
                                src="https://images.yourstory.com/cs/21/0a385fc03e6011e999df3d1594bbde2c/Imageqanx-1589042485564.jpg?mode=crop&crop=faces&ar=2%3A1&format=auto&w=1920&q=75" />
                       </button>
                        </div>
                        <div className={styles.parent_logo}>
                            <img className={styles.logo}

                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAnFBMVEX///8Aru+Cw0EArO8Aqu4AqO7x+/57wDIAr+/2+/F9wTeAwj3f79GOyFTJ6/uAwjrm89t0y/SA0PV4vysut/Bjw/Oc2vfz+e2r3/nB6PqFxEaw2Iy225Xs9eP4/f6g0HPM5rba7Mnd8/y73ZzA4KSazmlNwPLF4quUy16n1H/i8NXg9P3Q57uZ2Pc5u/Hp+P2r1YRuuw2RylnE6voY6pzjAAAGbElEQVR4nO2Ye3OqPBDGEVBuIioo3hW8X+nl+3+3N9lNANue1jPT08688/z+adgkuA/Z7CY1DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPwgXhzHh+yd9RCGk1PYNrph+htefQee/huYZhBf3vauwm2WxaFxjPc/7dn3sH/xu9ySCs3g5d2I7dTYT8z2JJz9sGvfQvriBE5doRl4b8cIhevtNFwen37au+8gjEzzbg3N6J3Cw9SYLbPn1XH50959A3tHaHLm/PAnhau9cdoYUy/bfPaqTn+XJIPRQraL6y1JeqNW1bsY94Tp1hsvalPOw4Gw9c/0MBbt3TWvdedX8cZkMDzXf2a+3k4mh2k9IWazbRgeni41x0/TMJgs5aCtFBWt2u12Nq8UZk+HcLt/p/RTfYltWY2GZSfCx5FrU9sd6W5hkaaGXbMtehbZLHsovsmNplh2T3+W847eKLqtXvkz3pPjB4EZ+M6L1piF0hQEkWOu9LApjYpikThCEuU7jhOv9T5Mj3EkZjjB26z6CWNyRmK5rVFTtRvNPncPS4uwDdnWSuzK1HL1fDthiUXDKqfYO/Uz6cQ3FUHMerI40CZTaCBmsTZ4SiGp1AonS/WWwHlXG/9EXnnTsG5Vu9Eck7e1buFvh+bsakY3qR4sljOw61N4FT2ZNSo9bWlzgrqJPO7G5fO8ptDZK4VmaQriRwNVeWvV/FRNV3aPbBFrIkxtu5IwZgVWJUQ3m/ILLFwZngI1jPbiE317x48ccu/AakQE+r5DXUFIw/g7CPtzTWEUpFqhiHKfW876MYEFB6Hb67naW90kd0dNtz/O87zTZ91F+VGsXf9m6VDs3/gL9EihPRh1xJwRvUduVWNOwqJVml7IP5khT3E0y7rz+WnjqEUrt96sna1T9RD5/nZuVGs4Wx/4k7yv/h8yZM+E4y0lMadVkK7JnTgqU8WA0s2r6LVLx3usVQ7kL+Au5C7VWZUW2xqI1lQ6xVtnRTVAJIp2WcFmkTJ5OiYJUujfVQuWtaSVdh47ifZKJ9hdjkNyl6wqPS5aC+q2RTrNadlt2ZPbZRzyfpafatFSU1qv1H0TD3L/BBOyX6RCf187cRobqd/flArTmsL7M42zku0uLbru+QJeGcqbV0vHmdx9yjVBIUqfDmG5cmobUhcvnJTU4n61fKKEunpOIhJpTDttv9msjxyHvEze6niYBJEKTa1Ql/WPFJ6qNqerv1FIAVtXmNCIHpfDDxWyLFbIkU3Jduw2a+k0kVtOJQnfj2qZc+M4orjpivCQQnryJsE3KtzVU/9na1gpHDXrU+RrMse8w9/K2U931ocUxt+vUGUiu9m0HlVYqI/RVAspXtNmLRHhO/FRash4YZ04dn5TYUICB52iRdv0EYX8UdzRucj1a+ZcyJeC49M6YwWUEaNtO/U4+ax/RSH7LWsAJyKZS79SWCZdo0XhKhMWJ7/7UwgJCGTeZIWbX1HIEUenm56uh18p5FfKM19eliJer7IAtqWjEwpSqWbv39VDrfAQ6Eld758p5Npv9fJixPXu/LVCrv1Jp8jpmGtfDZ1qInN2uVz20/D5Ugo4ztMs0s7fKzySXZzz/Ofuv9uHA04wlrouSNPrF9VC9espXED4GBLIq5Af8cVgzar1UTWSw8h1rXBV5lohzDMrhcbfKOxXCseVwtdSYX5XLJpyd52bpUJeYlLIOYnk1K8e4r5Cv5Oa9buFLzV4d3cLPkhzNOv9GukB8sxKu1IpDP9CYUGXX1JIFz1WuKArEdXDce0K0aTTnSqR1Ow1S4V92eTLRXV9bNgNdc1Pw1KQvh92Tb80OVQh5Wk8qBSe1PnAl1eRfSwOB0rhWt4sH1Ro5DtXKTTym6sUGueBq880+UAEqbgNiTv+lacs+olWuJD3EFZoXMXZjkNycZX/F6Ar16Aof2kzkXclEaehvp+n00BahGmir0KnrTjFlTl3voxEWEdLMuzDKrOuZftBhcKfotD/fmhVzZq1GF37/euwU/s/TVFozxetsimnqzGLzrAv5owrfZL2fr1e7081i5cJ02Z1qtURz6sXlbSdndKPuu6HAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/xv+AyW1d0ydA1C1AAAAAElFTkSuQmCC" alt="" />
                        </div>
                        <div>
                            <div className={styles.boxtext}>
                                <div style={{ marginBottom: '0.70em' }}>Trends</div>
                                <div style={{ fontWeight: 'lighter' }}> Barter Worth</div>
                                <div>INR 1096</div>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.boxes}>
                        <div className={styles.box1}>
                        <button onClick={handleWow}>
                            <img className={styles.images}
                                src="https://indiantelevision.com/sites/default/files/styles/smartcrop_800x800/public/images/tv-images/2024/08/12/a17.jpg?itok=Hpw6CLS7" />
                        </button>
                        </div>
                        <div className={styles.parent_logo}>
                            <img className={styles.logo}
                                src="https://img-cdn.thepublive.com/fit-in/1200x675/entrackr/media/post_attachments/wp-content/uploads/2022/05/wow.jpg" alt="" />
                        </div>
                       
                        <div>
                            <div className={styles.boxtext}>
                                <div style={{ marginBottom: '0.70em' }}>Trends</div>
                                <div style={{ fontWeight: 'lighter' }}> Barter Worth</div>
                                <div>INR 1096</div>
                            </div>
                            <div>
                            </div>
                        </div>

                    </div>
                    <div className={styles.boxes}>
                        <div className={styles.box1}>
                        <button onClick={handleGiva}>
                            <img className={styles.images}

                                src="https://www.giva.co/cdn/shop/files/Red_Ronance_Gold_Bnr_hero_phone_800x375-min_9dbd3053-e1d4-42a8-a595-7a54444be492.jpg?v=1705423868&width=900" />
                        </button>
                        </div>
                        <div className={styles.parent_logo}>
                            <img className={styles.logo}
                                src="https://images.yourstory.com/cs/images/companies/5943611c85ec-Logo400x400-1614689011277.jpg?fm=auto&ar=1%3A1&mode=fill&fill=solid&fill-color=fff&format=auto&w=384&q=75" alt="" />
                        </div>
                        <div>
                            <div className={styles.boxtext}>
                                <div style={{ marginBottom: '0.70em' }}>Trends</div>
                                <div style={{ fontWeight: 'lighter' }}> Barter Worth</div>
                                <div>INR 1096</div>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.boxes}>
                        <div className={styles.box1}>
                            <button onClick={handleNykka}>
                            <img className={styles.images}
                             
                             src="https://www.evanik.com/wp-content/uploads/2022/09/nykaa-1.png" />
                       </button>
                        </div>
                        <div className={styles.parent_logo}>
                            <img className={styles.logo} 
                            src="https://tradebrains.in/wp-content/uploads/2021/10/nykaa-logo.jpg" alt="" />
                        </div>
                        <div>
                            <div className={styles.boxtext}>
                                <div style={{ marginBottom: '0.70em' }}>Trends</div>
                                <div style={{ fontWeight: 'lighter' }}> Barter Worth</div>
                                <div>INR 1096</div>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.boxes}>
                            <button onClick={handleDotKey}>
                        <div className={styles.box1}>
                            <img className={styles.images}
                                src="https://vanitywagon.in/cdn/shop/collections/Dot-_-Key-Top-Banner_2268x630.jpg?v=166582623" />
                        </div>
                            </button>
                        <div className={styles.parent_logo}>
                            <img className={styles.logo}
                                src="https://content.jdmagicbox.com/comp/thiruvananthapuram/c5/0471px471.x471.230909103916.l6c5/catalogue/dot-and-key-balaramapuram-thiruvananthapuram-stationery-shops-49l6gda3uf.jpg" alt="" />
                        </div>
                        <div>
                            <div className={styles.boxtext}>
                                <div style={{ marginBottom: '0.70em' }}>Trends</div>
                                <div style={{ fontWeight: 'lighter' }}> Barter Worth</div>
                                <div>INR 1096</div>
                            </div>
                            <div>
                            </div>
                        </div>

                    </div>
                    <div className={styles.boxes}>
                        <div className={styles.box1}>
                            <button onClick={handleUc}>
                            <img className={styles.images}
                                src="https://img-cdn.thepublive.com/fit-in/1200x675/entrackr/media/post_attachments/wp-content/uploads/2024/05/Urban-company-1.jpg" />
                        </button>
                        </div>
                        <div className={styles.parent_logo}>
                            <img className={styles.logo}
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvsiCUd5RxzxOhozbW-uRfYvWsVOkyFI4wlw&s" alt="" />
                        </div>
                        <div>
                            <div className={styles.boxtext}>
                                <div style={{ marginBottom: '0.70em' }}>Trends</div>
                                <div style={{ fontWeight: 'lighter' }}> Barter Worth</div>
                                <div>INR 1096</div>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.boxes}>
                        <div className={styles.box1}>
                            <button onClick={handleMeesho}>
                            <img className={styles.images}
                                src="https://img-cdn.thepublive.com/fit-in/1200x675/filters:format(webp)/afaqs/media/post_attachments/db52dea3e82222c071501830e3dc68b6f4fc4c0f689866f1c0f40311e30eb1ad.jpg" />
                       </button>
                        </div>
                        <div className={styles.parent_logo}>
                            <img className={styles.logo}
                                src="https://images.moneycontrol.com/static-mcnews/2023/06/Meesho-682x435.jpg?impolicy=website&width=1600&height=900" alt="" />
                        </div>
                        <div>
                            <div className={styles.boxtext}>
                                <div style={{ marginBottom: '0.70em' }}>Trends</div>
                                <div style={{ fontWeight: 'lighter' }}> Barter Worth</div>
                                <div>INR 1096</div>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <footer className={styles.foot} >
            <div className={styles.last}>
                    <div className={styles.footpart}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512"><path d="M480 32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9L381.7 53c-48 48-113.1 75-181 75l-8.7 0-32 0-96 0c-35.3 0-64 28.7-64 64l0 96c0 35.3 28.7 64 64 64l0 128c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-128 8.7 0c67.9 0 133 27 181 75l43.6 43.6c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-147.6c18.6-8.8 32-32.5 32-60.4s-13.4-51.6-32-60.4L480 32zm-64 76.7L416 240l0 131.3C357.2 317.8 280.5 288 200.7 288l-8.7 0 0-96 8.7 0c79.8 0 156.5-29.8 215.3-83.3z"/></svg>
                                         <p>Catorgies</p>
                    </div>
                    <div className={styles.footpart}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path d="M160 368c26.5 0 48 21.5 48 48l0 16 72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6L448 368c8.8 0 16-7.2 16-16l0-288c0-8.8-7.2-16-16-16L64 48c-8.8 0-16 7.2-16 16l0 288c0 8.8 7.2 16 16 16l96 0zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-21.3 0-6.4 0-.3 0-4 0-48-48 0-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-138.7 0L208 492z"/></svg>
                        <p>Messages</p>
                    </div>
                    <div className={styles.footpart}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="17.5" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"/></svg>
                        <p>Profile</p>
                    </div>
                </ div>
            </footer>
        </div>
    )
}

export default Home
