import { useState } from 'react';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const FormularioContato = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [erro, setErro] = useState('');

  const numeroWhatsApp = '5543999035955';
  const emailDestino = 'lukasbilac@hotmail.com';

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
