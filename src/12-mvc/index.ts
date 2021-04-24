import { BeatModel } from './beat.model';
import { Controller } from './controller';

export default () => {
  console.log('\nMVC\n');

  const model = new BeatModel();
  const controller = new Controller(model);
  // workaround since there is no actual window
  const view = controller.getView();

  view.updateBPMEvent('inc');
  view.updateBPMEvent('inc');
  view.updateBPMEvent('inc');
  view.updateBPMEvent('inc');

  view.updateBPMEvent('dec');
  view.updateBPMEvent('dec');
  view.updateBPMEvent('inc');
};
