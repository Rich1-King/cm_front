(function(){
    angular.module('app').config(mainRouter);
    function mainRouter($stateProvider, $urlRouterProvider){
        $stateProvider.state('main.my',{
            url:'/my',
            templateUrl:'templates/component/main.my.html'
        });
    }
})();