

const Rating = ({item}) => {

    const {name, details, rating} = item

  return (
    <div className="p-5 rounded-lg border border-yellow-600">
      <p>{rating}</p>
      <h1 className="text-2xl font-bold my-2">{name}</h1>
      <p className="text-justify">{details}</p>
    </div>
  )
}

export default Rating
