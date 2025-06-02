import request from 'supertest';
import app from '../src/app';

describe('Facts API', () => {
    it('debe devolver todos los facts', async () => {
        const res = await request(app).get('/api/facts');
        expect(res.statusCode).toBe(200);
    });

    it('debe añadir un nuevo fact', async () => {

        const newFact = 'Los cuervos recuerdan caras humanas.';
        const res = await request(app)
            .post('/api/facts/add')
            .send({ fact: newFact });

        expect(res.statusCode).toBe(201);

    });

    it('debe fallar si no se envía fact', async () => {

        const res = await request(app)
            .post('/api/facts/add')
            .send({});

        expect(res.statusCode).toBe(400);
    });
});
