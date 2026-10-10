import {useRef} from 'react'
export default function MagneticButton({children,href='#contact',...p}){const r=useRef();
const mv=e=>{const b=r.current.getBoundingClientRect();r.current.style.transform=`translate(${(e.clientX-b.left-b.width/2)*.2}px,${(e.clientY-b.top-b.height/2)*.3}px)`}
return <a ref={r} href={href} className="btn" data-cursor="GO" onMouseMove={mv} onMouseLeave={()=>r.current.style.transform=''} {...p}>{children} <span className="arr">→</span></a>}
