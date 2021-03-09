const expect = require('chai').expect
const chai = require('chai');
const app = require('../index');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);


describe('app', function(){
    it('should work', function(){ 
        chai.request(app)
            .get('/')
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
            });
    })
})
