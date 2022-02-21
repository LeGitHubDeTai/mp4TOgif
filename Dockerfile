FROM mhart/alpine-node:12.19.1

LABEL "com.github.actions.name"="MP4 TO GIF"
LABEL "com.github.actions.description"="Make a gif with a video in format MP4."
LABEL "com.github.actions.icon"="message-square"
LABEL "com.github.actions.color"="gray-dark"

LABEL "repository"="https://github.com/LeGitHubDeTai/mp4TOgif"
LABEL "homepage"="https://github.com/LeGitHubDeTai/mp4TOgif"
LABEL "maintainer"="Tai Studio <tai.studio@outlook.fr>"
LABEL "version"="1.0.0"

ADD package.json package-lock.json /
RUN npm ci --production
ADD index.js /
RUN chmod +x /index.js

ENTRYPOINT ["node", "/index.js"]