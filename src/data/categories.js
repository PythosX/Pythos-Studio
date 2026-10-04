// Add a category or project here (+ drop images in src/assets/works/<slug>/). Images map to projects by sorted order.
const p=(name,description,url='#')=>({name,description,url})
const ph=(n)=>[1,2,3].map(i=>p(`${n} Project 0${i}`,'Placeholder description.'))
export const categories=[
 {slug:'restaurants',name:'Restaurants',tagline:'Immersive digital experiences for food businesses.',projects:[p('Arabian Darbar','A menu-first, atmospheric site for a Mumbai grill house.'),p('Restaurant Project 02','Placeholder description.'),p('Restaurant Project 03','Placeholder description.')]},
 {slug:'cafes',name:'Cafés',tagline:'Warm, scrollable brand worlds.',projects:ph('Café')},
 {slug:'hospitality',name:'Hotels & Hospitality',tagline:'Stays that sell before check-in.',projects:ph('Hotel')},
 {slug:'salons',name:'Salons & Grooming',tagline:'Booking-ready beauty brands.',projects:ph('Salon')},
 {slug:'fitness',name:'Fitness & Wellness',tagline:'Energy you can feel on screen.',projects:ph('Fitness')},
 {slug:'retail',name:'Retail & E-commerce',tagline:'Storefronts that feel like products.',projects:ph('Retail')},
 {slug:'services',name:'Professional Services',tagline:'Authority, made visible.',projects:ph('Services')},
 {slug:'creative',name:'Creative / Personal Brands',tagline:'Portfolios with a pulse.',projects:ph('Creative')}
]
export const businesses=[{n:'Restaurant',x:300,y:120},{n:'Salon',x:520,y:200},{n:'Café',x:140,y:250},{n:'Gym',x:470,y:340},{n:'Boutique',x:250,y:400}]
export const steps=[['DISCOVER','A business node gets selected.'],['DESIGN','Wireframes evolve into polished UI.'],['BUILD','Components snap into place.'],['LAUNCH','The interface becomes the finished site.'],['GROW','Enquiries rise. Signals connect.']]
