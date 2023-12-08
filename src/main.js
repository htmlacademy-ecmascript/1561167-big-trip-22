import EventsModel from './model/events-model';
import BoardPresenter from './presenter/board-presenter';
import { render } from './render';
import ListFilterView from './view/list-filter-view';

const tripHeaderNode = document.querySelector('.trip-main');
const filterContainerNode = tripHeaderNode.querySelector(
  '.trip-controls__filters'
);
const eventsContainerNode = document.querySelector('.trip-events');
const eventsModel = new EventsModel();
const boardPresenter = new BoardPresenter({
  boardContainer: eventsContainerNode,
  eventsModel,
});

render(new ListFilterView(), filterContainerNode);
boardPresenter.init();
