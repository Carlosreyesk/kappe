(function(){
    'use strict';

    angular.module('footwear')
    .directive('advcardDirective', advcardDirective);

    function advcardDirective(){
        var directive = {
            restrict: 'E',
            replace: false,
            scope: {  advcard: '=' },
            templateUrl: 'app/common/directives/cards/advcard.tpl.html',
             controller: advcardController,
             controllerAs: 'advertise'
            
        }
        return directive;

        function advcardController(){
            var vm = this;

             vm.title="New Arrivals";
            vm.content="OG ERA LX WTAPS";
            
        }
    }

    
})();