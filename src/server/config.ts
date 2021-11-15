import convict from 'convict';
import convict_format_with_validator from 'convict-format-with-validator';

convict.addFormats(convict_format_with_validator);

var config = convict({
    env: {
        doc: 'The application environment.',
        format: ['production', 'development', 'test'],
        default: 'development',
        env: 'NODE_ENV'
    },
    ip: {
        doc: 'The IP address to bind.',
        format: 'ipaddress',
        default: '127.0.0.1',
        env: 'IP_ADDRESS',
    },
    port: {
        doc: 'The port to bind.',
        format: 'port',
        default: 8080,
        env: 'PORT',
        arg: 'port'
    }
});

var env = config.get('env');

config.loadFile('../config/' + env + '.json');
config.validate({allowed: 'strict'});
    
export default config;