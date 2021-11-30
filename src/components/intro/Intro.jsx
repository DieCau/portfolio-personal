import './intro.css'
import Me from '../../img/me.png'

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">John Bross</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">
                                Web Developer
                            </div>
                            <div className="i-title-item">
                                Software Developer
                            </div>
                            <div className="i-title-item">
                                Mobile Developer
                            </div>
                            <div className="i-title-item">
                                Content Creator
                            </div>
                            <div className="i-title-item">
                                Full Stack Developer
                            </div>
                        </div>
                    </div>
                    <div className="i-desc">
                       I design and develop websites and mobile applications. I am a full stack developer with a passion for learning and creating. 
                    </div>
                </div>
            </div>
            <div className="i-right">
                <img src={Me} alt="me" className="i-img" />
            </div>          
        </div>
    )
}

export default Intro
