import React, { useState } from 'react';
import { cvDataMap, Language } from '../data/cvData';
import { Mail, Send, CheckCircle2 } from 'lucide-react';
import { LinkedinIcon, GithubIcon, GitlabIcon } from './Icons';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const { personalInfo, ui } = cvDataMap[lang];
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Simulate submission
    setSubmitted(true);
    setTimeout(() => {
      // open mailto link with filled fields
      const defaultSubject = lang === 'en' ? 'Inquiry from CV Portfolio' : 'Contacto desde CV Web';
      const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        formData.subject || defaultSubject
      )}&body=${encodeURIComponent(
        `${lang === 'en' ? 'Name' : 'Nombre'}: ${formData.name}\nEmail: ${formData.email}\n\n${lang === 'en' ? 'Message' : 'Mensaje'}:\n${formData.message}`
      )}`;
      window.location.href = mailtoLink;
    }, 800);
  };

  return (
    <section id="contacto" className="max-w-[1440px] mx-auto px-4 sm:px-8 pt-12 pb-16 font-sans">
      {/* 1px Hairline Divider with Section Header */}
      <div className="border-t border-hairline pt-4 mb-10 flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <h2 className="text-heading-xl font-medium tracking-tight text-ink uppercase">
            {ui.contact.sectionNum} / {ui.contact.sectionTitle}
          </h2>
          <p className="text-caption-md font-medium text-mute uppercase mt-1">
            {ui.contact.sectionSubtitle}
          </p>
        </div>
        <span className="text-caption-sm text-success font-medium uppercase tracking-wider flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-success"></span>
          {ui.contact.activeTag}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Editorial Card: Direct Channels */}
        <div className="lg:col-span-5 bg-soft-cloud p-8 flex flex-col justify-between space-y-8">
          <div>
            <span className="text-caption-sm text-mute uppercase tracking-wider font-semibold">
              {ui.contact.directHeading}
            </span>
            <h3 className="font-display text-4xl sm:text-5xl text-ink uppercase leading-tight mt-2">
              {ui.contact.directTitle}
            </h3>
            <p className="text-body-md text-charcoal mt-4 leading-relaxed">
              {ui.contact.directDesc}
            </p>
          </div>

          <div className="space-y-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center space-x-3 p-3 bg-canvas border border-hairline hover:border-ink transition-colors group"
            >
              <div className="btn-icon-circular w-10 h-10 group-hover:bg-ink group-hover:text-canvas transition-colors">
                <Mail className="w-4 h-4" />
              </div>
              <div className="overflow-hidden">
                <p className="text-utility-xs text-mute uppercase tracking-wider">{ui.contact.emailLabel}</p>
                <p className="text-body-strong text-ink truncate">{personalInfo.email}</p>
              </div>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-3 bg-canvas border border-hairline hover:border-ink transition-colors group"
            >
              <div className="btn-icon-circular w-10 h-10 group-hover:bg-ink group-hover:text-canvas transition-colors">
                <LinkedinIcon className="w-4 h-4" />
              </div>
              <div>
                <p className="text-utility-xs text-mute uppercase tracking-wider">{ui.contact.linkedinLabel}</p>
                <p className="text-body-strong text-ink">linkedin.com/in/joaquin-diaz-syrotink</p>
              </div>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-3 bg-canvas border border-hairline hover:border-ink transition-colors group"
            >
              <div className="btn-icon-circular w-10 h-10 group-hover:bg-ink group-hover:text-canvas transition-colors">
                <GithubIcon className="w-4 h-4" />
              </div>
              <div>
                <p className="text-utility-xs text-mute uppercase tracking-wider">{ui.contact.githubLabel}</p>
                <p className="text-body-strong text-ink">github.com/joaco844</p>
              </div>
            </a>

            {personalInfo.gitlab && (
              <a
                href={personalInfo.gitlab}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-3 bg-canvas border border-hairline hover:border-ink transition-colors group"
              >
                <div className="btn-icon-circular w-10 h-10 group-hover:bg-ink group-hover:text-canvas transition-colors">
                  <GitlabIcon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-utility-xs text-mute uppercase tracking-wider">{ui.contact.gitlabLabel}</p>
                  <p className="text-body-strong text-ink">gitlab.com/joaco_diaz</p>
                </div>
              </a>
            )}
          </div>

          <div className="pt-4 border-t border-hairline text-utility-xs text-mute uppercase tracking-widest">
            {ui.contact.timezone}
          </div>
        </div>

        {/* Right Column: Form with Nike pill inputs and primary button */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-caption-sm font-medium text-ink uppercase mb-2">
                  {ui.contact.nameLabel}
                </label>
                <input
                  type="text"
                  required
                  placeholder={ui.contact.namePlaceholder}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="search-pill w-full text-caption-md"
                />
              </div>

              <div>
                <label className="block text-caption-sm font-medium text-ink uppercase mb-2">
                  {ui.contact.emailInputLabel}
                </label>
                <input
                  type="email"
                  required
                  placeholder={ui.contact.emailPlaceholder}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="search-pill w-full text-caption-md"
                />
              </div>
            </div>

            <div>
              <label className="block text-caption-sm font-medium text-ink uppercase mb-2">
                {ui.contact.subjectLabel}
              </label>
              <input
                type="text"
                placeholder={ui.contact.subjectPlaceholder}
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="search-pill w-full text-caption-md"
              />
            </div>

            <div>
              <label className="block text-caption-sm font-medium text-ink uppercase mb-2">
                {ui.contact.messageLabel}
              </label>
              <textarea
                required
                rows={5}
                placeholder={ui.contact.messagePlaceholder}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-soft-cloud text-ink text-caption-md p-4 rounded-2xl border border-transparent focus:border-ink focus:bg-canvas focus:outline-none focus:ring-4 focus:ring-soft-cloud transition-all resize-none"
              />
            </div>

            {submitted ? (
              <div className="p-4 bg-soft-cloud border border-success flex items-center space-x-3 text-success">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span className="text-caption-md font-medium uppercase tracking-tight">
                  {ui.contact.successMsg}
                </span>
              </div>
            ) : (
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  className="btn-primary"
                >
                  <span>{ui.contact.submitBtn}</span>
                  <Send className="w-4 h-4 ml-2" />
                </button>

                <p className="text-utility-xs text-mute uppercase tracking-wider">
                  {ui.contact.privacyNote}
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
