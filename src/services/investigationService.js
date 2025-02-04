import * as Sentry from '@sentry/browser';

export async function submitInvestigation(informationType) {
  const payload = {
    user_id: "123456",
    app_id: "70f3c1ed-7865-46f1-bfd2-1455b714b07d",
    variables: [
      { variable: "User ID", value: "123456" },
      { variable: "User Email", value: "user@example.com" },
      { variable: "information_type", value: informationType }
    ],
    next_node_id: 14
  };

  try {
    const response = await fetch('https://api.zapt.live', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'dd39ba99-275b-441e-bec3-54b5a1183fbc'
      },
      body: JSON.stringify(payload)
    });
    if (!response.ok) {
      throw new Error('API response was not ok');
    }
    return await response.json();
  } catch (error) {
    Sentry.captureException(error);
    throw error;
  }
}