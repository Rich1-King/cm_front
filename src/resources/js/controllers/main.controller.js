/**
 * Created by rich1 on 11/9/16.
 */
(function () {
  "use strict";
angular.module('app.controllers').controller('mainCtrl', controller);

function controller($state) {
    var vm = this;
    /*vm.my = function(){
      $state.go('.my');
    }*/

    vm.avatar_show = function(){
      var avatar = document.getElementById('avatar');
      avatar.style.visibility = 'visible';
    }

    vm.avatar_hidden = function(){
      var avatar = document.getElementById('avatar');
      avatar.style.visibility = 'hidden';
    }
}
})();