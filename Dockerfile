FROM node:12.11.1-alpine
WORKDIR /root
RUN mkdir project
WORKDIR /root/project
COPY . ./
CMD ["node", "bin/www"]