

const EarthquakeInfo = ({info}) => {
 console.log(info._id)
  return (
    <>
    <p>{info.generalInfo}</p>
    </>
  )
}

export default EarthquakeInfo;