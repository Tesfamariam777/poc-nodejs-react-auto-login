const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({
    origin: '*'
  }));
const PORT = process.env.PORT || 5000;

app.get('/generate-token', (req, res) => {
    const payload = {
        userId: '123456',
        username: 'userName'
    }
    const token = jwt.sign(payload,process.env.JWT_SECRET, {expiresIn: '1hr'});
    res.json({token});
})
app.options('*', cors());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})