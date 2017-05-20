$(document).ready(function(){

    var filterBtn = document.querySelector('.js-open-filter');
    filterBtn.addEventListener('click', openFilter);
    var filterBtnFinish = document.querySelector('.js-close-filter');
    filterBtnFinish.addEventListener('click', closeFilter);
    var modal = $('.js-filter');
    modal.hide();

    function openFilter(){
        modal.fadeIn(400);
    }

    function closeFilter(){
        modal.fadeOut(400);
    }
});
