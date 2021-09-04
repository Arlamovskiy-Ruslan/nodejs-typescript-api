let common = [
    'tests/features/**/*.feature',
    '--require-module ts-node/register',
    '--require tests/step-definitions/**/*.ts',
    '--format progress-bar',

].join(' ');

module.exports = {
    default: common,
};

