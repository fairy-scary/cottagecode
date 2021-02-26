import './ExercisePage.css'
import CodeEditorContainer from '../CodeEditorContainer'
import "ace-builds/src-noconflict/theme-gruvbox";

const ExercisePage3 = () => {

    return (
        
        <div className="splitscreen">
            <div className="left-side">
                <div className="exercise">
                    <h2>Level 3: Array Yay</h2>
                    <p> Write a JavaScript function "ArrayYay" that returns the most frequent item of an array.</p>
                </div>
                <div className="buttons">
                <button>Submit Answer</button>
                <button>Give Up</button>
                <button>Reset</button>
                </div>
                <div className="hint">
                    <h2>Hint</h2>
                    <p>-click to reveal-</p>
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

export default ExercisePage3;