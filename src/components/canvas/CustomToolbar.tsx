import {
  ArrowRightToolbarItem,
  ArrowToolbarItem,
  CheckBoxToolbarItem,
  CloudToolbarItem,
  DefaultToolbar,
  DiamondToolbarItem,
  DrawToolbarItem,
  EllipseToolbarItem,
  EraserToolbarItem,
  HandToolbarItem,
  HexagonToolbarItem,
  HighlightToolbarItem,
  LineToolbarItem,
  NoteToolbarItem,
  OvalToolbarItem,
  RectangleToolbarItem,
  RhombusToolbarItem,
  SelectToolbarItem,
  StarToolbarItem,
  TextToolbarItem,
  ToolbarItem,
  TriangleToolbarItem,
  XBoxToolbarItem
} from "tldraw";

function CustomToolbar() {
  return (
    <DefaultToolbar>
      <SelectToolbarItem />
      <HandToolbarItem />
      <DrawToolbarItem />
      <EraserToolbarItem />
      <ArrowToolbarItem />
      <TextToolbarItem />
      <NoteToolbarItem />
      <RectangleToolbarItem />
      <EllipseToolbarItem />
      <TriangleToolbarItem />
      <DiamondToolbarItem />
      <HexagonToolbarItem />
      <OvalToolbarItem />
      <RhombusToolbarItem />
      <StarToolbarItem />
      <CloudToolbarItem />
      <ToolbarItem tool="heart" />
      <XBoxToolbarItem />
      <CheckBoxToolbarItem />
      <ArrowRightToolbarItem />
      <LineToolbarItem />
      <HighlightToolbarItem />
    </DefaultToolbar>
  );
}

export default CustomToolbar;
