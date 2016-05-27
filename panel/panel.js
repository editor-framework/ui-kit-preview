'use strict';

Editor.Panel.extend({
  style: `
    :host {
      display: flex;
      flex-direction: column;
    }

    h3 {
      margin-top: 0;
      margin-bottom: 10px;
    }

    .toolbar {
      display: flex;
      flex-direction: row;
      align-items: center;

      padding: 10px;
    }

    #view {
      flex: 1;

      padding: 10px;
      padding-top: 0px;

      overflow-y: auto;
      overflow-x: hidden;
    }

    div.section {
      border-bottom: 1px solid #666;
      padding-bottom: 10px;
      margin-bottom: 10px;
    }

    div.section:last-child {
      border-bottom: 0px;
    }

    div.group {
      margin-bottom: 5px;

      display: flex;
      flex-direction: row;
      align-items: center;
    }

    span {
      margin-right: 0.25em;
    }
  `,

  template: `
    <div class="toolbar">
      <ui-select id="select">
        <option value="button">ui-button</option>
        <option value="checkbox">ui-checkbox</option>
        <option value="color">ui-color</option>
        <option value="color-picker">ui-color-picker</option>
        <option value="input">ui-input</option>
        <option value="num-input">ui-num-input</option>
        <option value="prop">ui-prop</option>
        <option value="select">ui-select</option>
        <option value="slider">ui-slider</option>
      </ui-select>
      <span>Ctrl/Cmd + F: show current focus</span>
    </div>
    <div id="view" class="scroll"></div>
  `,

  listeners: {
  },

  ready () {
    this.$ = {
      select: this.shadowRoot.querySelector('#select'),
      view: this.shadowRoot.querySelector('#view'),
    };

    this.addEventListener('keydown', event => {
      if (event.metaKey || event.ctrlKey) {
        if (Editor.KeyCode(event.keyCode) === 'f') {
          if ( Editor.UI.FocusMgr.focusedElement ) {
            console.log(Editor.UI.FocusMgr.focusedElement._curFocus);
          } else {
            console.log(null);
          }
        }
      }
    });

    this.$.select.addEventListener('confirm', event => {
      let value = event.target.value;

      this.profiles.local.scrollTop = 0;
      this.profiles.local.select = value;
      this.profiles.local.save();

      this.showPreview(value);
    });

    this.$.select.value = this.profiles.local.select;
    this.showPreview(this.profiles.local.select);
  },

  close () {
    this.profiles.local.scrollTop = this.$.view.scrollTop;
    this.profiles.local.save();
  },

  showPreview (name) {
    Editor
      .import(`packages://ui-kit-preview/panel/${name}-preview.js`)
      .then(initFn => {
        initFn(this.$.view);
        setTimeout(() => {
          this.$.view.scrollTop = this.profiles.local.scrollTop;
        }, 10);
      });
  },
});
