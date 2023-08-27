import Head from 'next/head';
import styles from '../styles/Home.module.css';
import localFont from 'next/font/local'

const myFont = localFont({ src: './karmaticarcade.woff2' })

export default function Home() {
  return (
    <div>
      <Head>
        <title>De Anza Hacks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={myFont.className}>
          De Anza Hacks
        </h1>
        <h2>
          Cupertino's largest collegiate hackathon.
        </h2>

        <p>
          Questions about the event or interest in sponsoring? 
          <br />
          Reach out at <a href="mailto:team@deanzahacks.com">team@deanzahacks.com</a>
          <br /><br />
          <span className="date"><b><i>October 21st and 22nd</i></b></span>
        </p>

        <a href="https://forms.gle/e6DMCyD4j4ivxs7f9" target="_blank" rel="noopener noreferrer">
          <button>
            Register now!
          </button>
        </a>
        <p></p>
        <h3>Frequently Asked Questions</h3>
        <div className="faq">
          <div className="qa">
            <b>What's a hackathon?</b>
            <p>A hackathon is an educational event where coders can create new things—you can make apps, websites, hardware hacks, etc.</p>
          </div>
          <div className="qa">
            <b>Who can participate?</b>
            <p>Any college student can participate. High school students and recent grads are not permitted.</p>
          </div>
          <div className="qa">
            <b>How do I join a team?</b>
            <p>You can form your own team of four, or you can join us at a team mixer at the beginning of the hackathon and meet others to form a team.</p>
          </div>
          <div className="qa">
            <b>Does this cost money?</b>
            <p>No! Thanks to the generous support of our sponsors, De Anza Hacks is free for everyone! Food, swag, and other costs are covered.</p>
          </div>
          <div className="qa">
            <b>What should I bring?</b>
            <p>Bring a valid student ID, a laptop, and chargers. Power strips, sleeping bags, and toiletries are highly recommended.</p>
          </div>
          <div className="qa">
            <b>What if I can't code?</b>
            <p>No problem! We are accepting people regardless of experience. We will have workshops where you can learn.</p>
          </div>
        </div>
      </main>

      <footer>
        © 2023 De Anza Hacks.
        <br />
        Fiscally sponsored by The Hack Foundation. 
      </footer>
    </div>
  )
}
