Regular expressions (regex) use various symbols and patterns to match text. Here's a breakdown of common regex symbols and their meanings:

Basic Symbols
. Matches any single character except newline.

Example: a.b matches aab, acb, a1b, but not ab or a\nb.
^: Matches the start of a string.

Example: ^a matches abc but not bca.
$: Matches the end of a string.

Example: a$ matches cba but not abc.
\*: Matches 0 or more of the preceding element.

Example: ab\*c matches ac, abc, abbc, etc.
+: Matches 1 or more of the preceding element.

Example: ab+c matches abc, abbc, but not ac.
?: Matches 0 or 1 of the preceding element.

Example: ab?c matches ac or abc.
{n}: Matches exactly n occurrences of the preceding element.

Example: a{3} matches aaa but not aa.
{n,}: Matches n or more occurrences of the preceding element.

Example: a{2,} matches aa, aaa, aaaa, etc.
{n,m}: Matches between n and m occurrences of the preceding element.

Example: a{2,4} matches aa, aaa, or aaaa.
Character Classes
[abc]: Matches any one of the characters inside the brackets.

Example: [abc] matches a, b, or c.
[^abc]: Matches any character that is not inside the brackets.

Example: [^abc] matches d, e, f, etc.
[a-z]: Matches any lowercase letter from a to z.

Example: [a-z] matches a, b, c, etc.
[A-Z]: Matches any uppercase letter from A to Z.

Example: [A-Z] matches A, B, C, etc.
[0-9]: Matches any digit from 0 to 9.

Example: [0-9] matches 0, 1, 2, etc.
\d: Matches any digit (equivalent to [0-9]).

Example: \d matches 0, 1, 2, etc.
\D: Matches any non-digit.

Example: \D matches a, b, -, etc.
\w: Matches any word character (alphanumeric plus underscore, equivalent to [a-zA-Z0-9_]).

Example: \w matches a, 1, \_, etc.
\W: Matches any non-word character.

Example: \W matches !, @, #, etc.
\s: Matches any whitespace character (spaces, tabs, line breaks).

Example: \s matches , \t, \n, etc.
\S: Matches any non-whitespace character.

Example: \S matches a, b, 1, etc.
Anchors and Boundaries
\b: Matches a word boundary (the position between a word character and a non-word character).

Example: \bword\b matches word but not sword or words.
\B: Matches a non-word boundary.

Example: \Bword matches sword but not word.
Grouping and Capturing
(abc): Matches the exact sequence abc and captures it for back-referencing.

Example: (abc) in abcabc captures abc twice.
(?:abc): Matches the exact sequence abc but does not capture it (non-capturing group).

Example: (?:abc) matches abc but does not store it for back-referencing.
\n: Refers to the nth captured group.

Example: (a)(b)\1\2 matches abba (\1 and \2 refer to a and b respectively).
Alternation
a|b: Matches a or b.
Example: cat|dog matches cat or dog.
Escape Characters
\: Escapes a special character so it can be matched literally.
Example: \. matches a literal period ..
Lookahead and Lookbehind
(?=...): Positive lookahead; matches a group before the main expression without including it in the match.

Example: \d(?=px) matches a digit only if it is followed by "px".
(?!...): Negative lookahead; matches a group not followed by the main expression.

Example: \d(?!px) matches a digit only if it is not followed by "px".
(?<=...): Positive lookbehind; matches a group after the main expression without including it in the match.

Example: (?<=\$)\d+ matches digits only if they are preceded by a dollar sign.
(?<!...): Negative lookbehind; matches a group not preceded by the main expression.

Example: (?<!\$)\d+ matches digits only if they are not preceded by a dollar sign.
Flags
/g: Global search; find all matches rather than stopping after the first match.

Example: /abc/g finds all occurrences of "abc".
/i: Case-insensitive search.

Example: /abc/i matches abc, Abc, ABC, etc.
/m: Multi-line search; ^ and $ match the start and end of each line.

Example: /^abc$/m matches abc at the start of a line in multi-line input.
/s: Dotall mode; . matches newline characters as well.

Example: /abc.\*def/s matches across multiple lines.
