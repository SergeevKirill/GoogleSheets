module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint-config-wezom-relax",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
    }
};