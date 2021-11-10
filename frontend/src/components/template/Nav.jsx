import './Nav.css'
import React from 'react'
import NavItem from './NavItem.jsx'

export default props =>
    <aside className="menu-area">
            <nav className="menu">
                    <NavItem icon="fa fa-home" path="/" name="Início" />
                    <NavItem icon="fa fa-users" path="/users" name="Usuários" />
            </nav>
    </aside>