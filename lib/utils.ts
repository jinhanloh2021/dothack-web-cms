import { ExcoQuery, excoSortOrder } from '@/types/Exco';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sortExco(unsortedExco: ExcoQuery[]): ExcoQuery[] {
  return unsortedExco.sort(
    (a, b) => excoSortOrder[a.position] - excoSortOrder[b.position]
  );
}
