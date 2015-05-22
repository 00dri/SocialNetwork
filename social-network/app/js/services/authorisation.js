'use strict';

socialNetworkApp.factory('authorisation', ['$sessionStorage', '$localStorage', 
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