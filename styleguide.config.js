const path = require('path');
const { version } = require('./package');

module.exports = {
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.tsx');
    return `import { ${name} } from 'bitzone-library-test';`;
  },
  skipComponentsWithoutExample: true,
  version,
  propsParser: require('react-docgen-typescript').parse,
  ignore: [
    '**/assets/**',
    '**/data/**',
    '**/__tests__/**',
    '**/*.test.{js,jsx,ts,tsx}',
    '**/*.spec.{js,jsx,ts,tsx}',
    '**/*.d.ts',
    '**/*.style.{js,jsx,ts,tsx}',
  ],
  printServerInstructions(config) {
    // eslint-disable-next-line no-console
    console.log(`View your styleguide at: http://${config.serverHost}:${config.serverPort}`);
  },
  sections: [
    {
      name: 'Componentes UI',
      components: [
        'src/components/**/*.tsx',
        'src/components/Button/[A-Z]*.js',
        'src/components/Modal/Modal.js',
        'src/components/Spinner/Spinner.js',
        'src/components/Switch/Switch.js',
        'src/components/Slider/[A-Z]*.js',
        'src/components/Drawer/[A-Z]*.js',
        'src/components/Input/[A-Z]*.js',
        'src/components/Skeleton/[A-Z]*.js',
      ],
      sectionDepth: 2,
    },
  ],
};
/* module.exports = {
    sections: [
        {
          name: 'Introduccion',
          content: 'docs/introduccion.md'
        },
        {
          name: 'Componentes UI',
          content: 'docs/ui.md',
          components: [
            'src/components/Button/[A-Z]*.js',
            'src/components/Modal/Modal.js',
            'src/components/Spinner/Spinner.js',
            'src/components/Switch/Switch.js', 
            'src/components/Slider/[A-Z]*.js',
            'src/components/Drawer/[A-Z]*.js',
            'src/components/Input/[A-Z]*.js',
            'src/components/Skeleton/[A-Z]*.js',
        ],
          exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand'
          usageMode: 'collapse' // 'hide' | 'collapse' | 'expand'
        }
      ]
}
 */
//npx styleguidist server
