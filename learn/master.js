const net = require('net')
const fork = require('child_process').fork

const handle = net._createServerHandle('0.0.0.0', 3000)

for (let i = 0; i < 4; i ++)
{
    fork('./worker').send({}, handle)
}
