import BackgroundVideo from '../components/BackgroundVideo'
import RevealText from '../components/RevealText'
import MagneticButton from '../components/MagneticButton'
import {nav,social,contact} from '../data/navigation'
export default function Closing(){return <><section className="sec trust"><small className="label">SELECTED CLIENTS</small><RevealText lines={['BUILT FOR BUSINESSES','THAT AIM HIGHER.']}/></section>
<section id="contact" className="cta"><BackgroundVideo lazy src="/videos/pythos-cta-bg.mp4" opacity={.25} overlay={.75}/><small>YOUR BUSINESS IS ALREADY GREAT.</small><RevealText as="h2" className="huge" lines={["LET'S MAKE",'THE INTERNET KNOW.']}/><MagneticButton href={'mailto:'+contact.email}>START A PROJECT</MagneticButton><b>PYTHOS STUDIO</b><p>Digital experiences for businesses ready to be seen.</p></section>
<footer><div><b>PYTHOS STUDIO</b><p>Digital experiences for businesses ready to be seen.</p></div><nav aria-label="Footer">{nav.map(([n,h])=><a key={n} href={h}>{n}</a>)}</nav><div>{social.map(([n,h])=><a key={n} href={h} target="_blank" rel="noreferrer">{n}</a>)}<a href={'mailto:'+contact.email}>Email</a><a href={contact.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a></div><small>© Pythos Studio</small></footer></>}
