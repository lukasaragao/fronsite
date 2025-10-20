import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ ok: false, error: 'Method not allowed' })
    }

    const { nome, email, mensagem } = req.body || {}
    if (!nome || !email || !mensagem) {
        return res.status(400).json({ ok: false, error: 'Campos obrigatórios ausentes' })
    }

    try {
        // Configuração para Gmail (mais simples)
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER || 'lukasbilac@hotmail.com',
                pass: process.env.GMAIL_APP_PASSWORD, // Use App Password do Gmail
            },
        })

        // Email de destino fixo
        const to = 'lukasbilac@hotmail.com'

        await transporter.sendMail({
            from: `Website Fronsite <${process.env.GMAIL_USER || 'lukasbilac@hotmail.com'}>`,
            to,
            replyTo: email,
            subject: `Novo contato do site - ${nome}`,
            html: `
                <h3>Novo contato recebido</h3>
                <p><strong>Nome:</strong> ${nome}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Mensagem:</strong></p>
                <p>${mensagem.replace(/\n/g, '<br>')}</p>
            `,
            text: `Novo contato de ${nome} (${email}):\n\n${mensagem}`,
        })

        return res.status(200).json({ ok: true })
    } catch (err) {
        return res.status(500).json({ ok: false, error: 'Falha ao enviar e-mail. Verifique as configurações.' })
    }
}


