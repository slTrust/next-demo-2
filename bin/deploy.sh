echo '前置准备完成了，启动pg';
docker restart my-pg-app &&
# 推荐这样，因为用户名不一定都叫 blog
cd ~/app/ &&
git pull &&
yarn install --production=false &&
yarn build &&
# 修改补丁, src/entity/User.ts 的补丁
git apply migrate.patch;
# 编译src/migration ,让typeorm 的ts变成 js
yarn compile &&
# 数据库迁移,创建表
yarn m:run &&
# 撤销 patch内容
git reset --hard HEAD &&
# docker构建应用
docker build -t hjx/node-web-app . &&
# 防止同名应用存在
docker kill my-next-app &&
docker rm my-next-app &&
docker run --name my-next-app  --network=host -d hjx/node-web-app &&
echo 'OK!'