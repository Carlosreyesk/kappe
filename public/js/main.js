$(document).ready(function(){

    var filterBtn = document.querySelector('.js-open-filter');
    filterBtn.addEventListener('click', openFilter);

    function openFilter(){
        var modal = document.querySelector('.js-filter');
        modal.classList.remove('hidden');
    }
});