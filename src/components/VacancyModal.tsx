import React from 'react';

type Props = {
  open: boolean;
  onClose: () => void;
  presetRole?: string;
};

const ROLES = [
  'nail technician',
  'eyelash technician',
  'cosmetologist',
  'aesthetic injector',
  'brows technician',
];

export default function VacancyModal({ open, onClose, presetRole }: Props) {
  const [role, setRole] = React.useState<string>(presetRole || ROLES[0]);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [cv, setCv] = React.useState<File | null>(null);
  const [submitting, setSubmitting] = React.useState(false);
  const endpoint = (import.meta as any).env?.VITE_FORMS_ENDPOINT as string | undefined;

  React.useEffect(() => {
    if (presetRole) setRole(presetRole);
  }, [presetRole]);

  if (!open) return null;

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (!name || !email) return;
    setSubmitting(true);
    try {
      if (endpoint) {
        const fd = new FormData();
        fd.append('role', role);
        fd.append('name', name);
        fd.append('email', email);
        fd.append('message', message);
        if (cv) fd.append('cv', cv, cv.name);
        const res = await fetch(endpoint, {
          method: 'POST',
          body: fd,
        });
        if (!res.ok) throw new Error('Failed');
        onClose();
        alert('Application sent successfully.');
      } else {
        const subject = encodeURIComponent(`Vacancy Application: ${role}`);
        const body = encodeURIComponent(`Role: ${role}\nName: ${name}\nEmail: ${email}\nMessage: ${message}\n\n(Attach your CV if not uploaded)`);
        window.location.href = `mailto:mk.nails.n.beauty@gmail.com?subject=${subject}&body=${body}`;
        onClose();
      }
    } catch {
      alert('Could not send application. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="relative bg-black border border-[#D4AF37]/40 rounded-xl w-[92vw] max-w-[560px] p-5 md:p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[#D4AF37] text-xl md:text-2xl font-bold">Apply Now</h3>
          <button onClick={onClose} className="text-white/80 hover:text-white" aria-label="Close">
            ✕
          </button>
        </div>
        <form onSubmit={onSubmit} className="space-y-3">
          <div>
            <label className="block text-sm mb-1">Position</label>
            <select
              className="w-full bg-white text-black rounded-md px-3 py-2 text-sm"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              {ROLES.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              className="w-full bg-white text-black rounded-md px-3 py-2 text-sm"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              className="w-full bg-white text-black rounded-md px-3 py-2 text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              className="w-full bg-white text-black rounded-md px-3 py-2 text-sm min-h-[90px]"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm mb-1">CV</label>
            <input
              type="file"
              accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
              onChange={(e) => setCv(e.target.files?.[0] || null)}
              className="block w-full text-sm"
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-[#D4AF37] text-black font-bold rounded-md py-2 mt-2 disabled:opacity-70"
          >
            {submitting ? 'Sending…' : 'Send Application'}
          </button>
        </form>
        {!endpoint && (
          <p className="text-xs text-white/70 mt-3">Tip: Set VITE_FORMS_ENDPOINT to receive applications with CV uploads.</p>
        )}
      </div>
    </div>
  );
}
