import Layout from '../components/Layout'

export default function Servicos(){
    return (
        <Layout>
            <section>
                <h1 className="section-title">Serviços</h1>
                <p className="muted">Escolha o serviço ideal para o seu momento. Todos incluem suporte e otimizações essenciais.</p>
                <div className="pricing" style={{marginTop:16}}>
                    <div className="card">
                        <h3 style={{marginTop:0, fontSize: '1.5rem', fontWeight: 'bold'}}>Landing page</h3>
                        <p>
                        Uma landing page, ou página de captura, é projetada com um objetivo específico de converter visitantes em leads ou clientes. É uma página única, direta e focada, usada em campanhas de marketing para promover um produto, serviço, eventos, aumentar conversão ou ação específica.
                        </p>
                        <a className="btn" style={{marginTop:18}} href="/#contato">Solicitar proposta</a>
                    </div>
                    <div className="card">
                        <h3 style={{marginTop:0, fontSize: '1.5rem', fontWeight: 'bold'}}>Website</h3>
                        <p>
                        Um website é o cartão de visitas digital da sua empresa. Ele reúne informações essenciais sobre seu negócio, como serviços, produtos, história, valores e formas de contato. Um site bem projetado é a base para fortalecer sua presença online, oferecendo uma experiência completa ao visitante.
                        </p>
                        <a className="btn" href="/#contato">Solicitar proposta</a>
                    </div>
                    <div className="card">
                        <h3 style={{marginTop:0, fontSize: '1.5rem', fontWeight: 'bold'}}>E-commerce</h3>
                        <p>
                        O e-commerce é uma loja virtual que permite a venda de produtos ou serviços pela internet. Ele oferece uma experiência completa de compra online. Permite alcançar clientes em qualquer lugar, oferecendo conveniência e praticidade para os consumidores.
                        </p>
                        <a className="btn" style={{marginTop:18}} href="/#contato">Solicitar proposta</a>
                    </div>
                </div>
            </section>
        </Layout>
    )
}


