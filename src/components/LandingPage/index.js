import './LandingPage.css';
import Background from './cottagecode-background.png';


const LandingPage = () => {

    return (
    <div>
        <div className="background-image" style={{
        background:`url(${Background})`,
        backgroundColor: '#344822',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
        }}>
            <div className="container">
                <div className="center-content">
                <div className="logo">   
                <h1>Cottage<br/>Code</h1>
                </div> 
                <span className="tagline">An aesthetic-based code exercise platform.</span>
                    <span className="description">Try out basic, intermediate, or advanced JavaScript exercises below. With continued developement, user-based gamification features will be added.</span>
                    <div className="options">
                        <div className="exercise-container">
                            <a href="/1">
                            <div className="wreath w1">
                                <span className="level-num">
                                1
                                </span>
                            </div>
                            </a>
                        </div>
                        <div className="exercise-container">
                            <a href="/2">
                            <div className="wreath w2">
                                <span className="level-num">
                                2
                                </span>
                            </div>
                            </a>
                        </div>
                        <div className="exercise-container">
                            <a href="/3">
                            <div className="wreath w3">
                                <span className="level-num">
                                3
                                </span>
                            </div>
                            </a>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    </div>
    )

}

export default LandingPage;