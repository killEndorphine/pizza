import React from 'react'
import ContentLoader from 'react-content-loader'
import classes from './PizzaItemSkeleton.module.scss'

const PizzaItemSkeleton = (props) => (
  <ContentLoader
    className={classes.pizzaItemSkeleton}
    speed={2}
    width={600}
    height={710}
    viewBox="0 0 600 710"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="301" cy="286" r="279" />
    <rect x="120" y="579" rx="0" ry="0" width="350" height="40" />
    <rect x="191" y="628" rx="0" ry="0" width="210" height="35" />
    <rect x="191" y="673" rx="0" ry="0" width="210" height="35" />
  </ContentLoader>
)

export default PizzaItemSkeleton
