const fetch = require('node-fetch');

class Streaming {
  static async currentSong (stream) {
    const url = `https://s9.nexuscast.com/external/rpc.php?m=streaminfo.get&username=${stream}&rid=${stream}`;
    const res = await fetch(url).then(res => res.json());
    const [artist, song] = res.data[0].song.split(' - ');
    return {
      artist,
      song
    };
  }

  static streamURL (stream) {
    return `http://149.56.185.83:${Streaming.STREAM_PORTS[stream]}/stream`;
  }
}

Streaming.STREAMS = {
  MAIN: 'live',
  THROWBACK: 'throwback',
  BATTERY: 'battery',
  FUSION: 'hiphop',
  EDM: 'edm'
};

Streaming.STREAM_PORTS = {
  [Streaming.STREAMS.MAIN]: 8144,
  [Streaming.STREAMS.THROWBACK]: 8008,
  [Streaming.STREAMS.BATTERY]: 8170,
  [Streaming.STREAMS.FUSION]: 8164,
  [Streaming.STREAMS.EDM]: 8138
};

module.exports = Streaming;
