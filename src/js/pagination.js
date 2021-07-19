import getRefs from './getRefs';
import NewsApiService from './apiService';
import { clearContainer, fetchHits, newsApiService, randomList } from './searchEvent';

const refs = getRefs();

const option = {
  totalItems: 980,
  visiblePages: 3,
  itemsPerPage: 20,
};

function startPagination() {
  const totalEl = newsApiService.totalElements < 980 ? newsApiService.totalElements : 980;
  option.totalItems = totalEl;
  const pagination = new tui.Pagination(refs.pagination, option);
  pagination.on('beforeMove', function (e) {
    onScroll();
    newsApiService.setPage(e.page);
    clearContainer();
    fetchHits();
  });
}

function startPaginationRandom() {
  const totalEl = newsApiService.totalElements < 980 ? newsApiService.totalElements : 980;
  option.totalItems = totalEl;
  const pagination = new tui.Pagination(refs.pagination, option);
  pagination.on('beforeMove', function (e) {
    onScroll();
    newsApiService.setPage(e.page);
    clearContainer();
    randomList();
  });
}
function onScroll() {
  window.scrollTo({
    top: 1,
    behavior: 'smooth',
  });
}

export { startPaginationRandom, startPagination, option, onScroll };
