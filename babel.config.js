module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "@babel/plugin-transform-class-properties",
      "@babel/plugin-transform-private-property-in-object",
      "@babel/plugin-transform-private-methods",
      [
        "module:react-native-dotenv",
        {
          envName: "APP_ENV",
          moduleName: "@env",
          path: ".env",
        },
      ],
    ],
    overrides: [
      {
        test: "node_modules/pixelshapern/src/libs/GifLoader.js", // change to your web JS code file path
        // test: '**/GifLoader.js', // also can use this [glob](https://www.npmjs.com/package/glob) patterns
        plugins: [
          [
            "transform-globals",
            {
              import: {
                "react-native-filereader": {
                  FileReader: "default",
                },
              },
            },
          ],
        ],
      },
    ],
  };
};
