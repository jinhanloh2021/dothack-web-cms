import clientConfig from '@/sanity/client.config';
import { ExcoQuery, excoSortOrder } from '@/types/Exco';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sortExco(unsortedExco: ExcoQuery[]): ExcoQuery[] {
  const sortedExco = unsortedExco.sort(
    (a, b) => excoSortOrder[a.position] - excoSortOrder[b.position]
  );
  sortedExco.filter((e) => e.position === 'President');
  return sortedExco;
}

export function getCurrentAY(): string {
  const currentYear = new Date().getFullYear(); // Assume elections in September
  if (new Date().getMonth() < 8) {
    return `AY${(currentYear - 1) % 100}/${currentYear % 100}`;
  } else {
    return `AY${currentYear % 100}/${(currentYear + 1) % 100}`;
  }
}

export function reformatDate(date: string): string {
  if (!date || date.length === 0) {
    return '';
  }
  return `${date.substring(8, 10)}-${date.substring(5, 7)}-${date.substring(
    0,
    4
  )}`;
}

/**
 *
 * @param name Name of author
 * @dev This function returns the initials of a name, up to 3 characters.
 * Loh Jin Han -> LJH
 * Sean Seah Yuan Jin -> SSY, omits the last character. Max 3 chars.
 */
export function getInitials(name: string): string {
  const tokens = name.split(' ');
  const initials = tokens.map((token) => token.charAt(0)).join('');
  return initials.length > 3 ? initials.slice(0, 3) : initials;
}

const urlBuilder = imageUrlBuilder(clientConfig);
export function urlFor(src: SanityImageSource) {
  return urlBuilder.image(src);
}
