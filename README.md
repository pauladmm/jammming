# :headphones: Create a Playlist App With The Spotify API :headphones: Codecademy Project
This is a project from the Full-Stack Engineer Path (https://www.codecademy.com/career-journey/full-stack-engineer)

## Overview
### Project description
Create a web application that allows users to search the Spotify library, create custom playlist, then save it to their Spotify account.

Built with:
- React (https://create-react-app.dev/)
- node.js
- VS Code
  
Deployed with surge (https://surge.sh/)

Link: http://jam-pauladmm.surge.sh/

### What I learnt
Through this projects I learnt more about create **Stateful and Stateless Components** (eg. SearchBar vs SearchResults), **pass down Components** to render them (eg. render tracklists), adding features with **Event Handlers**, create **Methods** (eg. a Method that saves the Playlist to a User's Account)...

Also, I dived in Authenticate a User and Get Authorization to Access User Data (*access_token*, *client_id*, *redirect_uri*) and retrieve data from a Web API Endpoint (searching tracks).

Personally, it has supposed a challenge for me due to it is the first time I create a React App, and I have had to unify a lot of knowledge that until now I had learnt separately. I have had to do a lot of rearch when the app didn't work and couldn't barely know why. But along the way, I have to admit I discovered things that were not in the 'to-do list' of the project.

### Current state
I found I have a problem in CLIENT_ID credential when I authenticate. I tried to modify the URL because I realised that in the url link the client_id and the redirect_uri aren't updated.

This is the link that thows the error:

*https://accounts.spotify.com/authorize?client_id=c422646b47db4997ad5297e99d1d22e0&response_type=token&scope=playlist-modify-public&redirect_uri=http://localhost:3000/*

When the correct link should be:

*https://accounts.spotify.com/authorize?client_id={myRealClientId}0&response_type=token&scope=playlist-modify-public&redirect_uri=http://jam-pauladmm.surge.sh/*

I tried to copy and paste several times the client_id and update the redirect_uri, delete and create the app again, even surge a couple times with other domains.

After I have think about it, maybe I would try two more things:
1. Try another kind of authorization (this one is done carried out on the client side; Implicit Grant Flow (https://developer.spotify.com/documentation/general/guides/authorization/implicit-grant/))
2. Try another music API and restructuring the whole App.


### Part Two
In the part two of this Projects, I will work on potential features to this App as:
- Including preview samples for each track
- Add a loading screen while playlist is saving
- Afeter user redirect on login, restoring the search term from before the redirect

Part of this 'Part Two' includes a technical desing document with: Objectives, Background, Technical Design and Caveats.


## Author :art:
Paula del Moral (pauladmm.github.io)

