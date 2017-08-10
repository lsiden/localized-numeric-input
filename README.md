# local-number
Edit numbers in format of locale, honoring local conventions for thousands and decimal separators,
with en-US as fallback.

## Description

In the United States, it is the custom to write numbers as "123,456.78",
but in Germany, that same number would be written as "123.456,78".

The &lt;input type="number"&gt; HTML5 element has a `lang=` attribute,
but it is [not implemented consistently across browsers](https://ctrl.blog/entry/html5-input-number-localization).

Most web users have become accustomed to entering numbers with no thousands-separator,
and with period ('.') as the decimal separator,
regardless of what locale their browser detects.

This input component seeks to give users of a form with numeric input
the option of entering a number in their local format,
including thousands-separators.
If the value they entered does not conform to that format,
it will also attempt to parse the value according to en-US as a fall-back.

# See

* https://ctrl.blog/entry/html5-input-number-localization
* https://stackoverflow.com/questions/13412204/localization-of-input-type-number

# Author
Lawrence Siden  
Westside Consulting LLC  
Ann Arbor, MI  
lsiden@gmail.com

# License

[MIT](https://opensource.org/licenses/MIT)
