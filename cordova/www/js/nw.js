var gui = require('nw.gui');
var windowMenu = new gui.Menu({ type: 'menubar' });
// Add first level menu
var firstMenuItem = new gui.MenuItem({
  label:'File',
  submenu: new gui.Menu()
});
windowMenu.append(firstMenuItem);

// Add submenu items
firstMenuItem.submenu.append(new gui.MenuItem({label:'Open'}));
firstMenuItem.submenu.append(new gui.MenuItem({label:'Save'}));
firstMenuItem.submenu.append(new gui.MenuItem({type:'separator'}));
firstMenuItem.submenu.append(new gui.MenuItem({label:'Exit'}));

gui.Window.get().menu = windowMenu;