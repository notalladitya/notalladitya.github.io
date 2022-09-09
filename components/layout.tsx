import { ReactNode } from 'react';
import Link from 'next/link'
import styles from '../styles/layout.module.scss'
// TODO: Add Responsive for mobile design
export default function Layout({ children }: { children: ReactNode }) {
    const navItems = [{ name: 'Home', href: '/' }, { name: 'About', href: '/about' }, { name: 'Projects', href: '/projects' }, { name: 'Blog', href: '/blog' }, { name: 'Contact', href: '/contact' }]
    return (
        <div className='container justify-between items-center mx-auto'>
            {/* <header>
                <nav>
                    <div className='container flex flex-wrap justify-between items-center mx-auto'>
                        <a href="/"><span>Aditya Sharma</span></a>
                        <ul className='flex flex-row'>
                            {navItems.map((item, index) => <li key={index} className='p-3 m-1 mt-3 newMorph'><Link href={item.href}><a>{item.name}</a></Link></li>)}
                        </ul>
                    </div>
                </nav>
            </header> */}
            <main>
                {children}
            </main>
            <footer className={`h-20 w-full left-0 right-0 bottom-0 top-auto fixed z-50 p-20 pt-0 ${styles.footerAnimate}`}>
                <nav className='bg-gray-400 flex w-fit mx-auto rounded-full p-1'>
                    {navItems.map((item, index) =>
                        <Link key={index} href={item.href}>
                            <a className='rounded-3xl bg-gray-900 text-white p-3 mx-1 first:ml-0 last:mr-0'>{item.name}</a>
                        </Link>
                    )}
                </nav>
            </footer>
        </div>
    )
}