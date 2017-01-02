/**
 * Created by rich1 on 10/30/16.
 */
(function(){
angular.module('app').config(defaultRouter);

function defaultRouter($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('login');

    $stateProvider.state('login', {
            url:'/login',
            templateUrl:'templates/login/login.html',
            controller: 'loginCtrl as vm'
        }).state('main',{
            url:'/main',
            templateUrl: 'templates/component/main.html',
            controller: 'mainCtrl as vm'
        });

}
})();