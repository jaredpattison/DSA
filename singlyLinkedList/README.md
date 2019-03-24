Singly Linked Lists
=================================================
## Author: Jared Pattison
--- 
---
## Notes
This implementation maintains a pointer to the tail
## Methods
- addLast  
  - Takes a value as a parameter and add a new node with that value to the end of the linked list
- contains 
  - Takes a value as a parameter and returns true if that value is found in the list, false if it is not
- remove
  - Takes a value as a parameter and removes the first node found with the matching value - returns true if node is removed and false if no node with matching value is found
- print
  - Takes no parameters, console logs the value of each node in the list
- printArray
  - Takes no parameters, console logs an array with the value of each node in the list
- printObject
  - Takes no parameters, console logs the list as an object
## White Board Image
### addLast:
![addLast Image](../assets/addLast.jpg)
### contains, remove
![addLast Image](../assets/contains-remove.jpg)
## Testing
Tests are written for the singlyLinkedList class methods and can be found here:  
```
singlyLinkedList\__tests__\singly-linked-list-test.js
```