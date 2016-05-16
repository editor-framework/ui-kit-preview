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
    Editor.import('packages://ui-kit-preview/panel/select-preview.tmpl').then(
      content => {
        viewEL.innerHTML = content;

        ['.g-01'].forEach(g => {
          let select = viewEL.querySelector(`${g} ui-select`);

          select.addEventListener('confirm', event => {
            _updateEventText(viewEL, 'confirm');

            let text = viewEL.querySelector(`${g} span.text`);
            text.style.display = '';
            text.innerHTML = event.detail.text;
            setTimeout(() => {
              text.style.display = 'none';
            }, 200);
          });
        });
      }
    );
  };
})();
