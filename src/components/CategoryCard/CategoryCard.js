import React from 'react'
import * as styles from './CategoryCard.module.scss'

export default function CategoryCard({name,count,link}) {
  return (
    <div className={styles.wrapper}>
        <a href={link}>
            <h3>{name}</h3>
            <h3 className={styles.count}>({count})</h3>
        </a>
    </div>
  )
}
