import Link from 'next/link'

const Index = () => {
  return (
    <div>
      <h1>Hello world!</h1>
      <Link href="/about">
        <a>Sobre</a>
      </Link>
      <br></br>
      <Link href="/category/services">
        <a>Serviços</a>
      </Link>
    </div>
  )
}

export default Index