// Write your code here.
const UserProfile = props => {
  const {bannerCard} = props
  const {headerText, description, className} = bannerCard
  return (
    <div className={className}>
      <h1>{headerText}</h1>
      <p>{description}</p>
      <button>show more</button>
    </div>
  )
}
export default UserProfile
