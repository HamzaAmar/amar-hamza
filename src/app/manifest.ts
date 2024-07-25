import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Hamza Miloud Amar',
    short_name: 'Hamza Miloud Amar',
    description:
      'Hamza Amar is a freelance web developer showcasing his skills and experience in web development and design. He offers a variety of services including building high-performance and accessible websites.',
    start_url: '/',
    display: 'standalone',
    background_color: '#151718',
    theme_color: '#3e63dd',
    icons: [
      {
        src: '/favicon/logo-192X192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicon/logo-512X512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
