# String Subpattern Recognition

Build a function to return either `true/True` or `false/False` if a string can be seen as the repetition of a simpler/shorter subpattern or not.

```js
hasSubpattern("a") === false; //no repeated pattern
hasSubpattern("aaaa") === true; //created repeating "a"
hasSubpattern("abcd") === false; //no repeated pattern
hasSubpattern("abababab") === true; //created repeating "ab"
hasSubpattern("ababababa") === false; //cannot be entirely reproduced repeating a pattern
```
