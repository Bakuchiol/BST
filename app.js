// binary search tree tutorial

class Node {
    constructor(value) {
      this.value = value
      this.left = null
      this.right = null
    }
  }
  
  class BST {
    constructor(value) {
      this.root = new Node(value)
      this.count = 1
    }
  
    size() {
      return this.count
    }
  
    insert(value) {
      this.count++
  
      let newNode = new Node(value)
  
      const searchTree = node => {
        if (value < node.value) {
          if (!node.left) {
            node.left = newNode
          } 
          else {
            searchTree(node.left)
          }
        }
        else if (value > node.value) {
          if (!node.right) {
            node.right = newNode
          }
          else {
            searchTree(node.right)
          }
        }
      }
  
      searchTree(this.root)
    }

    // min
    min() {
      let currentNode = this.root
  
      while (currentNode.left) {
        currentNode = currentNode.left
      }
  
      return currentNode.value
    }

    // max
    max() {
      let currentNode = this.root
  
      while (currentNode.right) {
        currentNode = currentNode.right
      }
  
      return currentNode.value
    }

    // containsss
    contains(value) {
      let currentNode = this.root
  
      while (currentNode) {
        if (value === currentNode.value) {
          return true
        }
        // left
        if (value < currentNode.value) {
          currentNode = currentNode.left
        //   right
        } else {
          currentNode = currentNode.right
        }
      }
  
      return false
    }
  
    // depth first search
    dfsInOrder() {
      let result = []
  
      const traverse = node => {
        if (node.left) traverse(node.left)
        result.push(node.value)
        if (node.right) traverse(node.right)
      }
  
      traverse(this.root)
  
      return result
    }
  
    // pre-order
    dfsPreOrder() {
      let result = []
  
      const traverse = node => {
        result.push(node.value)
        if (node.left) traverse(node.left)      
        if (node.right) traverse(node.right)
      }
  
      traverse(this.root)
  
      return result    
    }
  
    // post-order
    dfsPostOrder() {
      let result = []
  
      const traverse = node => {
        if (node.left) traverse(node.left)      
        if (node.right) traverse(node.right)
        result.push(node.value)
      }
  
      traverse(this.root)
  
      return result   
    }
  
    // breadth first search
    bfs() {
      let result = []
      let queue = []
  
      queue.push(this.root)
  
      while(queue.length) {
        let currentNode = queue.shift()
  
        result.push(currentNode.value)
  
        if (currentNode.left) {
          queue.push(currentNode.left)
        }
        if (currentNode.right) {
          queue.push(currentNode.right)
        }
      }
  
      return result
    }
  }
  
/* TREE */
/*                      29
                    /       \
                   14         29
                  /  \       /  \
                 3    15    31   59               
*/            


  const bst = new BST(29) // ROOT
  
  bst.insert(14) // LEFT child/parent
  bst.insert(29) // RIGHT child/parent
  bst.insert(3) // LEFT(left)child
  bst.insert(15) // LEFT(right) child
  bst.insert(31) // RIGHT(left) child --> null left 31 is greater than parent 29
  bst.insert(59) // RIGHT(right) child

  console.log(bst)

//   BST {
//     root: Node {
//       value: 29,
//       left: Node { value: 14, left: [Node], right: [Node] },
//       right: Node { value: 31, left: null, right: [Node] }
//     },
//     count: 7
//   }

  
console.log(bst.size()) // 7

console.log(bst.min()) // 3

console.log(bst.max()) // 59
  
console.log(bst.contains(15)) //true
console.log(bst.contains(55)) //false


// DFS
// in-order: 
console.log(bst.dfsInOrder()) // [ 3, 14, 15, 29, 31, 59 ]
  
// pre-order: 
console.log(bst.dfsPreOrder()) // [ 29, 14, 3, 15, 31, 59 ]
  
// post-order: 
console.log(bst.dfsPostOrder()) // [ 3, 15, 14, 59, 31, 29 ]
  
// BFS
console.log(bst.bfs()) // [ 29, 14, 31, 3, 15, 59 ]