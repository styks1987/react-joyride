import React from "react";
import Joyride from "../../src/scripts/Joyride";

export default class Demo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      running: false,
      steps: [
        {
          title: 'Our Projects',
          text: 'Ooops. I forgot to add images!',
          selector: '.my-selector',
          position: 'top-left',
        },
          {
              title: 'Our Projects',
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
        <div style={{height: '100px', background: 'black', textAlign: 'center', color:'white'}}>
          This div will end up pushing the beacon down
        </div>
        <div style={{position: 'relative'}}>
          <div>
            <Joyride
                ref={c => (this.joyride = c)}
                run={true}
                steps={this.state.steps}
                />
            <div style={{width: '600px', background: 'green', padding: '10px', color: 'white', marginLeft: '100px'}}>
              Some irrelevant amount of text
            </div>
            <div className="my-selector" style={{width: '600px', background: 'blue', padding: '10px', color: 'white', marginLeft: '100px'}}>
              My element for the step selector
            </div>
            <div style={{position: 'relative', marginTop: '200px', paddingTop: '20px',height: '400px', background: 'grey', color: 'white'}}>
              <div style={{background: 'green',  color: 'white', width: '500px', height:'100px'}} className="step2">STEPPPY TTTTWOOO</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
