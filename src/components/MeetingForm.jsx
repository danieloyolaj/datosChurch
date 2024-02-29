
const MeetingForm = () => {

    const handleSubmit = (e) => {
        e.precentDefault()
    }

  return (
    <div className="meetingForm-container">
        <form onSubmit={handleSubmit}></form>
    </div>
  )
}

export default MeetingForm