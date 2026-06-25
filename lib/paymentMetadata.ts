type PaymentMetadataInput = {
  clientName: string;
  mobile: string;
  email: string;
  matterReference: string;
};

function compactDate() {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hour = String(now.getHours()).padStart(2, "0");
  const minute = String(now.getMinutes()).padStart(2, "0");
  const second = String(now.getSeconds()).padStart(2, "0");

  return `${year}${month}${day}-${hour}${minute}${second}`;
}

export function createPaymentReceipt() {
  const random = Math.random().toString(36).slice(2, 7).toUpperCase();
  return `ASP-${compactDate()}-${random}`;
}

export function createPaymentNotes(input: PaymentMetadataInput) {
  return {
    client_name: input.clientName,
    client_mobile: input.mobile,
    client_email: input.email || "Not provided",
    matter_reference: input.matterReference || "Not provided",
    purpose: "Professional fees",
    website: "advocatesudiptopanda.in",
  };
}