import React from 'react'

const Certifications = ({ data }) => {
  const certifications = data || []

  const renderCerts = certs => {
    return certs.map(cert => (
      <div key={cert.id} className='User-certifications-list-item'>
        {cert.icon} {cert.label}
      </div>
    ))
  }

  return (
    <div className='User-certifications'>
      Certifications:
      <div className='User-certifications-list'>
        {renderCerts(certifications)}
      </div>
    </div>
  )
}

export default Certifications
