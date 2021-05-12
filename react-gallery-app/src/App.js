import React, { Component } from 'react';
import {BrowserRouter,
       Route,
       Switch} from 'react-router-dom';
import apiKey from './config';
import Nav from './Components/Nav';
import PhotoContainer from './Components/PhotoContainer';
import NotFound from './Components/NotFound';
import SearchForm from './Components/SearchForm';


class App extends Component {

  constructor() {
    super();
      this.state = {
        photos: [],
        wonderWoman: [],
        captainMarvel: [],
        blackWidow: [],
        tags: ''
          };
  }

  componentDidMount() {
    this.searchResults();
    this.wonderWoman();
    this.captainMarvel();
    this.blackWidow();

  }

//Function to search photos based on tags
  searchResults = (query = "Comics") => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData=> {
        this.setState({ photos: responseData.photos.photo,
        tags: query
      })

        })
    .catch(err=> {
      console.log('Error fetching and parsing data', err)
      })
  }

//Header links to find photos based on given tag specified in links

   wonderWoman = () => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=wonderWoman&per_page=24&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(responseData=> {
      this.setState({ wonderWoman: responseData.photos.photo })
  })
    .catch(err=> console.log('Error fetching and parsing data', err))
  }


  captainMarvel = () => {
      fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=captain+marvel&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData=> {
        this.setState({ captainMarvel: responseData.photos.photo })
})
  .catch(err=> console.log('Error fetching and parsing data', err))
}

  blackWidow = () => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=black+widow&per_page=24&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(responseData=> {
      this.setState({ blackWidow: responseData.photos.photo })
})
  .catch(err=> console.log('Error fetching and parsing data', err))

}
//Rendered the components in the order they appeared on the header
//Routed the header links in the <Switch> tag
  render() {
    return (

    <BrowserRouter>
      <div className="container">
        <SearchForm onSearch={this.searchResults} />
        <Nav/>
        <div className="photo-container">
        <Switch>
          <Route exact path= "/" render={ () => <PhotoContainer data={this.state.photos} title={this.state.tags}/>} />
          <Route exact path= "/search/:query" render={ () => <PhotoContainer data={this.state.photos} title={this.state.tags} onSearch={this.searchResults}/> }/>
          <Route path= "/wonderwoman" render={ () => <PhotoContainer data={this.state.wonderWoman} onClick={this.state.wonderWoman} title="Wonder Woman"/>} />
          <Route path= "/captainmarvel" render={ () => <PhotoContainer data={this.state.captainMarvel} onClick={this.state.captainMarvel} title="Captain Marvel"/>} />
          <Route path= "/blackwidow" render={ () => <PhotoContainer data={this.state.blackWidow} onClick={this.state.blackWidow} title="Black Widow"/> } />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
  );
}
}

export default App;