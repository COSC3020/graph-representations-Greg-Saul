function convertToAdjList(adjMatrix) {
    let adjList = []

    for(let i = 0; i < adjMatrix.length; i++){
        let edges = []
        for(let j = 0; j < adjMatrix.length; j++){
            if(adjMatrix[i][j] == 1){
                edges.push(j)
            }
        }
        adjList.push(edges) //add edges into i on adjList
    }
    return adjList;
}
