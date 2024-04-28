// import MeetingForm from "./MeetingForm"

const Meetings = () => {
  return (
    <div className="meetings-container">
      <h1 className="meetings-title">Reunión Sacramental</h1>
      <div className="btn-meetings">
        <button className="btn-meetings-card">Saludo y Bienvenida</button>
        <button className="btn-meetings-card">Asuntos de Rama</button>
        <button className="btn-meetings-card">Asuntos de Distrito</button>
        <button className="btn-meetings-card">Santa Cena</button>
        <button className="btn-meetings-card">Mensajes</button>
        <button className="btn-meetings-card">Testimonios</button>
        <button className="btn-meetings-card">Conclusión</button>
      </div>
      {/* <MeetingForm /> */}

      <h2 className="meetings-title">Reuniones pasadas</h2>
    </div>
  )
}

export default Meetings


