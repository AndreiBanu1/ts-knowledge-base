/**
 * 🔹 Queue (TypeScript Implementation)
 *
 * Definition:
 *  - A Queue is a linear data structure that follows FIFO (First In, First Out) order.
 *  - Elements are added at the rear (enqueue) and removed from the front (dequeue).
 *
 * Characteristics:
 *  - FIFO behavior ensures that the first element added is the first to be removed.
 *  - Commonly used in scheduling, buffering, and breadth-first search (BFS) algorithms.
 *  - Time Complexity:
 *      - Enqueue: O(1)
 *      - Dequeue: O(1)
 *      - Peek/Front: O(1)
 *      - Search: O(n)
 */

class Queue<T> {
    private items: T[] = [];

    // Add an element to the end of the queue
    enqueue(element: T): void {
        this.items.push(element);
    }

    // Remove an element from the front of the queue
    dequeue(): T | undefined {
        return this.items.shift();
    }

    // View the front element without removing it
    peek(): T | undefined {
        return this.items[0];
    }

    // Check if the queue is empty
    isEmpty(): boolean {
        return this.items.length === 0;
    }

    // Get the size of the queue
    size(): number {
        return this.items.length;
    }

    // Print the queue
    print(): void {
        console.log(this.items.join(" <- "));
    }
}

// Example usage
const queue = new Queue<number>();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

queue.print(); // 10 <- 20 <- 30
console.log(queue.dequeue()); // 10
console.log(queue.peek());    // 20
queue.print(); // 20 <- 30
console.log(queue.size());    // 2
console.log(queue.isEmpty()); // false
