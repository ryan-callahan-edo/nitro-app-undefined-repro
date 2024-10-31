# Error 2

## How to run

1. `pnpm i`
2. pnpm start:clean

## Changes from working-example-2

1. add `"use server"` to `lib/service.ts`

## Error

```txt
 ERROR  [vite-server-references] undefined does not match field "params": [Pattern] of type FunctionExpression                                                                              12:43:57 AM
file: /Users/ryancallahan/repos/nitro-app-undefined-repro/lib/service.ts

  file: lib/service.ts
  at addParam (node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/types.js:455:27)
  at node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/types.js:505:25
  at Array.forEach (<anonymous>)
  at builder.from (node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/types.js:503:46)
  at wrapExports (node_modules/.pnpm/@vinxi+plugin-directives@0.4.3_vinxi@0.4.3_@types+node@22.8.4_ioredis@5.4.1_terser@5.36.0_/node_modules/@vinxi/plugin-directives/plugins/wrap-exports.js:393:45)
  at Object.transform (node_modules/.pnpm/@vinxi+plugin-directives@0.4.3_vinxi@0.4.3_@types+node@22.8.4_ioredis@5.4.1_terser@5.36.0_/node_modules/@vinxi/plugin-directives/plugins/wrap-exports.js:44:24)
  at Object.transform (node_modules/.pnpm/@vinxi+plugin-directives@0.4.3_vinxi@0.4.3_@types+node@22.8.4_ioredis@5.4.1_terser@5.36.0_/node_modules/@vinxi/plugin-directives/plugin.js:52:31)
  at Object.handler (node_modules/.pnpm/vite@5.4.10_@types+node@22.8.4_terser@5.36.0/node_modules/vite/dist/node/chunks/dep-BWSbWtLw.js:65683:15)
  at node_modules/.pnpm/rollup@4.24.3/node_modules/rollup/dist/es/shared/node-entry.js:20760:40
```
