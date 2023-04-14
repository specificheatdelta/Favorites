import {test} from 'jest';
import main from '../src/main';
import {post} from '../src/post';
import axios from 'axios';

describe('get', () => {
    test('should return a promise', () => {
        const result = get('https://jsonplaceholder.typicode.com/posts/1');
        expect(result).toBeInstanceOf(Promise);
    })
});
