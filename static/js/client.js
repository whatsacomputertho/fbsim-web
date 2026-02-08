import '/lib/fbsim-ui/register.js';
import { WasmSimService } from '/lib/fbsim-ui/fbsim-ui.js';

const simService = new WasmSimService();

const gameSim = document.querySelector('wact-game-sim');
if (gameSim) {
  gameSim.setSimService(simService);
}
