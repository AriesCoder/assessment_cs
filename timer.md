| array size     |insert        |append      |
|----------------|--------------|------------|
|tinyArray       |27.416 μs     |63.583 μs   |
|smallArray      |38.208 μs     |107.5 μs   |
|mediumArray     |206.042 μs    |121.25 μs  |
|largeArray      |10.283625 ms  |607.125 μs  |
|extraLargeArray |1.085262417 s |2.812375 ms |

The runtime of tiny, small and medium array in insert and append doesn't have much difference. However, the tiny and small array run slightly faster with insert (unshift function), while medium, large and extralarge run have faster run with append (push function). 

the tinyarray has the least difference between two functions. There are less elements that the code has to run through and works on that, so the difference of runtime between two functions is insignificant

Insert: the runtime has a major change when the size of array getting larger. The array gets larger size, the runtime is much slower. Because it has to increment all the elements that already present in the array and adds the new element at the beginning of the array
Append: as the array size is larger, it runs slower but it doesn't have a big difference as the insert. Because it inserts the new element at the end of the array, the present elements don't need to relocate.