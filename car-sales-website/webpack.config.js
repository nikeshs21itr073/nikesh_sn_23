const path = require('path');

module.exports = {
  entry: './src/index.js', // Your entry point file
  output: {
    filename: 'bundle.js', // Output filename
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  module: {
    rules: [
      // Define rules for loading different file types (e.g., JavaScript, CSS, etc.)
      {
        test: /\.js$/, // Use Babel to transpile JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/, // Load CSS files
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
