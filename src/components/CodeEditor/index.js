import React from 'react'; 
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

const CodeEditor = () => {

  
  return (
    <div className="editor-container">
      <AceEditor 
      placeholder="Placeholder Text"
      mode="javascript"
      theme="monokai"
      name="blah2"
      fontSize={14}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      setOptions={{
        enableBasicAutocompletion: false,
        enableLiveAutocompletion: false,
        enableSnippets: false,
        showLineNumbers: true,
        tabSize: 2
      }}
      />
    </div>
  )
}


export default CodeEditor
