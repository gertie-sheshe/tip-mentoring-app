import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {fetchBooks} from '../../actions/bookActions';

export class App extends React.Component {
  componentWillMount() {
    this.props.fetchBooks();
  }
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">Logo</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>About</li>
            </ul>
          </div>
        </nav>
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  books: state.books
})

export default connect(mapStateToProps, {
  fetchBooks
})(App);