import { FC, PropsWithChildren } from 'react'
import style from './Layout.module.css'

const Layout: FC<PropsWithChildren> = ({children}) => {
  return (
    <div className={style.layout}>
      <div className={style.content}>
        {children}
      </div>
    </div>
  )
}

export default Layout;
