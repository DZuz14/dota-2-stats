# Dota 2 Team Standings

This demo "app" is designed to display the current team standings for the e-sports game Dota 2. From the standings page, the user should be able to:

- View a list of an individual teams matches.
- View player stats for a particular match.

It fetches it's data from the [OpenDota API](https://docs.opendota.com/). Interestingly enough, I couldn't find a "limit" parameter when requesting a list of matches for a team. Therefore, give a teams matches list a second or two to load. (I haven't added loading indicators, which I mention in the commentary section).

## Design

In order to be able to put as much code down as possible, I used a similar set of styling from a real Dota 2 stats website, [Dotabuff](https://www.dotabuff.com/).

## Tech Overview

- Gatsby.js
- React 16
- TypeScript
- Redux/Redux Saga
- Emotion Styled Components

This demo took me a little bit longer than expected, so I decided to not use Redux and Emotion for sake of speed.

The CSS styling is very simple, and contains minimal styling rules. The styles I put in myself are located in the `components/Layout` file, or done inline inside the React components themselves. Since I am utilizing the React Bootstrap library, any other styling seen can most likely be attributed to that.

## Commentary

I wanted to point out a few things that I would like to optimize/change about the current iteration of this demo:

- Loading indicators & some basic error handling.
- Server render versus doing initial data fetches on the client.
- It would be useful to jump back through and clean up, add, or change any TypeScript related items.
- Devise a more robust routing strategy that removes the necessity for querystring parameters. Using URL params instead might be a good option.
