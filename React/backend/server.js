const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/api', (req, res) => {
    //DB => table select => 객체로 만들어서 응답을 주면 
    //insert
    //update
    //delete
    res.json(
        [
            { userid: 'web722', content: '안녕하세요1', date: '2021-07-07' },
            { userid: 'web722', content: '안녕하세요2', date: '2021-07-07' },
            { userid: 'web722', content: '안녕하세요3', date: '2021-07-07' },
            { userid: 'web722', content: '안녕하세요4', date: '2021-07-07' },
            { userid: 'web722', content: '안녕하세요5', date: '2021-07-07' },
            { userid: 'web722', content: '안녕하세요6', date: '2021-07-07' }
        ]
    )
})

app.listen(3000, () => {
    console.log('server start port : 3000');
})