import { useState, useEffect } from 'react';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const FormularioContato = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [erro, setErro] = useState('');

  const numeroWhatsApp = '5543999035955';
  const emailDestino = 'lukasbilac@hotmail.com';

  // Mensagens personalizadas para cada serviço
  const mensagensPersonalizadas = {
    'landing-page': 'Olá! Gostaria de solicitar uma proposta para desenvolvimento de uma Landing Page. Preciso de uma página focada em conversão para minha campanha de marketing. Podem me enviar mais detalhes sobre o processo?',
    'website': 'Olá! Tenho interesse em desenvolver um Website completo para minha empresa. Preciso de um site profissional que represente bem meu negócio online. Gostaria de receber uma proposta detalhada.',
    'ecommerce': 'Olá! Estou interessado em criar uma loja virtual (E-commerce) para vender meus produtos online. Preciso de uma solução completa de vendas digitais. Podem me enviar informações sobre o projeto?'
  };

  // Effect para preencher mensagem baseada no serviço selecionado
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const servico = sessionStorage.getItem('servicoSelecionado');
      if (servico && mensagensPersonalizadas[servico as keyof typeof mensagensPersonalizadas]) {
        setMensagem(mensagensPersonalizadas[servico as keyof typeof mensagensPersonalizadas]);
        sessionStorage.removeItem('servicoSelecionado'); // Limpa após usar
      }
    }
  }, []);

  const validarCampos = () => {
    if (!nome || !email || !mensagem) {
      setErro('⚠ Por favor, preencha todos os campos.');
      return false;
    }
    setErro('');
    return true;
  };

  const gerarTexto = () =>
    `Olá, meu nome é ${nome}\nEmail: ${email}\n\n${mensagem}`;

  const handleWhatsApp = () => {
    if (!validarCampos()) return;
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(gerarTexto())}`;
    window.open(url, '_blank');
  };

  const handleEmail = () => {
    if (!validarCampos()) return;
    const assunto = `Contato da Fronsite - ${nome}`;
    const corpo = `Nome: ${nome}\nEmail: ${email}\n\nMensagem:\n${mensagem}`;
    const mailtoLink = `mailto:${emailDestino}?subject=${encodeURIComponent(
      assunto
    )}&body=${encodeURIComponent(corpo)}`;
    window.location.href = mailtoLink;
  };

  // Effect adicional para monitorar mudanças no sessionStorage
  useEffect(() => {
    const checkForService = () => {
      if (typeof window !== 'undefined') {
        const servico = sessionStorage.getItem('servicoSelecionado');
        if (servico && mensagensPersonalizadas[servico as keyof typeof mensagensPersonalizadas]) {
          setMensagem(mensagensPersonalizadas[servico as keyof typeof mensagensPersonalizadas]);
          sessionStorage.removeItem('servicoSelecionado');
        }
      }
    };

    // Verifica imediatamente se há um serviço salvo
    checkForService();

    // Monitora mudanças no sessionStorage a cada 100ms
    const interval = setInterval(checkForService, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);
  
  return (
    <form className="contact" noValidate>
      <label>
        Nome
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </label>

      <label>
        E-mail
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <label>
        Mensagem
        <textarea
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
        />
      </label>

      {erro && <p style={{ color: 'var(--color-error)', marginTop: '0.5rem' }}>{erro}</p>}

      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        <button type="button" onClick={handleWhatsApp} className="btn whatsapp">
          <FaWhatsapp size={20} />
          WhatsApp
        </button>

        <button type="button" onClick={handleEmail} className="btn email">
          <FaEnvelope size={20} />
          E-mail
        </button>
      </div>
    </form>
  );
};

export default FormularioContato;
