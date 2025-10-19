import Layout from '../components/Layout'
import ContactForm from '../components/ContactForm'

export default function Home(){
    return(
        <Layout>
            <section className="hero">
                <div className="hero-grid">
                    <div>
                        <h1>Transforme sua presença digital com a Fronsite</h1>
                        <p className="lead">Sites rápidos, acessíveis e bonitos. Construímos experiências digitais que convertem e crescem com o seu negócio.</p>
                        <div className="cta-row">
                            <a className="btn" href="#contato">Solicitar orçamento</a>
                            <a className="btn secondary" href="/servicos">Ver serviços</a>
                        </div>
                    </div>
                    <div className="card">
                        <h3 style={{marginTop:0}}>Destaque de performance</h3>
                        <div style={{height:180, display:'grid', gridTemplateColumns:'repeat(6,1fr)', alignItems:'end', gap:8}} aria-label="Gráfico de barras simples">
                            { [40, 55, 38, 70, 62, 88].map((h,i) => (
                                <div key={i} style={{height: h*1.6, background:'linear-gradient(180deg, rgba(91,140,255,0.9), rgba(91,140,255,0.3))', borderRadius:8}} />
                            )) }
                        </div>
                        <p className="muted">Ganhos de velocidade e conversão após otimizações.</p>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="section-title">Sobre a Fronsite</h2>
                <p className="muted">Somos uma equipe focada em criar produtos digitais de alta qualidade: websites, landing pages e aplicações com foco em desempenho, SEO e UX.</p>
                <div className="grid" style={{marginTop:16}}>
                    <div className="card"><strong>Desempenho</strong><br/><span className="muted">Carregamento rápido e otimizações Core Web Vitals.</span></div>
                    <div className="card"><strong>SEO técnico</strong><br/><span className="muted">Estrutura pronta para ranquear e atrair clientes.</span></div>
                    <div className="card"><strong>Design responsivo</strong><br/><span className="muted">Experiências impecáveis em desktop, tablets e celulares.</span></div>
                </div>
            </section>

            <section>
                <h2 className="section-title">Relatos de clientes</h2>
                <div className="testimonials">
                    <div className="card">“Aumentamos 35% nas conversões em 2 meses.”<br/><span className="muted">— Ana, E‑commerce</span></div>
                    <div className="card">“Entrega ágil e comunicação excelente.”<br/><span className="muted">— Rafael, SaaS</span></div>
                    <div className="card">“Nosso site ficou lindo e muito rápido.”<br/><span className="muted">— Marina, Educação</span></div>
                </div>
            </section>

            <section id="contato">
                <h2 className="section-title">Fale com a gente</h2>
                <ContactForm />
            </section>
        </Layout>
    )
}