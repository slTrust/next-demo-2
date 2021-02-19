FROM node:12
#  在 linux 的 /usr/src/app 目录工作
WORKDIR /usr/src/app
COPY package.json ./
# 因为我们用的是 yarn 不是 npm
COPY yarn.lock ./
# run 开头 代表运行 命令 设置超时时间
RUN  yarn cache clean & yarn install --network-timeout 60000
# 这个意思是 把你项目根目录的内容 拷贝到 工作目录
COPY . .
# 暴露端口
EXPOSE 3000
# 最后一步你要运行的代码
CMD [ "yarn", "start" ]