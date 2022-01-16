import { ServerConfig } from '../../src/config';

test('read SERVER env var test', () => {
    expect(ServerConfig.Server).toBeDefined();
});

test('read HOST env var test', () => {
    expect(ServerConfig.Host).toBeDefined();
});
