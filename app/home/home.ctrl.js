(function(){
    'use strict';

    angular.module('footwear')
    .controller('HomeController', HomeController);

    function HomeController($scope, shoeData){
        var vm = this;
        vm.cards = [];
        function getShoes(){
            var request = shoeData.getAllShoes().then(setShoes);
            function setShoes(res){
                vm.cards = res.data;
            }
        }

        getShoes();

        // vm.cards = [
        //     { 
        //             img: 'public/images/shoes/img-shoe-1.jpg',
        //             title: 'Supreme x Nike SB',
        //             subtitle: 'Tennis Classic',
        //             price: '$120.00',
        //             sale: true,
        //             ogprice: '$160.00',
        //             info: false,
        //             content: '',
        //             important: false,
        //             badge: '',
        //             badgecolor: 's',
        //             menu:false,
        //             deleted:false
        //     },{
        //             img: 'public/images/shoes/img-shoe-2.jpg',
        //             title: 'Raf Simons X Adidas ',
        //             subtitle: 'Mid-Platform Light Up',
        //             price: '$760.00',
        //             sale: false,
        //             ogprice: '',
        //             info: false,
        //             content: 's',
        //             important: true,
        //             badge: 'News',
        //             badgecolor: 'green',
        //              menu:false,
        //             deleted:false
        //     },{
        //             img: 'public/images/shoes/img-shoe-3.jpg',
        //             title: 'Kris van assche',
        //             subtitle: 'Hi top - Multi laces',
        //             price: '$650.00 ',
        //             sale: true,
        //             ogprice: '$760.00',
        //             info: false,
        //             content: 'ass',
        //             important: false,
        //             badge: '',
        //             badgecolor: '',
        //              menu:false,
        //             deleted:false
        //     },{
        //             img: 'public/images/shoes/img-shoe-4.jpg',
        //             title: 'Nike X Supreme',
        //             subtitle: 'Air Force One',
        //             price: '$205.00',
        //             sale: false,
        //             ogprice: '',
        //             info: true,
        //             content: 'Sneakers from Nike Sportswear. Made in collaboration with Acronym. Upper in suede. Flat laces. Outer side zip closure. Tongue in leather with perforation.',
        //             important: true,
        //             badge: 'News',
        //             badgecolor: 'green',
        //              menu:false,
        //             deleted:false
        //     },{
        //             img: 'public/images/shoes/img-shoe-5.jpg',
        //             title: 'Converse x Comme des Garçons',
        //             subtitle: 'Black Heart Logo',
        //             price: '$160.00',
        //             sale: true,
        //             ogprice: '$200.00 ',
        //             info: false,
        //             content: '',
        //             important: false,
        //             badge: 'Exclusive',
        //             badgecolor: 'blue',
        //             menu:true,
        //             deleted:false
        //     },{
        //             img: 'public/images/shoes/img-shoe-6.jpg',
        //             title: 'Converse x Comme des Garçons',
        //             subtitle: 'Black Heart Logo',
        //             price: '$105.00',
        //             sale: false,
        //             ogprice: '',
        //             info: false,
        //             content: '',
        //             important: false,
        //             badge: 'Exclusive',
        //             badgecolor: 'blue',
        //             menu:false,
        //             deleted:false
        //     },{
        //             img: 'public/images/shoes/img-shoe-7.jpg',
        //             title: 'Nike jordan',
        //             subtitle: 'Air jordan XI Low',
        //             price: '$200.00',
        //             sale: false,
        //             ogprice: '',
        //             info: false,
        //             content: '',
        //             important: false,
        //             badge: '',
        //             badgecolor: '',
        //             menu:false,
        //             deleted:false
        //     },{
        //             img: 'public/images/shoes/img-shoe-8.jpg',
        //             title: 'Acne Studios',
        //             subtitle: 'Adrian - Grained Leather',
        //             price: '$370.00',
        //             sale: false,
        //             ogprice: '',
        //             info: false,
        //             content: '',
        //             important: false,
        //             badge: '',
        //             badgecolor: '',
        //             menu:false,
        //             deleted:false
        //     },{
        //             img: 'public/images/shoes/img-shoe-9.jpg',
        //             title: 'Rick owens x Adidas',
        //             subtitle: 'Black & Milk',
        //             price: '$380.00',
        //             sale: false,
        //             ogprice: '',
        //             info: false,
        //             content: '',
        //             important: false,
        //             badge: '',
        //             badgecolor: '',
        //             menu:false,
        //             deleted:false
        //     },{
        //             img: 'public/images/shoes/img-shoe-10.jpg',
        //             title: 'Adidas',
        //             subtitle: 'Yeezy boost 350',
        //             price: '$560.00',
        //             sale: true,
        //             ogprice: '$940.00',
        //             info: false,
        //             content: '',
        //             important: false,
        //             badge: '',
        //             badgecolor: '',
        //             menu:false,
        //             deleted:false
        //     },{
        //             img: 'public/images/shoes/img-shoe-11.jpg',
        //             title: 'Common Projects',
        //             subtitle: 'Red Canvas & Leather ',
        //             price: '$410.00',
        //             sale: false,
        //             ogprice: '',
        //             info: false,
        //             content: '',
        //             important: false,
        //             badge: '',
        //             badgecolor: '',
        //             menu:false,
        //             deleted:false
        //     },{
        //             img: 'public/images/shoes/img-shoe-12.jpg',
        //             title: 'Nike',
        //             subtitle: 'Lunar force 1 sp acronym white',
        //             price: '$300.00',
        //             sale: false,
        //             ogprice: '',
        //             info: true,
        //             content: ' Sneakers from Nike Sportswear. Made in collaboration with Acronym. Upper in suede. Flat laces. Outer side zip closure. Tongue in leather with perforation.',
        //             important: true,
        //             badge: 'News',
        //             badgecolor: 'green',
        //             menu:false,
        //             deleted:false
        //     }
        //     ]
    }

})();