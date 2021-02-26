import React, { useState } from 'react'; 
import './CodeEditor.css'
import '../ExercisePage/ExercisePage.css'
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";


const CodeEditor = (props) => {
  const [input, setInput] = useState("");
    const submit = async (e) => {
        e.preventDefault();
        let outputText = document.getElementById("output");

        outputText.innerHTML = "";
        outputText.innerHTML += "Creating Submission ...\n";
        
        const response = await fetch(
          "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&fields=*",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
              "x-rapidapi-key": "ede39e0fe0msh89c337e0ac98875p121505jsn5f36188a7af2",
              "x-rapidapi-host": "judge0-ce.p.rapidapi.com",

            },
            body: JSON.stringify({
              "language_id": 63,
              "source_code": btoa(input),
              "stdin": "SnVkZ2Uw"
            }),
          }
        );
        
         

        outputText.innerHTML += "Submission Created ...\n";
        
        if(response.ok) {
           
        const jsonResponse = await response.json();
        
        let jsonGetSolution = {
          status: { description: "Queue" },
          stderr: null,
          compile_output: null,
        };
    
        while (
          jsonGetSolution.status.description !== "Accepted" &&
          jsonGetSolution.stderr == null &&
          jsonGetSolution.compile_output == null
        ) {
          outputText.innerHTML = `Creating Submission ... \nSubmission Created ...\nChecking Submission Status\nstatus : ${jsonGetSolution.status.description}`;
          if (jsonResponse.token) {

            let url = "https://judge0-ce.p.rapidapi.com/submissions/"
    
            const getSolution = await fetch(`${url}${jsonResponse.token}?base64_encoded=true&fields=*`, {
              "method": "GET",
              "headers": {
                "x-rapidapi-key": "ede39e0fe0msh89c337e0ac98875p121505jsn5f36188a7af2",
                "x-rapidapi-host": "judge0-ce.p.rapidapi.com"
              }
            });
    
            jsonGetSolution = await getSolution.json();
            
          }
        }
        // atob() decodes base-64 encoded string
        if (jsonGetSolution.stdout) {
          const output = atob(jsonGetSolution.stdout);
    
          outputText.innerHTML = "";
    
          outputText.innerHTML += `Results : \n${output}\nExecution Time : ${jsonGetSolution.time} Secs\nMemory used : ${jsonGetSolution.memory} bytes`;

        //error-handling  
        } else if (jsonGetSolution.stderr) {

          const error = atob(jsonGetSolution.stderr);
    
          outputText.innerHTML = "";
    
          outputText.innerHTML += `\n Error :${error}`;
        } else {

          const compilation_error = atob(jsonGetSolution.compile_output);
    
          outputText.innerHTML = "";
    
          outputText.innerHTML += `\n Error :${compilation_error}`;
        }
      };
      };
  
  return (
    <>
    <div className="editor-container">
      <AceEditor 
      className="editor-container"
      mode="javascript"
      theme={props.theme}
      name="solution"
      id="source"
      onChange={setInput}
      fontSize={16}
      style={{width: '600px', height: '450px'}}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={false}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: false,
        enableSnippets: false,
        showLineNumbers: true,
        tabSize: 3
      }} />
    
      <div className="output-container">
        <textarea id="output" style={props.outputstyle}></textarea>
      </div>
      </div>
      <div>
          <button
            type="submit"
            onClick={submit}
            className="editor-run-button"
            style={props.runbuttonstyle}
          >
          Run
          </button>
          </div> 
       
    </>  
  )
}


export default CodeEditor
