import {
  bootstrapBpmnJS,
  inject
} from '../TestHelper';

import CustomModeler from '../../app/custom-modeler';

import diagramXML from './Modeling.collaboration.bpmn';


describe('modeling', function() {

  describe('collaboration', function() {

    beforeEach(bootstrapBpmnJS(CustomModeler, diagramXML));


    describe('removing participants', function() {

      beforeEach(inject(function(bpmnjs) {

        var customShape = {
          type: 'custom:triangle',
          id: 'CustomTriangle_1',
          x: 300,
          y: 300
        };

        bpmnjs.addCustomElements([ customShape ]);
      }));


      it('should update parent', inject(function(elementRegistry, canvas, modeling) {

        // given
        var customTriangle = elementRegistry.get('CustomTriangle_1');

        // when
        modeling.removeElements([
          elementRegistry.get('_6-53'),
          elementRegistry.get('_6-438')
        ]);

        // then
        expect(customTriangle.parent).to.eql(canvas.getRootElement());
      }));

    });

  });

});
