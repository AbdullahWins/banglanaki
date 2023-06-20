# Assalamualaikum! presenting "BanglaNaki"

[![npm version](https://img.shields.io/npm/v/banglanaki.svg)](https://www.npmjs.com/package/banglanaki)
[![License](https://img.shields.io/npm/l/banglanaki.svg)](https://github.com/abdullahwins/banglanaki/blob/main/LICENSE)

This is a package that checks if the input/given text is a Bengali character or Bengali number or not. It provides a simple and efficient way to verify whether a string contains only Bengali characters or not.

## Installation

You can install the package using npm:

```shell
npm install banglanaki
```

## Usage

Import the `BanglaNaki` function from the package:

```javascript
const BanglaNaki = require("banglanaki");
```

The `BanglaNaki` function takes a single parameter, `text`, which should be a string to be checked. It returns `true` if the text contains only Bengali characters or Bengali numbers, and `false` otherwise. If the `text` parameter is not a string or is undefined, an `Error` will be thrown.

Here's an example usage:

```javascript
const text1 = "বাংলা"; // Bengali text
console.log(BanglaNaki(text1)); // Output: true

const text2 = "বাংলা১২৩"; // Bengali text mixed with bengali numbers
console.log(BanglaNaki(text2)); // Output: true

const text2 = "বাংলা123"; // Bengali text mixed with other numbers
console.log(BanglaNaki(text2)); // Output: false

const text3 = "English"; // Non-Bengali text
console.log(BanglaNaki(text3)); // Output: false
```

## License

This package is licensed under the ISC License. See the [LICENSE](https://github.com/abdullahwins/banglanaki/blob/main/LICENSE) file for more details.

## Contributing

Contributions are welcome! If you find any issues or have suggestions, please create an issue on the [GitHub repository](https://github.com/abdullahwins/banglanaki).

## Keywords

- Bangla text
- Bangla font
- Bangla character
- Text detection
- Bangla text detection
- Font detection
- Character verification
- Bangla character verification
- Verify text
- Verify Bangla text

## Author

This package is developed and maintained by [abdullahwins](https://github.com/abdullahwins).

**Enjoy using BanglaNaki! Feel free to reach out with any questions or feedback.**
