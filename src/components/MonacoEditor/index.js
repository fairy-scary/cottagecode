import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import Editor, { useMonaco } from "@monaco-editor/react";

function MonacoEditor() {
  const monaco = useMonaco();
  
  useEffect(() => {
    if (monaco) {
      console.log("here is the monaco isntance:", monaco);
    }
  }, [monaco]);

  return (
    <Editor
      height="90vh"
      defaultValue="// some comment"
      defaultLanguage="javascript"
    />
  );
}

export default MonacoEditor;