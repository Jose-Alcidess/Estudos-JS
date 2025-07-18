var matrix = getData();
var sum = 0, success = false;

// Definindo a função getData
function getData() {
    // Retorna uma matriz (array 2D) com números
    return [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
}

compute_sum: if (matrix){
    for(var x = 0; x <matrix.length; x++){
        var row = matrix[x];
        if (!row) break compute_sum;
        for(var y = 0; y < row.length; y++){
            var cell = row[y];
            if(isNaN(cell)) break compute_sum;
            sum += cell;
        }
    }
}
console.log("Soma:", sum);
console.log("Sucesso:", success);
sucess = true;