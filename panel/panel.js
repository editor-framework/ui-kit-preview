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

    div.group {
      border-bottom: 1px solid #333;
      padding: 10px;
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

    Editor.import('packages://ui-widgets/panel/button-preview.js').then(
      initFn => {
        initFn(this.$.view);
      }
    );
  },
});
