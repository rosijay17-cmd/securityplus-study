/* ============================================================
   V3 — CRYPTOGRAPHY & PKI PACK
   Questions are derived from the uploaded study guide.
   ============================================================ */

function CQ(id,domain,text,options,answer,explanation,multi=false){
 const q=Q(
  id,
  domain,
  text,
  options,
  answer,
  explanation,
  multi
 );
 q.crypto=true;
 q.topic="Cryptography & PKI";
 return q;
}

const cryptoQuestions=[

CQ(
77,
"General Security Concepts",
"Which technology does the guide identify for checking the status of a digital certificate?",
[
 "OCSP",
 "CRL",
 "TPM",
 "CSR"
],
0,
"The guide selects OCSP, which queries certificate-status information."
),

CQ(
103,
"General Security Concepts",
"Which method does the guide identify as commonly used in the financial industry to protect sensitive payment data?",
[
 "Tokenization",
 "Hashing",
 "Salting",
 "Steganography"
],
0,
"The guide selects tokenization. Sensitive values are replaced with non-sensitive tokens."
),

CQ(
105,
"General Security Concepts",
"Which option is the most appropriate in the guide for protecting data in transit?",
[
 "SHA-256",
 "SSL 3.0",
 "TLS 1.3",
 "AES-256"
],
2,
"The guide selects TLS 1.3 for protecting network communications in transit."
),

CQ(
198,
"General Security Concepts",
"An engineer wants to determine whether a script has been modified before it runs. Which technique does the guide select?",
[
 "Masking",
 "Obfuscation",
 "Hashing",
 "Encryption"
],
2,
"The guide selects hashing because a known-good hash can be compared with the current file hash to detect modification."
),

CQ(
212,
"General Security Concepts",
"A company must render sensitive data at rest unreadable to unauthorized users. Which option does the guide select?",
[
 "Hashing",
 "Tokenization",
 "Encryption",
 "Segmentation"
],
2,
"The guide selects encryption to provide confidentiality for data at rest."
),

CQ(
238,
"General Security Concepts",
"A developer wants to provide assurance that an application has not been modified. Which technique does the guide select?",
[
 "Secure cookies",
 "Input validation",
 "Static analysis",
 "Code signing"
],
3,
"The guide selects code signing as an application-integrity mechanism."
),

CQ(
268,
"General Security Concepts",
"A security engineer is planning full-disk encryption for company laptops. Which two items does the guide identify as particularly important?",
[
 "Key escrow",
 "TPM presence",
 "Digital signatures",
 "Data tokenization",
 "Public key management",
 "Certificate authority linking"
],
[0,1],
"The guide selects key escrow and TPM presence. Escrow supports recovery, while a TPM can securely protect encryption-related key material.",
true
),

CQ(
297,
"General Security Concepts",
"A user sends an email containing a digital signature. Which security concept prevents the sender from later denying that the message was sent?",
[
 "Non-repudiation",
 "Confidentiality",
 "Integrity",
 "Authentication"
],
0,
"The guide selects non-repudiation and associates digital signatures with proving message origin."
),

CQ(
329,
"General Security Concepts",
"A financial organization wants calculations performed on sensitive cloud data while the data remains encrypted. Computational overhead is acceptable. Which technique does the guide select?",
[
 "Asymmetric encryption",
 "Symmetric encryption",
 "Homomorphic encryption",
 "Ephemeral encryption"
],
2,
"The guide selects homomorphic encryption because operations can be performed on encrypted information without first decrypting it."
),

CQ(
378,
"General Security Concepts",
"Which statement best describes the difference between encryption and hashing according to the guide?",
[
 "Encryption protects only data in transit while hashing protects data at rest",
 "Encryption converts cleartext to ciphertext while hashing produces a one-way digest or checksum",
 "Encryption provides integrity while hashing provides confidentiality",
 "Encryption uses only public keys while hashing uses private keys"
],
1,
"The guide distinguishes reversible encryption used for confidentiality from one-way hashing used primarily for integrity verification."
),

CQ(
381,
"General Security Concepts",
"A database contains credit-card numbers for pending transactions. Which method does the guide select to reduce exposure of the actual card values?",
[
 "Hashing",
 "Obfuscation",
 "Tokenization",
 "Masking"
],
2,
"The guide selects tokenization."
),

CQ(
595,
"General Security Concepts",
"Which method does the guide identify as most commonly used to protect data in transit?",
[
 "Encryption",
 "Obfuscation",
 "Permission restrictions",
 "Hashing"
],
0,
"The guide selects encryption for confidentiality of transmitted information."
),

CQ(
616,
"General Security Concepts",
"Which mechanism can help recover encrypted data when the normal decryption key has been lost?",
[
 "CSR",
 "Salting",
 "Root of trust",
 "Escrow"
],
3,
"The guide selects key escrow because a securely retained copy of key material can support recovery."
),

CQ(
617,
"Security Architecture",
"Which mechanism does the guide identify for checking certificate revocation status when a certificate is presented?",
[
 "OCSP",
 "CSR",
 "CA",
 "CRC"
],
0,
"The guide selects OCSP, which allows certificate status to be queried."
),

CQ(
632,
"General Security Concepts",
"A system should display only the final four digits of a credit-card number. Which protection technique does the guide select?",
[
 "Encryption",
 "Hashing",
 "Masking",
 "Tokenization"
],
2,
"The guide selects masking because part of the original value may remain visible while the remainder is hidden."
),

CQ(
633,
"General Security Concepts",
"Which certificate type is generated internally without relying on an external certificate authority?",
[
 "Digital signature",
 "Asymmetric key",
 "Self-signed certificate",
 "Symmetric key"
],
2,
"The guide selects a self-signed certificate."
),

CQ(
681,
"General Security Concepts",
"Which technique can identify whether data has been modified while in transit?",
[
 "Hashing",
 "Tokenization",
 "Masking",
 "Encryption"
],
0,
"The guide selects hashing for integrity verification."
),

CQ(
735,
"General Security Concepts",
"An administrator encrypts all organizational hard drives. Which security objective does the guide associate most directly with this action?",
[
 "Integrity",
 "Authentication",
 "Zero Trust",
 "Confidentiality"
],
3,
"The guide selects confidentiality because encrypted storage prevents unauthorized parties from reading the protected information."
)

];


