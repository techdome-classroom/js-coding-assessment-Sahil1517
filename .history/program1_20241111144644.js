const getTotalIsles = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  // This function explores all connected 'L' cells (land) and marks them as 'W' (water)
  const markIsland = function (row, col) {
      // Check if the current cell is out of bounds or water ('W')
      if (row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] === 'W') {
          return;
      }

      // Mark this cell as visited (turn it to water)
      grid[row][col] = 'W';

      // Explore all four directions: up, down, left, right
      markIsland(row - 1, col);  // Up
      markIsland(row + 1, col);  // Down
      markIsland(row, col - 1);  // Left
      markIsland(row, col + 1);  // Right
  };

  let islandCount = 0;

  
  for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
          // If we find an 'L', it means we have an unvisited island
          if (grid[row][col] === 'L') {
              islandCount++;  // Increment the island count
              markIsland(row, col);  // Mark the entire island as visited
          }
      }
  }

  return islandCount;  // Return the total number of islands found
};

module.exports = getTotalIsles;
