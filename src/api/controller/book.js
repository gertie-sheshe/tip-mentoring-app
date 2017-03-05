import Book from '../models/book';
import mongoose from 'mongoose';

let BookController = {
  createBook: (req, res) => {
    let book = new Book({
      title: req.body.title,
      author: req.body.author
    });

    book.save((err, savedBook) => {
      return err ? res.status(500).json({
        message: err.errmessage
      }) : res.status(200).json({
        message: 'Successfully created book',
        data: savedBook
      });
    });
  },

  updateBook: (req, res) => {
    let newBook;
    Book.findById(req.params.id, (err, bookData) => {
      err ? console.log('There was an error') :
      newBook = Object.assign(bookData, req.body);
      newBook.save((err, updatedBook) => {
        return err ? res.status(500).json({
          message: err.errmessage
        }) : res.status(200).json({
          message: 'Successfully updated',
          data: updatedBook
        });
      });
    });
  },

  deleteBook: (req, res) => {
    Book.remove({
      _id: req.params.id
    }, (err, removedBook) => {
      return err ? res.status(500).json({
        message: err.errmessage
      }) : res.status(200).json({
        message: 'Successfully deleted',
        data: removedBook
      });
    });
  },

  findBooks: (req, res) => {
    Book.find((err, books) => {
      return err ? res.status(500).json({
        message: err.errmessage
      }) : res.status(200).json({
        message: 'Successsfully fetched books',
        data: books
      });
    });
  }
};

export default BookController;
