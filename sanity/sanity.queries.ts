import { ExcoQuery } from '@/types/Exco';
import clientConfig from './client.config';
import { createClient, groq } from 'next-sanity';

export async function getExco(): Promise<ExcoQuery[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'exco'] | order(term desc, position){
      name,
      position,
      term,
      'imageSrc': profile_pic.asset->url, // -> to dereference
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

export async function getEvents() {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'event'] {
      name,
      date,
      "slug": slug.current,
      "image": {
        "src": image.asset->url,
        "alt": image.alt,
        "lqip": image.asset->metadata.lqip,
        "hotspot": image.hotspot,
      },
      "author": {
        "name": author->name,
        "position": author->position,
        "image": {
          "src": author->profile_pic.asset->url,
        }
      },
      excerpt,
      // content
    }`
  );
}

export async function getEvent(slug: string) {
  return createClient(clientConfig).fetch(
    groq`*[_type == "event" && slug.current == $slug][0] {
      name,
      date,
      "slug": slug.current,
      "image": {
        "src": image.asset->url,
        "alt": image.alt,
        "lqip": image.asset->metadata.lqip,
        "hotspot": image.hotspot,
      },
      "author": {
        "name": author->name,
        "position": author->position,
        "image": {
          "src": author->profile_pic.asset->url,
        }
      },
      excerpt,
      content
    }`,
    { slug }
  );
}

// const finalEventShape: ManualEventQuery = {
//   date: '2023-06-29',
//   slug: 'my-event',
//   image: {
//     src: 'https://cdn.sanity.io/images/fdfze30c/production/68cda98df6ff673769cb60e68697ad4b76798822-853x1280.jpg',
//     alt: 'A brown dog smiling at the camera',
//     lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAeABQDASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAcDBAEFBgj/xAAmEAACAQQCAQIHAAAAAAAAAAABAgMABAURBiESByMiMUFCUVJh/8QAFQEBAQAAAAAAAAAAAAAAAAAABAP/xAAcEQACAgIDAAAAAAAAAAAAAAABAgARAxIxUVL/2gAMAwEAAhEDEQA/AFo1zkbzGvcX07G9J8fHWiBUE2Pkv8rHBKkiRuvRA7J1TEmwPHBjUlTLvNfxId+2dSHfVS8YxuIs86TyVTdW80fnEykgIfx1RyQHFyoRnxkg8RS3/G7iC5KGRI/r4+VFehbgenJk9zHFmA1s7NFIpOoan9CKuGY29rI69uF6rE3KLnIS2ZmVAqAIAvVUUlABBUlSPluq1rBHCsvwhmc7DH7T/KO67NcRjy6LrOlkuELnsUVodv8AtRVLh6n/2Q==',
//     hotspot: {
//       y: 0.32845454545454533,
//       height: 0.3037272727272726,
//       _type: 'sanity.imageHotspot',
//       width: 0.44696969696969746,
//       x: 0.5,
//     },
//   },
//   author: {
//     name: 'Jason Gu Yaochen',
//     position: 'President',
//     image: {
//       src: 'https://cdn.sanity.io/images/fdfze30c/production/f21ec88b360b0357040691d09dbc53256abdb4a4-800x800.jpg',
//     },
//   },
//   excerpt:
//     'This is a short summary of the event. It is required for rendering the preview page of the event. It needs to be at least 100 characters long.',
//   content?: [...], // only for single event query
//   name: 'My Event',
// };
