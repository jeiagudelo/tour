function NosotrosPage() {
    return (
        <div className="about-us-container">
            <header className="about-us-header">
                <h1>Sobre Nosotros</h1>
                <p>Tu compañero de viaje hacia experiencias inolvidables</p>
            </header>

            <section className="about-us-content">
                <h2>Nuestra Misión</h2>
                <p>En ExploraMundo, creemos que viajar no es solo visitar nuevos lugares, sino también conectar con la cultura, la naturaleza y la gente que hace cada destino único. Nuestra misión es ofrecer a nuestros clientes experiencias de viaje memorables, cuidadosamente diseñadas para satisfacer sus necesidades y deseos específicos.</p>

                <h2>Nuestra Historia</h2>
                <p>Nacimos de la pasión por explorar el mundo y compartir esa pasión con otros. Desde nuestros humildes comienzos como una pequeña agencia local, hemos crecido para convertirnos en un líder en la industria de viajes, siempre manteniendo nuestro compromiso de ofrecer un servicio personalizado y de alta calidad.</p>

                <h2>Por Qué Elegirnos</h2>
                <p>Ofrecemos una amplia gama de tours y experiencias diseñadas para todo tipo de viajeros. Desde aventuras llenas de adrenalina hasta escapadas relajantes, nuestro equipo de expertos se asegura de que cada detalle esté perfectamente planeado. Nos enorgullecemos de nuestra capacidad para crear itinerarios únicos que reflejan los intereses de nuestros clientes.</p>
            </section>

            <section className="team-section">
                <h2>Conoce a Nuestro Equipo</h2>

                <div className="team-member">
                    <div>
                        <h3>Ana García</h3>
                        <p>Fundadora y CEO</p>
                    </div>
                </div>

                <div className="team-member">
                    <div>
                        <h3>Carlos López</h3>
                        <p>Director de Operaciones</p>
                    </div>
                </div>

                <div className="team-member">
                    <div>
                        <h3>Laura Martínez</h3>
                        <p>Experta en Destinos</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default NosotrosPage;
