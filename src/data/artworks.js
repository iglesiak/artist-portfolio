export const artist = {
  name: 'Elena Voss',
  tagline: 'Painting the threshold between memory and light',
  location: 'Brooklyn, New York',
  email: 'studio@elenavoss.art',
};

export const featuredArtwork = {
  id: 'horizon-dissolve',
  title: 'Horizon Dissolve',
  year: 2025,
  medium: 'Oil on linen',
  dimensions: '72 × 96 in',
  collection: 'Liminal Waters',
  image:
    'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=2400&q=85&auto=format&fit=crop',
  description:
    'A meditation on where sky meets sea — color bleeding into atmosphere until the boundary disappears entirely.',
};

export const collections = [
  {
    id: 'liminal-waters',
    name: 'Liminal Waters',
    year: '2024–2025',
    description:
      'Studies of coastlines at dusk, where water reflects sky and neither can be distinguished from the other.',
    artworks: [
      {
        id: 'horizon-dissolve',
        title: 'Horizon Dissolve',
        year: 2025,
        medium: 'Oil on linen',
        dimensions: '72 × 96 in',
        image:
          'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: 'tidal-memory',
        title: 'Tidal Memory',
        year: 2024,
        medium: 'Oil on canvas',
        dimensions: '48 × 60 in',
        image:
          'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: 'afterglow',
        title: 'Afterglow',
        year: 2024,
        medium: 'Oil on linen',
        dimensions: '36 × 48 in',
        image:
          'https://images.unsplash.com/photo-1549490349-8643362247b4?w=1200&q=80&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 'interior-echoes',
    name: 'Interior Echoes',
    year: '2022–2023',
    description:
      'Domestic spaces rendered in saturated color — rooms that feel both familiar and dreamlike.',
    artworks: [
      {
        id: 'morning-room',
        title: 'Morning Room',
        year: 2023,
        medium: 'Acrylic on panel',
        dimensions: '40 × 50 in',
        image:
          'https://images.unsplash.com/photo-1578301978693-85fa9c0320a9?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: 'amber-hour',
        title: 'Amber Hour',
        year: 2022,
        medium: 'Oil on canvas',
        dimensions: '30 × 40 in',
        image:
          'https://images.unsplash.com/photo-1549887534-1541e9326642?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: 'threshold',
        title: 'Threshold',
        year: 2023,
        medium: 'Oil on linen',
        dimensions: '24 × 36 in',
        image:
          'https://images.unsplash.com/photo-1518640467707-6811f4a6abca?w=1200&q=80&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 'nocturnes',
    name: 'Nocturnes',
    year: '2021',
    description:
      'Night paintings exploring solitude, artificial light, and the quiet geometry of cities after dark.',
    artworks: [
      {
        id: 'streetlight-serenade',
        title: 'Streetlight Serenade',
        year: 2021,
        medium: 'Oil on canvas',
        dimensions: '48 × 48 in',
        image:
          'https://images.unsplash.com/photo-1561214115-f2f40c5e8e0e?w=1200&q=80&auto=format&fit=crop',
      },
      {
        id: 'blue-hour',
        title: 'Blue Hour',
        year: 2021,
        medium: 'Oil on linen',
        dimensions: '36 × 48 in',
        image:
          'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80&auto=format&fit=crop',
      },
    ],
  },
];
