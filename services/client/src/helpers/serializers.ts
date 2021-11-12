export const serializeFormData = (
  payload: Record<string, string | number | FileList | null>,
): FormData => {
  const formData = new FormData();
  Object.entries(payload).forEach(([key, value]) => {
    if (key === "files") {
      Array.from(value as FileList).forEach((file) => {
        formData.append(key, file as File);
      });
    } else if (value) {
      formData.append(key, value.toString());
    }
  });

  return formData;
};
