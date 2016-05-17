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
    Editor.import('packages://ui-kit-preview/panel/slider-preview.tmpl').then(
      content => {
        viewEL.innerHTML = content;

        // g-01
        ['.g-01', '.g-02', '.g-03'].forEach(g => {
          let slider = viewEL.querySelector(`${g} ui-slider`);
          let text = viewEL.querySelector(`${g} span.text`);
          text.innerHTML = slider.value;

          slider.addEventListener('change', event => {
            let text = viewEL.querySelector(`${g} span.text`);
            text.innerHTML = event.detail.value;

            _updateEventText(viewEL, 'change');
          });

          slider.addEventListener('confirm', () => {
            _updateEventText(viewEL, 'confirm');
          });

          slider.addEventListener('cancel', () => {
            _updateEventText(viewEL, 'cancel');
          });
        });
      }
    );
  };
})();
