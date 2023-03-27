export enum TransactionStatus {
    Unprocessed,
    Approved,
    Declined,
    Pending
}

export type updateData = {
    orderId: string,
    paymentStatus: TransactionStatus
}