function CertificationsSection() {
  const logos = [
    "/images/certifications/1.png",
    "/images/certifications/3-1.png",
    "/images/certifications/6 (1).png",
    "/images/certifications/5-1.png",
    "/images/certifications/4-1.png",
    "/images/certifications/2-1.png"
    
  ]

  return (
    <section className="cert-section">
      <div className="container text-center">

        <h4 className="cert-title">
          Certifications et reconnaissances de confiance
        </h4>

        <div className="cert-logos">
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt="certification" />
          ))}
        </div>

      </div>
    </section>
  )
}

export default CertificationsSection
