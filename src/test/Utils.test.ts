import { Utils } from '../app/Utils';


describe('Utils test suite', () => {
    it('should return a message on the console', () => {
        const msg = Utils.toUpperCase('ssw');
        expect(msg).toBe('SSW');
    })

    it('should parse simple URL', () => {
        const parsedUrl = Utils.parseUrl('http://localhost:8080/login');
        expect(parsedUrl.href).toBe('http://localhost:8080/login');
        expect(parsedUrl.port).toBe('8080');
        expect(parsedUrl.protocol).toBe('http:');
        expect(parsedUrl.query).toEqual({});
    })

    it('should parse URL with query', () => {
        const parsedUrl = Utils.parseUrl('http://localhost:8080/login?user=user&password=pass');
        const expectedQuery = {
            user: 'user',
            password: 'pass'
        }
        expect(parsedUrl.query).toEqual(expectedQuery);
        expect(expectedQuery).toBe(expectedQuery);
    })
});