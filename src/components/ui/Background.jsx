const Background = () => {
  return (
    <>
      <div className="background-system" aria-hidden="true">
        <div className="background-grid" />

        <div className="ambient-orb ambient-orb-one" />
        <div className="ambient-orb ambient-orb-two" />
        <div className="ambient-orb ambient-orb-three" />
      </div>

      <div className="noise-overlay" aria-hidden="true" />
    </>
  )
}

export default Background