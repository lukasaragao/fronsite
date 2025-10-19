import { useState } from 'react'

export default function ContactForm(){
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState('')
    const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle')

    async function onSubmit(e: React.FormEvent){
        e.preventDefault()
        setStatus('sending')
        try{
            const res = await fetch('/api/contact',{
                method:'POST',
                headers:{ 'Content-Type':'application/json' },
                body: JSON.stringify({ nome, email, mensagem })
            })
            const data = await res.json()
            if(data.ok){
                setStatus('success')
                setNome(''); setEmail(''); setMensagem('')
            }else{
                setStatus('error')
            }
        }catch{
            setStatus('error')
        }
    }

    return (
        <form className="contact" onSubmit={onSubmit} noValidate>
            <div>
                <label htmlFor="nome">Nome</label>
                <input id="nome" name="nome" value={nome} onChange={e=>setNome(e.target.value)} required placeholder="Seu nome" />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" value={email} onChange={e=>setEmail(e.target.value)} required placeholder="voce@empresa.com" />
            </div>
            <div>
                <label htmlFor="mensagem">Mensagem</label>
                <textarea id="mensagem" name="mensagem" rows={5} value={mensagem} onChange={e=>setMensagem(e.target.value)} required placeholder="Como podemos ajudar?" />
            </div>
            <button className="btn" type="submit" disabled={status==='sending'}>
                {status==='sending' ? 'Enviando...' : 'Enviar'}
            </button>
            {status==='success' && <div className="muted">Mensagem enviada com sucesso!</div>}
            {status==='error' && <div className="muted">Não foi possível enviar. Tente novamente.</div>}
        </form>
    )
}


