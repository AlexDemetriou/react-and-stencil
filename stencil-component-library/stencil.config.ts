import { Config } from '@stencil/core';
import { reactOutputTarget as react } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'stencil-component-library',
  outputTargets: [
    react({
      componentCorePackage: 'stencil-component-library',
      proxiesFile: '../react-component-library/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
      includePolyfills: true
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
