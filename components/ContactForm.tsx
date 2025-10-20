import { useState } from 'react'

export default function ContactForm(){
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState('')
    const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle')
    const [errorMessage, setErrorMessage] = useState('')

    async function onSubmit(e: React.FormEvent){
        e.preventDefault()
        
        // Validação manual dos campos
        if (!nome.trim() || !email.trim() || !mensagem.trim()) {
            setErrorMessage('Por favor, preencha todos os campos obrigatórios.')
            setStatus('error')
            return
        }
        
        // Validação básica de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            setErrorMessage('Por favor, insira um email válido.')
            setStatus('error')
            return
        }
        
        setStatus('sending')
        try{
            const res = await fetch('/api/contact',{
                method:'POST',
                headers:{ 'Content-Type':'application/json' },
                body: JSON.stringify({ nome: nome.trim(), email: email.trim(), mensagem: mensagem.trim() })
            })
            const data = await res.json()
            if(data.ok){
                setStatus('success')
                setNome(''); setEmail(''); setMensagem('')
                setErrorMessage('')
            }else{
                setErrorMessage(data.error || 'Erro ao enviar mensagem. Tente novamente.')
                setStatus('error')
            }
        }catch{
            setErrorMessage('Erro de conexão. Verifique sua internet e tente novamente.')
            setStatus('error')
        }
    }

    return (
        <form className="contact" onSubmit={onSubmit} noValidate>
            <div>
                <label htmlFor="nome">Nome Completo</label>
                <input id="nome" name="nome" value={nome} onChange={e=>setNome(e.target.value)} required placeholder="Seu nome" />
            </div>
            <div>
                <label htmlFor="email">Email Principal</label>
                <input id="email" type="email" name="email" value={email} onChange={e=>setEmail(e.target.value)} required placeholder="empresa@gmail.com" />
            </div>
            <div>
                <label htmlFor="mensagem">Mensagem</label>
                <textarea id="mensagem" name="mensagem" rows={5} value={mensagem} onChange={e=>setMensagem(e.target.value)} required placeholder="Digite sua mensagem aqui" />
            </div>
            <button className="btn" type="submit" disabled={status==='sending'}>
                {status==='sending' ? 'Enviando...' : 'Enviar'}
            </button>
            {status==='success' && <div style={{color: '#4ade80', fontSize: '14px', marginTop: '8px'}}>✓ Mensagem enviada com sucesso!</div>}
            {status==='error' && <div style={{color: '#f87171', fontSize: '14px', marginTop: '8px'}}>⚠ {errorMessage}</div>}
        </form>
    )
}


