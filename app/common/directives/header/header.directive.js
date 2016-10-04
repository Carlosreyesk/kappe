(function(){
    'use strict';

    angular.module('footwear')
    .directive('headerDirective', headerDirective);

    function headerDirective(){
        var directive = {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/common/directives/header/header.tpl.html',
            // controller: todoController,
            // controllerAs: 'todo'
            
        }
        return directive;
    }
})();