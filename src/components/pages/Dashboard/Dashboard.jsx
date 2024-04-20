import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fetchDepartments, fetchTouristicAttractions, fetchResources, filterDepartments } from "../../../store/actions/fetchResources"
import { Button } from '../../common/Button/Button'
import { ErrorBoundary } from '../../common/ErrorBoundary/ErrorBoundary'
import { Input } from '../../common/Input/Input'
import { ResourceList } from "../../common/ResourceList/ResourceList"
import styles from './Dashboard.module.css'

export const Dashboard = () => {
  const dispatch = useDispatch()

  const { departments } = useSelector((state) => state.departments)
  const [page, setPage] = useState(1)
  const [filterValue, setFilterValue] = useState('')

  console.log('departamentos', departments)
  const { loading, error, resources } = useSelector((state) => state.resources)
  console.log('resources', resources)


  useEffect(() => {
    dispatch(fetchDepartments(page))
    dispatch(fetchTouristicAttractions())
    dispatch(fetchResources())
  }, [dispatch, page])

  const loadDepartments = (page) => {
    dispatch(fetchDepartments(page));
  };

  const filterDepartmentsByName = (name) => {
    dispatch(filterDepartments(name));
  };

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
    if (e.target.value.trim() !== '') {
      filterDepartmentsByName(e.target.value);
    } else {
      dispatch(fetchDepartments(page));
    }
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    loadDepartments(newPage);
  };


  if (loading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    return <h2>Error: {error}</h2>
  }

  if (!departments || !resources) {
    return <h2>Loading...</h2>;
  }


  return (
    <ErrorBoundary>
      <div className={styles.dashboardContainer}>
        <div>
          <div className={styles.section}>
            <h2>Departments</h2>
            <div>
              <Input
                type="text"
                placeholder="Filtrar departamentos"
                value={filterValue}
                onChange={handleFilterChange}
              />
              <div>
                {departments?.data?.map((department) => (
                  <details key={department.id}>
                    <summary>
                      {department.name}
                    </summary>
                    <p>{department.description}</p>
                  </details>
                ))}
              </div>
              <div className={styles.pagination}>
                <Button
                  onClick={() => handlePageChange(page - 1)}
                  disabled={page === 1}
                  text={'Anterior'}
                >
                </Button>
                <Button
                  text={'Siguiente'}
                  onClick={() => handlePageChange(page + 1)}
                ></Button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <ResourceList key={resources.id} resources={resources} />
        </div>
      </div>
    </ErrorBoundary>
  );
}
