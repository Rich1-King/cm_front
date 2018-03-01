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
    vm.move_down = function(){
      var id1 = document.getElementById("id1");
      var div1 = document.getElementById("div1");
      if("none" == div1.getElementsByTagName("ul")[0].style.display){
        div1.getElementsByTagName("ul")[0].style.display="block";
        id1.style.height = id1.offsetHeight+div1.getElementsByTagName("ul")[0].offsetHeight;
        div1.getElementsByTagName("img")[0].src="resources/img/xia.jpg";
      }else{
        id1.style.height = id1.offsetHeight-div1.getElementsByTagName("ul")[0].offsetHeight;
        div1.getElementsByTagName("ul")[0].style.display="none";
        div1.getElementsByTagName("img")[0].src="resources/img/you.png";
      }
    
    }
    vm.mouse_enter = function(event){
      $(event.currentTarget).children()[0].style.display="block";
    }
    vm.mouse_leave = function(event){
      $(event.currentTarget).children()[0].style.display="none";
    }
}
})();