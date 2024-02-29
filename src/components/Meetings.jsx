import MeetingForm from "./MeetingForm"

const Meetings = () => {
  return (
    <div className="meetings-container">
      <h1 className="meetings-title">Reunión Sacramental</h1>

      <button className="btn-meetings">New</button>
      
      <MeetingForm />

      <h1 className="meetings-title">Reuniones pasadas</h1>
    </div>
  )
}

export default Meetings


