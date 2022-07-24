import Queue from './queue';

class CircularQueue<T> extends Queue<T> {

    maxSize: number;

    constructor(maxSize: number) {
        super();
        this.maxSize = maxSize;
    }

    add(element: T) {
        super.add(element);
        if (this.length > this.maxSize) {
            this.remove();
        }
    }
}

export default CircularQueue;
