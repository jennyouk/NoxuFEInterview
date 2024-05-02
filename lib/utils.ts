import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function pinToDashboard() {}
export function showChart() {}
export function showFullList() {}
export function showQuery() {}

export async function getResponse() {
  const data = {
    text: 'To find out how many accounts you have, you can use the following query:',

    confidence: 'Not Confident',

    table: [
      ['', 'Name', 'Industry', 'City', 'State', 'Segment', 'Owner ID'],
      [
        477,
        'Abbott - Pacocha',
        'IT',
        'Colorado Springs',
        'CO',
        'Enterprise',
        7,
      ],
      [
        477,
        'Abbott - Pacocha',
        'IT',
        'Colorado Springs',
        'CO',
        'Enterprise',
        7,
      ],
      [
        477,
        'Abbott - Pacocha',
        'IT',
        'Colorado Springs',
        'CO',
        'Enterprise',
        7,
      ],
      [
        477,
        'Abbott - Pacocha',
        'IT',
        'Colorado Springs',
        'CO',
        'Enterprise',
        7,
      ],
      [
        477,
        'Abbott - Pacocha',
        'IT',
        'Colorado Springs',
        'CO',
        'Enterprise',
        7,
      ],
    ],
  };
  return data;
}
