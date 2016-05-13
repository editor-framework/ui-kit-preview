(() => {
  'use strict';

  return function init ( viewEL ) {
    Editor.import('packages://ui-kit-preview/panel/checkbox-preview.tmpl').then(
      content => {
        viewEL.innerHTML = content;

        // g-01
        ['.g-01', '.g-02'].forEach(g => {
          let btn = viewEL.querySelector(`${g} ui-checkbox`);
          btn.addEventListener('click', () => {
            let text = viewEL.querySelector(`${g} span`);
            text.style.display = '';
            setTimeout(() => {
              text.style.display = 'none';
            }, 200);
          });
        });
      }
    );
  };
})();
