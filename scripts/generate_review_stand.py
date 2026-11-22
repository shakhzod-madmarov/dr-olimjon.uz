import os
import qrcode
import qrcode.image.svg

def generate_svg_qr(url):
    factory = qrcode.image.svg.SvgPathImage
    qr = qrcode.QRCode(
        version=None,
        error_correction=qrcode.constants.ERROR_CORRECT_M,
        box_size=10,
        border=2,
        image_factory=factory
    )
    qr.add_data(url)
    qr.make(fit=True)
    img = qr.make_image()
    svg_str = img.to_string(encoding='unicode')
    
    # Strip <?xml ...?> declaration if present
    if svg_str.startswith('<?xml'):
        svg_str = svg_str[svg_str.find('?>') + 2:].strip()
        
    # Replace width="...mm" height="...mm" with width="100%" height="100%"
    import re
    svg_str = re.sub(r'width="[^"]+"', 'width="100%"', svg_str, count=1)
    svg_str = re.sub(r'height="[^"]+"', 'height="100%"', svg_str, count=1)
    return svg_str

def main():
    google_url = "https://g.page/r/CRe-TP_QxEP-EBM/review"
    yandex_url = "https://yandex.uz/maps/org/sevdo_denta/157971592658/"
    
    google_qr_svg = generate_svg_qr(google_url)
    yandex_qr_svg = generate_svg_qr(yandex_url)
    
    html_content = f"""<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dr. Olimjon Murzajanov — Sevdo Denta | Bemorlar uchun QR Baholash Standi (A4)</title>
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    /* Reset & Base */
    *, *::before, *::after {{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }}
    
    :root {{
      --navy-900: #0a192f;
      --navy-800: #102a43;
      --navy-700: #132e53;
      --navy-600: #1e3a8a;
      --cyan-600: #0284c7;
      --cyan-500: #0ea5e9;
      --gold-500: #f59e0b;
      --gold-600: #d97706;
      --slate-50: #f8fafc;
      --slate-100: #f1f5f9;
      --slate-200: #e2e8f0;
      --slate-400: #94a3b8;
      --slate-600: #475569;
      --slate-800: #1e293b;
    }}

    body {{
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      background-color: #cbd5e1;
      color: var(--slate-800);
      -webkit-font-smoothing: antialiased;
      line-height: 1.35;
      padding-bottom: 40px;
    }}

    /* Screen-only top action bar */
    .screen-toolbar {{
      position: sticky;
      top: 0;
      z-index: 1000;
      background: rgba(16, 42, 67, 0.96);
      backdrop-filter: blur(10px);
      padding: 12px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 4px 16px rgba(0,0,0,0.2);
      color: white;
      margin-bottom: 24px;
    }}

    .toolbar-title {{
      font-weight: 700;
      font-size: 15px;
      display: flex;
      align-items: center;
      gap: 10px;
    }}

    .toolbar-actions {{
      display: flex;
      gap: 12px;
      align-items: center;
    }}

    .btn {{
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 22px;
      font-size: 14px;
      font-weight: 700;
      border-radius: 8px;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.15s ease;
      border: none;
    }}

    .btn-print {{
      background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
      color: #0f172a;
      box-shadow: 0 2px 8px rgba(245, 158, 11, 0.4);
    }}

    .btn-print:hover {{
      transform: translateY(-1px);
      box-shadow: 0 4px 14px rgba(245, 158, 11, 0.5);
    }}

    .btn-site {{
      background: rgba(255, 255, 255, 0.12);
      color: white;
      border: 1px solid rgba(255, 255, 255, 0.25);
    }}

    .btn-site:hover {{
      background: rgba(255, 255, 255, 0.2);
    }}

    /* A4 Container */
    .a4-wrapper {{
      display: flex;
      justify-content: center;
    }}

    .a4-page {{
      width: 210mm;
      height: 297mm;
      max-height: 297mm;
      background: #ffffff;
      margin: 0 auto;
      padding: 10mm 12mm;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
      box-shadow: 0 10px 40px rgba(15, 23, 42, 0.25);
      border-radius: 4px;
      overflow: hidden;
      box-sizing: border-box;
    }}

    /* Border frame */
    .page-frame {{
      position: absolute;
      inset: 6mm;
      border: 1.5px solid #e2e8f0;
      border-radius: 12px;
      pointer-events: none;
      z-index: 1;
    }}

    .page-content {{
      position: relative;
      z-index: 2;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }}

    /* Header */
    .clinic-header {{
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 2px solid #e2e8f0;
      padding-bottom: 12px;
    }}

    .brand-left {{
      display: flex;
      align-items: center;
      gap: 14px;
    }}

    .brand-logo {{
      width: 58px;
      height: 58px;
      border-radius: 14px;
      background: white;
      box-shadow: 0 4px 12px rgba(19, 46, 83, 0.12);
      border: 1px solid #e2e8f0;
      padding: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
    }}

    .brand-logo svg, .brand-logo img {{
      width: 100%;
      height: 100%;
      object-fit: contain;
    }}

    .brand-titles h1 {{
      font-size: 23px;
      font-weight: 900;
      letter-spacing: 0.5px;
      color: var(--navy-800);
      line-height: 1.15;
    }}

    .brand-titles .clinic-type {{
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: var(--cyan-600);
      margin-top: 2px;
    }}

    .brand-titles .doctor-sub {{
      font-size: 12px;
      font-weight: 600;
      color: var(--slate-600);
      margin-top: 2px;
    }}

    .header-contacts {{
      text-align: right;
      font-size: 11.5px;
      color: var(--slate-600);
      display: flex;
      flex-direction: column;
      gap: 3px;
    }}

    .header-contacts .phone {{
      font-size: 14px;
      font-weight: 800;
      color: var(--navy-800);
    }}

    .header-contacts .address {{
      font-weight: 500;
      max-width: 220px;
      line-height: 1.25;
    }}

    /* Hero Invitation Banner */
    .hero-banner {{
      background: linear-gradient(135deg, #102a43 0%, #132e53 50%, #0d3b66 100%);
      border-radius: 14px;
      padding: 16px 20px;
      color: white;
      text-align: center;
      box-shadow: 0 6px 20px rgba(16, 42, 67, 0.15);
      position: relative;
      overflow: hidden;
    }}

    .hero-banner::after {{
      content: "";
      position: absolute;
      top: -50%;
      right: -10%;
      width: 200px;
      height: 200px;
      background: radial-gradient(circle, rgba(14, 165, 233, 0.2) 0%, transparent 70%);
      pointer-events: none;
    }}

    .stars-row {{
      display: flex;
      justify-content: center;
      gap: 8px;
      margin-bottom: 8px;
    }}

    .star-icon {{
      width: 26px;
      height: 26px;
      fill: #f59e0b;
      filter: drop-shadow(0 2px 4px rgba(245, 158, 11, 0.5));
    }}

    .hero-banner h2 {{
      font-size: 21px;
      font-weight: 800;
      color: #ffffff;
      line-height: 1.2;
      margin-bottom: 6px;
    }}

    .hero-banner .hero-uz {{
      color: #fef08a;
      font-weight: 700;
    }}

    .hero-banner p {{
      font-size: 13px;
      font-weight: 500;
      color: #e2e8f0;
      line-height: 1.35;
      max-width: 600px;
      margin: 0 auto;
    }}

    .hero-banner .hero-ru {{
      display: block;
      margin-top: 4px;
      font-size: 11.5px;
      color: #94a3b8;
    }}

    /* Dual QR Grid */
    .qr-grid {{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }}

    .qr-card {{
      background: #ffffff;
      border: 2px solid #e2e8f0;
      border-radius: 14px;
      padding: 16px 14px 14px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      box-shadow: 0 4px 14px rgba(15, 23, 42, 0.06);
      position: relative;
    }}

    .qr-card.google-card {{
      border-top: 5px solid #4285F4;
    }}

    .qr-card.yandex-card {{
      border-top: 5px solid #fc3f1d;
    }}

    .card-service-badge {{
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 5px 14px;
      border-radius: 30px;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      margin-bottom: 8px;
    }}

    .badge-icon {{
      width: 22px;
      height: 22px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }}

    .badge-icon svg {{
      width: 100%;
      height: 100%;
    }}

    .badge-text {{
      font-size: 14px;
      font-weight: 800;
      color: var(--slate-800);
      letter-spacing: -0.2px;
    }}

    .card-action-title {{
      font-size: 14.5px;
      font-weight: 800;
      color: var(--navy-800);
      margin-bottom: 2px;
    }}

    .card-action-ru {{
      font-size: 11px;
      font-weight: 600;
      color: var(--slate-400);
      margin-bottom: 10px;
    }}

    .qr-code-box {{
      width: 172px;
      height: 172px;
      background: white;
      padding: 6px;
      border-radius: 10px;
      border: 1.5px solid #cbd5e1;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: inset 0 0 8px rgba(0,0,0,0.03);
      margin-bottom: 10px;
    }}

    .qr-code-box svg {{
      width: 100%;
      height: 100%;
      display: block;
    }}

    .scan-pill {{
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 800;
      margin-bottom: 6px;
    }}

    .google-card .scan-pill {{
      background: #eff6ff;
      color: #1d4ed8;
      border: 1px solid #bfdbfe;
    }}

    .yandex-card .scan-pill {{
      background: #fef2f2;
      color: #b91c1c;
      border: 1px solid #fecaca;
    }}

    .card-link-preview {{
      font-size: 10.5px;
      font-family: ui-monospace, monospace;
      color: var(--slate-400);
      word-break: break-all;
    }}

    /* 3-Step Instructions */
    .steps-section {{
      background: #f8fafc;
      border: 1.5px solid #e2e8f0;
      border-radius: 12px;
      padding: 12px 16px;
    }}

    .steps-title {{
      font-size: 12px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: var(--navy-800);
      text-align: center;
      margin-bottom: 8px;
    }}

    .steps-grid {{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 12px;
      text-align: center;
    }}

    .step-item {{
      background: white;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 10px 8px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }}

    .step-num {{
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: var(--navy-700);
      color: white;
      font-size: 12px;
      font-weight: 800;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 4px;
    }}

    .step-text-uz {{
      font-size: 11.5px;
      font-weight: 700;
      color: var(--slate-800);
      line-height: 1.25;
    }}

    .step-text-ru {{
      font-size: 9.5px;
      font-weight: 500;
      color: var(--slate-400);
      line-height: 1.2;
      margin-top: 2px;
    }}

    /* Footer */
    .stand-footer {{
      border-top: 1.5px solid #e2e8f0;
      padding-top: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 11px;
      color: var(--slate-600);
    }}

    .footer-gratitude {{
      font-weight: 700;
      color: var(--navy-800);
      line-height: 1.25;
    }}

    .footer-gratitude span {{
      display: block;
      font-size: 9.5px;
      font-weight: 500;
      color: var(--slate-400);
    }}

    .footer-meta {{
      text-align: right;
      display: flex;
      flex-direction: column;
      gap: 2px;
      font-weight: 600;
    }}

    .footer-meta .site-domain {{
      color: var(--cyan-600);
      font-weight: 800;
      font-size: 12px;
    }}

    /* Print Styles */
    @media print {{
      @page {{
        size: A4 portrait;
        margin: 0;
      }}

      body {{
        background: white !important;
        padding: 0 !important;
        margin: 0 !important;
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }}

      .screen-toolbar {{
        display: none !important;
      }}

      .a4-wrapper {{
        display: block !important;
        padding: 0 !important;
        margin: 0 !important;
      }}

      .a4-page {{
        width: 210mm !important;
        height: 297mm !important;
        max-height: 297mm !important;
        box-shadow: none !important;
        border-radius: 0 !important;
        margin: 0 !important;
        padding: 8mm 11mm !important;
        page-break-after: avoid !important;
        page-break-inside: avoid !important;
      }}

      .page-frame {{
        inset: 4mm !important;
      }}
    }}
  </style>
</head>
<body>

  <!-- Screen-only toolbar -->
  <aside class="screen-toolbar" aria-label="Toolbar">
    <div class="toolbar-title">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M6 9V2h12v7"></path>
        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
        <rect x="6" y="14" width="12" height="8"></rect>
      </svg>
      <span>A4 Baholash Standi (Dr. Olimjon Murzajanov — Sevdo Denta)</span>
    </div>
    <div class="toolbar-actions">
      <a href="/" class="btn btn-site">← Asosiy saytga qaytish</a>
      <button onclick="window.print()" class="btn btn-print">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 6 2 18 2 18 9"></polyline>
          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
          <rect x="6" y="14" width="12" height="8"></rect>
        </svg>
        Chop etish (Ctrl + P) / Печать
      </button>
    </div>
  </aside>

  <!-- A4 Printable Sheet -->
  <main class="a4-wrapper">
    <article class="a4-page">
      <div class="page-frame"></div>
      
      <div class="page-content">
        
        <!-- Header -->
        <header class="clinic-header">
          <div class="brand-left">
            <div class="brand-logo">
              <!-- Clinic Smiling Tooth Logo -->
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340" width="50" height="50">
                <defs>
                  <clipPath id="hLeft">
                    <rect x="0" y="0" width="170" height="340"/>
                  </clipPath>
                  <clipPath id="hRight">
                    <rect x="170" y="0" width="170" height="340"/>
                  </clipPath>
                </defs>
                <g clip-path="url(#hLeft)">
                  <circle cx="170" cy="170" r="122" fill="none" stroke="#122d52" stroke-width="18"/>
                  <path d="M108 134 C106 105, 130 92, 152 100 C162 104, 166 108, 185 110" fill="none" stroke="#122d52" stroke-width="15" stroke-linecap="round"/>
                  <path d="M108 134 C108 175, 120 222, 134 252 C140 264, 150 264, 155 246 C160 228, 164 214, 170 214" fill="none" stroke="#122d52" stroke-width="15" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M138 176 C158 196, 198 196, 236 154" fill="none" stroke="#122d52" stroke-width="14" stroke-linecap="round"/>
                  <path d="M133 182 C134 172, 141 169, 146 171" fill="none" stroke="#122d52" stroke-width="6" stroke-linecap="round"/>
                </g>
                <g clip-path="url(#hRight)">
                  <circle cx="170" cy="170" r="122" fill="none" stroke="#245b84" stroke-width="18"/>
                  <path d="M166 98 C184 90, 212 94, 214 128 C215 142, 212 156, 208 168" fill="none" stroke="#245b84" stroke-width="15" stroke-linecap="round"/>
                  <path d="M204 188 C198 216, 192 240, 185 252 C180 264, 170 264, 165 246 C160 228, 156 214, 170 214" fill="none" stroke="#245b84" stroke-width="15" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M138 176 C158 196, 198 196, 236 154" fill="none" stroke="#173863" stroke-width="14" stroke-linecap="round"/>
                  <path d="M229 148 C238 148, 243 155, 240 164" fill="none" stroke="#173863" stroke-width="6" stroke-linecap="round"/>
                </g>
              </svg>
            </div>
            <div class="brand-titles">
              <h1>SEVDO DENTA</h1>
              <div class="clinic-type">Stomatologiya Markazi • Стоматология</div>
              <div class="doctor-sub">Dr. Olimjon Murzajanov — Bosh shifokor, implantolog</div>
            </div>
          </div>
          <div class="header-contacts">
            <div class="phone">📞 +998 94 001-01-56</div>
            <div class="phone" style="font-size: 12px; color: var(--slate-600);">+998 90 253-06-00</div>
            <div class="address">📍 Andijon sh., Eski shahar, Abdurauf Fitrat ko'chasi, 243A</div>
          </div>
        </header>

        <!-- Hero Invitation Banner -->
        <section class="hero-banner">
          <div class="stars-row">
            <!-- 5 Gold Stars -->
            <svg class="star-icon" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            <svg class="star-icon" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            <svg class="star-icon" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            <svg class="star-icon" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            <svg class="star-icon" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          </div>
          <h2>Bizning xizmatimiz sizga ma'qul keldimi?</h2>
          <p>
            <span class="hero-uz">Sizning 5 yulduzli bahoyingiz biz uchun eng oliy mukofotdir!</span><br>
            Fikr-mulohazangizni yozib qoldiring va boshqa bemorlarga ishonchli shifokorni tanlashda ko'maklashing.
            <span class="hero-ru">Пожалуйста, оцените наш приём на 5 звёзд в Google или Яндекс Картах!</span>
          </p>
        </section>

        <!-- Dual QR Grid -->
        <section class="qr-grid">
          
          <!-- Card 1: Google Reviews -->
          <div class="qr-card google-card">
            <div class="card-service-badge">
              <span class="badge-icon">
                <!-- Google 4-Color G Logo -->
                <svg viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                  <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                  <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                  <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                </svg>
              </span>
              <span class="badge-text">Google Xaritalar</span>
            </div>
            <div class="card-action-title">Google da baholash</div>
            <div class="card-action-ru">Оставить отзыв в Google Maps</div>
            
            <div class="qr-code-box">
              {google_qr_svg}
            </div>

            <div class="scan-pill">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                <circle cx="12" cy="13" r="4"></circle>
              </svg>
              Kamerani qarating
            </div>
            <div class="card-link-preview">g.page/r/CRe-TP_QxEP-EBM/review</div>
          </div>

          <!-- Card 2: Yandex Reviews -->
          <div class="qr-card yandex-card">
            <div class="card-service-badge">
              <span class="badge-icon">
                <!-- Yandex Red Circle Logo -->
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="11" fill="#fc3f1d"/>
                  <path fill="#ffffff" d="M13.5 17.5h-2.1v-4.8L8.7 6.5h2.3l1.8 4.7 1.8-4.7h2.2l-2.7 6.2v4.8z"/>
                </svg>
              </span>
              <span class="badge-text">Yandex Xaritalar</span>
            </div>
            <div class="card-action-title">Yandex da baholash</div>
            <div class="card-action-ru">Оставить отзыв в Яндекс Картах</div>
            
            <div class="qr-code-box">
              {yandex_qr_svg}
            </div>

            <div class="scan-pill">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                <circle cx="12" cy="13" r="4"></circle>
              </svg>
              Kamerani qarating
            </div>
            <div class="card-link-preview">yandex.uz/maps/org/sevdo_denta</div>
          </div>

        </section>

        <!-- 3-Step Instruction Guide -->
        <section class="steps-section">
          <div class="steps-title">3 ta oddiy qadamda fikr bildiring • 3 простых шага</div>
          <div class="steps-grid">
            <div class="step-item">
              <div class="step-num">1</div>
              <div class="step-text-uz">Kamerani qarating</div>
              <div class="step-text-ru">Наведите камеру смартфона на нужный QR-код</div>
            </div>
            <div class="step-item">
              <div class="step-num">2</div>
              <div class="step-text-uz">Havolaga o'ting</div>
              <div class="step-text-ru">Нажмите на появившуюся ссылку на экране</div>
            </div>
            <div class="step-item">
              <div class="step-num">3</div>
              <div class="step-text-uz">5 ⭐ qo'ying</div>
              <div class="step-text-ru">Поставьте 5 звёзд и напишите ваш тёплый отзыв</div>
            </div>
          </div>
        </section>

        <!-- Footer -->
        <footer class="stand-footer">
          <div class="footer-gratitude">
            E'tiboringiz va ishonchingiz uchun chin dildan minnatdormiz!
            <span>Спасибо за доверие к нашей клинике «Sevdo Denta»!</span>
          </div>
          <div class="footer-meta">
            <span class="site-domain">🌐 dentist-olimjon.uz</span>
            <span>Telegram: @olimjon_murzajanov</span>
          </div>
        </footer>

      </div>
    </article>
  </main>

</body>
</html>
"""
    
    # Write to frontend/public
    public_target = os.path.abspath("frontend/public/review-stand-a4.html")
    with open(public_target, "w", encoding="utf-8") as f:
        f.write(html_content)
    print(f"Generated: {public_target} ({len(html_content)} bytes)")
    
    # Write to frontend/dist if exists
    dist_dir = os.path.abspath("frontend/dist")
    if os.path.exists(dist_dir):
        dist_target = os.path.join(dist_dir, "review-stand-a4.html")
        with open(dist_target, "w", encoding="utf-8") as f:
            f.write(html_content)
        print(f"Generated: {dist_target}")

    # Generate standalone PDF via headless Edge
    import subprocess, tempfile, shutil
    edge_path = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
    if os.path.exists(edge_path):
        pdf_public = os.path.abspath("frontend/public/review-stand-dr-olimjon.pdf")
        user_data = os.path.join(tempfile.gettempdir(), "edge_pdf_profile")
        cmd = [
            edge_path,
            "--headless=new",
            "--disable-gpu",
            f"--user-data-dir={user_data}",
            f"--print-to-pdf={pdf_public}",
            "--no-pdf-header-footer",
            f"file:///{public_target}"
        ]
        try:
            res = subprocess.run(cmd, capture_output=True, text=True, timeout=15)
            if os.path.exists(pdf_public):
                print(f"Generated PDF: {pdf_public} ({os.path.getsize(pdf_public)} bytes)")
                if os.path.exists(dist_dir):
                    pdf_dist = os.path.join(dist_dir, "review-stand-dr-olimjon.pdf")
                    shutil.copy2(pdf_public, pdf_dist)
                    print(f"Copied PDF to: {pdf_dist}")
        except Exception as e:
            print(f"PDF generation note: {e}")

if __name__ == "__main__":
    main()
