import {useEffect,useRef,useState} from 'react'
// Decorative background video. Direct /public path (no import glob). Lazy: loads when near viewport, pauses when off-screen.
export default function BackgroundVideo({src,mobileSrc,poster,className='',opacity=.35,overlay=.5,lazy=false}){
 const box=useRef(),vid=useRef()
 const rm=typeof matchMedia!=='undefined'&&matchMedia('(prefers-reduced-motion: reduce)').matches
 const[on,setOn]=useState(!lazy),[fail,setFail]=useState(false)
 const url=mobileSrc&&matchMedia('(max-width:800px)').matches?mobileSrc:src
 useEffect(()=>{if(rm)return;const io=new IntersectionObserver(([e])=>{if(e.isIntersecting)setOn(true);const v=vid.current;if(v)e.isIntersecting?v.play().catch(()=>{}):v.pause()},{rootMargin:'200px'});io.observe(box.current);return()=>io.disconnect()},[rm])
 useEffect(()=>{if(vid.current)vid.current.muted=true},[on])
 return <div ref={box} className={'bgv '+className} aria-hidden="true">{!rm&&on&&!fail&&<video ref={vid} autoPlay muted loop playsInline preload={lazy?'none':'metadata'} poster={poster} style={{'--o':opacity}}><source src={url} type="video/mp4" onError={()=>setFail(true)}/></video>}<div className="bgv-ov" style={{background:`color-mix(in srgb,var(--bg) ${overlay*100}%,transparent)`}}/></div>}
