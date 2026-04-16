import SectionWrapper from './SectionWrapper'
export default function Contact(){
  const businessCard = {
    name: 'Sonpon Ye-shua Chief',
    role: 'Full stack developer',
    tag: 'End-to-End code alchemist',
    phone: '+233537460511',
    email: 'sonponyeshua@gmail.com',
    github: 'https://github.com/SonponYe-shuaChief',
    linkedin: 'https://www.linkedin.com/in/ye-shua-sonpon',
    figma: 'https://www.figma.com/design/MHyWNFmcRCuaquKlXWJH1O/Untitled',
   
  }

  const lines = Object.entries(businessCard)

  const drawRoundedRect = (ctx, x, y, width, height, radius) => {
    ctx.beginPath()
    ctx.moveTo(x + radius, y)
    ctx.lineTo(x + width - radius, y)
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius)
    ctx.lineTo(x + width, y + height - radius)
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height)
    ctx.lineTo(x + radius, y + height)
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius)
    ctx.lineTo(x, y + radius)
    ctx.quadraticCurveTo(x, y, x + radius, y)
    ctx.closePath()
  }

  const loadImage = (src) =>
    new Promise((resolve, reject) => {
      const image = new Image()
      image.crossOrigin = 'anonymous'
      image.onload = () => resolve(image)
      image.onerror = reject
      image.src = src
    })

  const handleDownloadPng = async () => {
    try {
      const width = 1080
      const height = 1350
      const cardX = 72
      const cardY = 72
      const cardW = width - cardX * 2
      const cardH = height - cardY * 2

      const canvas = document.createElement('canvas')
      canvas.width = width
      canvas.height = height
      const ctx = canvas.getContext('2d')
      if(!ctx) return

      const bgGradient = ctx.createLinearGradient(0, 0, 0, height)
      bgGradient.addColorStop(0, '#fdfefe')
      bgGradient.addColorStop(1, '#f2f8f5')
      ctx.fillStyle = bgGradient
      ctx.fillRect(0, 0, width, height)

      const glowGradient = ctx.createRadialGradient(width * 0.18, 120, 40, width * 0.18, 120, 560)
      glowGradient.addColorStop(0, 'rgba(44, 174, 125, 0.14)')
      glowGradient.addColorStop(1, 'rgba(44, 174, 125, 0)')
      ctx.fillStyle = glowGradient
      ctx.fillRect(0, 0, width, height)

      drawRoundedRect(ctx, cardX, cardY, cardW, cardH, 28)
      ctx.fillStyle = '#ffffff'
      ctx.fill()
      ctx.lineWidth = 2
      ctx.strokeStyle = 'rgba(22, 108, 76, 0.28)'
      ctx.stroke()

      ctx.fillStyle = 'rgba(232, 248, 240, 0.88)'
      ctx.fillRect(cardX, cardY, cardW, 90)
      ctx.strokeStyle = 'rgba(22, 108, 76, 0.18)'
      ctx.beginPath()
      ctx.moveTo(cardX, cardY + 90)
      ctx.lineTo(cardX + cardW, cardY + 90)
      ctx.stroke()

      ctx.fillStyle = '#137553'
      ctx.font = '600 34px "IBM Plex Mono", monospace'
      ctx.fillText('business-card.json', cardX + 34, cardY + 58)

      const photoSize = 164
      const photoX = cardX + 38
      const photoY = cardY + 124
      const photo = await loadImage('/picture.png')
      drawRoundedRect(ctx, photoX, photoY, photoSize, photoSize, 20)
      ctx.save()
      ctx.clip()
      ctx.drawImage(photo, photoX, photoY, photoSize, photoSize)
      ctx.restore()
      ctx.lineWidth = 2
      ctx.strokeStyle = 'rgba(22, 108, 76, 0.2)'
      drawRoundedRect(ctx, photoX, photoY, photoSize, photoSize, 20)
      ctx.stroke()

      const objectX = photoX + photoSize + 42
      let lineY = photoY + 8
      const lineHeight = 56
      const endY = cardY + cardH - 66

      ctx.font = '500 30px "IBM Plex Mono", monospace'
      ctx.fillStyle = '#2f8e69'
      ctx.fillText('{', objectX, lineY)
      lineY += lineHeight

      lines.forEach(([key, value], index) => {
        if(lineY > endY) return
        const suffix = index < lines.length - 1 ? ',' : ''
        ctx.fillStyle = '#137553'
        ctx.fillText(`  "${key}"`, objectX, lineY)
        const keyWidth = ctx.measureText(`  "${key}"`).width

        ctx.fillStyle = '#2f8e69'
        ctx.fillText(': ', objectX + keyWidth, lineY)
        const puncWidth = ctx.measureText(': ').width

        ctx.fillStyle = '#776617'
        ctx.fillText(`"${value}"`, objectX + keyWidth + puncWidth, lineY)
        const valueWidth = ctx.measureText(`"${value}"`).width

        ctx.fillStyle = '#2f8e69'
        ctx.fillText(suffix, objectX + keyWidth + puncWidth + valueWidth, lineY)

        lineY += lineHeight
      })

      if(lineY <= endY){
        ctx.fillStyle = '#2f8e69'
        ctx.fillText('}', objectX, lineY)
      }

      const link = document.createElement('a')
      link.href = canvas.toDataURL('image/png')
      link.download = 'sonpon-business-card.png'
      link.click()
    } catch (error) {
      console.error('PNG card export failed', error)
    }
  }

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
            <button type="button" onClick={handleDownloadPng} className="json-inline-link">
              Download PNG card
            </button>
            <a href="mailto:sonponyeshua@gmail.com" className="json-inline-link">Email</a>
            <a href="tel:+233537460511" className="json-inline-link">Call</a>
            <a href="https://www.linkedin.com/in/ye-shua-sonpon" target="_blank" rel="noreferrer" className="json-inline-link">LinkedIn</a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
