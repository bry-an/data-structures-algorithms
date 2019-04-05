import { defaultToString } from './util';
import { ValuePair } from '../models/value-pair';

export default class HashTable {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {}
    }
    loseloseHashCode(key) {
        if (typeof key === 'number') {
            return key;
        }
        const tableKey = this.toStrFn(key);
        let hash = 0;
        for (let i = 0; i < tableKey.length; i++) {
            hash += tableKey.charCodeAt(i)
        }
        return hash % 37
    }
    hashCode(key) {
        return this.loseloseHashCode(key)
    }
    put(key, value) {
        if (key != null & value != null) {
            const position = this.hashCode(key);
            this.table[position] = new ValuePair(key, value)
            return true;
        }
        return false;
    }
    get(key) {
        const valuePair = this.table[this.hashCode(key)];
        return valuePair == null ? undefined : valuePair.value;
    }
    remove(key) {
        const hash = this.hashCode(key);
        const valuePair = this.table[hash];
        if (valuePair != null) {
            delete this.table[hash];
            return true;
        }
        return false;
    }
}

const hash = new HashTable();
hash.put('bry', 'bryan@bryanyunis.com')
hash.put('winston', 'winston@bryanyunis.com')
hash.put('kitten', 'kitten@bryanyunis.com')

console.log(hash.hashCode('bryan') + ' - bryan')
console.log(hash.hashCode('winston') + ' - winston')
console.log(hash.hashCode('kitten') + ' - kitten')

console.log(hash.get('bry'))
console.log(hash.get('undefisdf'))
hash.remove('kitten')
console.log(hash.get('kitten'))
