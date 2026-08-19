export type FormspreeFormKey = "contact" | "sponsor" | "register";

type FormspreeSuccess = {
  ok: true;
};

type FormspreeFailure = {
  ok: false;
  message: string;
  missingConfig?: boolean;
};

type FormspreeResult = FormspreeSuccess | FormspreeFailure;

const formIds: Record<FormspreeFormKey, string | undefined> = {
  contact: process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_FORM_ID?.trim(),
  sponsor: process.env.NEXT_PUBLIC_FORMSPREE_SPONSOR_FORM_ID?.trim(),
  register: process.env.NEXT_PUBLIC_FORMSPREE_REGISTER_FORM_ID?.trim()
};

function getFormspreeErrorMessage(payload: unknown) {
  if (
    payload &&
    typeof payload === "object" &&
    "errors" in payload &&
    Array.isArray(payload.errors)
  ) {
    const messages = payload.errors
      .map((error) => {
        if (
          error &&
          typeof error === "object" &&
          "message" in error &&
          typeof error.message === "string"
        ) {
          return error.message;
        }

        return null;
      })
      .filter(Boolean);

    if (messages.length > 0) {
      return messages.join(" ");
    }
  }

  return null;
}

export async function submitFormspreeForm(
  formKey: FormspreeFormKey,
  formData: FormData
): Promise<FormspreeResult> {
  const formId = formIds[formKey];

  if (!formId) {
    return {
      ok: false,
      message:
        "This form is not configured yet. Add the Formspree form ID to your environment and rebuild the site.",
      missingConfig: true
    };
  }

  try {
    const response = await fetch(`https://formspree.io/f/${formId}`, {
      method: "POST",
      headers: {
        Accept: "application/json"
      },
      body: formData
    });

    if (response.ok) {
      return { ok: true };
    }

    const payload = await response.json().catch(() => null);
    const message =
      getFormspreeErrorMessage(payload) ||
      "We could not send your submission. Please try again.";

    return {
      ok: false,
      message
    };
  } catch {
    return {
      ok: false,
      message:
        "We could not reach the form service. Check your connection and try again."
    };
  }
}
