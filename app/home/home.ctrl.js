(function(){
    'use strict';

    angular.module('footwear')
    .controller('HomeController', HomeController);

    function HomeController(){
        var vm = this;
        vm.cards = [{ img: 'public/images/shoes/img-shoe-1.jpg',
                      title: 'Supreme x Nike SB',
                      subtitle: 'Tennis Classic',
                      price: '$120.00',
                      sale: true,
                      ogprice: '$160.00',
                      important: true
        }]
    }

})();