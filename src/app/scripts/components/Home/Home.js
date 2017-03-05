import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { deleteBook, createBook } from '../../../actions/bookActions';

export class Home extends React.Component {
  deleteBook(id) {
    this.props.deleteBook(id);
  }

  createBook(e) {
    e.preventDefault();
    let newBook = {
      title: e.target.title.value,
      author: e.target.author.value
    };
    this.props.createBook(newBook);
  }

  renderBooks(books) {
    return books.map((book) => {
      return (
        <tr key={book._id}>
          <td>{book.title}</td>
          <td>{book.author}</td>
          <td onClick={() => this.deleteBook(book._id)}><i id="delete" className="material-icons delete">delete</i></td>
        </tr>
      )
    })
  }
  render() {
    let books = this.props.books.data ? this.props.books.data : [];
    return (
      <div>
        <div>
        { books.length > 0 ? 
          (<table>
            <thead>
              <tr>
                <th>Book Titles</th>
                <th>Book Author</th>
              </tr>
            </thead>
            <tbody>{this.renderBooks(books)}</tbody>
          </table>) : <p>Fetching books...</p>}
        </div>
        <h4>Add new Book</h4>
        <div className="row">
          <form className="col s12" onSubmit={this.createBook.bind(this)}>
            <div className="row">
              <div>
                <input placeholder="Book title" name="title"  type="text" className="validate"></input>
                <label htmlFor="title">Title</label>
              </div>
              <div>
                <input placeholder="Book Author" name="author" type="text" className="validate"></input>
                <label htmlFor="author">Author</label>
              </div>
            </div>
            <button className="btn waves-effect waves-light" type="submit" name="action">Submit </button>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  books: state.books
})

export default connect(mapStateToProps, {
  deleteBook,
  createBook
})(Home);