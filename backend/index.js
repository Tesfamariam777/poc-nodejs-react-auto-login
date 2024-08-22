const express = require('express');
const cors = require('cors');
const path = require('path');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend/build')));

const PORT = process.env.PORT || 5000;

app.get('/generate-token', (req, res) => {
    const payload = {
        userId: '123456',
        username: 'userName'
    }
    const token = jwt.sign(payload,process.env.JWT_SECRET, {expiresIn: '1hr'});
    res.json({token});
})
app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname, '../frontend/build', index.html));
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})