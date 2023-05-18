class LFUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
        this.freqMap = new Map();
        this.minFreq = 0;
    }

    get(key) {
        if (!this.map.has(key)) {
            return -1;
        }

        const [value, freq] = this.map.get(key);
        this.map.set(key, [value, freq + 1]);

        const freqNodes = this.freqMap.get(freq);
        freqNodes.delete(key);

        if (freqNodes.size === 0) {
            this.freqMap.delete(freq);
            if (this.minFreq === freq) {
                this.minFreq++;
            }
        }

        if (!this.freqMap.has(freq + 1)) {
            this.freqMap.set(freq + 1, new Set());
        }
        this.freqMap.get(freq + 1).add(key);

        return value;
    }

    put(key, value) {
        if (this.capacity <= 0) {
            return;
        }

        if (this.get(key) !== -1) {
            this.map.set(key, [value, this.map.get(key)[1]]);
            return;
        }

        if (this.map.size >= this.capacity) {
            const toRemove = this.freqMap.get(this.minFreq).values().next().value;
            this.freqMap.get(this.minFreq).delete(toRemove);
            this.map.delete(toRemove);
        }

        this.map.set(key, [value, 1]);
        this.minFreq = 1;

        if (!this.freqMap.has(1)) {
            this.freqMap.set(1, new Set());
        }
        this.freqMap.get(1).add(key);
    }
}

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
