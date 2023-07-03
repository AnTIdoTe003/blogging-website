import Image from 'next/image'
import './home.scss'
import Hero from '../../public/hero.png'
export default function Home() {
  return (
    <main>
      <div className="home-wrapper">
        <div className="home-container">
          <div className="home-content">
            <div className="home-left">
            <div className="home-text">
              <h1>Better design for your digital products.</h1>
              <p>Turning your Idea into Realtiy. We bring together the teams from the global tech industry.</p>
            </div>
            <div className="home-btn">
              <button>See our works</button>
            </div>
            </div>
            <div className="home-right">
              <Image className='home-right-img' alt='' src={Hero} width={500} height={500}/>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
