import React from "react";
import Joyride from "../../src/scripts/Joyride";

export default class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            running: false,
            type: 'continuous',
            steps: [
                {
                    title: 'Step 1',
                    text: 'Ooops. I forgot to add images!',
                    selector: '.step1',
                    position: 'top-left',
                },
                {
                    title: 'Step 2',
                    text: 'Ooops. I forgot to add images!',
                    selector: '.step2',
                    position: 'top-left',
                }
            ]
        };

    }

    render() {
        return (
            <div>
              <div style={{height: '100px', background: 'black', textAlign: 'center', color: 'white'}}>
                This div will end up pushing the beacon down
              </div>
              <div style={{position: 'relative'}} className="step1box">
                <div>
                  <Joyride
                      offsetParentSelector=".step1box"
                      ref={c => (this.joyride = c)}
                      run={true}
                      steps={this.state.steps}
                  />
                  <div style={{
                      width: '600px',
                      background: 'green',
                      padding: '10px',
                      color: 'white',
                      marginLeft: '100px'
                  }}>
                    Some irrelevant amount of text
                  </div>
                  <div className="step1" style={{
                      width: '600px',
                      background: 'blue',
                      padding: '10px',
                      color: 'white',
                      marginLeft: '100px'
                  }}>
                    Step 1
                  </div>
                  <div className="step2box" style={{
                      position: 'relative',
                      marginTop: '200px',
                      paddingTop: '20px',
                      height: '400px',
                      background: 'grey',
                      color: 'white'
                  }}>
                    <div style={{background: 'green', color: 'white', width: '500px', height: '100px'}}
                         className="step2">Step 2
                    </div>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}
