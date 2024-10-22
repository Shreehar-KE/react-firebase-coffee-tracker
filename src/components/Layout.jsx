export default function Layout(props) {

  const { children } = props

  const header = (
    <header>
      <div>
        <h1 className="text-gradient">CAFFIEND</h1>
        <p>For Coffee Insatiates</p>
      </div>
      <button>
        <p>Sign up</p>
        <i className="fa-solid fa-mug-hot"></i>
      </button>
    </header>
  )

  const footer = (
    <footer>
      <p>
        <span className="text-gradient">Caffiend</span> was made by <a target="_blank" href="https://shreehar-ke.github.io/">Shreehar KE</a>
        <br />Check out the project on <a target="_black" href="https://github.com/Shreehar-KE/react-caffiend">GitHub</a>!</p>
    </footer>
  )

  return (
    <>
      {header}
      <main>
        {children}
      </main>
      {footer}
    </>
  )
}
