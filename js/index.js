/* global jQuery, $*/
'use strict';

// const renderTheDangPage = function (store) {
//   $('.view').hide();
//   $(`#${store.view}`).show();
// };

const mobileScrollToNavDestination = function (store, destination) {
  store.isModalVisible = !store.isModalVisible;
  $('#navModal').hide();
  $('html, body').animate({
    scrollTop: $(`${destination}`).position().top
  }, 500);
};

// 

const renderTheDangModal = function (store) {
  if (store.isModalVisible) {
    store.isModalVisible = !store.isModalVisible;
    $('#navModal').hide();
  } else {
    store.isModalVisible = !store.isModalVisible;
    $('#navModal').fadeIn(500);
  }
};

// 

const scrollToNavDestination = function (store, destination) {
  // console.log(destination);
  store.isModalVisible = !store.isModalVisible;
  $('#navModal').hide();
  if (store.view === 'home' && destination === '#home') {
    console.log('you already here!');
  }
  else if (store.view === 'home' && destination !== '#home') {
    store.view = 'work';
    $('.work-slider').toggleClass('close');
    $('.view').animate({
      scrollTop: $(`${destination}`).position().top
    }, 500);
  }
  else if (store.view !== 'home' && destination === '#home') {
    store.view = 'home';
    $('.work-slider').toggleClass('close');
  }
  else if (store.view !== 'home' && destination !== '#home') {
    $('.view').animate({
      scrollTop: $(`${destination}`).position().top
    }, 500);
  }
};

//

const slideUpTheDangWork = function () {
  $('.work-slider').toggleClass('close');
};

const slideDownTheDangWork = function() {
  $('.work-slider').toggleClass('close');
};

const renderTheDangHome = function () {
  $('.view').hide();
  $('#home').fadeIn(2000);
  $('#work').show();
};

const renderHomeHard = function () {
  $('.view').hide();
  $('.work-slider').toggleClass('close');
  $('#home').fadeIn(2000);
  $('#work').show();
};

// 

const handleTheDangModalNav = function (event) {
  event.preventDefault();
  const store = event.data;
  const destination = $(event.target).attr('href');
  const windowSize = window.innerWidth;
  if (windowSize <= 800) {
    mobileScrollToNavDestination(store, destination);
  } else {
    scrollToNavDestination(store, destination);
  }
};

const showTheDangWork = function (event) {
  event.preventDefault();
  const store = event.data;
  store.view = 'work';
  slideUpTheDangWork();
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
  const windowSize = window.innerWidth;
  if (windowSize <= 800) {
    store.isViewPortSmall = true;
    renderTheDangHome();
  }
  else if (store.view !== 'home') {
    store.view = 'home';
    renderHomeHard();
  } else {
    renderTheDangHome();
  }
};

// 

const toggleTheDangModal = function (event) {
  event.preventDefault();
  const store = event.data;
  renderTheDangModal(store);
};

//

const checkWindowSize = function (event) {
  event.preventDefault();
  const store = event.data;
  const windowSize = window.innerWidth;
  if (windowSize <= 800 && store.isViewPortSmall === false) {
    // console.log('rerender due to switch to small viewport');
    store.isViewPortSmall = true;
    renderHomeHard();
  }
  else if (windowSize > 800 && store.isViewPortSmall === true) {
    // console.log('rerender due to switch to large viewport');
    store.isViewPortSmall = false;
    renderHomeHard();
  }
};

// 

jQuery(function ($) {

  $('.project-slides').slick({
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow:'<a><span class="fas fa-caret-left slideshow-arrow"></span></a>',
    nextArrow:'<a><span class="fas fa-caret-right slideshow-arrow"></span></a>'
  });

  const TRL_LIVE = {
    view: 'home',
    isModalVisible: false,
    isViewPortSmall: false
  };

  $(window).on('DOMContentLoaded load resize scroll', TRL_LIVE, checkWindowSize);

  $(document).on('click', '.nav-modal-link', TRL_LIVE, handleTheDangModalNav);

  $(document).on('click', '.toggle-modal', TRL_LIVE, toggleTheDangModal);
  $(document).on('click', '.viewHome', TRL_LIVE, showTheDangHome);
  $(document).on('click', '.viewWork', TRL_LIVE, showTheDangWork);
  $(document).on('click', '.slideToHome', TRL_LIVE, hideTheDangWork);

  $('.viewHome').trigger('click');
});