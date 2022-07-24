import CircularQueue from './circularQueue';

describe('circular queue tests', () => {
    test('evict first element when max size is reached', () => {
        const q = new CircularQueue(2);
        q.add(5);
        q.add(6);
        q.add(7);
        expect(q.length).toBe(2);
        expect(q.peek()).toBe(6);
    });
});
