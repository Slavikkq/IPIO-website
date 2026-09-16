import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Clock, Check, AlertCircle } from "lucide-react";
import { companyInfo } from "@/data/company";
import SectionHeading from "@/components/ui/SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

const initialData: FormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [formData, setFormData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Вкажіть ім'я";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Вкажіть email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Некоректний формат email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Вкажіть телефон";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Вкажіть тему звернення";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Напишіть повідомлення";
    }

    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setFormData(initialData);
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const inputClass = (fieldName: keyof FormData) =>
    `w-full bg-transparent border-b ${
      errors[fieldName] ? "border-red-500" : "border-graphite-300/20"
    } py-3 px-0 text-white placeholder-graphite-500 focus:border-accent transition-colors duration-300 outline-none text-sm`;

  return (
    <section id="contact" className="relative bg-graphite-950 py-24 lg:py-32">
      <div className="max-w-9xl mx-auto px-6 lg:px-12">
        <SectionHeading
          eyebrow="Контакти"
          title="ГОТОВІ ОБГОВОРИТИ"
          highlight="ПРОЄКТ?"
          className="mb-16 lg:mb-20"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Contact info */}
          <div
            ref={ref}
            className={`lg:col-span-5 reveal ${isVisible ? "is-visible" : ""}`}
          >
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-graphite-300/20 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <div className="text-xs tracking-ultra-wide uppercase text-graphite-400 mb-1">
                    Телефон
                  </div>
                  <a
                    href={`tel:${companyInfo.phone.replace(/[^+\d]/g, "")}`}
                    className="text-lg text-white hover:text-accent transition-colors duration-300"
                  >
                    {companyInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-graphite-300/20 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <div className="text-xs tracking-ultra-wide uppercase text-graphite-400 mb-1">
                    Email
                  </div>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="text-lg text-white hover:text-accent transition-colors duration-300"
                  >
                    {companyInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-graphite-300/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <div className="text-xs tracking-ultra-wide uppercase text-graphite-400 mb-1">
                    Адреса
                  </div>
                  <p className="text-lg text-white">{companyInfo.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-graphite-300/20 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <div className="text-xs tracking-ultra-wide uppercase text-graphite-400 mb-1">
                    Графік роботи
                  </div>
                  <p className="text-lg text-white">
                    {companyInfo.workingHours}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div
            className={`lg:col-span-7 reveal reveal-delay-2 ${isVisible ? "is-visible" : ""}`}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-20 border border-graphite-300/10">
                <div className="w-16 h-16 border border-accent/30 flex items-center justify-center mb-6">
                  <Check className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Запит надіслано
                </h3>
                <p className="text-sm text-graphite-400 text-center max-w-sm">
                  Дякуємо за звернення. Ми зв'яжемося з вами найближчим часом.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs tracking-ultra-wide uppercase text-graphite-400 mb-3">
                      Ім'я *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClass("name")}
                      placeholder="Ваше ім'я"
                    />
                    {errors.name && (
                      <p className="mt-2 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs tracking-ultra-wide uppercase text-graphite-400 mb-3">
                      Компанія
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={inputClass("company")}
                      placeholder="Назва компанії"
                    />
                  </div>

                  <div>
                    <label className="block text-xs tracking-ultra-wide uppercase text-graphite-400 mb-3">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClass("email")}
                      placeholder="Ваш email"
                    />
                    {errors.email && (
                      <p className="mt-2 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs tracking-ultra-wide uppercase text-graphite-400 mb-3">
                      Телефон *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClass("phone")}
                      placeholder="Ваш телефон"
                    />
                    {errors.phone && (
                      <p className="mt-2 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-ultra-wide uppercase text-graphite-400 mb-3">
                    Тема звернення *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={inputClass("subject")}
                    placeholder="Тема звернення"
                  />
                  {errors.subject && (
                    <p className="mt-2 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs tracking-ultra-wide uppercase text-graphite-400 mb-3">
                    Повідомлення *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`${inputClass("message")} resize-none`}
                    placeholder="Опишіть ваш проєкт або запит"
                  />
                  {errors.message && (
                    <p className="mt-2 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-3 bg-accent text-graphite-950 hover:bg-accent-light px-8 py-4 text-sm font-medium tracking-wide uppercase transition-all duration-500 ease-expo"
                  >
                    <span>Надіслати запит</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
