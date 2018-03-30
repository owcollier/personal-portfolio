/* global jQuery, $*/
'use strict';

const renderTheDangPage = function (store) {
  $('.view').hide();
  $(`#${store.view}`).show();
  console.log(store.view);
};

const renderTheDangModal = function (store) {
  if (store.isModalVisible) {
    store.isModalVisible = !store.isModalVisible;
    $('#navModal').hide();
    console.log('modal hidden');
  } else {
    store.isModalVisible = !store.isModalVisible;
    $('#navModal').fadeIn(500);
    console.log('modal visible');
  }
};

const scrollToNavDestination = function (store, destination) {
  // console.log(destination);
  store.isModalVisible = !store.isModalVisible;
  $('#navModal').hide();
  if (store.view === 'home' && destination === '#home') {
    console.log('you already here!');
  } else if (store.view === 'home' && destination !== '#home') {
    store.view = 'work';
    $('.work-slider').toggleClass('close');
    $('.view').animate({
      scrollTop: $(`${destination}`).position().top
    }, 500);
  }
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

const handleTheDangModalNav = function (event) {
  event.preventDefault();
  const store = event.data;
  const destination = $(event.target).attr('href');
  scrollToNavDestination(store, destination);
};

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

const toggleTheDangModal = function (event) {
  event.preventDefault();
  const store = event.data;
  renderTheDangModal(store);
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
    prevArrow:'<a><span class="fas fa-caret-left slideshow-arrow"></span></a>',
    nextArrow:'<a><span class="fas fa-caret-right slideshow-arrow"></span></a>'
  });

  const TRL_LIVE = {
    view: 'home',
    isModalVisible: false
  };

  $(document).on('click', '.nav-modal-link', TRL_LIVE, handleTheDangModalNav);

  $(document).on('click', '.toggle-modal', TRL_LIVE, toggleTheDangModal);
  // $(document).on('click', '.cascade', TRL_LIVE, triggerInsanity);
  $(document).on('click', '.viewHome', TRL_LIVE, showTheDangHome);
  $(document).on('click', '.viewWork', TRL_LIVE, showTheDangWork);
  $(document).on('click', '.slideToHome', TRL_LIVE, hideTheDangWork);

  $('.viewHome').trigger('click');
});