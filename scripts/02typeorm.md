### typeorm默认要 ts-node支持

- 但是 nextjs 是用 babel转译 ts
- 所以我们要统一 使用 babel
- 所以 typeorm的文件要编译成js运行 

### 操作步骤

```$xslt
npx babel ./src --out-dir dist --extensions ".ts,.tsx"

node /dist/index.js
```

### 重要步骤

- 一定一定一定要改成 false
- 如果为true 连接数据库的时候，typeorm会自动根据 entity 目录修改数据库， 
  - 假如你改了 entity 多了一些列，就会同步到表里
  - 如果是生产环境，数据要么丢了，要么脏了，就很麻烦
- 一开始就要杜绝 sync

```
# 修改 ormconfig.json 的配置
"synchronize": false,
```

### 创建表

- 创建 posts 表
- `npx typeorm migration:create -n CreatePost`
  - 得到 `src/migrations/{TIMESTAMP}-CreatePost.ts`
  - 编写对应的 up/down函数
- 运行 migration
  - `npx babel .src --out-dir dist --extensions ".ts,.tsx"` 编译 ts 为 js
  - `npx typeorm migration:run` 创建表 up操作
  - `npx typeorm migration:revert` drop表 down操作
