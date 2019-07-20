const index = require('../index.js');

describe('index', () => {
    it('has expected exports', () => {
        expect(Object.keys(index)).toEqual(
            expect.arrayContaining(
                [
                    'Streaming',
                    'PodcastFeed',
                ]
            )
        );
    });
});
