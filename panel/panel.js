'use strict';

Editor.Panel.extend({
  style: `
    :host {
      display: flex;
      flex-direction: column;
    }

    .toolbar {
      display: flex;
      flex-direction: row;

      margin: 10px;
    }

    #view {
      flex: 1;

      margin: 10px;
      overflow-y: auto;
      overflow-x: hidden;
    }

    div.section {
      border-bottom: 1px solid #333;
      padding-bottom: 10px;
    }

    div.group {
      margin-bottom: 5px;

      display: flex;
      flex-direction: row;
      align-items: center;
    }
  `,

  template: `
    <div class="toolbar">
      <select id="select">
        <option value="ui-button">ui-button</option>
      </select>
    </div>
    <div id="view"></div>
  `,

  listeners: {
  },

  ready () {
    this.$ = {
      select: this.shadowRoot.querySelector('#select'),
      view: this.shadowRoot.querySelector('#view'),
    };

    Editor.import('packages://ui-kit-preview/panel/button-preview.js').then(
      initFn => {
        initFn(this.$.view);
      }
    );
  },
});
