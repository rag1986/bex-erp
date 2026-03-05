import fs from 'node:fs';
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

type SmtpConfig = {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
  from: string;
  to: string;
};

export const runtime = 'nodejs';

function getEnv(name: string): string | undefined {
  const value = process.env[name];
  return value?.trim() || undefined;
}

function loadConfigFromJson(): Partial<SmtpConfig> {
  const configPath = getEnv('SMTP_CONFIG_PATH');
  if (!configPath) {
    return {};
  }

  try {
    const raw = fs.readFileSync(configPath, 'utf8');
    return JSON.parse(raw) as Partial<SmtpConfig>;
  } catch {
    return {};
  }
}

function getSmtpConfig(): SmtpConfig | null {
  const fromFile = loadConfigFromJson();

  const host = getEnv('SMTP_HOST') ?? fromFile.host;
  const port = Number(getEnv('SMTP_PORT') ?? fromFile.port ?? 587);
  const secure =
    (getEnv('SMTP_SECURE') ?? String(fromFile.secure ?? port === 465)).toLowerCase() === 'true';
  const user = getEnv('SMTP_USER') ?? fromFile.user;
  const pass = getEnv('SMTP_PASS') ?? fromFile.pass;
  const from = getEnv('MAIL_FROM') ?? fromFile.from ?? user;
  const to = getEnv('MAIL_TO') ?? fromFile.to;

  if (!host || !port || !user || !pass || !from || !to) {
    return null;
  }

  return { host, port, secure, user, pass, from, to };
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = String(formData.get('name') ?? '').trim();
    const company = String(formData.get('company') ?? '').trim();
    const role = String(formData.get('role') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const phone = String(formData.get('phone') ?? '').trim();
    const size = String(formData.get('size') ?? '').trim();

    if (!name || !company || !email) {
      return NextResponse.json(
        { success: false, message: 'Name, company, and email are required.' },
        { status: 400 }
      );
    }

    const smtp = getSmtpConfig();
    if (!smtp) {
      return NextResponse.json(
        {
          success: false,
          message:
            'SMTP is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_FROM, and MAIL_TO, or SMTP_CONFIG_PATH.'
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtp.host,
      port: smtp.port,
      secure: smtp.secure,
      auth: {
        user: smtp.user,
        pass: smtp.pass
      }
    });

    const lines = [
      `Name: ${name}`,
      `Company: ${company}`,
      `Role: ${role || '-'}`,
      `Business Email: ${email}`,
      `Phone: ${phone || '-'}`,
      `Company Size: ${size || '-'}`
    ];

    await transporter.sendMail({
      from: smtp.from,
      to: smtp.to,
      replyTo: email,
      subject: `BEX ERP demo request - ${company}`,
      text: lines.join('\n'),
      html: `<h2>New Demo Request</h2>${lines.map((line) => `<p>${line}</p>`).join('')}`
    });

    return NextResponse.json({
      success: true,
      message: 'Thanks. We received your request and will contact you shortly.'
    });
  } catch {
    return NextResponse.json(
      { success: false, message: 'Unable to send your request right now. Please try again.' },
      { status: 500 }
    );
  }
}
