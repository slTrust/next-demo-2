### seed 填充数据

- 前置操作 参考 01docker.md 内容，新建好容器，配置好数据库连接

- 开第一个终端 `yarn dev`
  - 可以编译我们的 typeorm代码

- 开第二个终端执行数据库迁移

```$xslt
# 创建数据库表
yarn migration:run
# revert操作
yarn migration:revert   
```

- 填充数据

```
# 项目根目录
node dist/seed.js
```

- 进入docker容器内部查询

```
select * from posts;
```