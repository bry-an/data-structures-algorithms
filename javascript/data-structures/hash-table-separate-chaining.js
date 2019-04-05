import { defaultToString } from "./util";
import { ValuePair } from "../models/value-pair";
import LinkedList from "./linkedList";
import { createIntersectionTypeNode } from "typescript";

class HashTableSeparateChaining {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }
  loseloseHashCode(key) {
    if (typeof key === "number") {
      return key;
    }
    const tableKey = this.toStrFn(key);
    let hash = 0;
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i);
    }
    return hash % 37;
  }
  hashCode(key) {
    return this.loseloseHashCode(key);
  }
  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key);
      if (this.table[position] == null) {
        this.table[position] = new LinkedList();
      }
      this.table[position].push(new ValuePair(key, value));
      return true;
    }
    return false;
  }
  get(key) {
    const position = this.hashCode(key);
    const linkedList = this.table[position];
    if (linkedList != null && !linkedList.isEmpty()) {
      let trav = linkedList.getHead();
      while (trav != null) {
        if (trav.element.key === key) {
          return trav.element.value;
        }
        trav = trav.next;
      }
    }
    return undefined;
  }
  remove(key) {
    const position = this.hashCode(key);
    const linkedList = this.table[position];
    if (linkedList != null && !linkedList.isEmpty()) {
      let trav = linkedList.getHead();
      while (trav != null) {
        if (trav.element.key === key) {
          linkedList.remove(trav.element);
          if (linkedList.isEmpty()) {
            delete this.table[position];
          }
          return true;
        }
        trav = trav.next;
      }
    }
    return false;
  }
}

const hash = new HashTableSeparateChaining();
hash.put('bry', 'bryan@bryanyunis.com')
hash.put('winston', 'winston@bryanyunis.com')
hash.put('kitten', 'kitten@bryanyunis.com')

console.log(hash.hashCode('bryan') + ' - bryan')
console.log(hash.hashCode('winston') + ' - winston')
console.log(hash.hashCode('fox') + ' - fox')
console.log(hash.hashCode('apple') + ' - apple')
console.log(hash.hashCode('keyboard') + ' - keybord')
console.log(hash.hashCode('char') + ' - char')
console.log(hash.hashCode('gromit') + ' - gromit')
console.log(hash.hashCode('mcdermott') + ' - mcdermott')
console.log(hash.hashCode('jasmine') + ' - jasmin')
console.log(hash.hashCode('banana') + ' - banana')
console.log(hash.hashCode('snow') + ' - snow')
console.log(hash.hashCode('bike') + ' - bike')
console.log(hash.hashCode('cloud') + ' - cloud')
console.log(hash.hashCode('sun') + ' - sun')

hash.put('banana', 'email2')
hash.put('cloud', 'email3')

console.log(hash.get('banana'))
console.log(hash.get('cloud'))