[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/hFs1pb0z)
# Graph Representations

Implement a function that converts an adjacency matrix to an adjacency list for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

## My reasoning

The runtime for this program would be $n^2$ (where $n$ is the number of vertices in the graph)because there are nested for loops that each run n times and there is a compare in the inner loop.

## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.

### Sources

https://www.youtube.com/watch?v=4R7chuhzq7k -> used this to get a good visual representation of graphs to adjacency lists and matrixes
