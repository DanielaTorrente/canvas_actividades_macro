mport { useState } from "react";

export default function CanvasActividades() {
  const [actividades, setActividades] = useState([
    {
      docente: "Prof. Daniela Torrente",
      unidad: "Unidad 1",
      actividad: "Preparar clase de apertura",
      fecha: "2025-05-10",
      logro: "Clase introductoria en aula",
      estado: "Cumplido",
      observaciones: "Grabada y subida al campus",
    },
  ]);

  const [nueva, setNueva] = useState({
    docente: "",
    unidad: "",
    actividad: "",
    fecha: "",
    logro: "",
    estado: "Pendiente",
    observaciones: "",
  });

  const agregarActividad = () => {
    setActividades([...actividades, nueva]);
    setNueva({
      docente: "",
      unidad: "",
      actividad: "",
      fecha: "",
      logro: "",
      estado: "Pendiente",
      observaciones: "",
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">🧑‍🏫 Planificación de Actividades Docentes</h1>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <input placeholder="Docente" value={nueva.docente} onChange={e => setNueva({ ...nueva, docente: e.target.value })} className="border p-2" />
        <input placeholder="Unidad" value={nueva.unidad} onChange={e => setNueva({ ...nueva, unidad: e.target.value })} className="border p-2" />
        <input placeholder="Actividad" value={nueva.actividad} onChange={e => setNueva({ ...nueva, actividad: e.target.value })} className="border p-2" />
        <input type="date" value={nueva.fecha} onChange={e => setNueva({ ...nueva, fecha: e.target.value })} className="border p-2" />
        <input placeholder="Logro" value={nueva.logro} onChange={e => setNueva({ ...nueva, logro: e.target.value })} className="border p-2" />
        <input placeholder="Estado" value={nueva.estado} onChange={e => setNueva({ ...nueva, estado: e.target.value })} className="border p-2" />
        <textarea placeholder="Observaciones" value={nueva.observaciones} onChange={e => setNueva({ ...nueva, observaciones: e.target.value })} className="border p-2 col-span-2" />
        <button onClick={agregarActividad} className="bg-blue-500 text-white p-2 rounded col-span-2">➕ Agregar Actividad</button>
      </div>

      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left">
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
            {actividades.map((act, index) => (
              <tr key={index} className="border-t">
                <td>{act.docente}</td>
                <td>{act.unidad}</td>
                <td>{act.actividad}</td>
                <td>{act.fecha}</td>
                <td>{act.logro}</td>
                <td>{act.estado}</td>
                <td>{act.observaciones}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
