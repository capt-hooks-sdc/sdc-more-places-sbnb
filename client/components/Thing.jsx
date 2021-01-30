import React from 'react';

class Thing extends React.Component {
  constructor(props) {
    super(props)
    this.imgStyle = {
      borderRadius: '5%',
      height: '300px',
      width: '220px'
    }
    this.priceStyle = {
      fontWeight: 900
    }
    this.noRevStyle = {
      margin: '2px',
      fontWeight: 'lighter'
    }
    this.descStyle = {
      margin: '2px',
      fontWeight: 400
    }
    this.startColor = {
      color: '#FF385C'
    }
    this.reviewContStyle = {
      paddingBottom: '5px'
    }
    this.descContainerStyle = {
      paddingBottom: '5px'
    }
  }

  render() {
    return (
      <div id='listingContainerThing'>
        <div id='imgContainerThing'>
          <img src={this.props.thing.pic} style={this.imgStyle} />
        </div>
        <div id='reviewContainerThing' style={this.reviewContStyle}>
          {
            (this.props.thing.revnum === 0) ?
              <p style={this.noRevStyle}>No reviews yet</p> :
              <p style={this.noRevStyle}><span style={this.startColor}>&#x2605; </span>{this.props.thing.revnum}({this.props.thing.revamount})</p>
          }
        </div>
        <div id='descContainerThing' style={this.descContainerStyle}>
          <p style={this.descStyle}>{this.props.thing.description}</p>
        </div>
        <div id='priceContainerThing'>
          <p style={this.noRevStyle}><span style={this.priceStyle}>From ${this.props.thing.price}</span> / person</p>
        </div>
      </div>
    )
  }
}

export default Thing;