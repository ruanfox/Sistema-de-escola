FROM node:18-slim

WORKDIR /app

ENV NODE_ENV=development

COPY package.json package-lock.json* ./

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]