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
    Editor.import('packages://ui-kit-preview/panel/input-preview.tmpl').then(
      content => {
        viewEL.innerHTML = content;

        // g-01
        ['.g-01', '.g-02'].forEach(g => {
          let input = viewEL.querySelector(`${g} ui-input`);

          let text = viewEL.querySelector(`${g} span.text`);
          text.innerHTML = input.value;

          input.addEventListener('input', event => {
            let text = viewEL.querySelector(`${g} span.text`);
            text.innerHTML = event.detail.value;

            _updateEventText(viewEL, 'input');
          });

          input.addEventListener('confirm', () => {
            _updateEventText(viewEL, 'confirm');
          });

          input.addEventListener('cancel', () => {
            _updateEventText(viewEL, 'cancel');
          });
        });
      }
    );
  };
})();
