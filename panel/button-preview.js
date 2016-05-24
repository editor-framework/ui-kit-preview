(() => {
  'use strict';

  return function init ( viewEL ) {
    Editor.import('packages://ui-kit-preview/panel/button-preview.tmpl').then(
      content => {
        viewEL.innerHTML = content;

        // g-01
        ['.g-01', '.g-02'].forEach(g => {
          let btn = viewEL.querySelector(`${g} ui-button`);
          btn.addEventListener('click', () => {
            let text = viewEL.querySelector(`${g} span`);
            text.style.display = '';
            setTimeout(() => {
              text.style.display = 'none';
            }, 200);
          });
        });

        let el = viewEL.querySelector(`.g-02 [disabled]`);
        let btn = viewEL.querySelector(`.g-02 #focus`);
        btn.addEventListener('click', () => {
          Editor.UI.focus(el);
        });
      }
    );
  };
})();
