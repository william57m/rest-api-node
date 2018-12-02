FROM node:10.14.0

# Add standard user so npm don't run as root.
RUN useradd --create-home --comment "Default User" userapi
USER userapi
ENV HOME /home/userapi
WORKDIR $HOME

# This will reuse the cache and save a significant amout of time
# Unless package.json has changed. In that case all the commands
# after this one will be re-run
ADD ./package.json      $HOME/
RUN npm install --loglevel warn

# Now we're free to add any additional files, they won't trigger the
# npm install when they change.
ADD ./server            $HOME/server

# Run
CMD ["npm", "run", "start"]
