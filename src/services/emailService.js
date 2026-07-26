import emailjs from "@emailjs/browser";

export const sendContactEmail = async (formData) => {
  return await emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      from_name: formData.name.trim(),
      from_email: formData.email.trim(),
      phone: formData.phone.trim(),
      company: formData.company.trim(),
      subject: formData.subject,
      message: formData.message.trim(),
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );
};