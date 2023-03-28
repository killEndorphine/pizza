import React from 'react'
import ContentLoader from 'react-content-loader'

const PizzaSkeleton = (props) => (
  <ContentLoader
    className="pizza-item"
    speed={2}
    width={278}
    height={472}
    viewBox="0 0 278 472"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="130" cy="130" r="125" />
    <rect x="20" y="275" rx="0" ry="0" width="230" height="30" />
    <rect x="5" y="317" rx="0" ry="0" width="280" height="105" />
    <rect x="5" y="430" rx="0" ry="0" width="85" height="40" />
    <rect x="145" y="430" rx="0" ry="0" width="130" height="47" />
  </ContentLoader>
)

export default PizzaSkeleton
