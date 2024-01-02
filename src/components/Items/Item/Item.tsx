import  { FC } from 'react'
import { IItemData } from '../../../interfaces/IItemData'
import styles from './Item.module.css'
export const Item: FC<IItemData> = ({attributes}) => {
  return (
    <div className={styles.item}>
        <h4 className={styles.title}>{attributes.title}</h4>
        <p className={styles.subtitle}>{attributes.subtitle}</p>
        <p>$ {attributes.price}</p>
        <img src={attributes.img} className={styles.img}/>
    </div>
  )
}
