const express = require('express')
const app = express()
const bodyParser = require('body-parser');

// 解决本地跨域
const cors = require('cors');
app.use(cors());

// 解析 application/json
app.use(bodyParser.json()); 
// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/', (req, res) => {
  console.log(req.body)
  res.send('提交成功')
})

app.get('/', (req, res) => {
  res.send('链接成功')
})

app.listen(80, () => {
  console.log('the server is listening at port 3000')
})