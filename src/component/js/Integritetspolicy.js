import React from 'react';

const sectionStyle = {
  marginBottom: 24,
};

const h1Style = {
  fontSize: 32,
  lineHeight: 1.2,
  margin: '0 0 8px',
  textAlign: 'center',
};

const subStyle = {
  fontSize: 14,
  textAlign: 'center',
  marginBottom: 24,
  color: '#666',
};

const h2Style = {
  fontSize: 20,
  margin: '16px 0 8px',
};

const pStyle = {
  margin: '8px 0',
  lineHeight: 1.6,
  fontSize: 16,
};

const liStyle = {
  margin: '4px 0',
};

const containerStyle = {
  maxWidth: 900,
  margin: '0 auto',
  padding: '100px 16px 48px',
};

const Integritetspolicy = () => {
  return (
    <main style={containerStyle}>
      <header style={{ marginBottom: 16 }}>
        <h1 style={h1Style}>Integritetspolicy</h1>
        <p style={subStyle}>Senast uppdaterad: 7 oktober 2025</p>
      </header>

      <section style={sectionStyle}>
        <p style={pStyle}>
          Vi värnar om din personliga integritet och behandlar dina uppgifter i enlighet med Dataskyddsförordningen (GDPR) och svensk lag.
          Denna policy förklarar hur vi samlar in, använder och sparar personuppgifter när du kontaktar oss via vår hemsida.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>1. Vilka uppgifter vi samlar in</h2>
        <p style={pStyle}>När du skickar in vårt formulär kan följande uppgifter behandlas:</p>
        <ul style={{ paddingLeft: 20 }}>
          <li style={liStyle}>Förnamn och efternamn</li>
          <li style={liStyle}>E-postadress</li>
          <li style={liStyle}>Telefonnummer (frivilligt)</li>
          <li style={liStyle}>Meddelande/ärendebeskrivning</li>
        </ul>
        <p style={pStyle}>Uppgifterna används endast för att kunna hantera och svara på din förfrågan.</p>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>2. Ändamål med behandlingen</h2>
        <ul style={{ paddingLeft: 20 }}>
          <li style={liStyle}>Att besvara frågor eller bokningsförfrågningar du skickar till oss.</li>
          <li style={liStyle}>Att tillhandahålla den information eller service du efterfrågar.</li>
        </ul>
        <p style={pStyle}>Vi samlar inte in fler uppgifter än nödvändigt och använder dem inte för andra syften.</p>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>3. Rättslig grund</h2>
        <p style={pStyle}>
          Behandlingen sker med stöd av <strong>samtycke</strong>. Genom att kryssa i rutan i formuläret och skicka in det samtycker du till att vi behandlar dina personuppgifter för ovanstående ändamål.
          Du kan när som helst återkalla ditt samtycke genom att kontakta oss.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>4. Lagringstid</h2>
        <p style={pStyle}>
          Vi sparar personuppgifter endast så länge som behövs för att hantera ditt ärende eller följa upp din förfrågan. Därefter raderas uppgifterna.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>5. Dina rättigheter</h2>
        <p style={pStyle}>Enligt GDPR har du rätt att:</p>
        <ul style={{ paddingLeft: 20 }}>
          <li style={liStyle}>Begära tillgång till dina uppgifter (registerutdrag)</li>
          <li style={liStyle}>Begära rättelse eller radering</li>
          <li style={liStyle}>Begränsa behandlingen eller invända mot den</li>
          <li style={liStyle}>Återkalla ditt samtycke</li>
        </ul>
        <p style={pStyle}>Kontakta oss för att utöva dina rättigheter.</p>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>6. Personuppgiftsansvarig & kontakt</h2>
        <p style={pStyle}>
          Personuppgiftsansvarig:
          <br />
          <strong>House of Aesthetics</strong>
          <br />
          <span>Malmö</span>
          <br />
          E-post: <a href="mailto:houseofaesthetics.se@hotmail.com">houseofaesthetics.se@hotmail.com</a>
        </p>
      </section>

      <footer style={{ marginTop: 24 }}>
        <p style={{ ...pStyle, color: '#666' }}>
          Denna policy kan uppdateras. Ny version publiceras på denna sida.
        </p>
      </footer>
    </main>
  );
};

export default Integritetspolicy;