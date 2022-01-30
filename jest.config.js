module.exports = {
  "preset": '@vue/cli-plugin-unit-jest',
  "moduleFileExtensions": [
    "js",
    "vue"
  ],
  "moduleNameMapper": {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  "transform": {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest"
  },
  "transformIgnorePatterns": [
    "/node_modules/(?!vue-material-design-icons|vue-toast-notification|vuex)",
  ],
  "snapshotSerializers": [
    "<rootDir>/node_modules/jest-serializer-vue"
  ],
  "verbose": true,
  "moduleDirectories": ["node_modules", "src"]
};
