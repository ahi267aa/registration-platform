FROM node:14

# 設置工作目錄
WORKDIR /app

# 複製 package.json 和 package-lock.json 文件
COPY package*.json ./

# 安裝應用所需的套件
RUN npm install

# 複製所有應用文件到工作目錄
COPY . .

# 運行的端口
EXPOSE 3000

# 啟動應用
CMD ["node", "app.js"]
