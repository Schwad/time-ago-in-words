# time-ago-in-words

## [Attribution](https://stackoverflow.com/questions/6108819/javascript-timestamp-to-relative-time/53800501#53800501)

I wanted Rails' time_ago_in_words in Javascript. There was a stackoverflow answer which pretty much gave us that. So I packaged it. Thanks @vsync

## Usage

Pass in a date object. Voila 

```javascript
timeAgoInWords(new Date('2022-01-01'))

// #=> '3 months ago'
```