const rssParser = require('react-native-rss-parser');
const fetch = require('node-fetch');

const FEED_URL = 'http://www.spreaker.com/show/2619995/episodes/feed';

class PodcastFeed {
  static async getPodcasts () {
    const feed = await fetch(FEED_URL).then((response) => response.text()).then((responseData) => rssParser.parse(responseData));

    return feed.items.map((item) => {
      return {
        title: item.title,
        description: item.description,
        audioData: item.enclosures[0]
      };
    });
  }
}

module.exports = PodcastFeed;
