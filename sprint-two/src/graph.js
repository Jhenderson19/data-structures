// Instantiate a new graph
var Graph = function() {
  this.nodes = [];

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(new Node(node));
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    var cnode = this.nodes[i];
    if (cnode) {
      if (cnode.value === node) {
        return true;
      }
    }
  }

  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var nodeIndex = this.findNode(node);

  for (var i = 0; i < this.nodes.length; i++) {
    var currentNode = this.nodes[i];
    this.removeEdge(currentNode.value, node);
  }

  delete this.nodes[nodeIndex];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var fromNodeIndex = this.findNode(fromNode);
  var fromNodeEdges = this.nodes[fromNodeIndex].edges;
  var toNodeIndex = this.findNode(toNode);

  return _.contains(fromNodeEdges, toNodeIndex);
};

Graph.prototype.findNode = function (node) {
  var foundNodeIndex = undefined;

  for (var i = 0; i < this.nodes.length; i++) {
    var currentNode = this.nodes[i];

    if (currentNode === undefined) {
      continue;
    }

    if (currentNode.value === node) {
      foundNodeIndex = i;
    }
  }

  return foundNodeIndex;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var fromNodeIndex = this.findNode(fromNode);
  var toNodeIndex = this.findNode(toNode);

  this.nodes[fromNodeIndex].edges.push(toNodeIndex);
  this.nodes[toNodeIndex].edges.push(fromNodeIndex);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var fromNodeIndex = this.findNode(fromNode);
  var toNodeIndex = this.findNode(toNode);

  var fromNodeobj = this.nodes[fromNodeIndex];
  var toNodeobj = this.nodes[toNodeIndex];

  for (var i = 0; i < fromNodeobj.edges.length; i++ ) {
    if (fromNodeobj.edges[i] === toNodeIndex) {
      fromNodeobj.edges.splice(i, 1);
    }
  }
  for (var i = 0; i < toNodeobj.edges.length; i++ ) {
    if (toNodeobj.edges[i] === fromNodeIndex) {
      toNodeobj.edges.splice(i, 1);
    }
  }

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.nodes.length; i++) {
    var currentNode = this.nodes[i];

    if (currentNode !== undefined) {
      cb(currentNode.value);
    }
  }
};

var Node = function (value) {
  var node = {};

  node.value = value;
  node.edges = [];

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
