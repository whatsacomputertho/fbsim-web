import '/lib/fbsim-ui/register.js';
import { WasmSimService } from '/lib/fbsim-ui/fbsim-ui.js';

try {
  const service = new WasmSimService();
  await service.initialize();

  await customElements.whenDefined('wact-game-sim');

  const gameSim = document.querySelector('wact-game-sim');
  if (gameSim) {
    gameSim.setSimService(service);
  }
} catch (error) {
  console.warn(
    'WasmSimService not available. Install @whatsacomputertho/fbsim-core to enable simulation.',
    error,
  );
}
