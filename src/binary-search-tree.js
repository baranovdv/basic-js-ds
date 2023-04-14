const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  root() {
    if(!this.head) {
      return null;
    } else {
      return this.head;
    }
  }

  add(data) {
    this.head = addValue(this.head, data)

    function addValue(node, value)
    {
      if(!node) {
        return new Node(value);
      }
    
      if(value === node.data) {
        return node;
      }
      // console.log(value, node.data)
      if(value < node.data) {
        node.left = addValue(node.left, value);
      } else {
        node.right = addValue(node.right, value);
      }
      return node;
    }  

  }

  has(data) {
    return hasValue(this.head, data);
    
    function hasValue(node, value)
    {
      // console.log(node)
      if(!node) {
        return false;
      }
    
      if(value == node.data) {
        return true;
      }
      // console.log(value, node.data)
      if(value < node.data) {
        return hasValue(node.left, value);
      } else {
        return hasValue(node.right, value);
      }
      // return null;
    }  

  }

  find(data) {
    return findValue(this.head, data);
    
    function findValue(node, value)
    {
      // console.log(node)
      if(!node) {
        return null;
      }
    
      if(value == node.data) {
        return node;
      }
      // console.log(value, node.data)
      if(value < node.data) {
        return findValue(node.left, value);
      } else {
        return findValue(node.right, value);
      }
      // return null;
    }  
  }

  remove(data) {
    return removeValue(this.head, data);

    function removeValue(node, value) {
      if(!node) {
        return null;
      }

      if(value < node.data) {
        node.left = removeValue(node.left, value);
        return node;
      } else if(value > node.data) {
        node.right = removeValue(node.right, value);
        return node;
      } else {
        if(!node.right && !node.left) {
          return null;
        }
        if(!node.right) {
          return node.left;
        }
        if(!node.left) {
          return node.right;
        }

        let minRight = node.right;
        while(minRight.left) {
          minRight = minRight.left;
        }

        node.data = minRight.data;
        node.right = removeValue(node.right, minRight.data);

        return node;
      }

    }

  }

  min() {
    if(!this.head){
      return null;
    }
    let node = this.head;
    while(node.left){
      node = node.left;
    }
    return node.data;
  }

  max() {
    if(!this.head){
      return null;
    }
    let node = this.head;
    while(node.right){
      node = node.right;
    }
    return node.data;
  }

}


module.exports = {
  BinarySearchTree
};