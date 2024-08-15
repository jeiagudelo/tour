function ReservaPage() {
    return (
        <div className="reserva-container">
            <h2 className="reserva-title">Reserva tu Viaje</h2>
            <form className="reserva-form" action="#" method="POST">
                <label className="reserva-label" htmlFor="name">Nombre Completo</label>
                <input className="reserva-input" type="text" id="name" name="name" placeholder="Tu nombre completo" />

                <label className="reserva-label" htmlFor="email">Correo Electrónico</label>
                <input className="reserva-input" type="email" id="email" name="email" placeholder="Tu correo electrónico" />

                <label className="reserva-label" htmlFor="date">Fecha del Viaje</label>
                <input className="reserva-input" type="date" id="date" name="date" />

                <label className="reserva-label" htmlFor="destination">Destino</label>
                <select className="reserva-select" id="destination" name="destination">
                    <option value="">Selecciona un destino</option>
                    <option value="montaña">Montaña</option>
                    <option value="playa">Playa</option>
                    <option value="ciudad">Ciudad</option>
                    <option value="desierto">Desierto</option>
                </select>

                <label className="reserva-label" htmlFor="people">Número de Personas</label>
                <input className="reserva-input" type="number" id="people" name="people" min="1" placeholder="Número de personas" />

                <label className="reserva-label" htmlFor="comments">Comentarios Adicionales</label>
                <textarea className="reserva-textarea" id="comments" name="comments" rows="4" placeholder="Escribe tus comentarios aquí..."></textarea>

                <input className="reserva-submit" type="submit" value="Reservar Ahora" />
            </form>
        </div>
    );
}

export default ReservaPage;
