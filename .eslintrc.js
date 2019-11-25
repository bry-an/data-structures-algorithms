module.exports = {
    "extends": "eslint:recommended",
    "rules": {
        // enable additional rules
        "indent": ["error", 4],
        "quotes": ["error", "single"],
        "semi": ["error", "always"],

        // override default options for rules from base configurations
        "no-cond-assign": ["error", "always"],

        // disable rules from base configurations
        "no-console": "off",
    },
    "env": {
        "es6": true
    }
}
