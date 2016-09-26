$(document).ready(function(){

    var filterBtn = document.querySelector('.js-open-filter');
    filterBtn.addEventListener('click', openFilter);
    var filterBtnFinish = document.querySelector('.js-close-filter');
    filterBtnFinish.addEventListener('click', closeFilter);
    var modal = document.querySelector('.js-filter');

    function openFilter(){
        modal.classList.remove('hidden');
    }

    function closeFilter(){
        modal.classList.add('hidden');
    }
});