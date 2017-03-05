import BookController from '../controller/book';

export default function(app) {
  app.get('/api/books', BookController.findBooks);
  app.post('/api/book', BookController.createBook);
  app.put('/api/book/:id', BookController.updateBook);
  app.delete('/api/book/:id', BookController.deleteBook);
}