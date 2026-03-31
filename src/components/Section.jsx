function Section({ id, title, className = '', children }) {
  return (
    <section id={id} className={`scroll-mt-24 py-16 md:py-24 ${className}`}>
      {title && (
        <h2 className="text-primary mb-8 text-3xl font-semibold tracking-tight md:text-4xl">
          {title}
        </h2>
      )}
      {children}
    </section>
  )
}

export default Section
