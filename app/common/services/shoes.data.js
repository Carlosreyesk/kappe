(function(){
    'use strict';

     angular.module('footwear')
    .service('shoeData', shoeData);

    function shoeData($http){

        var getAllShoes = function(){
            return $http.get('http://localhost:8080/api/shoes');
        }

        // var createTodo = function(todo){
        //     return $http.post('http://localhost:8080/api/todos', todo);
        // }

        // var updateTodo = function(todo){
        //     return $http.put('http://localhost:8080/api/todos', todo);
        // }

        return {
            getAllShoes: getAllShoes
            // createTodo: createTodo,
            // updateTodo: updateTodo
        }
    }

})();