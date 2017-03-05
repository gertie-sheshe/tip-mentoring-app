import app from '../../../server';
import request from 'supertest';
import expect from 'expect';

describe('Book controller tests', function () {
 this.timeout(15000);
 let testVariable;
  let bookData = {
    title: 'Gertrude',
    author: 'Kidoti'
  }
  it('Creates a new book', (done) => {
    request(app)
      .post('/api/book')
      .send(bookData)
      .end((err, response) => {
        testVariable = response.body.data;
        expect(response.body.data.title).toBe('Gertrude');
        expect(response.body.data.author).toBe('Kidoti')
        done()
      });
  });

  it('Fetches all books', (done) => {
    request(app)
      .get('/api/books')
      .end((err, response) => {
        expect(response.body.message).toBe('Successsfully fetched books');
        done();
      });
  });

  it('Updates a book', (done) => {
    request(app)
      .put(`/api/book/${testVariable._id}`)
      .send({title: 'Nyenyeshi'})
      .end((err, response) => {
        expect(response.body.data.title).toBe('Nyenyeshi');
        done();
      });
  });

  it('Deletes a book', (done) => {
    request(app)
      .del(`/api/book/${testVariable._id}`)
      .end((err, response) => {
        expect(response.body.message).toBe('Successfully deleted');
        done();
      });
  });
});