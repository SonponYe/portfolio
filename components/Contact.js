import SectionWrapper from './SectionWrapper'
export default function Contact(){
  const businessCard = {
    name: 'Sonpon Ye-shua Chief',
    role: 'Full stack developer',
    tag: 'end-to-end code alchemist',
    phone: '+233537460511',
    email: 'sonponyeshua@gmail.com',
    github: 'https://github.com/SonponYe-shuaChief',
    linkedin: 'https://www.linkedin.com/in/ye-shua-sonpon',
    figma: 'https://www.figma.com/design/MHyWNFmcRCuaquKlXWJH1O/Untitled',
   
  }

  const lines = Object.entries(businessCard)

  return (
    <SectionWrapper id="contact">
      <div className="px-1">
        <h2 className="section-title text-xl sm:text-2xl">Reach Out</h2>

        <div className="json-card mt-5">
          <div className="json-card-head">business-card.json</div>

          <div className="json-card-body">
            <div className="json-photo-wrap">
              <img src="/picture.png" alt="Sonpon profile" className="json-photo" />
            </div>

            <div className="json-object" role="presentation">
              <div className="json-line">{'{'}</div>
              {lines.map(([key, value], index) => (
                <div className="json-line" key={key}>
                  <span className="json-key">  "{key}"</span>
                  <span className="json-punc">: </span>
                  <span className="json-value">"{value}"</span>
                  <span className="json-punc">{index < lines.length - 1 ? ',' : ''}</span>
                </div>
              ))}
              <div className="json-line">{'}'}</div>
            </div>
          </div>

          <div className="json-card-actions">
            <a href="/sonpon-business-card.json" download className="json-download-btn">
              Download JSON card
            </a>
            <a href="mailto:sonponyeshua@gmail.com" className="json-inline-link">Email</a>
            <a href="tel:+233537460511" className="json-inline-link">Call</a>
            <a href="https://www.linkedin.com/in/ye-shua-sonpon" target="_blank" rel="noreferrer" className="json-inline-link">LinkedIn</a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
