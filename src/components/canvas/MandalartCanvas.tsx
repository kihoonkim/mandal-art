import styled from 'styled-components';
import {getSnapshot, loadSnapshot, TLComponents, Tldraw} from "tldraw";
import {useEffect, useRef} from "react";
import {Editor} from "@tldraw/editor";
import CustomMainMenu from "./CustomMainMenu.tsx";
import CustomToolbar from "./CustomToolbar.tsx";
import {buildMandalartShape} from "../../helpers/canvas-shape-helper.ts";
import {configureCanvas} from "../../helpers/canvas-helper.ts";
import 'tldraw/tldraw.css'

const S = {
  Container: styled.div`
    position: fixed;
    inset: 0;
  `,
};

interface Props {
  mandalartId: string;
  pageName: string;
  editable: boolean;
  initialSnapshot: string|null;
  onChange: (s: string) => void;
  onPageNameChange: (s: string) => void;
}

function MandalartCanvas({ mandalartId, pageName, editable, initialSnapshot, onChange, onPageNameChange }: Props) {
  const editorRef = useRef<Editor>();

  useEffect(() => {
    configureCanvas()
  }, [])

  const handleMount = (editor: Editor) => {
    editorRef.current = editor
    editor.updateInstanceState({ isReadonly: !editable })

    if (!initialSnapshot) {
      editorRef.current.updatePage({ id: editorRef.current.getCurrentPageId(), name:  pageName })
      initMandalartBoard()
    }
    else {
      loadSnapshot(editorRef.current.store, JSON.parse(initialSnapshot))
    }

    editorRef.current.zoomToFit({
      animation: { duration: 1000 },
    })

    const unlisten = editor.store.listen(() => {
      console.log("????")
        const { document, session } = getSnapshot(editor.store)
        onChange(JSON.stringify({ document, session }))
      },
      { scope: 'document', source: 'user' }
    )
    //

    return () => unlisten();
  }

  const handleUiEvent = (event: string) => {
    if(!editorRef.current) return
    if (event === 'rename-page') {
      onPageNameChange(editorRef.current.getCurrentPage().name)
    }
  }

  const initMandalartBoard = () => {
    if(!editable) return
    if(!editorRef.current) return
    editorRef.current.createShapes(buildMandalartShape())
  }
  const components: TLComponents = {
    DebugMenu: null,
    HelpMenu: null,
    KeyboardShortcutsDialog: null,
    MainMenu: CustomMainMenu,
    Toolbar: CustomToolbar,
  }
  const options = {
    maxPages: 2,
  }
  return (
    <S.Container>
      <Tldraw
        onMount={handleMount}
        components={components}
        options={options}
        persistenceKey={mandalartId === 'hello-world' ? undefined : mandalartId}
        onUiEvent={handleUiEvent}
      />
    </S.Container>
  );
}

export default MandalartCanvas;
