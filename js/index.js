/* global jQuery, $*/
'use strict';

const renderTheDangPage = function (store) {
  $('.view').hide();
  $(`#${store.view}`).fadeIn(3000);
  console.log(store.view);
};



// const triggerInsanity = function (event) {
//   event.preventDefault();
//   const store = event.data;
//   if (store.insanity) {
//     store.insanity = !store.insanity;
//     $('svg').show();
//     $('.insanity-background').hide();
//     $('.cascade').hide();
//   } else {
//     store.insanity = !store.insanity;
//     $('svg').hide();
//     $('.insanity-background').show();
//     $('.cascade').show();
//   }
// };

const showTheDangWork = function (event) {
  event.preventDefault();
  const store = event.data;
  store.view = 'work';
  renderTheDangPage(store);
};

const showTheCoolStuff = function (event) {
  event.preventDefault();
  const store = event.data;
  store.view = 'play';
  renderTheDangPage(store);
};

const showTheDangConnect = function (event) {
  event.preventDefault();
  const store = event.data;
  store.view = 'connect';
  renderTheDangPage(store);
};

const showTheDangHome = function (event) {
  event.preventDefault();
  const store = event.data;
  store.view = 'home';
  renderTheDangPage(store);
};

jQuery(function ($) {

  const TRL_LIVE = {
    view: 'home',
    insanity: false
  };

  // $(document).on('click', '.home-image', TRL_LIVE, triggerInsanity);
  // $(document).on('click', '.cascade', TRL_LIVE, triggerInsanity);
  $(document).on('click', '.viewWork', TRL_LIVE, showTheDangWork);
  $(document).on('click', '.viewHome', TRL_LIVE, showTheDangHome);
  $(document).on('click', '.viewPlay', TRL_LIVE, showTheCoolStuff);
  $(document).on('click', '.viewConnect', TRL_LIVE, showTheDangConnect);

  $('.viewHome').trigger('click');
});