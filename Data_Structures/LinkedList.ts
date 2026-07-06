// Ordered list of data elements
// Pointer = address of the next element in the list.
// Elements can be stored anywhere in memory because the previous element will point to next one 
// They do not use Indexes. So to read an element from middle, you need to go through whole list

// Time Complexity
    // Read - O(n)
    // Insert - O(1)
    // Delete - O(1) = remove an element and make the previous element to point to next element

// Node class
class ListNode<T> {
    value: T;
    next: ListNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

// LinkedList class
class LinkedList<T> {
    head: ListNode<T> | null;

    constructor() {
        this.head = null;
    }

    // Insert at the beginning - O(1)
    prepend(value: T): void {
        const newNode = new ListNode(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    // Insert at the end - O(n)
    append(value: T): void {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Delete first occurrence of value - O(n)
    delete(value: T): void {
        if (!this.head) return;

        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next && current.next.value !== value) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next;
        }
    }

    // Find a node - O(n)
    find(value: T): ListNode<T> | null {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }
        return null;
    }

    // Print all values - O(n)
    print(): T[] {
        const values: T[] = [];
        let current = this.head;
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        return values;
    }
}
