import React from 'react'
import data from './data.js'
import MenuList from './menu-list.jsx'
import './styles.css'
function TreeView({menus = []}) {

  return (
    <div className="tree-view-container">
      <MenuList list={menus} />
    </div>
  )
}

export default TreeView
