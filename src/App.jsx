import React, { useEffect, useState } from "react";

// ====== CONFIG À PERSONNALISER ======
const CONFIG = {
  PROJECT_NAME: "Crypteon — HET",
  TAGLINE: "Infra minière BTC décentralisée, financée par la communauté.",
  CHAIN: "Base Mainnet",
  CONTRACT_ADDRESS: "0x4E4CC9a23FDF6b04C0bd1D13cD2d6A223FFFa293", // HET
  SAFE_ADDRESS: "0xSAFE_MULTISIG_HERE",          // <-- à remplacer
  ESCROW_ADDRESS: "0xESCROW_CONTRACT_HERE",      // <-- à remplacer
  BASESCAN_TOKEN: "https://basescan.org/token/0x4E4CC9a23FDF6b04C0bd1D13cD2d6A223FFFa293",
  BASESCAN_SAFE: "https://basescan.org/address/0xSAFE_MULTISIG_HERE",
  BASESCAN_ESCROW: "https://basescan.org/address/0xESCROW_CONTRACT_HERE",
  ESCROW_PAGE: "/escrow", // ou lien BaseScan/Thirdweb UI si tu préfères
  DOCS_WHITEPAPER_FR: "/docs/whitepaper-fr.pdf",
  DOCS_WHITEPAPER_EN: "/docs/whitepaper-en.pdf",
  TWITTER: "https://x.com/CRYPTEON_HANDLE",
  TELEGRAM: "https://t.me/CRYPTEON_HANDLE",
  GITHUB: "https://github.com/sebanouar/crypteon-site",
};

// ====== HOOK ORACLE (lit /data/oracle.json) ======
function useOracle() {
  const [data, setData] = useState({ ok: false, last_update: null, metrics: {} });
  useEffect(() => {
    fetch("/data/oracle.json?_=" + Date.now())
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => { if (j && j.ok) setData(j); })
      .catch(() => {});
  }, []);
  return data;
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-6 py-14">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">{title}</h2>
      <div className="grid gap-6">{children}</div>
    </section>
  );
}

