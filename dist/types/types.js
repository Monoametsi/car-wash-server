export var TransactionStatus;
(function (TransactionStatus) {
    TransactionStatus[TransactionStatus["Unprocessed"] = 0] = "Unprocessed";
    TransactionStatus[TransactionStatus["Approved"] = 1] = "Approved";
    TransactionStatus[TransactionStatus["Declined"] = 2] = "Declined";
    TransactionStatus[TransactionStatus["Pending"] = 3] = "Pending";
})(TransactionStatus || (TransactionStatus = {}));
//# sourceMappingURL=types.js.map