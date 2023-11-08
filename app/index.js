/* eslint-env browser */

import pizzaDiagram from '../resources/pizza-collaboration.bpmn';

import customElements from './custom-elements.json';

import CustomModeler from './custom-modeler';

var modeler = new CustomModeler({
  container: '#canvas',
  keyboard: {
    bindTo: document
  }
});

modeler.importXML(pizzaDiagram).then(() => {
  modeler.get('canvas').zoom('fit-viewport');

  modeler.addCustomElements(customElements);
}).catch(err => {
  console.error('something went wrong:', err);
});


// expose bpmnjs to window for debugging purposes
window.bpmnjs = modeler;