export default function App() {
  const oracle = useOracle();

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white text-neutral-900">
      {/* NAV */}
<header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
  <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
    <div className="font-bold">{CONFIG.PROJECT_NAME}</div>
    <div className="hidden md:flex items-center gap-4 text-sm">
      <a href="#about" className="hover:underline">Vision</a>
      <a href="#token" className="hover:underline">Token</a>
      <a href="#contracts" className="hover:underline">Contrats</a>
      <a href="#lifecycle" className="hover:underline">Plan</a>
      <a href="#transparency" className="hover:underline">Transparence</a>
      <a href="#airdrop" className="hover:underline">Airdrop</a>
    </div>
    <a
      href="/escrow"
      className="px-4 py-2 rounded-2xl bg-black text-white text-sm"
    >
      Participer via Escrow sécurisé
    </a>
  </nav>
</header>

{/* HERO */}
<section className="max-w-6xl mx-auto px-6 py-20">
  <div className="grid md:grid-cols-2 gap-10 items-center">
    <div>
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
        {CONFIG.TAGLINE}
      </h1>
      <p className="mt-4 text-neutral-700">
        Phase 1 : levée exclusivement via Escrow (USDC). HET existe sur Base,
        mais la liquidité principale sera activée en Phase 2. Transparence on-chain & Safe multisig.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="/escrow"
          className="px-4 py-2 rounded-2xl bg-black text-white text-sm"
        >
          Participer via Escrow sécurisé
        </a>
        <a
          href={CONFIG.BASESCAN_TOKEN}
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded-2xl border text-sm"
        >
          Voir HET sur BaseScan
        </a>
      </div>

      <p className="mt-3 text-xs text-neutral-500">
        Contrat token : {CONFIG.CONTRACT_ADDRESS}
      </p>
    </div>
    {/* … le panneau “Statut Oracles” à droite reste inchangé … */}
  </div>
</section>

      {/* ABOUT */}
      <Section id="about" title="Vision & principes">
        <div className="grid md:grid-cols-3 gap-6">
          <Card title="Vision validée">
            Infra minière BTC décentralisée, farms pro hébergées US, transparence on-chain, trésorerie Safe.
          </Card>
          <Card title="Paramètres (WP v2)">
            <ul className="list-disc pl-4 space-y-1 text-sm">
              <li>Softcap : 200k USDC</li>
              <li>Hardcap : 1M USDC</li>
              <li>Répartition revenus : 60% holders / 20% fondateur / 20% trésor</li>
              <li>Buyback mensuel ≤ 10% cash-flow net (non-garanti)</li>
            </ul>
          </Card>
          <Card title="Sécurité & Gouvernance">
            Safe multisig 2/3 (timelock 48h), passage 3/5, seuils d’achats ASIC &gt; 25k USDC → annonce + timelock.
          </Card>
        </div>
      </Section>

      {/* TOKEN */}
      <Section id="token" title="Token HET">
        <div className="grid md:grid-cols-2 gap-6">
          <Card title="Données clés">
            <ul className="list-disc pl-4 space-y-1 text-sm">
              <li>Réseau : {CONFIG.CHAIN}</li>
              <li>Adresse : {CONFIG.CONTRACT_ADDRESS}</li>
              <li>Supply : 1 000 000 000 HET (fixe)</li>
              <li>Fonctions : ERC-20, Pausable via Safe (pas de blacklist)</li>
              <li>Levée Phase 1 : exclusivement via Escrow (USDC)</li>
            </ul>
          </Card>
          <Card title="Politique de réserve (Phase 1 → Phase 2)">
            <ul className="list-disc pl-4 space-y-1 text-sm">
              <li>Pas de mint futur. Stock non distribué = Réserve Phase 2.</li>
              <li>Ratio de référence : 1 USDC = 100 HET.</li>
              <li>Softcap 200k → 20M HET max ; Hardcap 1M → 100M HET max.</li>
              <li>Toute liquidité avant Phase 2 n’est pas représentative de la valeur du projet.</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* CONTRACTS */}
      <Section id="contracts" title="Contrats vérifiés">
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <Card title="HET Token">
            <p className="mb-3">ERC-20 vérifié sur BaseScan.</p>
            <a className="underline" href={CONFIG.BASESCAN_TOKEN} target="_blank" rel="noreferrer">Voir sur BaseScan</a>
          </Card>
          <Card title="Safe multisig">
            <p className="mb-3">Trésorerie avec timelock 48h et seuils publics.</p>
            <a className="underline" href={CONFIG.BASESCAN_SAFE} target="_blank" rel="noreferrer">Voir le Safe</a>
          </Card>
          <Card title="Contrat Escrow">
            <p className="mb-3">Canal unique de levée (USDC) : softcap 200k, hardcap 1M.</p>
            <a className="underline" href={CONFIG.BASESCAN_ESCROW} target="_blank" rel="noreferrer">Voir l’Escrow</a>
          </Card>
        </div>
      </Section>

      {/* ROADMAP */}
      <Section id="lifecycle" title="Plan de déploiement">
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <Card title="Vague 1 (T1)">
            <ul className="list-disc pl-4 space-y-1">
              <li>Levée softcap 200k (Escrow only)</li>
              <li>Contrats d’hébergement (US)</li>
              <li>Premiers ASIC installés</li>
            </ul>
          </Card>
          <Card title="Vague 2 (T2)">
            <ul className="list-disc pl-4 space-y-1">
              <li>Scaling farms + reporting oracles</li>
              <li>Dashboard public & rapports IPFS</li>
              <li>LP principale (réserve Phase 2)</li>
            </ul>
          </Card>
          <Card title="Vague 3 (T3)">
            <ul className="list-disc pl-4 space-y-1">
              <li>DAO light & votes thématiques</li>
              <li>Oracles redondants</li>
              <li>Optimisations (barbell, TWAP buyback)</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* TRANSPARENCY */}
      <Section id="transparency" title="Transparence">
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <Card title="Trésorerie Safe">
            <p className="mb-3">Multi-sig + timelock 48h. Dépenses &gt; 25k USDC annoncées.</p>
            <a className="underline" href={CONFIG.BASESCAN_SAFE} target="_blank" rel="noreferrer">Voir le Safe</a>
          </Card>
          <Card title="Rapports mensuels">
            PDF/IPFS, hash ancré on-chain, canal incident dédié.
          </Card>
          <Card title="Oracles & redondance">
            Chainlink (principal) + reporter custom + fallback manuel via Safe.
          </Card>
        </div>
      </Section>

      {/* AIRDROP */}
      <Section id="airdrop" title="Airdrop Phase 1">
        <Card>
          <ul className="list-disc pl-4 space-y-1 text-sm">
            <li>Merkle Claim — 0,5% supply (5 000 000 HET)</li>
            <li>Éligibilité : ≥ 1 000 HET au snapshot</li>
            <li>Fenêtre de claim : 30 jours (clawback trésor utilités)</li>
            <li>Snapshot proposé : 27/10/2025 12:00 CET (ajustable)</li>
          </ul>
        </Card>
      </Section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} Crypteon. Pas d’engagement de rendement. Levée via Escrow uniquement.
      </footer>
    </div>
  );
}

// Petit composant carte Tailwind (sans dépendances externes)
function Card({ title, children }) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      {title && <h4 className="font-semibold mb-2">{title}</h4>}
      <div className="text-neutral-700">{children}</div>
    </div>
  );
}
