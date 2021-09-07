import { FunctionalComponent, h } from 'preact'
import { Link } from 'preact-router/match'

export const Header: FunctionalComponent = () => {
  return (
    <header class='pos-fixed top-0 w-100% h-15 padding-0 bg-purple-700 z-index-50'>
      <h1 class='text-white font-size-10'>StJohn3D</h1>
      <nav class='float-right'>
        <Link activeClassName='bg-black' href='/'>
          Home
        </Link>
        <Link activeClassName='bg-black' href='/profile'>
          Me
        </Link>
        <Link activeClassName='bg-black' href='/profile/john'>
          John
        </Link>
      </nav>
    </header>
  )
}

export default Header
