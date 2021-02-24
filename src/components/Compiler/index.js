import React, { useState } from 'react';
import './Compiler.css';


function Compiler() {
    const [input, setInput] = useState("");
 
    const submit = async (e) => {
        e.preventDefault();
        let outputText = document.getElementById("output");

        outputText.innerHTML = "";
        outputText.innerHTML += "Creating Submission ...\n";
        console.log("input", input)
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
        console.log(response)
         

        outputText.innerHTML += "Submission Created ...\n";
        
        if(response.ok) {
          console.log(response.error) 
        const jsonResponse = await response.json();
        console.log(jsonResponse)
        
        
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
            console.log(jsonGetSolution)
          }
        }
        // atob() decodes base-64 encoded string
        if (jsonGetSolution.stdout) {
          const output = atob(jsonGetSolution.stdout);
    
          outputText.innerHTML = "";
    
          outputText.innerHTML += `Results : ${output}\nExecution Time : ${jsonGetSolution.time} Secs\nMemory used : ${jsonGetSolution.memory} bytes`;

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
      <div className="row">
            <p>Code Here</p>
          <textarea
            required
            name="solution"
            id="source"
            onChange={(e) => {setInput(e.target.value)}}
            className=" source"
          ></textarea><br/>
          <button
            type="submit"
            onClick={submit}
          >
          Run
          </button><br/>
        <div className="col-5">
          <div>
            {/* <h2>Output</h2><br/> */}
            <textarea id="output"></textarea>
          </div>
        </div>
      </div>
    </>
    )
}

export default Compiler;