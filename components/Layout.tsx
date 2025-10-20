import Link from 'next/link'
import { ReactNode } from 'react'
import Image from 'next/image'

type LayoutProps = { children: ReactNode }

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <header className="site-header">
                <div className="container nav">
                    <div className="brand">
                        <Image src="/logo.png" alt="Fronsite" width={60} height={60} />
                        <Image src="/nome.png" alt="Fronsite" width={120} height={30} />
                    </div>
                    <nav className="nav-menu" aria-label="Principal">
                        <Link href="/">Início</Link>
                        <Link href="/servicos">Serviços</Link>
                        <a href="/#contato">Contato</a>
                    </nav>
                </div>
            </header>
            <main className="container">
                {children}
            </main>
            <footer className="site-footer">
                <div className="container">© {new Date().getFullYear()} Fronsite. Todos os direitos reservados.</div>
            </footer>
        </>
    )
}


