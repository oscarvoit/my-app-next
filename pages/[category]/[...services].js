import { useRouter} from 'next/router'

const Services = () => {
  const router = useRouter()

  console.log(router)

  return (
    <div>
     <h1>Serviços</h1>
     <h2>{ router.query.category } / { router.query.services}</h2>
    </div>

  )
}

export default Services