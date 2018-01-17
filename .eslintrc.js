const OFF = 0, WARN = 1, ERROR = 2;

const esconfig = {
    "env": {
        "browser": true,
        "node": true,
        "es6": true,
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        },
    },
    "extends": "airbnb",
    "rules":{
      "no-console": OFF,
      "linebreak-style": OFF,
      "arrow-parens": [ERROR, "always"],
      "react/prop-types": OFF,
    }
};
module.exports = esconfig;
