import { useState } from "react";
import "./App.css";

function App() {
  const [kendaraan, setKendaraan] = useState([
    {
      merek: "Honda Beat",
      pemilik: "Andi",
      service: "Paket Hemat",
    },
    {
      merek: "Toyota Avanza",
      pemilik: "Budi",
      service: "Paket Full Service",
    },
  ]);

  const [merek, setMerek] = useState("");
  const [pemilik, setPemilik] = useState("");
  const [service, setService] = useState("Paket Hemat");

  const [showForm, setShowForm] = useState(false);

  const tambahKendaraan = (e) => {
    e.preventDefault();

    const dataBaru = { merek, pemilik, service };
    setKendaraan([...kendaraan, dataBaru]);

    setMerek("");
    setPemilik("");
    setService("Paket Hemat");
    setShowForm(false);
  };

  return (
    <div className="container">
      <h1>Daftar Service Kendaraan</h1>

      <button className="btn-open" onClick={() => setShowForm(true)}>
        Masukkan Data
      </button>

      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <h2>Masukkan Data</h2>

            <form onSubmit={tambahKendaraan}>
              <input
                type="text"
                placeholder="Merek Kendaraan"
                value={merek}
                onChange={(e) => setMerek(e.target.value)}
                required
              />

              <input
                type="text"
                placeholder="Nama Pemilik"
                value={pemilik}
                onChange={(e) => setPemilik(e.target.value)}
                required
              />

              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
              >
                <option value="Paket Hemat">Paket Hemat</option>
                <option value="Paket Full Service">Paket Full Service</option>
              </select>

              <div className="btn-group">
                <button type="submit">Simpan</button>
                <button
                  type="button"
                  className="btn-cancel"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <ul>
        {kendaraan.map((item, index) => (
          <li key={index}>
            <strong>{item.merek}</strong> <br />
            Pemilik: {item.pemilik} <br />
            Service: {item.service}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
