const autocannon = require('autocannon')

autocannon
(
    {
        url: 'http://www.twesix.cn',
        amount: 1000
    },
    console.log
)