import useMenuStore from '@/store/menuStore'
import React from 'react'

export const Test2 = () => {
  const { currentMenu } = useMenuStore()
  return <div>data: {currentMenu ? currentMenu : '-'}</div>;
}
