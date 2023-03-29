# Kat Tech Test - README file

## Checklist

- search box

### Output as a table

- repo name (name)
- author (owner > login)
- number of stars (stargazers_count)

### Sort by

- number of stars

### Notes

- Sets of 25
- next/previous (only show previous if valid)

---

## Tasks complete / issues

- created search box and button - STATIC doesn't search
- created table in react - DONE

- return data from API - console all data, having issue with displaying specific
  data due to some data at child level which is stopping my forEach from running
  ERROR: TypeError: jsonData.forEach is not a function

- return 25 results at a time - API total of 30 unable to add function due to no results returned

- added previous and next buttons - both STATIC, would ideally like the previous button to not
  show or be disabled when the first 25 results are returned

- sort order number of stars - didn't attempt

- improvements add results on load and only search when value added to search box
