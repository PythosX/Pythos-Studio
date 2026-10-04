import BackgroundVideo from '../components/BackgroundVideo'
import ImageFlow from '../components/ImageFlow'
import MagneticButton from '../components/MagneticButton'
export default function Hero(){return <section className="hero"><BackgroundVideo src="/videos/pythos-hero-bg.mp4" opacity={.4} overlay={.55}/><ImageFlow/><div className="hero-copy"><h1><span className="mask"><span>YOUR BUSINESS</span></span><span className="mask"><span>DESERVES TO BE SEEN.</span></span></h1><p className="fade">Pythos Studio builds premium digital experiences for businesses ready to stand out online.</p><div className="ctas fade"><MagneticButton>START A PROJECT</MagneticButton><a href="#work" className="link" data-cursor="EXPLORE">EXPLORE OUR WORK ↓</a></div></div></section>}
