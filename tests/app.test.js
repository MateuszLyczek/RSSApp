const request = require('supertest');
const app = require('../src/app');

describe('Test the root path', () =>{
    test('It should response the GET method', async()=>{
        try {
            const resp = await request(app).get('/')
            expect(resp.staticCode).toBe(200)
            expect(resp.text).toBe('Hello World!')
        } catch(e){
            throw e
        }
    });
});