import {useEffect} from 'react'
import Img from './Img'
import {worksFor} from '../lib/assets'
export default function Overlay({cat,onClose}){useEffect(()=>{const k=e=>e.key==='Escape'&&onClose();addEventListener('keydown',k);document.body.style.overflow='hidden';return()=>{removeEventListener('keydown',k);document.body.style.overflow=''}},[onClose]);
const imgs=worksFor(cat.slug)
return <div className="overlay" role="dialog" aria-modal="true" aria-label={cat.name}><button className="close" onClick={onClose} data-cursor="CLOSE">CLOSE ✕</button><h2 className="big">{cat.name.toUpperCase()}</h2><div className="plist">{cat.projects.map((p,i)=><a key={i} href={p.url} className="proj" data-cursor="VIEW PROJECT"><Img src={imgs[i]} alt={p.name}/><div><small>0{i+1} — {cat.name}</small><h3>{p.name}</h3><p>{p.description}</p><span>VIEW PROJECT <b className="arr">→</b></span></div></a>)}</div></div>}
