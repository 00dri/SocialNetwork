'use strict';

socialNetworkApp.factory('credentials', ['$sessionStorage', '$localStorage', 
    function(sessionStorage, localStorage){
        function addToSessionStorage(){

        }

        function addToLocalStorage(){

        }

        function emptyStorage(){
            $sessionStorage.$reset();
            $localStorage.$reset();
        }

    }]);