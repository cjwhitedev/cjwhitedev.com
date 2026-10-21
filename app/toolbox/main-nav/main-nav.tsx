import Link from 'next/link';
import Image from 'next/image';
import './style.css'

export default function Nav() {
  return (
    <header className='t-dark'>
      <div className="wrapper">
        <div className="container">
          <div className='main-nav-logo'>
            <Link href={`/`}>
                <Image
                  src="/media/logo-light.svg"
                  width={195}
                  height={45}
                  alt="CJ White DEV"
                />
            </Link>
          </div>
          <div className='main-container'>
            <button className='nav-controller'><span></span></button>
            <div className='nav-container'>
              <ul className='main-nav'>
                <li><Link href={`/`}>portfolio</Link></li>
                <li><Link href={`/`}>github</Link></li>
                <li><Link href={`/`}>resume</Link></li>
                <li><Link href={`/`}>contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}