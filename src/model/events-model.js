import { loadRandomEvent } from '../mock/mocks';

const EVENTS_COUNT = 5;

export default class EventsModel {
  events = Array.from({ length: EVENTS_COUNT }, loadRandomEvent);

  getEvents = () => this.events;
}
