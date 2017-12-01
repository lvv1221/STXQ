const gui = require('nw.gui')
const win = gui.Window.get()
// win.setAlwaysOnTop(true)
win.showDevTools() // 打开调试口
export default {
  win: win
}
