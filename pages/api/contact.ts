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
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT || 587),
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        })

        const to = process.env.CONTACT_TO || process.env.SMTP_USER

        await transporter.sendMail({
            from: `Website <${process.env.SMTP_USER}>`,
            to,
            replyTo: email,
            subject: `Novo contato de ${nome}`,
            text: `${mensagem}\n\nContato: ${nome} <${email}>`,
        })

        return res.status(200).json({ ok: true })
    } catch (err) {
        return res.status(500).json({ ok: false, error: 'Falha ao enviar e-mail' })
    }
}


