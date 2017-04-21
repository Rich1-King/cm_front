(function(){
    angular.module('app').config(mainRouter);
    function mainRouter($stateProvider, $urlRouterProvider){
        $stateProvider.state('main.my',{
            url:'/my',
            templateUrl:'templates/component/main.my.html',
            controller: 'mainCtrl as vm'
        })
        .state('main.bar',{
            url:'/bar',
            templateUrl:'templates/component/main.bar.html'
        });
    }
})();