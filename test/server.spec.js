const expect = require('chai').expect
const chai = require('chai');
const app = require('../index');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);


describe('app', function(){
    it('get should work', function(){ 
        chai.request(app)
            .get('/')
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
            });
    })

    it('post should work', function(){ 
        chai.request(app)
            .post('/')
            .send({
                'title': 'finish react project'
            })
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(201);
            });
    })

    it('put should work', function(){ 
        chai.request(app)
            .put('/1')
            .send({
                'title': 'finish the project',
                'completed': false
            })
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(204);
            });
    })

    it('delete should work', function(){ 
        chai.request(app)
            .delete('/2')
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(204);
            });
    })
})
