/**
 * 🔹 Stack (TypeScript Implementation)
 *
 * Definition:
 *  - A Stack is a linear data structure that follows LIFO (Last In, First Out) order.
 *  - Elements are added and removed from the top of the stack.
 *
 * Characteristics:
 *  - LIFO behavior ensures that the last element added is the first to be removed.
 *  - Commonly used in recursion, undo/redo operations, expression evaluation, and syntax parsing.
 *  - Time Complexity:
 *      - Push: O(1)
 *      - Pop: O(1)
 *      - Peek/Top: O(1)
 *      - Search: O(n)
 */

class Stack<T> {
    private items: T[] = [];

    // Add an element to the top of the stack
    push(element: T): void {
        this.items.push(element);
    }

    // Remove an element from the top of the stack
    pop(): T | undefined {
        return this.items.pop();
    }

    // View the top element without removing it
    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    isEmpty(): boolean {
        return this.items.length === 0;
    }

    // Get the size of the stack
    size(): number {
        return this.items.length;
    }

    // Print the stack
    print(): void {
        console.log(this.items.join(" -> "));
    }
}

// Example usage
const stack = new Stack<number>();
stack.push(10);
stack.push(20);
stack.push(30);

stack.print(); // 10 -> 20 -> 30
console.log(stack.pop());  // 30
console.log(stack.peek()); // 20
stack.print(); // 10 -> 20
console.log(stack.size());    // 2
console.log(stack.isEmpty()); // false
