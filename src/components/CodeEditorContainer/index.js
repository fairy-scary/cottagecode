import React, { useState, useEffect } from 'react';
import CodeEditor from '../CodeEditor'


function CodeEditorContainer(props) {

 

  return (
    <div className="compiler-container">
       <CodeEditor theme={props.theme} outputstyle={props.outputstyle} runbuttonstyle={props.runbuttonstyle}/>
    </div>
  );
}

export default CodeEditorContainer;
