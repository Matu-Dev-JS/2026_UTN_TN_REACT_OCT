import { useUsuarios } from "../../hooks/useUsuarios"



/* Los componentes tienen la responsabilidad de RENDERIZAR */
export default function Usuarios() {

  const {loading, response} = useUsuarios()

  console.log({response, loading})




  return (
    <div>
      <h1>Hola mundo</h1>
      {
        loading || !response
        ? <span>Cargando...</span>
        : <div>
          {
            response.length === 0
            ? <span>Lista vacia</span>
            : <div>
              {response.map((user) => {
                return (
                  <div key={user.id}>
                    <span>ID: #{user.id}</span>
                    <h2>Nombre: {user.name}</h2>
                    <span>Email: {user.email}</span>
                    <hr/>
                  </div>
                )
              })}
            </div>
          }
        </div>
      }
    </div>
  )
}