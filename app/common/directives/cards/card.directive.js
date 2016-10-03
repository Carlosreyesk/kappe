(function(){
    'use strict';

    angular.module('footwear')
    .directive('cardDirective', cardDirective);

    function cardDirective(){
        var directive = {
            restrict: 'E',
            replace: false,
            scope: {  card: '=' },
            templateUrl: 'app/common/directives/cards/card.tpl.html',
            // controller: todoController,
            // controllerAs: 'todo'
            
        }
        return directive;

        function todoController(){
            var vm = this;
        }
    }
})();