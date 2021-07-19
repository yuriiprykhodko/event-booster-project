export default function getRefs() {
  return {
    inputSearchForm: document.querySelector('.js-search-form'),
    eventList: document.querySelector('.js-event-list'),
    dropList: document.querySelector('.js-dropdown'),
    pagination: document.querySelector('.tui-pagination'),
    countryListDouble: document.querySelector('.country-list'),
    selectCountryBtn: document.getElementById('select-country-btn'),
    buttonScrollUp: document.querySelector('.button-scroll-up'),
    searchingBlock: document.querySelector('.searching-block'),
    switchTogle: document.querySelector('#theme-switch-toggle'),
    bodyTheme: document.querySelector('body'),
    openModalBtn: document.querySelector('.list'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    lightBoxOverlay: document.querySelector('.backdrop'),
    cardMurkup: document.querySelector('.modal-form'),
    moreBtn: document.querySelector('.btn-more'),
  };
}
