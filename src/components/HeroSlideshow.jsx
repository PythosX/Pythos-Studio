import {useCallback,useEffect,useRef,useState} from 'react'
import {heroImages} from '../lib/assets'
const ph=['linear-gradient(135deg,#6b5b95,#d98c7a)','linear-gradient(135deg,#3f6f8f,#9cc3d3)','linear-gradient(135deg,#8a5a73,#f0b27a)','linear-gradient(135deg,#4a5d8f,#b9a6e0)']
const pad=n=>String(n).padStart(2,'0')
export default function HeroSlideshow({ms=5500}){
 const slides=heroImages.length?heroImages:ph,n=slides.length
 const[i,setI]=useState(0),[hold,setHold]=useState(false),x0=useRef(null)
 const go=useCallback(d=>setI(v=>(v+d+n)%n),[n])
 useEffect(()=>{if(hold||n<2)return;const t=setTimeout(()=>go(1),ms);return()=>clearTimeout(t)},[i,hold,go,ms,n])
 useEffect(()=>{if(heroImages.length>1){const im=new Image();im.src=heroImages[(i+1)%n]}},[i,n])
 useEffect(()=>{const k=e=>{if(e.key==='ArrowRight')go(1);if(e.key==='ArrowLeft')go(-1)};addEventListener('keydown',k);return()=>removeEventListener('keydown',k)},[go])
 return <div className="ss" role="region" aria-roledescription="carousel" aria-label="Featured work" onMouseEnter={()=>setHold(true)} onMouseLeave={()=>setHold(false)} onTouchStart={e=>x0.current=e.touches[0].clientX} onTouchEnd={e=>{const d=e.changedTouches[0].clientX-x0.current;if(Math.abs(d)>50)go(d<0?1:-1)}}>
  {slides.map((s,k)=><div key={k} className={'slide'+(k===i?' on':'')} aria-hidden={k!==i}>{heroImages.length?<img className="im" src={s} alt="" loading={k===0?'eager':'lazy'} decoding="async"/>:<div className="im" style={{background:s}}/>}</div>)}
  <div className="ss-ctl"><span className="ss-count" aria-live="polite">{pad(i+1)} / {pad(n)}</span>
   <div className="ss-bars">{slides.map((_,k)=><button key={k} aria-label={'Slide '+(k+1)} aria-current={k===i} onClick={()=>setI(k)}><i key={k===i?'a'+i:'b'} style={k===i?{animationDuration:ms+'ms',animationPlayState:hold?'paused':'running'}:undefined} className={k<i?'full':''}/></button>)}</div>
   <div className="ss-arrows"><button aria-label="Previous slide" onClick={()=>go(-1)} data-cursor="PREV">←</button><button aria-label="Next slide" onClick={()=>go(1)} data-cursor="NEXT">→</button></div></div></div>}
