(() => {
  'use strict';

  let timeoutID = null;

  function _updateEventText ( viewEL, name ) {
    let eventEL = viewEL.querySelector(`.event`);
    clearTimeout(timeoutID);
    eventEL.innerHTML = `event: ${name}`;
    timeoutID = setTimeout(() => {
      eventEL.innerHTML = 'event: none';
    }, 200);
  }

  return function init ( viewEL ) {
    Editor.import('packages://ui-kit-preview/panel/prop-preview.tmpl').then(
      content => {
        viewEL.innerHTML = content;

        // g-01
        ['.g-01'].forEach(g => {
          let el = viewEL.querySelector(`${g} ui-prop`);

          el.addEventListener('confirm', () => {
            _updateEventText(viewEL, 'confirm');
          });

          el.addEventListener('cancel', () => {
            _updateEventText(viewEL, 'cancel');
          });
        });
      }
    );
  };
})();
