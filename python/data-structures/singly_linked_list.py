class Node:
    def __init__(self, data=None):
        self.data = data
        self.next = None
    
class SinglyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.size = 0

    def append(self, data):
    # encapsulate data in Node
        node = Node(data)

        if self.head:
            self.head.next = node
            self.head = node
        
        else:
            self.tail = node
            self.head = node
        self.size += 1
    def iter(self): #abstract Node structure from user
        current = self.tail
        while current:
            val = current.data
            current = current.next
            yield val
    def delete(self, data):
        current = self.tail
        prev = self.tail
        while current:
            if current.data == data:
                if current == self.tail:
                    self.tail = current.next
                else:
                    prev.next = current.next
                self.size -= 1
                return
            prev = current = current.next
    
    def search(self, data):
        for node in self.iter():
            if data == node:
                return True
        return False
    
    def clear(self):
        self.tail = None
        self.head = None



words = SinglyLinkedList()
words.append('breakfast')
words.append('lunch')
words.append('dinner')
print(words.size)
words.delete('breakfast')


for word in words.iter():
    print(word)

print(words.search('dinner'))
