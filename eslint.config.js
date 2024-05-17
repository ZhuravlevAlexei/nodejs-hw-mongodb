import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  pluginJs.configs.recommended,
  {
    files: ['src/**/*.js'],
    languageOptions: { globals: globals.node },
    rules: {
      semi: 'error',
      'no-unused-vars': 'error',
      'no-undef': 'error',
    },
  },
];

//original after install
// import globals from "globals";
// import pluginJs from "@eslint/js";

// export default [
//   {languageOptions: { globals: globals.node }},
//   pluginJs.configs.recommended,
// ];
