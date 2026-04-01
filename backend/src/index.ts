import app from './server.ts';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server loaded in http://localhost:${PORT}`);
});