/* Add V3 crypto questions to the main bank */
questions.push(...cryptoQuestions);


/* ============================================================
   V3 CRYPTO FLASHCARDS
   ============================================================ */

flashcards.push(
 ["Encryption","Transforms readable plaintext into ciphertext to protect confidentiality."],
 ["Hashing","Creates a one-way digest commonly used to verify integrity."],
 ["PKI","Public Key Infrastructure — the ecosystem supporting certificates and public/private keys."],
 ["Key Escrow","Secure retention of encryption keys for authorized recovery."],
 ["TPM","Trusted Platform Module — hardware used for secure cryptographic operations and key protection."],
 ["Digital Signature","Supports integrity, authentication and non-repudiation."],
 ["OCSP","Online Certificate Status Protocol — checks certificate revocation status."],
 ["CRL","Certificate Revocation List — a CA-published list of revoked certificates."],
 ["CSR","Certificate Signing Request."],
 ["Tokenization","Replaces sensitive data with a non-sensitive substitute token."],
 ["Masking","Hides portions of information while leaving selected portions visible."],
 ["Homomorphic Encryption","Allows certain operations to be performed while information remains encrypted."],
 ["Self-Signed Certificate","A certificate signed by its own key rather than an external CA."],
 ["TLS","Transport Layer Security — protects network communications."],
 ["Code Signing","Uses cryptographic signatures to provide assurance about software origin and integrity."]
);


/* ============================================================
   V3 CRYPTO ACRONYMS
   ============================================================ */

acronyms.push(
 ["PKI","Public Key Infrastructure"],
 ["TPM","Trusted Platform Module"],
 ["HSM","Hardware Security Module"],
 ["KMS","Key Management System"],
 ["OCSP","Online Certificate Status Protocol"],
 ["CRL","Certificate Revocation List"],
 ["CSR","Certificate Signing Request"],
 ["TLS","Transport Layer Security"],
 ["FDE","Full-Disk Encryption"]
);


