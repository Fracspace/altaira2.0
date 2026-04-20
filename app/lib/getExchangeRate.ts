import { asyncWrapProviders } from "async_hooks";

export async function getExchangeRate(): Promise<number> {
  try {
    const res = await fetch(` https://v6.exchangerate-api.com/v6/513ec5d7df5eccbd06b0f673/latest/INR`, {
      next: { revalidate: 86400 }
    });
    const data = await res.json();
    return data.conversion_rates.USD;
  } catch (error) {
    console.error("Exchang rate fetch failed", error);
    return 0.012;
  }
}
