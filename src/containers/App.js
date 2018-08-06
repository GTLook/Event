import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { request, AuthenticationService } from '../helpers'


//CSS
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path='/' component={ Home } />
              <Route exact path='/:museumId' component={ MuseumPage } />
              <Route exact path='/:museumId/:galleryId' component={ GalleryPage } />
              <Route path='/:museumId/:galleryId/FindArt' component={ ArtImage } />
              <Route exact path='/:museumId/:galleryId/:artId' component={ ArtPage } />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)
export default connect(null, mapDispatchToProps)(App)
