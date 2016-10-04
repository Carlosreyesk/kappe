
(function(){
    'use strict';

    angular.module('footwear')
    .directive('footerDirective', footerDirective);

    function footerDirective(){
        var directive = {
            restrict: 'E',
            replace: false,
            scope: {  footer: '=' },
            templateUrl: 'app/common/directives/footer/footer.tpl.html',
            // controller: todoController,
            // controllerAs: 'todo'
            
        }
        return directive;

       
    }
})();