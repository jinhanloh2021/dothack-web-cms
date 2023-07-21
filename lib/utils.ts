import { ExcoQuery, excoSortOrder } from '@/types/Exco';
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
