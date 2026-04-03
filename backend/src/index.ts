import app from './server.ts';

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server loaded in http://localhost:${PORT}`);
  });
}
