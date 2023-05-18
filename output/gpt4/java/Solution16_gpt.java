import java.util.*;

class LFUCache {
    class Node {
        int key;
        int value;
        int freq;
        Node prev;
        Node next;

        public Node(int key, int value) {
            this.key = key;
            this.value = value;
            this.freq = 1;
        }
    }

    class DoublyLinkedList {
        Node head;
        Node tail;
        int size;

        public DoublyLinkedList() {
            head = new Node(-1, -1);
            tail = new Node(-1, -1);
            head.next = tail;
            tail.prev = head;
        }

        public void addToHead(Node node) {
            node.next = head.next;
            node.prev = head;
            head.next.prev = node;
            head.next = node;
            size++;
        }

        public void removeNode(Node node) {
            node.prev.next = node.next;
            node.next.prev = node.prev;
            size--;
        }

        public Node removeLast() {
            if (size > 0) {
                Node lastNode = tail.prev;
                removeNode(lastNode);
                return lastNode;
            } else {
                return null;
            }
        }
    }

    int capacity;
    int minFreq;
    Map<Integer, Node> cache;
    Map<Integer, DoublyLinkedList> freqListMap;

    public LFUCache(int capacity) {
        this.capacity = capacity;
        this.minFreq = 0;
        this.cache = new HashMap<>();
        this.freqListMap = new HashMap<>();
    }

    public int get(int key) {
        if (cache.containsKey(key)) {
            Node node = cache.get(key);
            updateFreq(node);
            return node.value;
        }
        return -1;
    }

    public void put(int key, int value) {
        if (capacity == 0) {
            return;
        }

        if (cache.containsKey(key)) {
            Node node = cache.get(key);
            node.value = value;
            updateFreq(node);
        } else {
            if (cache.size() == capacity) {
                DoublyLinkedList minFreqList = freqListMap.get(minFreq);
                Node removedNode = minFreqList.removeLast();
                cache.remove(removedNode.key);
            }

            Node newNode = new Node(key, value);
            cache.put(key, newNode);
            if (!freqListMap.containsKey(1)) {
                freqListMap.put(1, new DoublyLinkedList());
            }
            freqListMap.get(1).addToHead(newNode);
            minFreq = 1;
        }
    }

    private void updateFreq(Node node) {
        int oldFreq = node.freq;
        DoublyLinkedList oldFreqList = freqListMap.get(oldFreq);
        oldFreqList.removeNode(node);

        if (oldFreq == minFreq && oldFreqList.size == 0) {
            minFreq++;
        }

        node.freq++;
        if (!freqListMap.containsKey(node.freq)) {
            freqListMap.put(node.freq, new DoublyLinkedList());
        }
        freqListMap.get(node.freq).addToHead(node);
    }
}

/**
 * Your LFUCache object will be instantiated and called as such:
 * LFUCache obj = new LFUCache(capacity);
 * int param_1 = obj.get(key);
 * obj.put(key,value);
 */
