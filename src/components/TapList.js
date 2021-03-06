import React from 'react';
import PropTypes from 'prop-types';

import './TapList.css';
import Tap from './Tap';

class TapList extends React.Component {
  static PropTypes = {
    beers: PropTypes.object.isRequired,
  }

  render() {
    return (
      <div className="tap-page">
        <h2>Fûgidaire Taplist v3</h2>
        <div className="tap-container">
          {
            Object
              .keys(this.props.beers)
              .map((key) => {
                return (
                  <Tap
                    key={key}
                    beer={this.props.beers[key]}
                    tapName={key.slice(-1)}
                  />
                );
              })
          }
        </div>
      </div>
    )
  }
}

export default TapList;
