function GoogleMapSection({ mapUrl }) {
  return (
    <section className="map-section">
      <div className="container-fluid px-0">

        <div className="map-wrapper">
          <iframe
            src={mapUrl}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>

      </div>
    </section>
  )
}

export default GoogleMapSection