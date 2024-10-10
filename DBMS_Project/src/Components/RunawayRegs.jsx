import wildbeatslogo from '../assets/wildbeatslogo.png'
import styles from "./RunawayRegs.module.css"
import Header from "./Header.jsx"
import insta from '../assets/insta.png'
import gal1 from '../assets/gal1.png'
import gal2 from '../assets/gal2.png'
import gal3 from '../assets/gal3.png'
import gal4 from '../assets/gal4.png'
import gal5 from '../assets/gal5.png'
import gal6 from '../assets/gal6.png'

function RunawayRegs(){
  return (
    <div className={styles.runawayRegs}>
      <Header/>
      <div className={styles.runawayDisplay}>
        <div className={styles.heading}>
          <img src={wildbeatslogo} width="64px" height="64px" alt="wildbeatslogo"/>
          <h4 className={styles.head}>WildBeats Presents</h4>
        </div>
        <div className={styles.performance}>
          <div className={styles.bandimg}>
          <div className={styles.textrunaway}>
            <h1> RUNAWAY </h1>
            <h1> REGS </h1>
          </div>
          </div>
        </div>
        <div className={styles.participate}>
          <div className={styles.pink1}>
            <a href=""> <h2 style={{marginTop:`5px`}}> RSVP </h2> </a>
          </div>
          <div className={styles.pink2}>
            <a href=""> <h3 style={{marginTop:`10px`}}> VOLUNTEER </h3> </a>
          </div>
        </div>
        <div className={styles.textbox}>
          <p className={styles.text}>Upcoming Events</p>
        </div>
        <div className={styles.description}>
          <p> Lorem Ipsum is simply dummy text of the printing and typesettig industry. Lorem Ipsum has been the industry's standard.</p>
          <p></p>
          <div className={styles.org}>
            <b>Organizers </b>
          </div>
          <div className={styles.authors}>
            <div className={styles.a1}>
              <div className={styles.name}>
                <p> Namit Sai </p> <img src={insta} width="33.7px" height="33.7px"/>
              </div>
              <p> Batch 2023</p>
              <p> 1234567, namit@gmail.com</p>
            </div>
            <div className={styles.a1}>
              <div className={styles.name}>
                <p> Pavan Sai </p> <img src={insta} width="33.7px" height="33.7px"/>
              </div>
              <p> Batch 2023</p>
              <p> 1234567, pavan@gmail.com</p>
            </div>
          </div>
          <div className={styles.gallery}>
            <b style={{marginLeft:`400px`,fontSize:`40px`}}> Our Gallery </b>
            <p style={{marginLeft:`255px`,marginRight:`361px`}}> This gallery includes past events pics for better <pre>          understanding of freshers </pre></p>
            <div className={styles.photos1}>
              <img src={gal1} width="400px" height="250px" className={styles.img}/>
              <img src={gal2} width="400px" height="250px" className={styles.img}/>
              <img src={gal3} width="400px" height="250px" className={styles.img}/>
            </div>
            <div className={styles.photos1}>
              <img src={gal4} width="250px" height="250px" className={styles.img}/>
              <img src={gal5} width="450px" height="250px" className={styles.img}/>
              <img src={gal6} width="450px" height="250px" className={styles.img}/>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
export default RunawayRegs;