import pkg from './package.json';
import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript';

export default [
  {
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
      typescript(),
    ],
    input: 'src/index.ts',
    external: [
      'd3-array',
      'd3-scale',
      'es6-tween',
      'react',
      'resize-observer-polyfill',
      'three',
      'three.interaction',
      'three-orbitcontrols',
      'tippy.js',
    ],
    output: [
      {
        exports: 'named',
        file: pkg.main,
        format: 'cjs',
      },
      {
        file: pkg.module,
        format: 'esm',
      },
    ],
  },
];
