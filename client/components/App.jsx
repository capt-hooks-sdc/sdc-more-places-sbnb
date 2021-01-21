import React from 'react';
import axios from 'axios';

import Listing from './Listing.jsx';
import Arrow from './Arrow.jsx';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoaded: false,
      listings: [],
      pageOne: [],
      pageTwo: [],
      pageThree: [],
      currentPage: 1
    }
    this.design = {
      fontFamily: 'Montserrat',
      maxWidth: '1280px'
    }
    this.headerStyle = {
      display: 'flex',
      justifyContent: 'space-between'
    }
    this.arrowContainer = {
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: '20px'
    }
    this.listContainer = {
      display: 'flex',
      justifyContent: 'space-between'
    }
    this.listStyle = {
      width: '250px'
    }

    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
  }

  componentDidMount() {
    this.getListings();
  }

  getListings() {
    axios.get('http://localhost:3000/api/places')
      .then((res) => {
        this.setState({
          ...this.state,
          isLoaded: true,
          listings: res.data,
          pageOne: res.data.slice(0, 4),
          pageTwo: res.data.slice(4, 8),
          pageThree: res.data.slice(8)
        });
      })
  }

  //  Carousel Arrows
  previousSlide() {
    if(this.state.currentPage === 1) {
      // Go to page 3
      this.setState({
        ...this.state,
        currentPage: 3
      });
    } else {
      // Go to prev page
      const currentPage = this.state.currentPage - 1;
      this.setState({
        ...this.state,
        currentPage
      });
    }
  }

  nextSlide() {
    if (this.state.currentPage === 3) {
      this.setState({
        ...this.state,
        currentPage: 1
      });
    } else {
      const currentPage = this.state.currentPage + 1;
      this.setState({
        ...this.state,
        currentPage
      });
    }
  }

  render() {
    return (
      <div style={this.design}>
        <div style={this.headerStyle}>
          <h1>More places to stay</h1>
          <div style={this.arrowContainer}>
            <p>{this.state.currentPage} / 3</p>
            <Arrow direction="left" click={this.previousSlide} />
            <Arrow direction="right" click={this.nextSlide} />
          </div>
        </div>
        <div style={this.listContainer}>
          {
            this.state.isLoaded ?
              (this.state.currentPage === 1 ?
                this.state.pageOne.map((listings) => {
                  return (
                    <div style={this.listStyle}>
                      <Listing listing={listings} />
                    </div>
                  )
                }) :
                this.state.currentPage === 2 ?
                  this.state.pageTwo.map((listings) => {
                    return (
                      <div style={this.listStyle}>
                        <Listing listing={listings} />
                      </div>
                    )
                  }) :
                  this.state.pageThree.map((listings) => {
                    return (
                      <div style={this.listStyle}>
                        <Listing listing={listings} />
                      </div>
                    )
                  })
                ) :
            <p>Loading</p>
          }
        </div>
      </div>
    )
  }
}

export default App;
