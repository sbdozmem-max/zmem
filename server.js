app.post('/users', async (req, res) => {
    const { name, age } = req.body;

    try {
        await fetch("https://bacet.app.n8n.cloud/webhook-test/zmeeem", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                age
            })
        });

        res.json({ message: "تم الإرسال إلى n8n بنجاح ✅" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "فشل الإرسال إلى n8n ❌" });
    }
});


