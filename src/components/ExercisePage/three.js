import './ExercisePage.css'
import CodeEditorContainer from '../CodeEditorContainer'
import "ace-builds/src-noconflict/theme-mono_industrial";

const ExercisePage3 = () => {

    return (
        
        <div className="splitscreen exercise3">
            <div className="left-side">
                <div className="exercise left-sections e3">
                    <h2>Level 3: Word Mushies</h2>
                    <p>Write a JavaScript function "WordMushies" to find the shortest possible string which can create a string to make it a palindrome by adding characters to the end of it.</p>                
                </div>
                <div className="consoleLog left-sections e3">
                <h2>The Console Log</h2> 
                    <p>Copy/paste the following code after your solution and click "Run" to see if you've solved it!</p>
                    <br/>
                    <span className="code-text3">
                        console.log(WordMushies("abcddc"));<br/>
                        console.log(WordMushies("122"));
                    </span>                       
                </div>
                <div className="solution left-sections e3" >
                    <h2>Solution</h2>
                    <button
                    className="editor-reveal-button3"
                    >
                    Reveal
                    </button>
                    {/* {function myFunction() {
                        var x = document.getElementById("solution1");
                        if (x.style.display === "none") {
                            x.style.display = "block";
                        } else {
                            x.style.display = "none";
                        }
                    }
                    } */}
                </div>
            </div>

            <div className="right-side">
              <div className="editor-window">
                <CodeEditorContainer 
                className="code-editor" 
                theme="mono_industrial" 
                outputstyle={{
                backgroundColor: "#98955E",
                color: "#2E3440"}} 
                runbuttonstyle={{
                color:"#CBD6CE",
                boxShadow: "3px 6px 6px 1px #191F1C",
                background: "linear-gradient(to bottom, #CE801A 5%, #531516 100%)",
                backgroundColor:"#CE801A"
                }}/>
                </div>
            </div>
        </div>
    )
}

export default ExercisePage3;

// function build_Palindrome(new_str) {
//     let flag;
//     for (let i = new_str.length;; i++) {
//       flag = true;
//       for (var j = 0; j < i - j - 1; j++) {
//         if (i - j - 1 < new_str.length && new_str[j] != new_str[i - j - 1]) {
//           flag = false;
//           break;
//         }
//       }
//       if (flag) {
//         for (var j = new_str.length; j < i; j++) {
//           new_str += new_str[i - j - 1];
//         }
//         return new_str;
//       }
//     }
//   }
  
//   console.log(build_Palindrome("abcddc"))
//   console.log(build_Palindrome("122"))