FROM node:16.15.0
WORKDIR /app/frontend/

COPY package*.json /app/frontend/

COPY . /app/frontend/

RUN npm cache clean --force

RUN npm ci --legacy-peer-deps

EXPOSE 3000
CMD ["npm", "start"]