export default function Home() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1 style={{
        fontSize: '3rem',
        marginBottom: '1rem',
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
      }}>
        Rainforest
      </h1>
      <p style={{
        fontSize: '1.25rem',
        opacity: 0.9,
        maxWidth: '600px'
      }}>
        Welcome to Rainforest. Your site is now live.
      </p>
    </main>
  )
}
