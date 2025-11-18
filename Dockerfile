FROM node:24.11
WORKDIR = '/app'

ENTRYPOINT ["node", "run", "start"]