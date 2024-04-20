export const ResourceList = ({ resources }) => {
  return (
    <div key={resources.id}>
      <h1>{resources.name}</h1>
      <p>{resources.description}</p>
      <p>{resources.population}</p>
      <p>{resources.languages}</p>
      <p>{resources.timeZone}</p>
      <p>{resources.currency}</p>
      <p>{resources.region}</p>
      <div>
        <h3>Limita con los paises de:</h3>
        {resources.borders.map((border) => {
          return (
            <>
              <p key={border.name}>{border}</p>
            </>
          )
        })}
      </div>
    </div>
  );
}
