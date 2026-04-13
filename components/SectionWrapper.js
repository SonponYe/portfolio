import { motion } from 'framer-motion'

export default function SectionWrapper({ id, children }){
  return (
    <section id={id} className="section-divider py-12 md:py-20">
      <div className="container-wide">
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.75 }}>
          {children}
        </motion.div>
      </div>
    </section>
  )
}
