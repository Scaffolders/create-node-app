import { ServerConfig } from '../../src/config';

test('read SERVER env var test', () => {
    expect(ServerConfig.Server).toBeDefined();
});

test('read PORT env var test', () => {
    expect(ServerConfig.Port).toBeDefined();
});
