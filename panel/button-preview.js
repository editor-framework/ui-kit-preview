(() => {
  'use strict';

  return function init ( viewEL ) {
    Editor.import('packages://ui-widgets/panel/button-preview.tmpl').then(
      content => {
        viewEL.innerHTML = content;
      }
    );
  };
})();
