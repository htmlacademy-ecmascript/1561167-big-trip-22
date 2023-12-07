import { render } from './render';
import ListFilterView from './view/list-filter-view';

const tripHeaderNode = document.querySelector('.trip-main');
const filterContainerNode = tripHeaderNode.querySelector(
  '.trip-controls__filters'
);

render(new ListFilterView(), filterContainerNode);
