export class Claim {
  id?: number;

  claimedDate?: string;
  documentProof?: [];
  causeOfClaim?: string;
  claimableAmount?: number;

  claimRequestAmount?: number;

  claimReviewed?: boolean;

  constructor(
    id: number,
    claimedDate: string,
    documentProof: [],
    causeOfClaim: string,
    claimableAmount: number,
    claimRequestAmount: number,
    claimReviewed: boolean
  ) {
    this.id = id;

    this.claimedDate = claimedDate;

    this.documentProof = documentProof;

    this.causeOfClaim = causeOfClaim;

    this.claimableAmount = claimableAmount;

    this.claimRequestAmount = claimRequestAmount;

    this.claimReviewed = claimReviewed;
  }
}
