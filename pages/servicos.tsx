import Layout from '../components/Layout'

export default function Servicos(){
    return (
        <Layout>
            <section>
                <h1 className="section-title">Planos e Serviços</h1>
                <p className="muted">Escolha o plano ideal para o seu momento. Todos incluem suporte e otimizações essenciais.</p>
                <div className="pricing" style={{marginTop:16}}>
                    <div className="card">
                        <h3 style={{marginTop:0}}>Essencial</h3>
                        <div className="price">R$ 1.490</div>
                        <ul>
                            <li>Landing page 1 seção</li>
                            <li>Design responsivo</li>
                            <li>SEO básico</li>
                            <li>Formulário de contato</li>
                        </ul>
                        <a className="btn" href="/">Começar</a>
                    </div>
                    <div className="card">
                        <h3 style={{marginTop:0}}>Profissional</h3>
                        <div className="price">R$ 3.490</div>
                        <ul>
                            <li>Site até 5 páginas</li>
                            <li>Blog/Noticias</li>
                            <li>Otimização Core Web Vitals</li>
                            <li>Integrações (Analytics, Pixel)</li>
                        </ul>
                        <a className="btn" href="#contato">Solicitar proposta</a>
                    </div>
                    <div className="card">
                        <h3 style={{marginTop:0}}>Empresarial</h3>
                        <div className="price">Sob consulta</div>
                        <ul>
                            <li>Projeto sob medida</li>
                            <li>Arquitetura e performance</li>
                            <li>Design System</li>
                            <li>Suporte dedicado</li>
                        </ul>
                        <a className="btn" href="#contato">Falar com especialista</a>
                    </div>
                </div>
            </section>
        </Layout>
    )
}


