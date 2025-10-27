import React from "react";

const CONFIG = {
  ESCROW_ADDRESS: "0xESCROW_CONTRACT_HERE",
  BASESCAN_ESCROW: "https://basescan.org/address/0xESCROW_CONTRACT_HERE",
  SOFTCAP: "200,000 USDC",
  HARDCAP: "1,000,000 USDC",
  RATIO: "1 USDC = 100 HET",
  SAFE_ADDRESS: "0xSAFE_MULTISIG_HERE",
  BASESCAN_SAFE: "https://basescan.org/address/0xSAFE_MULTISIG_HERE",
};

export default function EscrowPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white text-neutral-900 px-6 py-14">
      <div className="max-w-4xl mx-auto">
        {/* HEADER */}
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6">
          Crypteon — Escrow sécurisé
        </h1>
        <p className="text-neutral-700 mb-10">
          Cette page présente les paramètres officiels de la levée via le
          contrat Escrow. L’ensemble des fonds est verrouillé on-chain jusqu’à
          atteinte du softcap, et géré par le Safe multisig.
        </p>

        {/* TABLE */}
        <div className="rounded-2xl border bg-white p-6 shadow-sm mb-10">
          <h2 className="text-xl font-semibold mb-4">Paramètres de la levée</h2>
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b">
                <td className="py-2 font-medium">Adresse du contrat Escrow</td>
                <td>
                  <a
                    href={CONFIG.BASESCAN_ESCROW}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 underline"
                  >
                    {CONFIG.ESCROW_ADDRESS}
                  </a>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-medium">Softcap</td>
                <td>{CONFIG.SOFTCAP}</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-medium">Hardcap</td>
                <td>{CONFIG.HARDCAP}</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-medium">Ratio</td>
                <td>{CONFIG.RATIO}</td>
              </tr>
              <tr>
                <td className="py-2 font-medium">Trésorerie Safe</td>
                <td>
                  <a
                    href={CONFIG.BASESCAN_SAFE}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 underline"
                  >
                    {CONFIG.SAFE_ADDRESS}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* INFO */}
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Participation</h2>
          <p className="text-neutral-700 mb-6">
            Les investisseurs envoient leurs USDC directement à l’adresse du
            contrat Escrow ci-dessus. Les fonds restent bloqués jusqu’à
            l’atteinte du softcap (200k USDC). En cas d’échec avant la date
            limite, ils sont restitués automatiquement.
          </p>

          <a
            href={CONFIG.BASESCAN_ESCROW}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 bg-black text-white rounded-2xl text-sm"
          >
            Vérifier sur BaseScan
          </a>
        </div>

        {/* FOOTER */}
        <p className="mt-10 text-xs text-neutral-500">
          © {new Date().getFullYear()} Crypteon. Levée non promissoire. Escrow
          géré par Safe multisig.
        </p>
      </div>
    </div>
  );
}
