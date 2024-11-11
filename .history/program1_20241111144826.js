const getTotalIsles = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  
  const markIsland = function (row, col) {
      
      if (row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] === 'W') {
          return;
      }

      
      grid[row][col] = 'W';

      
      markIsland(row - 1, col);  // Up
      markIsland(row + 1, col);  // Down
      markIsland(row, col - 1);  // Left
      markIsland(row, col + 1);  // Right
  };

  let islandCount = 0;

  
  for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
          
          if (grid[row][col] === 'L') {
              islandCount++;  
              markIsland(row, col);  
          }
      }
  }

  return islandCount;  
};

module.exports = getTotalIsles;
