import { AppConfig } from 'blockstack'

export const appConfig = new AppConfig(['store_write', 'publish_data'])
export const ANIMALS = [
  {
    id: 'monster-0',
    name: 'Black Bat'
  },
  {
    id: 'monster-3',
    name: 'Grey Cat'
  },
  {
    id: 'monster-6',
    name: 'Green Octopus'
  },
  {
    id: 'monster-9',
    name: 'Blue Crab'
  },
  {
    id: 'monster-12',
    name: 'Yellow Worm'
  }
]

export const TERRITORIES = [
  {
    id: 'mountain',
    name: 'Mountain'
  },
  {
    id: 'lake',
    name: 'Lake'
  },
  {
    id: 'field',
    name: 'Field'
  }
]

export const ME_FILENAME = 'me.json'
export const SUBJECTS_FILENAME = 'subjects.json'
export const EXPLORER_URL = 'https://explorer.blockstack.org'


export const OTHER_KINGDOMS = [
  {
    app: 'https://animal-kingdom-1.firebaseapp.com',
    ruler: 'larry.id'
  },
  {
    app: 'https://animal-kingdom-1.firebaseapp.com',
    ruler: 'larry.blockstack'
  },
  {
    app: 'https://animal-kingdom-1.firebaseapp.com',
    ruler: 'friedger.id'
  },
  {
    app: 'https://planet.friedger.de',
    ruler: 'friedger.id'
  },
]
