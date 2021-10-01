const assert = require('assert');
const expect = require('expect');
const request = require('supertest');
const app = require('../server3');

describe('unit testing / route',()=>{

    it('should return ok status when triggered',()=>{
        return request(app).get('/').then(response=>{
            assert.equal(response.status, 200);
        })
    })
})