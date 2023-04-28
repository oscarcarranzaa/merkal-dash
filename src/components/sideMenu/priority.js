export default function Priority(enterprises) {
  return (
    <>
      <div>
        {enterprises.enterprises.map((item) => {
          return (
            <div key={item.username}>
              <p>{item.name}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}
