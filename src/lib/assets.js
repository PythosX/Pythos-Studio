// Auto-discovery: drop files into the folders; they appear after reload/rebuild.
const o = {
  eager: true,
  query: '?url',
  import: 'default'
}

const hero = import.meta.glob(
  '../assets/hero-flow/*.{jpg,jpeg,png,webp,avif}',
  {
    eager: true,
    query: '?url',
    import: 'default'
  }
)

const works = import.meta.glob(
  '../assets/works/*/*.{jpg,jpeg,png,webp,avif}',
  {
    eager: true,
    query: '?url',
    import: 'default'
  }
)

const founder = import.meta.glob(
  '../assets/founder/*.{jpg,jpeg,png,webp,avif}',
  {
    eager: true,
    query: '?url',
    import: 'default'
  }
)

export const heroImages =
  Object.entries(hero)
    .sort()
    .map(([, value]) => value)

export const worksFor = (slug) =>
  Object.entries(works)
    .filter(([key]) => key.includes(`/works/${slug}/`))
    .sort()
    .map(([, value]) => value)

export const founderImg = (name) =>
  Object.entries(founder)
    .find(([key]) => key.includes(`/${name}.`))?.[1]
