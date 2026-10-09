import fs from 'fs';

const content = `BT
/F1 20 Tf
50 740 Td
(DIVYANSHI GUPTA) Tj
/F1 10 Tf
0 -18 Td
(Full-Stack Software Engineer | Noida, India | divyanshi2028@gmail.com | +91-7017796542) Tj
0 -14 Td
(LinkedIn: https://www.linkedin.com/in/divyanshi-gupta) Tj
0 -24 Td
/F1 13 Tf
(PROFESSIONAL SUMMARY) Tj
/F1 9 Tf
0 -16 Td
(Full-Stack Software Engineer with nearly 3 years of combined experience specializing in ASP.NET Core,) Tj
0 -12 Td
(.NET 7+, C#, React, Angular, SQL Server, and AI-integrated backend systems. Proven record in enterprise systems.) Tj
0 -22 Td
/F1 13 Tf
(WORK EXPERIENCE) Tj
/F1 10 Tf
0 -16 Td
(Software Engineer - Full Stack | Sanskriti IT Solutions Pvt. Ltd., Noida | June 2024 - Present) Tj
/F1 9 Tf
0 -14 Td
(- Developed REST APIs and backend services using C# and ASP.NET Core with SQL Server databases.) Tj
0 -12 Td
(- Reduced manual license assignment effort by 40% on multi-tenant SaaS License Administration System.) Tj
0 -12 Td
(- Achieved 35% improvement in Angular CMS load time using lazy loading and API response caching.) Tj
0 -12 Td
(- Implemented JWT authentication, Google OAuth2, RBAC, and audit logging for protected systems.) Tj
0 -16 Td
/F1 10 Tf
(Android Developer Intern | Sanskriti IT Solutions Pvt. Ltd., Noida | Feb 2024 - June 2024) Tj
/F1 9 Tf
0 -14 Td
(- Integrated REST APIs for login, signup, and OTP workflows; contributed to testing and bug fixes.) Tj
0 -22 Td
/F1 13 Tf
(KEY PROJECTS) Tj
/F1 9 Tf
0 -15 Td
(- License Administration System: Multi-tenant SaaS licensing with RBAC, ASP.NET Core, Angular, SQL Server.) Tj
0 -13 Td
(- Dating Platform: Real-time matching, JWT, Google OAuth2, ASP.NET Core backend & React UI.) Tj
0 -13 Td
(- Sales Inventory Management System: Stock telemetry, GST/non-GST billing & invoice generation, .NET, Angular.) Tj
0 -13 Td
(- BellezBuy E-Commerce Platform: React, Node.js, MySQL, Razorpay payments, Brevo transactional emails.) Tj
0 -13 Td
(- WellMove AI-Powered Wellness Platform: Python, FastAPI, ML recommendation workflows, health-data APIs.) Tj
0 -13 Td
(- ASP.NET Calculators Suite: Financial and tax calculation engine with ASP.NET Core MVC & Razor Pages.) Tj
0 -13 Td
(- Boutique Management System: React, Node.js, SQL Server inventory and customer management.) Tj
0 -22 Td
/F1 13 Tf
(EDUCATION & CERTIFICATIONS) Tj
/F1 9 Tf
0 -15 Td
(B.Tech - Computer Science & Engineering | Meerut Institute of Engineering and Technology (2020 - 2024)) Tj
0 -13 Td
(Microsoft Certified: Azure Fundamentals (AZ-900)) Tj
0 -13 Td
(Microsoft Certified: Azure AI Fundamentals (AI-900)) Tj
ET`;

const stream = Buffer.from(content, 'utf-8');
const objects = [
  '1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj',
  '2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj',
  '3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>\nendobj',
  `4 0 obj\n<< /Length ${stream.length} >>\nstream\n${content}\nendstream\nendobj`,
  '5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj'
];

let body = '%PDF-1.4\n';
const offsets = [];
for (let i = 0; i < objects.length; i++) {
  offsets.push(Buffer.byteLength(body, 'utf-8'));
  body += objects[i] + '\n';
}

const startxref = Buffer.byteLength(body, 'utf-8');
let xref = `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
for (const off of offsets) {
  xref += String(off).padStart(10, '0') + ' 00000 n \n';
}

body += xref + `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${startxref}\n%%EOF\n`;

fs.writeFileSync('public/divyanshi-gupta-resume.pdf', body, 'latin1');
console.log('PDF created successfully: public/divyanshi-gupta-resume.pdf');
