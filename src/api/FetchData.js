import { BASE_URL } from "./configs";

export async function FetchData(latitude, longitude) {
  try {
    return fetch(
      `${BASE_URL}?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max&timezone=UTC`
    )
      .then((response) => response.json())
      .then((results) => {
        return results.daily.temperature_2m_max;
      });
  } catch (error) {
    console.error(error);
  }
}
