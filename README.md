<h1>Company Registration Form – Vue 3 (Composition API)</h1>

<p>
  A multi-step form built with <strong>Vue 3</strong> and the <strong>Composition API</strong>. It helps users register their company by selecting their country and providing personal details like name and email. The form adapts based on user input (e.g. shows VAT fields for EU countries).
</p>

<h2>Features</h2>
<ul>
  <li>Multi-step form (2 steps)</li>
  <li>Built using <strong>Vue 3 Composition API</strong></li>
  <li>Validation for VAT, tax office, name, and email</li>
  <li>Country select dropdown fetched from a public API</li>
  <li>Modular components (InputField, FormCard, CountrySelect, etc.)</li>
  <li>Headless UI components using <strong>shadcn/vue</strong></li>
  <li>Centralized form state using <strong>Pinia</strong></li>
  <li>Error feedback on user input</li>
</ul>

<h2>Technologies Used</h2>
<table>
  <thead>
    <tr><th>Tech</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td>Vue 3</td><td>Frontend framework</td></tr>
    <tr><td>Composition API</td><td>Modern, scalable Vue logic</td></tr>
    <tr><td>Pinia</td><td>Lightweight state management</td></tr>
    <tr><td>Axios</td><td>HTTP client for API requests</td></tr>
    <tr><td>Tailwind CSS</td><td>Utility-first styling</td></tr>
    <tr><td>Shadcn/vue</td><td>UI Components</td></tr>
    <tr><td>Vite</td><td>Fast dev environment</td></tr>
  </tbody>
</table>

<h2>How to Run the Project</h2>
<pre>
  
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
</pre>
<p><em>Make sure Node.js and npm are installed on your machine.</em></p>

<h2>Form Steps</h2>
<h3>Step 1: Company Registration Info</h3>
<ul>
  <li>Select Country (flag + name)</li>
  <li>If country is in <strong>Europe</strong>, VAT field appears</li>
  <li>If country is <strong>Greece (GR)</strong>, additional <strong>Tax Office</strong> field appears</li>
</ul>

<h3>Step 2: Personal Details</h3>
<ul>
  <li>Full Name (first & last)</li>
  <li>Valid Email</li>
  <li>Success message shown upon submission</li>
</ul>

<h2>API</h2>
<p>Country data is fetched from:</p>
<pre>https://restcountries.com/v3.1/all?fields=name,cca2,flags,region</pre>
