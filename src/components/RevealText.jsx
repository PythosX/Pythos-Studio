import {useReveal} from '../lib/hooks'
export default function RevealText({lines,as:T='h2',className='',delay=0}){const r=useReveal();return <T ref={r} className={'reveal '+className}>{lines.map((l,i)=><span className="mask" key={i}><span style={{transitionDelay:`${delay+i*.12}s`}}>{l}</span></span>)}</T>}
