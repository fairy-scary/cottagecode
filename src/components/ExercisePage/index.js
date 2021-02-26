import './ExercisePage.css'
import CodeEditorContainer from '../CodeEditorContainer'
import "ace-builds/src-noconflict/theme-gruvbox";


const ExercisePage = () => {

    return (
        
        <div className="splitscreen exercise1">
            <div className="left-side">
                <div className="exercise left-sections e1">
                    <h2>Level 1: Apple Basket </h2>
                    <p>Write a JavaScript function "AppleBasket" that takes in a quantity of apples you've just picked near your off-grid glamping yurt as an argument and returns the total number of apples in your basket, if you had already picked 10 apples.</p>                
                </div>
                <div className="consoleLog left-sections e1">
                <h2>The Console Log</h2> 
                    <p>Copy/paste the following code after your solution and click "Run" to see if you've solved it!</p>
                    <br/>
                    <span className="code-text">
                        console.log(AppleBasket(32)); //==> 42<br/>
                        console.log(AppleBasket(10)); //==> 20<br/>
                        console.log(AppleBasket(0));  //==> 10 
                    </span>                       
                </div>
                <div className="solution left-sections  e1" >
                    <h2>Solution</h2>
                    <button
                    className="editor-reveal-button"
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
                <CodeEditorContainer className="code-editor" theme="gruvbox"/>
                </div>
            </div>
        </div>
        
    )
}

export default ExercisePage;