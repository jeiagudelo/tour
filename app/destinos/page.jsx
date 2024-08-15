function DestinosPage() {
    return (
        <div className="destinos-page-container">
            <div className="header">
                <h1>Destinos Turísticos</h1>
                <p>Explora nuestros destinos más populares</p>
            </div>

            <div className="destinations-container">
                <div className="destination-card">
                    <img src="/imagen/playa.jpg" alt="Playa Paraíso" className="destination-image" />
                    <div className="destination-content">
                        <h3>Playa Paraíso</h3>
                        <p>Disfruta de las arenas blancas y aguas cristalinas en este hermoso destino tropical.</p>
                    </div>
                </div>

                <div className="destination-card">
                    <img src="/imagen/caminata.jpg" alt="Montañas Mágicas" className="destination-image" />
                    <div className="destination-content">
                        <h3>Montañas Mágicas</h3>
                        <p>Escápate a las alturas y explora paisajes impresionantes en un ambiente sereno.</p>
                    </div>
                </div>

                <div className="destination-card">
                    <img src="/imagen/ciudad.jpg" alt="Ciudad Histórica" className="destination-image" />
                    <div className="destination-content">
                        <h3>Ciudad Histórica</h3>
                        <p>Sumérgete en la rica historia y cultura de esta fascinante ciudad antigua.</p>
                    </div>
                </div>

                <div className="destination-card">
                    <img src="/imagen/selva.avif" alt="Selva Misteriosa" className="destination-image" />
                    <div className="destination-content">
                        <h3>Selva Misteriosa</h3>
                        <p>Adéntrate en la selva y descubre la increíble biodiversidad que ofrece este destino.</p>
                    </div>
                </div>

                <div className="destination-card">
                    <img src="/imagen/desierto.avif" alt="Desierto Dorado" className="destination-image" />
                    <div className="destination-content">
                        <h3>Desierto Dorado</h3>
                        <p>Explora las vastas dunas y vive la experiencia única del desierto.</p>
                    </div>
                </div>

                <div className="destination-card">
                    <img src="/imagen/isla.jpg" alt="Isla Escondida" className="destination-image" />
                    <div className="destination-content">
                        <h3>Isla Escondida</h3>
                        <p>Relájate en esta isla secreta, lejos del bullicio y rodeada de naturaleza.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DestinosPage;
