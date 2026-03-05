# BEX ERP Next.js Migration

This project is now a Next.js app that renders the provided landing-page HTML and sends form submissions via SMTP.

## Run

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open: `http://localhost:3000`

## SMTP configuration

Use either environment variables in `.env.local` or a JSON config file.

### Option 1: Env vars

```env
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-smtp-user
SMTP_PASS=your-smtp-password
MAIL_FROM=no-reply@example.com
MAIL_TO=leads@example.com
```

### Option 2: JSON config file

Set:

```env
SMTP_CONFIG_PATH=/absolute/path/to/smtp-config.json
```

File example:

```json
{
  "host": "smtp.example.com",
  "port": 587,
  "secure": false,
  "user": "your-smtp-user",
  "pass": "your-smtp-password",
  "from": "no-reply@example.com",
  "to": "leads@example.com"
}
```

If both are present, env vars override file values.
