const fetch = require('node-fetch');
const Streaming = require('../streaming.js');

describe('Streaming', () => {
  describe('.STREAMS', () => {
    it('has expected keys', () => {
      expect(Object.keys(Streaming.STREAMS)).toEqual(
        expect.arrayContaining(
          [
            'MAIN',
            'THROWBACK',
            'FUSION',
            'EDM',
            'BATTERY'
          ]
        )
      );
    });
  });

  describe('.STREAM_PORTS', () => {
    it('has expected keys', () => {
      expect(Object.keys(Streaming.STREAM_PORTS)).toEqual(
        expect.arrayContaining(
          Object.values(Streaming.STREAMS)
        )
      );
    });
  });

  // Mocking isn't feasible here, so integration tests it is.
  describe('.currentSong', () => {
    const testStream = (stream) => {
      it(`${stream} has artist and song`, async () => {
        const res = await Streaming.currentSong(stream);
        expect(res.artist).toEqual(expect.any(String));
        expect(res.song).toEqual(expect.any(String));
      });
    };

    Object.values(Streaming.STREAMS).forEach((stream) => {
      testStream(stream);
    });
  });

  // For lack of better tests, we can make sure they return 200's
  describe('.streamURL', () => {
    const testStreamURL = (stream) => {
      it(`${stream} returns a 200 response`, async () => {
        const res = await fetch(Streaming.streamURL(stream));
        expect(res.status).toEqual(200);
      });
    };

    Object.values(Streaming.STREAMS).forEach((stream) => {
      testStreamURL(stream);
    });
  });
});
