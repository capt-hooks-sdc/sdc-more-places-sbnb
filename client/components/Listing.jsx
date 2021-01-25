import React from 'react';

class Listing extends React.Component {
  constructor(props) {
    super(props)
    this.imgStyle = {
      borderRadius: '5%',
      maxHeight: '180px',
      width: '250px'
    }
    this.priceStyle = {
      fontWeight: 900
    }
    this.noRevStyle = {
      margin: '2px'
    }
    this.startColor = {
      color: '#FF385C'
    }
  }

  render() {
    return (
      <div id='listingContainer'>
        <div id='imgContainer'>
          <img src={this.props.listing.pic} style={this.imgStyle} />
        </div>
        <div id='reviewContainer'>
          {
            (this.props.listing.revnum === 0) ?
              <p style={this.noRevStyle}>No reviews yet</p> :
              <p style={this.noRevStyle}><span style={this.startColor}>&#x2605; </span>{this.props.listing.revnum}({this.props.listing.revamount})</p>
          }
        </div>
        <div id='roomContainer'>
          <p style={this.noRevStyle}>{this.props.listing.roomtype} - {this.props.listing.numbeds} beds</p>
        </div>
        <div id='descContainer'>
          <p style={this.noRevStyle}>{this.props.listing.description}</p>
        </div>
        <div id='priceContainer'>
          <p style={this.noRevStyle}><span style={this.priceStyle}>${this.props.listing.price}</span> / night</p>
        </div>
      </div>
    )
  }
}

export default Listing;
