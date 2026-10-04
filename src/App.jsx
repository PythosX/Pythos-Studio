import {useEffect,useState} from 'react'
import Lenis from 'lenis'
import {nav} from './data/navigation'
import Cursor from './components/Cursor'
import MagneticButton from './components/MagneticButton'
import Hero from './sections/Hero'
import Works from './sections/Works'
import Discover from './sections/Discover'
import Process from './sections/Process'
import Founder from './sections/Founder'
import Closing from './sections/Closing'
export default function App(){const[sc,setSc]=useState(false),[menu,setMenu]=useState(false)
useEffect(()=>{const rm=matchMedia('(prefers-reduced-motion: reduce)').matches;let l,t;if(!rm){l=new Lenis();const f=x=>{l.raf(x);t=requestAnimationFrame(f)};t=requestAnimationFrame(f)}
const s=()=>setSc(scrollY>60);addEventListener('scroll',s,{passive:true});return()=>{removeEventListener('scroll',s);cancelAnimationFrame(t);l?.destroy()}},[])
return <><Cursor/><header className={'nav'+(sc?' compact':'')}><a href="#" className="logo">PYTHOS STUDIO</a><nav aria-label="Primary" className="links">{nav.map(([n,h])=><a key={n} href={h}>{n}</a>)}</nav><span className="navcta"><MagneticButton>START A PROJECT</MagneticButton></span><button className="burger" aria-expanded={menu} aria-label="Menu" onClick={()=>setMenu(!menu)}>{menu?'CLOSE':'MENU'}</button></header>
<div className={'mmenu'+(menu?' open':'')}>{nav.map(([n,h])=><a key={n} href={h} onClick={()=>setMenu(false)}>{n}</a>)}</div>
<main><Hero/><Works/><Discover/><Process/><Founder/><Closing/></main></>}
