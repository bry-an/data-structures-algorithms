#the running time of the list is compared to the generator import time

#an iterator containing odd numbers between
#the letters n and m is created by the generator fxn
def odd_gen(n,m):
    while n < m:
        yield n
        n += 2
    
    
#a list of odd numbers from n to m is built
def odd_list(n,m):
    lst = []
    while n < m:
        lst.append(n)
        n += 2
    return lst

#the length of time taken for a num to be performed on an iterator
# t1 = time.time()
# sum(odd_gen(1, 1000000))
# print('Time to sum an iterator: %f' %(time.time() - t1))

# #the length of time taken to build a list and sum it
# t1 = time.time()
# sum(odd_list(1, 1000000))
# print('Time to build and sum a list: %f' %(time.time() - t1))
