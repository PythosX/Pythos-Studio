import {useState} from 'react'
import {categories} from '../data/categories'
import {worksFor} from '../lib/assets'
import Img from '../components/Img'
import RevealText from '../components/RevealText'
import Overlay from '../components/Overlay'
export default function Works(){const[open,setOpen]=useState(null)
const tilt=e=>{const b=e.currentTarget.getBoundingClientRect();e.currentTarget.style.transform=`perspective(800px) rotateY(${((e.clientX-b.left)/b.width-.5)*6}deg) rotateX(${-((e.clientY-b.top)/b.height-.5)*6}deg)`}
return <section id="work" className="sec"><small className="label">01 — OUR WORKS</small><RevealText lines={['HERE IS WHAT','WE BUILD.']}/><div className="cards">{categories.map((c,i)=><button key={c.slug} className="card" style={{marginTop:i%2?'3rem':0}} onMouseMove={tilt} onMouseLeave={e=>e.currentTarget.style.transform=''} onClick={()=>setOpen(c)} data-cursor="OPEN"><small>{c.name.toUpperCase()}</small><p>{c.tagline}</p><Img src={worksFor(c.slug)[0]} alt={c.name+' preview'}/><div className="meta"><span>0{c.projects.length} PROJECTS</span><span className="more">SEE MORE →</span></div></button>)}</div>{open&&<Overlay cat={open} onClose={()=>setOpen(null)}/>}</section>}
