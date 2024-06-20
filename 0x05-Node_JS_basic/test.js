const chai = require('chai');
const chaiHttp = require('chai-http');

process.argv[2] = './database.csv';
const app = require('./5-http');

chai.use(chaiHttp);
chai.should();

describe('More complex HTTP server using node', () => {
  describe('/students endpoint', () => {
    describe('When the database is available', () => {
      before(() => {
        process.argv[2] = './database.csv';
      });
      it('Returns the right content', (done) => {
        chai.request(app)
          .get('/students')
          .end((error, response) => {
            chai.expect(response.statusCode).to.equal(200);
            console.log(response.text);
            chai.expect(response.text).to.have.string(`This is the list of our students
Number of students: 10
Number of students in CS: 6. List: Johenn, Arielle, Jonathen, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy`);
            done();
          });
      });
    });
  });
});