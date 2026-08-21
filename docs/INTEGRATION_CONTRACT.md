# Integration contract

## Upstream

- `VYTALEnterprise` supplies canon, shared stage vocabulary, approved brand
  standards and cross-repository identifiers.

## Peers

Expected peers: VYTALEnterprise, VYTALOperations, VYTALBranding.

## Required record envelope

Every exchanged record must identify `id`, `entity`, `type`, `name`, `status`,
`owner`, and `updatedAt`; domain-specific fields belong under `metadata`.

## Prohibited exchange

No public integration may transmit PHI, PII, credentials, PFS/POF, bank data,
restricted clinical/legal documents or confidential product formulas.

## Change propagation

Changes affecting enterprise canon, brand, claims, 9017 Mendenhall, entity
structure or lending must open a decision record and identify every affected
repository before release.
