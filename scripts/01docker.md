### docker容器启动 pg

```$xslt
# 本项目根目录
docker run -v "$PWD/blog-data":/var/lib/postgresql/data -p 5432:5432 -e POSTGRES_USER=blog -e POSTGRES_HOST_AUTH_METHOD=trust -d postgres:12.2

# 如果需要密码 请这样设置
替换
-e POSTGRES_HOST_AUTH_METHOD=trust 为
-e POSTGRES_HOST_PASSWORD=123456
```

- 其他命令

```$xslt
# 查看容器
docker ps -a

# 查看容器启动日志
docker logs 容器id
```

### 进入docker容器

```$xslt
docker exec -it 容器id bash
```

### 进入pg命令行

- `psql -U blog -W` 登陆数据库

```$xslt
# 查看有那些数据库
\l

# 连接 blog数据库
\c blog

# 查看数据库里的表
\dt
```