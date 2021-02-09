import React, {useState, createRef } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [showDocs, toggleDocs] = useState(false)
  const [showEditor, toggleEditor] = useState(false)
  const [isResizing, setIsResizing] = useState(false)
  const [previewWidth, setPreviewWidth] = useState(document.body.clientWidth / 2)

  const startResize = () => setIsResizing(true)

  const endResize = () => setIsResizing(false)

  const preview = createRef()

  const resize = (e) => {
    console.log('mousemoved');
      if (isResizing) {
          // some sort of mouse position
          setPreviewWidth(e.clientX)
      }
  }

 // document.body.clientWidth
  return (

    <div className="App">
    <button onClick={() => toggleDocs(!showDocs)}>toggle docs</button>
    <button onClick={() => toggleEditor(!showEditor)}>toggle editor</button>
      <div className="asset-editor-wrapper" ref={preview}>
        <div
          className="asset"
          // set editor width with stuff above?????
          style= {{
            width:  showEditor ? previewWidth : "95%",
            height:  showDocs ? "49vh" : "99vh"
          }}
          >
          ASSET
         </div>

        {showEditor
          ?  (<>
                <div className="resizer" onMouseDown={startResize} onMouseMove={resize} onMouseUp={endResize} style={{cursor:'col-resize'}}>
                   resizer
                   </div>
                <div className="editor" style= {{display:  showEditor ? 'inherit':'none', height:  showDocs ? "49vh" : "99vh", width: document.body.clientWidth - previewWidth - 10 }}>
                 EDITOR
                </div>
              </>
            )
          : null
        }
        {showDocs
          ? <div className="docs" style={{display:  showDocs ? 'block':'none' }}> DOCS
                  </div>
          : null
        }
      </div>
    </div>
  );
}

export default App;
