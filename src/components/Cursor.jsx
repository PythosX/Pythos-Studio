import {useEffect,useRef,useState} from 'react'
export default function Cursor(){const r=useRef();const[l,setL]=useState('');const off=typeof matchMedia!=='undefined'&&matchMedia('(hover:none)').matches;
useEffect(()=>{if(off)return;let x=0,y=0,cx=0,cy=0,t;const m=e=>{x=e.clientX;y=e.clientY;const c=e.target.closest?.('[data-cursor]');setL(c?c.dataset.cursor:'')};
const loop=()=>{cx+=(x-cx)*.18;cy+=(y-cy)*.18;r.current&&(r.current.style.transform=`translate(${cx}px,${cy}px)`);t=requestAnimationFrame(loop)};loop();addEventListener('mousemove',m);return()=>{removeEventListener('mousemove',m);cancelAnimationFrame(t)}},[off]);
return off?null:<div ref={r} className="cursor" aria-hidden="true"><i className={l?'big':''}>{l}</i></div>}
