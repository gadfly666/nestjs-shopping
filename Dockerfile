from node:16.13.1 as builder

WORKDIR /app

COPY package.json .

RUN npm install

from node:16.13.1 as runner

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY . . 

RUN npm run build

ENTRYPOINT ["npm", "run", "start:prod"]