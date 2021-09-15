const assert = require('assert');
const expect = require('expect');
const request = require('supertest');
const app = require('../app');


describe("unit testing /register route",()=>{
    
    it("should return 200 status when triggered",async ()=>{
        return request(app)
        .post('/register')
        .set({
            first_name: 'John',
            last_name: 'Simons',
            email: 'johnsimons@gmail.com',
            password: 'johnsimons'
        })
        .then(response=>{
            console.log(response);
            assert.equal(response.status, 200);
        })
    })
})