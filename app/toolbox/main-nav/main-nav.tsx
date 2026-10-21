import Link from 'next/link';
import './style.css'

export default function Nav() {
  return (
    <header>
      <div className="wrapper">
        <div className="container">
          <ul className='main-nav'>
            <li><Link href={`/`}>cjwhitedev<span>/</span></Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
}