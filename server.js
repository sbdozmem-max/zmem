const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/users', async (req, res) => {
    const { name, age } = req.body;

    try {
        await axios.post(https://bacet.app.n8n.cloud/webhook-test/zmeeem, {
            name,
            age
        });

        res.json({ message: "تم الإرسال إلى n8n بنجاح ✅" });

    } catch (error) {
        res.status(500).json({ message: "خطأ في الإرسال إلى n8n" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server running on port " + PORT);

});
