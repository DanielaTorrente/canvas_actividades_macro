import { useState } from "react";

export default function CanvasActividades() {
  const [actividades, setActividades] = useState([
    {
      docente: "Prof. Daniela Torrente",
      unidad: "Unidad 1",
      actividad: "Preparar clase de apertura",
      fecha: "2025-05-10",
      logro: "Clase introductoria en aula",
      estado: "Cumplido",
      observaciones: "Grabada y subida al campus"
    }
  ]);

  const [nueva, setNueva] = useState({
    docente: "",
    unidad: "",
    actividad: "",
    fecha: "",
    logro: "",
    estado: "Pendiente",
    observaciones: ""
  });

  const agregar = () => {
    setActividades([...actividades, nueva]);
    setNueva({ docente: "", unidad: "", actividad: "", fecha: "", logro: "", estado: "Pendiente", observaciones: "" });
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <input className="border p-2" placeholder="Docente" value={nueva.docente} onChange={e => setNueva({ ...nueva, docente: e.target.value })} />
        <input className="border p-2" placeholder="Unidad" value={nueva.unidad} onChange={e => setNueva({ ...nueva, unidad: e.target.value })} />
        <input className="border p-2" placeholder="Actividad" value={nueva.actividad} onChange={e => setNueva({ ...nueva, actividad: e.target.value })} />
        <input className="border p-2" type="date" value={nueva.fecha} onChange={e => setNueva({ ...nueva, fecha: e.target.value })} />
        <input className="border p-2" placeholder="Logro" value={nueva.logro} onChange={e => setNueva({ ...nueva, logro: e.target.value })} />
        <input className="border p-2" placeholder="Estado" value={nueva.estado} onChange={e => setNueva({ ...nueva, estado: e.target.value })} />
        <textarea className="border p-2 col-span-2" placeholder="Observaciones" value={nueva.observaciones} onChange={e => setNueva({ ...nueva, observaciones: e.target.value })}></textarea>
        <button onClick={agregar} className="bg-blue-600 text-white p-2 col-span-2">Agregar Actividad</button>
      </div>

      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>Docente</th>
            <th>Unidad</th>
            <th>Actividad</th>
            <th>Fecha</th>
            <th>Logro</th>
            <th>Estado</th>
            <th>Observaciones</th>
          </tr>
        </thead>
        <tbody>
          {actividades.map((a, i) => (
            <tr key={i}>
              <td>{a.docente}</td>
              <td>{a.unidad}</td>
              <td>{a.actividad}</td>
              <td>{a.fecha}</td>
              <td>{a.logro}</td>
              <td>{a.estado}</td>
              <td>{a.observaciones}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
