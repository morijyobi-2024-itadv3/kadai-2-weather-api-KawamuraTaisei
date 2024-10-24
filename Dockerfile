FROM node:22
WORKDIR /app
COPY . .
RUN npm install 
RUN npm run build
CMD ["npm", "run", "start"]
EXPOSE 3000
