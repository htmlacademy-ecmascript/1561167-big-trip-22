import BoardPresenter from './presenter/board-presenter';
import { render } from './render';
import ListFilterView from './view/list-filter-view';

const tripHeaderNode = document.querySelector('.trip-main');
const filterContainerNode = tripHeaderNode.querySelector(
  '.trip-controls__filters'
);
const boardPresenter = new BoardPresenter({
  boardContainer: document.querySelector('.trip-events'),
});

render(new ListFilterView(), filterContainerNode);
boardPresenter.init();
