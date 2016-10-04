(function () {
    'use strict';

    angular.module('footwear')
        .controller('HomeController', HomeController);

    function HomeController($scope, shoeData) {
        var vm = this;
        vm.ogshoes = [];
        vm.cards = [];
        getShoes();
        // var request = shoeData.getAllShoes().then(setShoes);

        var w = angular.element(window);

        w.bind('resize', function () {
            if (w[0].innerWidth < 992) {
                vm.cards = orderShoes(vm.cards);
                $scope.$apply();
            } else {
                vm.cards = vm.ogshoes;
                $scope.$apply();
            }
        });


        function getShoes() {
            var request = shoeData.getAllShoes().then(setShoes);

        }

        function setShoes(res) {
            vm.cards = res.data;
            if (w[0].innerWidth < 992) {
                vm.cards = orderShoes(res.data);
            }
            vm.ogshoes = res.data;
        }
        function orderShoes(shoes) {
            var importantShoes = [];
            var regularShoes = [];
            var newShoes = [];
            var j = Math.ceil(shoes.length / 3);
            shoes.forEach(function (shoe) {
                if (shoe.important) {
                    importantShoes.push(shoe);
                } else {
                    regularShoes.push(shoe);
                }
            });
            for (var i = 0; i <= j; i++) {
                if (regularShoes[i * 2]) {
                    newShoes.push(regularShoes[i * 2]);
                    if (regularShoes[i * 2 + 1]) {
                        newShoes.push(regularShoes[i * 2 + 1]);
                    }
                }
                if (importantShoes[i]) {
                    newShoes.push(importantShoes[i]);
                }
            }
            return newShoes;
        }
    }

})();