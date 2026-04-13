# # 1. Base image
# FROM node:20-alpine

# # 2. Set working directory
# WORKDIR  /app

# # 3. Copy Dependency file 
# COPY package*.json ./
# COPY prisma ./prisma

# # 4. Install Dependency
# RUN npm install

# COPY . .

# RUN npx prisma generate
# RUN npm run build

# EXPOSE 3000

# CMD ["npm", "start"]