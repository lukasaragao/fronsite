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
                        <h3 style={{marginTop:0}}>Nossos Números</h3>
                        <div style={{height:200, display:'grid', gridTemplateColumns:'repeat(6,1fr)', alignItems:'end', gap:10}} aria-label="Indicadores de performance">
                            { [
                                { value: 70, label: "100+", desc: "Clientes Atendidos" },
                                { value: 100, label: "2.000h", desc: "Programação" },
                                { value: 60, label: "30+", desc: "Projetos Entregues" },
                                { value: 70, label: "95%", desc: "Satisfação" },
                                { value: 62, label: "24h", desc: "Suporte" },
                                { value: 88, label: "100%", desc: "Responsivo" }
                            ].map((item,i) => (
                                <div key={i} style={{display:'flex', flexDirection:'column', alignItems:'center', height:'100%'}}>
                                    <div style={{
                                        height: item.value*1.8, 
                                        width:'80%',
                                        background: item.value >= 70 ? 'linear-gradient(180deg, #4ade80, #22c55e)' : 
                                                   item.value >= 40 ? 'linear-gradient(180deg, #fbbf24, #f59e0b)' : 
                                                   'linear-gradient(180deg, #ef4444, #dc2626)',
                                        borderRadius:8,
                                        display:'flex',
                                        alignItems:'center',
                                        justifyContent:'center',
                                        color:'white',
                                        fontWeight:'bold',
                                        fontSize:'12px',
                                        textAlign:'center',
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                                    }}>
                                        {item.label}
                                    </div>
                                    <div style={{marginTop:8, fontSize:'10px', color:'var(--color-muted)', textAlign:'center', lineHeight:'1.2'}}>
                                        {item.desc}
                                    </div>
                                </div>
                            )) }
                        </div>
                        <p className="muted">Resultados que comprovam nossa excelência em desenvolvimento web.</p>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="section-title">Sobre a Fronsite</h2>
                <p className="muted">Criamos soluções digitais completas que impulsionam negócios de forma estratégica e inovadora. Desenvolvemos websites, landpages e e-commerces personalizados, conectando você ao seu público de maneira eficiente e impactante. Valorizamos uma comunicação clara e próxima, entendemos o sonho de cada cliente e nos dedicamos a transformá-lo em realidade com agilidade. Nossa abordagem combina design de alta qualidade, tecnologia de ponta e entrega rápida para garantir resultados que realmente importam.</p>
                <div className="grid" style={{marginTop:16}}>
                    <div className="card"><strong>Alta Performance</strong><br/><span className="muted">Carregamento de páginas rápido, otimizado e seguro.</span></div>
                    <div className="card"><strong>SEO Avançado</strong><br/><span className="muted">Estrutura pronta para ranquear e atrair clientes, com otimização para SEO.</span></div>
                    <div className="card"><strong>Design Exclusivo</strong><br/><span className="muted">Experiências impecáveis em desktop, tablets e celulares, com design personalizado.</span></div>
                    <div className="card"><strong>Experiência do Usuário</strong><br/><span className="muted">Interfaces intuitivas, fáceis de navegar e interações que engajam o usuário.</span></div>
                </div>
            </section>

            <section>
                <h2 className="section-title">Relatos de clientes</h2>
                <div className="testimonials">
                    <div className="card">“Nossa loja online ficou otima, funcionou perfeitamente e o resultado foi excelente.”<br/><span className="muted">— Ana Cristina, E‑commerce</span></div>
                    <div className="card">“Entrega ágil, otima comunicação e resultado excelente.”<br/><span className="muted">— Leandro, empresa de transporte</span></div>
                    <div className="card">“Nosso site ficou lindo e muito rápido.”<br/><span className="muted">— Marina, Psicóloga</span></div>
                    <div className="card">“Super atendeu nossas expectativas, entregou o projeto com qualidade e no prazo.”<br/><span className="muted">— João V, contador</span></div>
                </div>
            </section>

            <section id="contato">
                <h2 className="section-title">Fale conosco e transforme seu negócio</h2>
                <ContactForm />
            </section>
        </Layout>
    )
}