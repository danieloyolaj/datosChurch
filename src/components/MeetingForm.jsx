
const MeetingForm = () => {

    const handleSubmit = (e) => {
        e.precentDefault()
    }

  return (
    <div className="meetingForm-container">
        <form onSubmit={handleSubmit}>
            <div className="meetingForm-header">
                <p className="form-label">Fecha</p>
                <input type="date" name="date" id="fecha" />
                <p className="form-label">Asistencia</p>
                <input type="number" name="asistencia"/>

                <p>
                    <strong>Propósito de la reunión Sacramental:</strong><br /><br />
                    Recordar a Jesucristo al tomar la Santa Cena. En esta ordenanza, los miembros de la Iglesia renuevan el convenio de tomar sobre sí el nombre del Salvador, de recordarlo siempre y de guardar Sus mandamientos. Otros propósitos incluyen el adorar, el edificar la fe y el testmonio, y el tratar los asuntos del barrio.
                </p>
            </div>
            <div className="meetingForm-programa">
                <p className="form-label">Saludo y bienvenida</p>
                <input type="text" name="saludo" />
                <p className="form-label">Reconocimiento</p>
                <input type="text" name="reconocimiento" />
                <p className="form-label">Preside</p>
                <input type="text" name="preside" />
                <p className="form-label">Dirige</p>
                <input type="text" name="dirige" />
                <p className="form-label">Anuncios</p>
                <input type="text" name="anuncios" />
                <p className="form-label">Director@ de himno</p>
                <input type="text" name="directorHimno" />
                <p className="form-label">Pianista</p>
                <input type="text" name="pianista" />
                <p className="form-label">Primer himno</p>
                <input type="text" name="primerHimno" />
                <p className="form-label">Primra oración</p>
                <input type="text" name="primeraOracion" />
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
                <input type="text" name="himnoSacramental" />
                <p className="form-label">Reparten la Santa Cena</p>
                <input type="text" name="repartoSantaCena" />
                <p className="form-label">Bendicen la Santa Cena</p>
                <input type="text" name="bendicionSantaCena" />
            </div>

            <div className="testimonios">
                <h2>Testimonios</h2>
                <p>Añadir testimonio</p>
            </div>
            <div className="mensajes">
                <h2>Mensajes</h2>
                <p className="form-label">Primer mensaje</p>
                <input type="text" name="primerMensaje" />
                <p className="form-label">Segundo mensaje</p>
                <input type="text" name="segundoMensaje" />
                <p className="form-label">Himno intermedio</p>
                <input type="text" name="himnoIntermedio" />
                <p className="form-label">Tercer mensaje</p>
                <input type="text" name="tercerMensaje" />
            </div>

            <div className="conclusion">
                <hr />
                <p className="form-label">Himno final</p>
                <input type="text" name="himnoFinal" />
                <p className="form-label">Ultima oración</p>
                <input type="text" name="oracionFinal" />
            </div>
        </form>
    </div>
  )
}

export default MeetingForm