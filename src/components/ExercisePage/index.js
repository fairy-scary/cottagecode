import './ExercisePage.css'
import CodeEditorContainer from '../CodeEditorContainer'

const ExercisePage = () => {

    return (
        
        <div className="splitscreen">
            <div className="left-side">
                <div className="exercise">
                    <h2>Level 1: Plus Five</h2>
                    <p>Write a function plusFive that takes in a number as an argument and returns the sum of that number and 5.</p>
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
                <CodeEditorContainer className="code-editor"/>
                </div>
            </div>
        </div>
        
    )
}

export default ExercisePage;