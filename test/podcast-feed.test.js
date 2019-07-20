const PodcastFeed = require('../podcast-feed.js');

describe('PodcastFeed', () => {
    describe('.getPodcasts', () => {
        it('pulls down objects with expected values', async () => {
            expect((await PodcastFeed.getPodcasts())[0].title).toEqual(expect.any(String));
            expect((await PodcastFeed.getPodcasts())[0].description).toEqual(expect.any(String));
            expect(Object.keys((await PodcastFeed.getPodcasts())[0].audioData)).toEqual(
                expect.arrayContaining(
                    [
                        'url',
                        'length',
                        'mimeType',
                    ]
                )
            );
        });
    });
});
