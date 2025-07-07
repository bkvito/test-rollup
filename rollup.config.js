import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.esm.js',
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**', // 排除node_modules目录
      presets: [['@babel/preset-env', { modules: false }]],
    }),
    resolve(),
    terser(),
  ]
}
