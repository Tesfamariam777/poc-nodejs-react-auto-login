const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({
    origin: '*' //
  }));
const PORT = process.env.PORT || 5000;

app.get('/login', (req, res) => {
    const payload = {
        id: 1,
        username: 'johndoe',
        email: 'john@example.com'
    }
    const token = jwt.sign(payload,process.env.JWT_SECRET, {expiresIn: '1hr'});
    res.json({token});
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})