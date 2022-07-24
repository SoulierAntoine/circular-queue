import Queue from './queue';

describe('queue tests', () => {
    test('add 1 element to queue', () => {
        const q = new Queue();
        q.add(4);
        q.add(5);
        expect(q.length).toBe(2);
    });

    test('remove element of empty queue', () => {
        const q = new Queue();
        q.add(4);
        q.remove();
        expect(q.length).toBe(0);
        expect(q.remove).toThrow();
    });

    test('get 1st element of queue', () => {
        const q = new Queue();
        q.add(4);
        q.add(5);
        q.add(6);
        expect(q.peek()).toBe(4);
    });

    test('remove element from queue', () => {
        const q = new Queue();
        q.add(4);
        q.add(5);
        const removed = q.remove();
        q.add(6);
        expect(q.peek()).toBe(5);
        expect(removed).toBe(4);
    });

    test('loop through the queue', () => {
        const q = new Queue();
        q.add(4);
        q.add(5);
        q.remove();
        q.add(6);

        let i = 0;
        const expected = [5,6];

        for (const value of q) {
            expect(value).toBe(expected[i++]);
        }
    });

    test('turn queue into array', () => {
        const q = new Queue();
        q.add(4);
        q.add(5);
        q.add(6);
        expect(q.toArray()).toEqual([4,5,6]);
    });

    test('clear queue', () => {
        const q = new Queue();
        q.add(4);
        q.clear();
        expect(q.isEmpty).toBe(true);
    });
});
