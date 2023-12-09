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
    id: '11',
    basePrice: 1100,
    dateFrom: '2019-07-10T11:22:13.375Z',
    dateTo: '2019-07-10T11:32:13.375Z',
    destination: 'dest1',
    isFavorite: false,
    offers: ['offer1'],
    type: getRandomArrayElement(eventType),
  },
  {
    id: '12',
    basePrice: 1200,
    dateFrom: '2019-07-12T22:55:56.845Z',
    dateTo: '2019-07-13T11:22:13.375Z',
    destination: 'dest2',
    isFavorite: true,
    offers: [],
    type: getRandomArrayElement(eventType),
  },
  {
    id: '13',
    basePrice: 1300,
    dateFrom: '2019-07-14T22:55:56.845Z',
    dateTo: '2019-07-18T11:22:13.375Z',
    destination: 'dest3',
    isFavorite: false,
    offers: ['offer1'],
    type: getRandomArrayElement(eventType),
  },
];
const mockDestinations = [
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
        id: 'offer1',
        title: 'Upgrade to a business class',
        price: 120,
      },
    ],
  },
  {
    type: eventType[1],
    offers: [
      {
        id: 'offer2',
        title: 'Upgrade to a business class',
        price: 220,
      },
    ],
  },
  {
    type: 'taxi',
    offers: [
      {
        id: 'offer1',
        title: 'Upgrade to a business class',
        price: 120,
      },
    ],
  },
];

const loadRandomEvent = () => getRandomArrayElement(mockEvents);

const loadDestinations = () => mockDestinations;

const loadOffers = () => mockOffers;

export { loadRandomEvent, loadDestinations, loadOffers };
