
# Jotapex - Firebase Full System (GitHub Pages frontend + Firebase backend)

This package includes a complete starter project using Firebase (Auth + Firestore + Functions) and a frontend ready for GitHub Pages or Firebase Hosting.

## What it contains
- public/ (frontend): index.html, style.css, client-firebase.js
- admin/: admin panel (login, dashboard, products CRUD, orders management)
- functions/: Cloud Functions that create PIX payment with Mercado Pago and receive webhooks
- README with detailed setup steps

## Quick deploy instructions
1. Install Firebase CLI: npm install -g firebase-tools
2. Login: firebase login
3. From this folder, link your project: firebase use --add (choose your project)
4. Configure Mercado Pago token (in your terminal): firebase functions:config:set mercadopago.token="SEU_MP_ACCESS_TOKEN_AQUI"
5. Deploy functions and hosting: firebase deploy --only functions,hosting
6. Create admin user in Firebase Console > Authentication > Add user:
   - Email: admin@jotapex.local
   - Password: Xapiscog0d022
7. Set custom claim 'admin' for that UID using the provided setAdmin.js script and your service account:
   node setAdmin.js <UID> <path-to-serviceAccountKey.json>
8. Add products in Firestore collection 'products' (fields: name (string), price (number), emoji (string))
9. Use the site and test checkout. Webhook endpoint is /mpWebhook (Firebase will provide public URL)

## Security notes
- Do NOT commit secrets (service account JSON or MP access token) to public repos.
- For production, validate Mercado Pago notifications and restrict access where needed.

