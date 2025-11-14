// Usage: node setAdmin.js <UID> <path-to-serviceAccountKey.json>
const admin = require('firebase-admin');
const uid = process.argv[2];
const keyPath = process.argv[3];
if(!uid || !keyPath){ console.error('Usage: node setAdmin.js <UID> <serviceAccountKey.json>'); process.exit(1); }
const serviceAccount = require(keyPath);
admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
admin.auth().setCustomUserClaims(uid, { admin: true }).then(()=>{ console.log('Claim set for', uid); process.exit(0); }).catch(e=>{ console.error(e); process.exit(1); });