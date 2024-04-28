
const MeetingForm = () => {

  

  return (
    
    <div className="meetingForm-container">
        <div className="meetingForm-subContainer">
                
            <p>
                    <strong>Propósito de la reunión Sacramental:</strong><br /><br />
                    Recordar a Jesucristo al tomar la Santa Cena. En esta ordenanza, los miembros de la Iglesia renuevan el convenio de tomar sobre sí el nombre del Salvador, de recordarlo siempre y de guardar Sus mandamientos. Otros propósitos incluyen el adorar, el edificar la fe y el testmonio, y el tratar los asuntos del barrio.
            </p>
        </div>
        
        <form >
            
                <div className="meetingForm-header">
                    <p className="form-label">Fecha</p>
                    <input className="meetingForm-input" type="date" name="date" id="fecha" />
                    <p className="form-label">Asistencia</p>
                    <input className="meetingForm-input" type="number" name="asistencia"/>
                </div>
        
                <h2>Saludo y bienvenida</h2> 

                <button className="btn-appear">+</button>
            

                
                <div className="meetingForm-programa">
                    <input className="meetingForm-input" type="text" name="saludo" />
                    <p className="form-label">Reconocimiento</p>
                    <input className="meetingForm-input" type="text" name="reconocimiento" />
                    <p className="form-label">Preside</p>
                    <input className="meetingForm-input" type="text" name="preside" />
                    <p className="form-label">Dirige</p>
                    <input className="meetingForm-input" type="text" name="dirige" />
                    <p className="form-label">Anuncios</p>
                    <input className="meetingForm-input" type="text" name="anuncios" />
                    <p className="form-label">Director@ de himno</p>
                    <input className="meetingForm-input" type="text" name="directorHimno" />
                    <p className="form-label">Pianista</p>
                    <input className="meetingForm-input" type="text" name="pianista" />
                    <p className="form-label">Primer himno</p>
                    <input className="meetingForm-input" type="text" name="primerHimno" />
                    <p className="form-label">Primra oración</p>
                    <input className="meetingForm-input" type="text" name="primeraOracion" />
                </div>
            
        
            <div className="asuntos">
                <h2>Asuntos de Rama</h2>
                <p>Crear asunto</p>
            </div>
            <div className="asuntos">
                <h2>Asuntos de Distrito</h2>
                <p>Crear asunto</p>
            </div>

            <div className="sacramento">
                <h2>Santa Cena</h2>
                <p className="form-label">Himno sacramental</p>
                <input className="meetingForm-input" type="text" name="himnoSacramental" />
                <p className="form-label">Reparten la Santa Cena</p>
                <input className="meetingForm-input" type="text" name="repartoSantaCena" />
                <p className="form-label">Bendicen la Santa Cena</p>
                <input className="meetingForm-input" type="text" name="bendicionSantaCena" />
            </div>

            <div className="testimonios">
                <h2>Testimonios</h2>
                <p>Añadir testimonio</p>
            </div>
            <div className="mensajes">
                <h2>Mensajes</h2>
                <p className="form-label">Primer mensaje</p>
                <input className="meetingForm-input" type="text" name="primerMensaje" />
                <p className="form-label">Segundo mensaje</p>
                <input className="meetingForm-input" type="text" name="segundoMensaje" />
                <p className="form-label">Himno intermedio</p>
                <input className="meetingForm-input" type="text" name="himnoIntermedio" />
                <p className="form-label">Tercer mensaje</p>
                <input className="meetingForm-input" type="text" name="tercerMensaje" />
            </div>

            <div className="conclusion">
                <h2>Conclusión</h2>
                <p className="form-label">Himno final</p>
                <input className="meetingForm-input" type="text" name="himnoFinal" />
                <p className="form-label">Ultima oración</p>
                <input className="meetingForm-input" type="text" name="oracionFinal" />
            </div>
        
            
        </form>
    </div>
    
  )
}

export default MeetingForm