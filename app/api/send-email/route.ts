import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { to, subject, data } = await request.json()

    // Tutaj możesz dodać logikę wysyłania emaila
    // Na przykład przez SendGrid, Nodemailer, Resend, itp.
    
    // Dla teraz zwracamy sukces - w rzeczywistej implementacji
    // tutaj byłaby logika wysyłania emaila
    console.log('Email data:', { to, subject, data })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
