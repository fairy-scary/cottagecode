import './ExercisePage.css'
import CodeEditorContainer from '../CodeEditorContainer'
import "ace-builds/src-noconflict/theme-nord_dark";

const ExercisePage2 = () => {

    return (
        
        <div className="splitscreen exercise2">
            <div className="left-side">
                <div className="exercise left-sections e2">
                    <h2>Level 2: Moon Water</h2>
                    <p>Write a JavaScript function "AppleBasket" that takes in a quantity of apples you've just picked near your off-grid glamping yurt as an argument and returns the total number of apples in your basket, if you had already picked 10 apples.</p>                
                </div>
                <div className="consoleLog left-sections e2">
                <h2>The Console Log</h2> 
                    <p>Copy/paste the following code after your solution and click "Run" to see if you've solved it!</p>
                    <br/>
                    <span className="code-text2">
                        console.log(AppleBasket(32)); //==> 42<br/>
                        console.log(AppleBasket(10)); //==> 20<br/>
                        console.log(AppleBasket(0));  //==> 10 
                    </span>                       
                </div>
                <div className="solution left-sections e2" >
                    <h2>Solution</h2>
                    <button
                    className="editor-reveal-button2"
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
                theme="nord_dark" 
                outputstyle={{
                backgroundColor: "#B48EAD",
                color: "#2E3440"}} 
                runbuttonstyle={{
                color:"#DCE1F2",
                boxShadow: "3px 6px 6px 1px #030916",
                background: "linear-gradient(to bottom, #838DAF 5%, #704b69 100%)",
                backgroundColor:"#838DAF"
                }}/>
                </div>
            </div>
        </div>
    )
}

export default ExercisePage2;

// function sumTriple (x, y) {
//     if (x === y) {
//       return 3 * (x + y);
//       } 
//      else
//      {
//       return (x + y);
//      }
//    }
//   console.log(sumTriple(10, 20));
//   console.log(sumTriple(10, 10));