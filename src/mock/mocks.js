import { eventType } from '../const';
import { getRandomArrayElement } from '../utils';

const LOREMS = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat.',
  'Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.',
];
const CITIES = ['Amsterdam', 'Chamonix', 'Geneva', 'Sofia'];

const mockEvents = [
  {
    id: '00',
    basePrice: 0,
    dateFrom: '2019-07-10T11:22:13.375Z',
    dateTo: '2019-07-10T11:32:13.375Z',
    destination: 'dest0',
    isFavorite: false,
    offers: ['offer01'],
    type: eventType[0],
  },
  {
    id: '11',
    basePrice: 1100,
    dateFrom: '2019-07-12T22:55:56.845Z',
    dateTo: '2019-07-13T11:22:13.375Z',
    destination: 'dest1',
    isFavorite: true,
    offers: [],
    type: eventType[1],
  },
  {
    id: '22',
    basePrice: 2200,
    dateFrom: '2019-07-14T22:55:56.845Z',
    dateTo: '2019-07-18T11:22:13.375Z',
    destination: 'dest2',
    isFavorite: false,
    offers: ['offer21', 'offer23'],
    type: eventType[2],
  },
  {
    id: '33',
    basePrice: 3300,
    dateFrom: '2019-07-14T09:55:56.845Z',
    dateTo: '2019-07-14T11:22:13.375Z',
    destination: 'dest3',
    isFavorite: true,
    offers: ['offer31'],
    type: eventType[3],
  },
];
const mockDestinations = [
  {
    id: 'dest0',
    description: getRandomArrayElement(LOREMS),
    name: CITIES[1],
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${Math.random()}`,
        description: 'Chamonix parliament building',
      },
    ],
  },
  {
    id: 'dest1',
    description: getRandomArrayElement(LOREMS),
    name: getRandomArrayElement(CITIES),
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${Math.random()}`,
        description: 'Chamonix parliament building',
      },
    ],
  },
  {
    id: 'dest2',
    description: getRandomArrayElement(LOREMS) + getRandomArrayElement(LOREMS),
    name: getRandomArrayElement(CITIES),
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${Math.random()}`,
        description: 'Chamonix parliament building',
      },
      {
        src: `https://loremflickr.com/248/152?random=${Math.random()}`,
        description: 'Chamonix parliament building',
      },
      {
        src: `https://loremflickr.com/248/152?random=${Math.random()}`,
        description: 'Chamonix parliament building',
      },
      {
        src: `https://loremflickr.com/248/152?random=${Math.random()}`,
        description: 'Chamonix parliament building',
      },
      {
        src: `https://loremflickr.com/248/152?random=${Math.random()}`,
        description: 'Chamonix parliament building',
      },
      {
        src: `https://loremflickr.com/248/152?random=${Math.random()}`,
        description: 'Chamonix parliament building',
      },
    ],
  },
  {
    id: 'dest3',
    description: getRandomArrayElement(LOREMS),
    name: getRandomArrayElement(CITIES),
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${Math.random()}`,
        description: 'Chamonix parliament building',
      },
    ],
  },
];
const mockOffers = [
  {
    type: eventType[0],
    offers: [
      {
        id: 'offer01',
        title: 'Upgrade to a business class',
        price: 10,
      },
      {
        id: 'offer02',
        title: 'Upgrade to a business class',
        price: 20,
      },
    ],
  },
  {
    type: eventType[1],
    offers: [
      {
        id: 'offer11',
        title: 'Upgrade to a business class',
        price: 110,
      },
    ],
  },
  {
    type: eventType[2],
    offers: [
      {
        id: 'offer21',
        title: 'Upgrade to',
        price: 21,
      },
      {
        id: 'offer22',
        title: 'Upgrade to a business',
        price: 22,
      },
      {
        id: 'offer23',
        title: 'Upgrade to a business class',
        price: 23,
      },
    ],
  },
  {
    type: eventType[3],
    offers: [
      {
        id: 'offer31',
        title: 'Upgrade to a business class',
        price: 31,
      },
    ],
  },
];

const loadRandomEvent = () => getRandomArrayElement(mockEvents);

const loadDestinations = () => mockDestinations;

const loadOffers = () => mockOffers;

export { loadRandomEvent, loadDestinations, loadOffers };
