const express = require('express');
const app = express();

app.get('/api', (req, res) => {
    res.send({ message: "Hello from the backend!" });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
