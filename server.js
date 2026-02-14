const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/users', async (req, res) => {
    const { name, age } = req.body;

    try {
        await fetch("https://bacet.app.n8n.cloud/webhook/zmeeem", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                age: age
            })
        });

        res.json({ message: "تم الإرسال إلى n8n بنجاح ✅" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "فشل الإرسال إلى n8n ❌" });
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});

