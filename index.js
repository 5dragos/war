const express = require('express');
const fetch = require('node-fetch');
const app = express();

const CLAN_TAG = encodeURIComponent("#RG8RQJUQ"); // replace with your clan tag
const API_TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImM5YTMxNDY5LTczNTItNGFjOS1hMjI1LTJjODNkZjg2ZmU2NyIsImlhdCI6MTc2MTA1NTMzMSwic3ViIjoiZGV2ZWxvcGVyLzU0MWVmMGU3LThlYWEtNzhjOS1lZGUxLWI0YzQ5NjFhNjU4MCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIyMTIuMjguODIuMzkiXSwidHlwZSI6ImNsaWVudCJ9XX0.V-BhHX4wwP_ogA9lBUl3xLqL7mcFQi1IY8g3EUrJGm5JBpOUXNa8UvgXfsvXEZK5AuTx6Ox87t8fUl3qmmTBtw"; // replace with your API token

app.get('/warlog', async (req, res) => {
  try {
    const response = await fetch(`https://api.clashroyale.com/v1/clans/${CLAN_TAG}/riverracelog`, {
      headers: {
        'Authorization': 'Bearer ' + API_TOKEN
      }
    });
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({error: err.message});
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
