To add a new song to the README.md table:

1.  Find all `*.js` files in the repository.
2.  For each file:
    *   Read the file content.
    *   Extract the `@title` from the comments.
    *   Base64 encode the file content.
    *   URL encode the Base64 string.
    *   Construct the `strudel.cc` link in the format `https://strudel.cc/#<encoded_song>`
    *   Add a new row to the table in `README.md` with the title and the link.
