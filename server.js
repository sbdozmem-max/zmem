const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/users', (req, res) => {
    const { name, age } = req.body;

    if (!name || !age) {
        return res.status(400).json({ message: "جميع الحقول مطلوبة" });
    }

    res.json({
        message: "تم استلام البيانات بنجاح ✅",
        data: { name, age }
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});