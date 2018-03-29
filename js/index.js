/* global jQuery, $*/
'use strict';

const renderTheDangPage = function (store) {
  $('.view').hide();
  $(`#${store.view}`).show();
  console.log(store.view);
};

const slideUpTheDangWork = function (store) {
  $('.work-slider').toggleClass('close');
  console.log(store.view);
};

const slideDownTheDangWork = function() {
  $('.work-slider').toggleClass('close');
};

const renderTheDangHome = function (store) {
  $(`#${store.view}`).fadeIn(2000);
  $('#work').show();
  console.log(store.view);
};

const renderHomeHard = function (store) {
  $('.work-slider').toggleClass('close');
  $('.view').hide();
  $(`#${store.view}`).fadeIn(2000);
  $('#work').show();
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
  slideUpTheDangWork(store);
};

const hideTheDangWork = function (event) {
  event.preventDefault();
  const store = event.data;
  store.view = 'home';
  slideDownTheDangWork();
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
  if (store.view !== 'home') {
    store.view = 'home';
    renderHomeHard(store);
  } else {
    renderTheDangHome(store);
  }
};

// const goHome = function (event) {
//   event.preventDefault();
//   const store = event.data;
//   store.view = 'home';
//   renderHomeHard(store);
// };

jQuery(function ($) {

  $('.project-slides').slick({
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    prevArrow:'<a><span class="fas fa-angle-left slideshow-arrow"></span></a>',
    nextArrow:'<a><span class="fas fa-angle-right slideshow-arrow"></span></a>'
  });

  const TRL_LIVE = {
    view: 'home',
    insanity: false
  };

  // $(document).on('click', '.home-image', TRL_LIVE, triggerInsanity);
  // $(document).on('click', '.cascade', TRL_LIVE, triggerInsanity);
  $(document).on('click', '.viewHome', TRL_LIVE, showTheDangHome);
  $(document).on('click', '.viewWork', TRL_LIVE, showTheDangWork);
  $(document).on('click', '.slideToHome', TRL_LIVE, hideTheDangWork);
  $(document).on('click', '.viewPlay', TRL_LIVE, showTheCoolStuff);
  $(document).on('click', '.viewConnect', TRL_LIVE, showTheDangConnect);

  $('.viewHome').trigger('click');
});