(()=>{"use strict";const e=document.querySelector(".trip-main").querySelector(".trip-controls__filters");!function(e,t,i="beforeend"){t.insertAdjacentElement(i,e.getElement())}(new class{getTemplate=()=>'\n  <form class="trip-filters" action="#" method="get">\n    <div class="trip-filters__filter">\n      <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything">\n      <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n    </div>\n\n    <div class="trip-filters__filter">\n      <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">\n      <label class="trip-filters__filter-label" for="filter-future">Future</label>\n    </div>\n\n    <div class="trip-filters__filter">\n      <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">\n      <label class="trip-filters__filter-label" for="filter-present">Present</label>\n    </div>\n\n    <div class="trip-filters__filter">\n      <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past" checked>\n      <label class="trip-filters__filter-label" for="filter-past">Past</label>\n    </div>\n\n    <button class="visually-hidden" type="submit">Accept filter</button>\n  </form>\n';getElement=()=>(this.element||(this.element=function(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}(this.getTemplate())),this.element);removeElement=()=>{this.element=null}},e)})();
//# sourceMappingURL=bundle.5cd62d7fd52c26ab947e.js.map