import Img from './Img'
import {heroImages} from '../lib/assets'
const rows=[{dir:'l',s:70},{dir:'r',s:90},{dir:'l',s:80}]
export default function ImageFlow(){const base=heroImages.length?heroImages:Array.from({length:8},()=>undefined)
return <div className="flow" aria-hidden="true">{rows.map((r,ri)=>{const items=base.map((_,i)=>base[(i+ri*3)%base.length]);return <div className="row" key={ri}><div className={'track '+r.dir} style={{animationDuration:r.s+'s'}}>{[...items,...items].map((s,i)=><div className="tile" key={i} style={{width:150+((i*37+ri*53)%110),transform:`translateY(${((i*17)%5-2)*6}px) rotate(${((i%5)-2)*.6}deg)`,opacity:.45+((i*13)%5)*.1}}><Img src={s}/></div>)}</div></div>})}</div>}
