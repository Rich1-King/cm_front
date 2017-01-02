/**
 * Created by rich1 on 11/8/16.
 */
(function () {
  "use strict";
angular.module('app.controllers').controller('loginCtrl',controller);

function controller($state,$http) {
    console.log('loginCtrl');
    var vm = this;
    vm.filter_class=null;
    vm.loginFlag = false;
    vm.captacha = null;
    vm.showLogin = function () {
        console.log('vm.flag is ', vm.loginFlag.valueOf());
        vm.loginFlag = true;
        if(vm.loginFlag){
            $http.get('/cm_api/login/captacha').success(function(response){
                console.log('response:',response);
                vm.captacha = response;
            });
            vm.filter_class={
                '-webkit-filter': 'blur(8px)',
                '-moz-filter': 'blur(8px)',
                '-o-filter': 'blur(8px)',
                '-ms-filter': 'blur(8px)',
                'filter': 'blur(8px)'
            }
        }else{
            vm.filter_class=null;
        }
    }
    vm.shutDownLogin = function(){
        console.log('进入shutDownLogin');
        vm.loginFlag = false;
        vm.filter_class = null;
    }
    vm.go = function () {
        console.log('go into main.html');
        $state.go('main');
    }
    vm.changeCaptcha = function(){
        $http.get('/cm_api/login/captacha').success(function(response){
                console.log('response'+response);
                vm.captacha = response;
            })
    }
}
})();