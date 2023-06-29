import { ExcoQuery } from '@/types/Exco';
import clientConfig from './client.config';
import { createClient, groq } from 'next-sanity';

export async function getExco(): Promise<ExcoQuery[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'exco'] | order(term desc, position){
      name,
      position,
      term,
      'imageSrc': profile_pic.asset->url,
      'lqip': profile_pic.asset->metadata.lqip,
      'hotspot': profile_pic.hotspot,
    }`
  );
}

// const confirmedQueryShape = {
//   name: 'Jason Gu Yaochen',
//   position: 'President',
//   term: 'AY22/23',
//   imageSrc:
//     'https://cdn.sanity.io/images/fdfze30c/production/f21ec88b360b0357040691d09dbc53256abdb4a4-800x800.jpg',
//   lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQFBgf/xAAiEAACAQQCAgMBAAAAAAAAAAABAgMABAUREhMhUTEyQUL/xAAVAQEBAAAAAAAAAAAAAAAAAAADAv/EAB0RAAIBBAMAAAAAAAAAAAAAAAABEQIDMUETISL/2gAMAwEAAhEDEQA/APKnytvLimuEIL8d8P3dZVvdPO5WaPrbXIEHYrDjytvFZdUls3drw+/FV43KPjSst3F2LKv1Pr2Ka06l3pDeYyapdQftqlc/lMqLq8aWGRooyNBQPilLzIkmyEKKngfzuoZZ5JUiSRyyoNKD+ClKHRNWS+G0jaJSeWyPdKUo5LhH/9k=',
//   hotspot: {
//     x: 0.4798488664987404,
//     y: 0.375314861460957,
//     height: 0.4080604534005038,
//     _type: 'sanity.imageHotspot',
//     width: 0.3450881612090684,
//   },
// };

// The base image
// https://cdn.sanity.io/images/zp7mbokg/production/G3i4emG6B8JnTmGoN0UjgAp8-300x450.jpg

// Resized to have the height 200
// https://cdn.sanity.io/images/zp7mbokg/production/G3i4emG6B8JnTmGoN0UjgAp8-300x450.jpg?h=200

// Extract a rectangle from the image (x, y, width, height)
// https://cdn.sanity.io/images/zp7mbokg/production/G3i4emG6B8JnTmGoN0UjgAp8-300x450.jpg?rect=70,20,120,150

// Extract a rectangle from the image (x, y, width, height) and constrain height to 64
// https://cdn.sanity.io/images/zp7mbokg/production/G3i4emG6B8JnTmGoN0UjgAp8-300x450.jpg?rect=70,20,120,150&h=64

// Blur the image
// https://cdn.sanity.io/images/zp7mbokg/production/G3i4emG6B8JnTmGoN0UjgAp8-300x450.jpg?blur=50
