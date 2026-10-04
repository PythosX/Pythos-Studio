// Auto-discovery: drop files into the folders; they appear after reload/rebuild. No lists to edit.
const ext='{jpg,jpeg,png,webp,avif}', o={eager:true,query:'?url',import:'default'}
const hero=import.meta.glob('../assets/hero-flow/*.'+ext,o)
const works=import.meta.glob('../assets/works/*/*.'+ext,o)
const founder=import.meta.glob('../assets/founder/*.'+ext,o)
export const heroImages=Object.entries(hero).sort().map(([,v])=>v)
export const worksFor=slug=>Object.entries(works).filter(([k])=>k.includes(`/works/${slug}/`)).sort().map(([,v])=>v)
export const founderImg=n=>Object.entries(founder).find(([k])=>k.includes('/'+n+'.'))?.[1]
