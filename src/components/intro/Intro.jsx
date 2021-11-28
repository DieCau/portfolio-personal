import './intro.css'

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Diego Caucota</h1>
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
                                UX/UI Designer
                            </div>
                            <div className="i-title-item">
                                Full Stack Developer (React, Node, PHP, MongoDB)
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="i-right">right</div>          
        </div>
    )
}

export default Intro
