### typeorm默认要 ts-node支持

- 但是 nextjs 是用 babel转译 ts
- 所以我们要统一 使用 babel
- 所以 typeorm的文件要编译成js运行 

### 操作步骤

```$xslt
npx babel ./src --out-dir dist --extensions ".ts,.tsx"

node /dist/index.js
```