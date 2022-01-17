FROM node:16

WORKDIR /code

COPY package*.json ./

RUN npm i

COPY . .

ENV REACT_APP_BACKEND_SOCKET_URL="http://localhost:5001"

RUN npm run build

RUN cp -r ./build ./serverBuild/build

WORKDIR /code/serverBuild

ENV PORT=5000

EXPOSE 5000

CMD ["npm", "start"]