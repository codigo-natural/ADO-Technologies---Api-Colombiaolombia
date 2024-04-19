export const ResourceList = ({ resources }) => {
  return (
    <ul>
      {resources.map((resource) => {
        <li key={resource.id}>{}</li>
      })}
    </ul>
  )
}
