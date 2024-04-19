import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
// import { ResourceList } from "../../common/ResourceList/ResourceList"
import { fetchDepartments, fetchResources, fetchTouristicAttractions } from "../../../store/actions/fetchResources"
import { ErrorBoundary } from '../../common/ErrorBoundary/ErrorBoundary'

export const Dashboard = () => {
  const { departments } = useSelector((state) => state.departments)
  console.log('departamentos', departments)
  const { touristicAttractions } = useSelector((state) => state.touristicAttractions)
  console.log('touristicAttractions', touristicAttractions)
  const { loading, error, resources } = useSelector((state) => state.resources)
  console.log('resources', resources)

  const dispatch = useDispatch()

  useEffect(() => {
    // dispatch(fetchResources())
    dispatch(fetchTouristicAttractions())
    dispatch(fetchDepartments())
    dispatch(fetchResources())
  }, [dispatch])

  if (loading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    return <h2>Error: {error}</h2>
  }

  if (!departments || !touristicAttractions || !resources) {
    return <h2>Loading...</h2>;
  }
  

  return (
    <ErrorBoundary>
      <h2>Dashboard</h2>

      <h2>Departments</h2>
      <div>
        <p>Name: {departments.name}</p>
        <p>Description: {departments.description}</p>
        {/* Mostrar otras propiedades según sea necesario */}
      </div>

      <h2>Touristic Attractions</h2>
        <ul>
          {touristicAttractions.map((attraction) => (
            <li key={attraction.id}>{attraction.name}</li>
          ))}
        </ul>

      <h2>Resources</h2>
      {Object.keys(resources).length === 0 && <p>No resources found.</p>}
      {Object.keys(resources).length > 0 && (
        <div>
          <p>Name: {resources.name}</p>
          <p>Description: {resources.description}</p>
          {/* Mostrar otras propiedades según sea necesario */}
        </div>
      )}

      {/* <ResourceList resources={resources} />  */}  {/* Uncomment if you have a ResourceList component */}
    </ErrorBoundary>
  )
}
