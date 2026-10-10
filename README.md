# Pythos Studio
`npm install && npm run dev` · `npm run build`

## Where images go
- `src/assets/hero-flow/`: landing slideshow. Any number of jpg/png/webp/avif, played in filename order (01.jpg, 02.jpg ...). Landscape 1920x1080.
- `src/assets/works/<slug>/`: slugs are restaurants, cafes, hospitality, salons, fitness, retail, services, creative. First image is the card cover, then one per project in order. 1600x1000.
- `src/assets/founder/`: cyber.webp and real.webp for the About portrait (4:5, 1200x1500).
- `public/videos/`: optional background videos.
Edit text and projects in `src/data/categories.js`, links in `src/data/navigation.js`.
