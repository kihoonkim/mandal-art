import {
  DefaultMainMenu,
  EditSubmenu,
  ExportFileContentSubMenu,
  ViewSubmenu
} from "tldraw";

function CustomMainMenu() {
  return (
    <DefaultMainMenu>
      <EditSubmenu />
      <ViewSubmenu />
      <ExportFileContentSubMenu />
    </DefaultMainMenu>
  );
}

export default CustomMainMenu;
