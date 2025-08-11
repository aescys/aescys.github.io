
/* Display 1 */

var domPair1 = document.getElementById('calculator_one');
var graphOne = Desmos.GraphingCalculator(domPair1, {
  expressions: false,       // Hides the expressions list
  settingsMenu: false,      // Hides settings (gear icon)
  zoomButtons: false,       // Optional: hides zoom controls
  keypad: false,            // Optional: disables on-screen keypad
  expressionsTopbar: false, // Optional: hides topbar in expression list
  border: false,            // Optional: removes border
  lockViewport: false        // Prevents user from zooming/panning
});
graphOne.setMathBounds({
  left: -5,
  right: 5,
  bottom: -5,
  top: 5
});
graphOne.setExpression({ id: 'graph1', latex: 'y=\\sin(1/x)' });

var domPair2 = document.getElementById('calculator_two');
var graphTwo = Desmos.GraphingCalculator(domPair2, {
  expressions: false,       // Hides the expressions list
  settingsMenu: false,      // Hides settings (gear icon)
  zoomButtons: false,       // Optional: hides zoom controls
  keypad: false,            // Optional: disables on-screen keypad
  expressionsTopbar: false, // Optional: hides topbar in expression list
  border: false,            // Optional: removes border
  lockViewport: false        // Prevents user from zooming/panning
});
graphTwo.setMathBounds({
  left: -0.35,
  right: 0.35,
  bottom: -1.4,
  top: 1.4
});
graphTwo.setExpression({ id: 'graph2', latex: 'y=\\sin(1/x)' });