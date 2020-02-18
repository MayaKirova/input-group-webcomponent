import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'input-group-webcomponent',
  plugins: [
    sass({
      injectGlobalPaths: [
        './src/global/scss/index',
        './src/themes/index'
      ],
    })
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        {
          src: 'themes/**.css',
          dest: 'styles'
        }
      ]
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        {
          src: 'themes/**.css',
          dest: 'styles'
        }
      ]
    }
  ]
};
