(function() {
  'use strict';

  angular.module("app")

    .component('navbar',{
      controller: function () {
        const vm = this;
      },
      templateUrl: './nav/nav.template.html'
    });

})();