/* ============================================================
   V3 CRYPTO PRACTICE MODE
   ============================================================ */

function startCryptoDrill(count=10){

 const pool=shuffle(
  questions.filter(q=>q.crypto)
 );

 practiceQuestions=
  pool.slice(0,Math.min(count,pool.length));

 practiceIndex=0;
 practiceScore=0;

 showPage("practice");

 document
  .getElementById("practiceSetup")
  .classList.add("hidden");

 document
  .getElementById("practiceResults")
  .classList.add("hidden");

 document
  .getElementById("practiceQuiz")
  .classList.remove("hidden");

 renderPracticeQuestion();
}


/* ============================================================
   V3 CRYPTO EXAM
   ============================================================ */

function startCryptoExam(count=20){

 const pool=shuffle(
  questions.filter(q=>q.crypto)
 );

 examQuestions=
  pool.slice(0,Math.min(count,pool.length));

 examAnswers={};
 examIndex=0;

 showPage("exam");

 document
  .getElementById("examSetup")
  .classList.add("hidden");

 document
  .getElementById("examResults")
  .classList.add("hidden");

 document
  .getElementById("examArea")
  .classList.remove("hidden");

 clearInterval(timerHandle);

 document.getElementById("examTimer").textContent=
  "Crypto Exam";

 renderExamQuestion();
}


/* ============================================================
   V3 CRYPTO MASTERY
   ============================================================ */

function getCryptoStats(){

 const ids=new Set(
  questions
   .filter(q=>q.crypto)
   .map(q=>q.id)
 );

 const attempts=
  state.history.filter(h=>ids.has(h.id));

 const correct=
  attempts.filter(h=>h.correct).length;

 return {
  attempts:attempts.length,
  correct,
  accuracy:
   attempts.length
   ? Math.round(correct/attempts.length*100)
   : 0
 };
}


/* Extend the existing dashboard */
const v2RenderDashboard=renderDashboard;

renderDashboard=function(){

 v2RenderDashboard();

 const stats=getCryptoStats();

 let crypto=document.getElementById("cryptoMasteryV3");

 if(!crypto){

  crypto=document.createElement("div");

  crypto.id="cryptoMasteryV3";
  crypto.className="card section";

  const domainCard=
   document.querySelector("#dashboard .card.section");

  domainCard.insertAdjacentElement(
   "afterend",
   crypto
  );
 }

 crypto.innerHTML=`
  <div class="section-head">
   <div>
    <h2>🔐 Cryptography & PKI</h2>
    <span class="muted">
     Dedicated V3 mastery track
    </span>
   </div>
  </div>

  <div class="domain">
   <div class="domain-row">
    <span>Crypto Mastery</span>
    <span>
     ${
      stats.attempts
      ? stats.accuracy+"%"
      : "Not started"
     }
    </span>
   </div>

   <div class="bar">
    <div
     class="fill"
     style="width:${stats.accuracy}%">
    </div>
   </div>
  </div>

  <p class="muted">
   ${stats.correct} correct from
   ${stats.attempts} attempts
  </p>

  <div class="actions">
   <button
    class="primary"
    onclick="startCryptoDrill(10)">
    🔐 Crypto Drill
   </button>

   <button
    class="secondary"
    onclick="startCryptoExam(20)">
    Crypto Exam
   </button>
  </div>
 `;
};


/* Add Crypto shortcut to main hero */

const cryptoHeroButton=
 document.createElement("button");

cryptoHeroButton.className="secondary";

cryptoHeroButton.innerHTML=
 "🔐 Cryptography";

cryptoHeroButton.onclick=()=>{
 startCryptoDrill(10);
};

document
 .querySelector("#dashboard .hero .actions")
 .appendChild(cryptoHeroButton);


/* Add Crypto shortcut to Practice setup */

const cryptoPracticeButton=
 document.createElement("button");

cryptoPracticeButton.className="secondary";

cryptoPracticeButton.innerHTML=
 "🔐 Crypto-Only Drill";

cryptoPracticeButton.onclick=()=>{
 startCryptoDrill(10);
};

document
 .querySelector("#practiceSetup .actions")
 .appendChild(cryptoPracticeButton);
