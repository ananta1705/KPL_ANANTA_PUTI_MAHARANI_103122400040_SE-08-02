import express from "express";
import { specs, swaggerUi } from "./swagger.js";

const app = express();

const PORT = 8000;
const HOSTNAME = "localhost";

app.use(express.json());

// Swagger UI
app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));

const daftarFilm = [];

/**
 * @swagger
 * /film_bioskop:
 *   get:
 *     summary: Ambil semua film
 *     responses:
 *       200:
 *         description: Berhasil mengambil daftar film
 */
app.get("/film_bioskop", (req, res) => {
  return res.status(200).json(daftarFilm);
});

/**
 * @swagger
 * /film_bioskop/{id}:
 *   get:
 *     summary: Ambil film berdasarkan ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Film ditemukan
 *       404:
 *         description: Film tidak ditemukan
 */
app.get("/film_bioskop/:id", (req, res) => {
  const film = daftarFilm.find(
    (f) => f.id === Number(req.params.id)
  );

  if (!film) {
    return res.status(404).json({ message: "Film tidak ditemukan" });
  }

  return res.status(200).json(film);
});

/**
 * @swagger
 * /film_bioskop:
 *   post:
 *     summary: Tambahkan film baru
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               genre:
 *                 type: string
 *               year:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Film berhasil ditambahkan
 */
app.post("/film_bioskop", (req, res) => {
  const film = {
    id: daftarFilm.length + 1,
    title: req.body.title,
    genre: req.body.genre,
    year: req.body.year,
  };

  daftarFilm.push(film);
  return res.status(201).json(film);
});

/**
 * @swagger
 * /film_bioskop/{id}:
 *   delete:
 *     summary: Hapus film berdasarkan ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Film berhasil dihapus
 *       404:
 *         description: Film tidak ditemukan
 */
app.delete("/film_bioskop/:id", (req, res) => {
  const indeksFilm = daftarFilm.findIndex(
    (f) => f.id === Number(req.params.id)
  );

  if (indeksFilm === -1) {
    return res.status(404).json({ message: "Film tidak ditemukan" });
  }

  const filmDihapus = daftarFilm.splice(indeksFilm, 1);

  return res.status(200).json(filmDihapus);
});

app.listen(PORT, HOSTNAME, () => {
  console.log(`Peladen berjalan di http://${HOSTNAME}:${PORT}`);
});