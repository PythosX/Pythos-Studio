import {steps} from '../data/categories'
import {useProgress} from '../lib/hooks'
export default function Process(){const[r,p]=useProgress();const a=Math.min(4,Math.floor(p*5))
return <section id="process" ref={r} className="sticky-sec" style={{height:'400vh'}}><div className="stick col"><small className="label">PROCESS</small><h2 className="big">HOW WE BUILD.</h2><p className="sub">A simple process. A better digital experience.</p><div className="line"><i style={{width:p*100+'%'}}/></div><ol className="steps">{steps.map(([n],i)=><li key={n} className={i<=a?'on':''}>{n}</li>)}</ol><p className="desc" aria-live="polite">{steps[a][1]}</p></div></section>}
