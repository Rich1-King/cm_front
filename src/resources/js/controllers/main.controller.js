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
      if(0 == id1.style.marginBottom || "0px" == id1.style.marginBottom || "undefine" == id1.style.marginBottom){
        id1.style.marginBottom = div1.getElementsByTagName("ul")[0].offsetHeight;
        div1.getElementsByTagName("img")[0].src="resources/img/xia.jpg";
        id1.style.transition = "margin-bottom 1s linear";
        div1.getElementsByTagName("ul")[0].style.opacity = 1;
        div1.getElementsByTagName("ul")[0].style.transition = "all 1s linear";
      }else{
        id1.style.marginBottom = 0;
        div1.getElementsByTagName("img")[0].src="resources/img/you.png";
        id1.style.transition = "margin-bottom 1s linear";
        div1.getElementsByTagName("ul")[0].style.opacity = 0;
        div1.getElementsByTagName("ul")[0].style.transition = "all 1s linear";

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