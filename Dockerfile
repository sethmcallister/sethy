# FROM alpine:latest
FROM mhart/alpine-node:latest
MAINTAINER James McAllister <james@mcallister.xyz>

RUN apk --update --no-progress add bash git
RUN npm config set bin-links false

WORKDIR /dist

EXPOSE 3000, 80

CMD ["node", "./bin/seve-dist-folder.js"]

CMD 

#RUN npm run james
# docker run -it -p 3000:3000 -v //c/Users/seth/files/github/sethy.xyz/:/dist alpine-node bash