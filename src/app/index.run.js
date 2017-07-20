(function() {
  'use strict';

  angular
    .module('exemplo3')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
