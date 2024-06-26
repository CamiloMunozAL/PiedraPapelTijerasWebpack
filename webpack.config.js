// Importa el módulo 'path' de Node.js, que se usa para manipular rutas de archivos.
const path = require("path");

// Importa el plugin 'HtmlWebpackPlugin' que genera un archivo HTML y lo inyecta con los bundles generados por Webpack.
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Importa el plugin 'CopyWebpackPlugin' que copia archivos o directorios a la carpeta de salida de Webpack.
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  // Define el punto de entrada de tu aplicación. Aquí es donde Webpack comienza a construir la dependencia del gráfico.
  entry: "./src/index.js",

  // Define la salida de los bundles. Webpack creará un archivo llamado 'main.js' en el directorio 'dist'.
  output: {
    filename: "main.js", // Nombre del archivo de salida.
    path: path.resolve(__dirname, "dist"), // Directorio de salida, resuelto a una ruta absoluta.
    clean: true, // Limpia la carpeta 'dist' antes de cada construcción para eliminar archivos antiguos.
  },

  // Configuración de los módulos, cómo Webpack debe tratar diferentes tipos de archivos.
  module: {
    rules: [
      {
        test: /\.css$/, // Expresión regular que coincide con archivos .css.
        use: ["style-loader", "css-loader"], // Usa 'style-loader' y 'css-loader' para procesar archivos CSS.
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // Expresión regular que coincide con archivos de imagen.
        type: "asset/resource", // Trata los archivos de imagen como recursos y los copia a la carpeta de salida.
      },
    ],
  },

  // Configuración de los plugins que se usan en el proceso de construcción.
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Usa 'src/index.html' como plantilla para generar el archivo HTML de salida.
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "src/assets", to: "assets" }], // Copia los archivos del directorio 'src/assets' al directorio 'assets' en la carpeta de salida.
    }),
  ],

  // Define el modo de construcción. En 'development', Webpack incluye características útiles para el desarrollo.
  mode: "development",
};
