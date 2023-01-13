///// SUDOKU CHECKER //////

//puzzle
let puzzle = [[ 8,9,5,   7,4,2,   1,3,6 ],
              [ 2,7,1,   9,6,3,   4,8,5 ],
              [ 4,6,3,   5,8,1,   7,9,2 ],

              [ 9,3,4,   6,1,7,   2,5,8 ],
              [ 5,1,7,   2,3,8,   9,6,4 ],
              [ 6,8,2,   4,5,9,   3,7,1 ],

              [ 1,5,9,   8,7,4,   6,2,3 ],
              [ 7,4,6,   3,2,5,   8,1,9 ],
              [ 3,2,8,   1,9,6,   5,4,7 ]];


//puzzle 2
let puzzleTwo = [[ 8,9,5,7,4,2,1,3,6 ],
                [ 8,7,1,9,6,3,4,8,5 ],
                [ 4,6,3,5,8,1,7,9,2 ],
                [ 9,3,4,6,1,7,2,5,8 ],
                [ 5,1,7,2,3,8,9,6,4 ],
                [ 6,8,2,4,5,9,3,7,1 ],
                [ 1,5,9,8,7,4,6,2,3 ],
                [ 7,4,6,3,2,5,8,1,9 ],
                [ 3,2,8,1,9,6,5,4,7 ]];

//DO NOT EDIT ABOVE

function getRow(puzzle, row) {
    return puzzle[row];
}

  
  


function getColumn(puzzle, col) {
    let column = [];
    for (let i = 0; i < puzzle.length; i++) {
        column.push(puzzle[i][col]);
    }
    return column;
}


  


function getSection(puzzle, x, y) {
    let section = [];
    for (let i = x * 3; i < (x + 1) * 3; i++) {
        for (let j = y * 3; j < (y + 1) * 3; j++) {
            section.push(puzzle[i][j]);
        }
    }
    return section;
}



  


function includes1to9(arr) {
    let set = new Set(arr);
    if (set.size !== 9) {
        return false;
    }
    for (let i = 1; i <= 9; i++) {
        if (!set.has(i)) {
            return false;
        }
    }
    return true;
}


function sudokuIsValid(puzzle) {
    for (let i = 0; i < puzzle.length; i++) {
        if (!includes1to9(puzzle[i])) {
            return false;
        }
    }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (!includes1to9(getSection(puzzle, i, j))) {
                return false;
            }
        }
    }
    return true;
}