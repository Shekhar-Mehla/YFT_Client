import { getTranscation } from "../AxiousHelper/axious";

export const fetchTransactions = async () => {
  try {
    const transaction = await getTranscation();
    console.log(transaction);
    if (transaction) {
      return transaction;
    }
  } catch (error) {
    console.error("Error fetching transactions:", error);
  }
};
