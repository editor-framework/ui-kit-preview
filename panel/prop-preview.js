(() => {
  'use strict';

  // let timeoutID = null;

  // function _updateEventText ( viewEL, name ) {
  //   let eventEL = viewEL.querySelector(`.event`);
  //   clearTimeout(timeoutID);
  //   eventEL.innerHTML = `event: ${name}`;
  //   timeoutID = setTimeout(() => {
  //     eventEL.innerHTML = 'event: none';
  //   }, 200);
  // }

  return function init ( viewEL ) {
    Editor.import('packages://ui-kit-preview/panel/prop-preview.tmpl').then(
      content => {
        viewEL.innerHTML = content;

        let el = viewEL.querySelector(`.g-01 ui-prop[name="Slidable"]`);
        let inputEL = el.querySelector('ui-num-input');
        let slideEL = el.querySelector('ui-slider');

        // TODO: for slide cancel?
        // let val1 = inputEL.value;
        // let val2 = slideEL.value;

        el.addEventListener('slide', event => {
          inputEL.value = inputEL.value + event.detail.dx;
          slideEL.value = slideEL.value - event.detail.dy  * 0.001;
        });
      }
    );
  };
})();
