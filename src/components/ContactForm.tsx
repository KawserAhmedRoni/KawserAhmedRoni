import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Github, Linkedin, Mail, FolderHeart, Terminal, Trash2, CheckCircle2 } from 'lucide-react';
import { ContactMessage } from '../types';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [logs, setLogs] = useState<string[]>([]);
  const [sentMessages, setSentMessages] = useState<ContactMessage[]>([]);
  const [activeTab, setActiveTab] = useState<'form' | 'outbox'>('form');
  const [isSending, setIsSending] = useState(false);
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);

  // Load message outbox from localstorage
  useEffect(() => {
    const saved = localStorage.getItem('kawser_roni_messages');
    if (saved) {
      try {
        setSentMessages(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
    setLogs(['Awaiting incoming contact stream payload...']);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) return;

    setIsSending(true);
    setLogs(prev => [...prev, `[INITIATING]: POST /api/v1/contact from client_ip...`]);

    setTimeout(() => {
      // Simulate endpoint processing
      const newMsg: ContactMessage = {
        id: 'msg-' + Math.random().toString(36).substr(2, 9),
        name,
        email,
        subject,
        message,
        timestamp: new Date().toLocaleString()
      };

      const updated = [newMsg, ...sentMessages];
      setSentMessages(updated);
      localStorage.setItem('kawser_roni_messages', JSON.stringify(updated));

      setLogs(prev => [
        ...prev,
        `[VALIDATING]: Headers and MIME type: OK. Payload checked.`,
        `[TRANSACTING]: Inserting record to local SQLite buffer...`,
        `>> [POST SUCCESS]: Response status code 201. Message saved.`
      ]);

      setIsSending(false);
      setShowSuccessNotification(true);
      
      // Reset Form fields
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');

      // Auto clear notification after 5s
      setTimeout(() => setShowSuccessNotification(false), 5000);
    }, 1500);
  };

  const handleClearOutbox = () => {
    setSentMessages([]);
    localStorage.removeItem('kawser_roni_messages');
    setLogs(['Outbox cleared successfully. System idle.']);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-8 bg-cyber-dark relative overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-cyber-blue/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyber-violet/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-cyber-gray-900 pb-6" id="contact-header">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-cyber-blue text-xs font-mono">
              <Send className="w-4 h-4 text-cyber-blue animate-pulse" />
              <span>[07] INITIATE PROJECT OR CONSULTATION</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white font-sans sm:text-4xl">
              Get In Touch
            </h2>
          </div>
          <p className="text-sm font-sans text-gray-400 font-light max-w-md mt-4 md:mt-0 leading-relaxed">
            Ready to design highly performant software together? Submit a core system request or reach out through social hubs.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="contact-content-grid">
          
          {/* Left Column: Social channels and terminal monitoring */}
          <div className="lg:col-span-4 space-y-8" id="social-telemetry-panel">
            
            {/* Social channels card */}
            <div className="bg-cyber-gray-950 border border-cyber-gray-900 rounded-lg p-6 space-y-6">
              <h4 className="text-sm font-mono font-bold text-white uppercase tracking-wider">Direct Access Keys</h4>
              
              <div className="space-y-4" id="social-links-list">
                <a 
                  href="mailto:kawserahmedroni.dev@gmail.com"
                  className="flex items-center justify-between p-3.5 bg-cyber-gray-900 border border-cyber-gray-850 hover:border-cyber-blue/50 text-gray-300 hover:text-white rounded transition-all group"
                  id="link-email"
                >
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-cyber-blue" />
                    <span className="text-xs font-mono">kawserahmedroni.dev@gmail.com</span>
                  </div>
                  <span className="text-[10px] font-mono text-gray-500 group-hover:text-cyber-blue">[SEND]</span>
                </a>

                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 bg-cyber-gray-900 border border-cyber-gray-850 hover:border-cyber-blue/50 text-gray-300 hover:text-white rounded transition-all group"
                  id="link-linkedin"
                >
                  <div className="flex items-center space-x-3">
                    <Linkedin className="w-5 h-5 text-cyber-blue" />
                    <span className="text-xs font-mono">linkedin.com/in/kawser-ahmed</span>
                  </div>
                  <span className="text-[10px] font-mono text-gray-500 group-hover:text-cyber-blue">[LINK]</span>
                </a>

                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 bg-cyber-gray-900 border border-cyber-gray-850 hover:border-cyber-blue/50 text-gray-300 hover:text-white rounded transition-all group"
                  id="link-github"
                >
                  <div className="flex items-center space-x-3">
                    <Github className="w-5 h-5 text-cyber-blue" />
                    <span className="text-xs font-mono">github.com/kawser-roni</span>
                  </div>
                  <span className="text-[10px] font-mono text-gray-500 group-hover:text-cyber-blue">[CODE]</span>
                </a>
              </div>
            </div>

            {/* Micro Client Console Log */}
            <div className="bg-cyber-gray-950 border border-cyber-gray-900 rounded-lg overflow-hidden flex flex-col justify-between shadow-lg">
              <div className="bg-cyber-gray-900 px-4 py-2.5 border-b border-cyber-gray-900 flex justify-between items-center">
                <div className="flex items-center space-x-1.5 font-mono text-[10px] text-gray-400">
                  <Terminal className="w-3.5 h-3.5 text-cyber-blue animate-pulse" />
                  <span>POST_DAEMON_LOGS</span>
                </div>
                <span className="w-1.5 h-1.5 rounded-full bg-cyber-emerald" />
              </div>
              
              <div className="p-4 h-[130px] overflow-y-auto bg-black/40 font-mono text-[10px] text-gray-500 space-y-1">
                {logs.map((log, li) => (
                  <div key={li} className={log.startsWith('>>') ? 'text-cyber-emerald' : log.includes('INITIATING') ? 'text-cyber-blue' : 'text-gray-500'}>
                    {log}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Form vs. Outbox Tabs panel */}
          <div className="lg:col-span-8 bg-cyber-gray-950 border border-cyber-gray-900 rounded-lg overflow-hidden flex flex-col shadow-xl" id="contact-tabbed-frame">
            
            {/* Tabs Header */}
            <div className="bg-cyber-gray-900 border-b border-cyber-gray-900 px-4 flex items-center justify-between">
              <div className="flex space-x-1">
                <button
                  onClick={() => setActiveTab('form')}
                  className={`px-4 py-3.5 text-xs font-mono border-b-2 transition-all ${
                    activeTab === 'form' 
                      ? 'border-cyber-blue text-cyber-blue' 
                      : 'border-transparent text-gray-400 hover:text-white'
                  }`}
                  id="tab-select-form"
                >
                  Send Payload
                </button>
                <button
                  onClick={() => setActiveTab('outbox')}
                  className={`px-4 py-3.5 text-xs font-mono border-b-2 transition-all flex items-center space-x-1.5 ${
                    activeTab === 'outbox' 
                      ? 'border-cyber-blue text-cyber-blue' 
                      : 'border-transparent text-gray-400 hover:text-white'
                  }`}
                  id="tab-select-outbox"
                >
                  <span>Outbox Terminal</span>
                  <span className="bg-cyber-gray-800 text-gray-300 font-bold px-1.5 py-0.5 rounded text-[9px]">
                    {sentMessages.length}
                  </span>
                </button>
              </div>

              {activeTab === 'outbox' && sentMessages.length > 0 && (
                <button
                  onClick={handleClearOutbox}
                  className="text-[10px] font-mono text-cyber-pink hover:text-white flex items-center space-x-1"
                  id="btn-clear-outbox"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Wipe outbox</span>
                </button>
              )}
            </div>

            {/* Tab Contents Frame */}
            <div className="p-6 sm:p-8" id="tab-content-container">
              
              {/* Notification Success Toast */}
              <AnimatePresence>
                {showSuccessNotification && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 bg-cyber-emerald/10 border border-cyber-emerald/20 rounded-md flex items-center space-x-3 text-cyber-emerald text-xs"
                    id="success-notification"
                  >
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <div>
                      <span className="font-semibold block font-mono">PAYLOAD TRANSMITTED SUCCESSFUL</span>
                      <span className="font-light text-gray-300 font-sans">Kawser's local terminal received your submission securely. Review it under the "Outbox Terminal" tab.</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {activeTab === 'form' ? (
                /* Primary Contact Form */
                <form onSubmit={handleSubmit} className="space-y-4" id="project-contact-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono text-gray-500 uppercase block">Sender Identity:</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-cyber-gray-900 border border-cyber-gray-850 hover:border-cyber-gray-700 focus:border-cyber-blue outline-none rounded p-3 text-xs font-sans text-white transition-colors"
                        id="form-input-name"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono text-gray-500 uppercase block">Reply Email Addr:</label>
                      <input
                        type="email"
                        required
                        placeholder="john@enterprise.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-cyber-gray-900 border border-cyber-gray-850 hover:border-cyber-gray-700 focus:border-cyber-blue outline-none rounded p-3 text-xs font-sans text-white transition-colors"
                        id="form-input-email"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-gray-500 uppercase block">System Subject:</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Enterprise E-commerce Upgrade / WMS Consultation"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full bg-cyber-gray-900 border border-cyber-gray-850 hover:border-cyber-gray-700 focus:border-cyber-blue outline-none rounded p-3 text-xs font-sans text-white transition-colors"
                      id="form-input-subject"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-gray-500 uppercase block">Message Payload:</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Specify your technical parameters, budget parameters, and scaling demands..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-cyber-gray-900 border border-cyber-gray-850 hover:border-cyber-gray-700 focus:border-cyber-blue outline-none rounded p-3 text-xs font-sans text-white transition-colors resize-none"
                      id="form-input-message"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full flex items-center justify-center space-x-2 bg-cyber-blue hover:brightness-110 disabled:brightness-75 text-cyber-dark font-mono font-bold text-xs px-6 py-3.5 rounded shadow-[0_4px_15px_rgba(0,240,255,0.2)] transition-all cursor-pointer"
                    id="form-submit-btn"
                  >
                    <Send className={`w-4 h-4 ${isSending ? 'animate-spin' : ''}`} />
                    <span>{isSending ? 'COMPILING & TRANSMITTING...' : 'DISPATCH MESSAGE PAYLOAD'}</span>
                  </button>
                </form>
              ) : (
                /* Interactive Local Storage Outbox Tab */
                <div className="space-y-4" id="contact-outbox-tab">
                  {sentMessages.length === 0 ? (
                    <div className="text-center py-12 space-y-3">
                      <FolderHeart className="w-12 h-12 text-gray-600 mx-auto animate-pulse" />
                      <p className="text-xs font-mono text-gray-500">Outbox database is empty.</p>
                      <p className="text-xs font-sans text-gray-400 font-light">Your submitted contact logs will be compiled and displayed here instantly.</p>
                    </div>
                  ) : (
                    <div className="space-y-4 max-h-[350px] overflow-y-auto pr-1" id="outbox-history">
                      {sentMessages.map((msg) => (
                        <div key={msg.id} className="p-4 bg-cyber-gray-900 border border-cyber-gray-850 rounded space-y-2.5">
                          {/* Message Header */}
                          <div className="flex items-start justify-between border-b border-cyber-gray-800 pb-2">
                            <div className="space-y-0.5">
                              <span className="text-[9px] font-mono text-cyber-blue uppercase tracking-wider block">ID: {msg.id}</span>
                              <h5 className="text-xs font-mono font-bold text-white">{msg.subject}</h5>
                            </div>
                            <span className="text-[9px] font-mono text-gray-500">{msg.timestamp}</span>
                          </div>

                          {/* Message Body */}
                          <p className="text-xs font-sans text-gray-300 font-light leading-relaxed">{msg.message}</p>

                          {/* Message Metadata footer */}
                          <div className="pt-2 border-t border-cyber-gray-900/40 flex justify-between items-center text-[10px] font-mono text-gray-500">
                            <span>FROM: {msg.name} ({msg.email})</span>
                            <span className="text-cyber-emerald uppercase font-semibold">STATUS: QUEUED</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

            </div>
          </div>

        </div>

        {/* Professional Footer */}
        <footer className="mt-24 pt-8 border-t border-cyber-gray-900 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-gray-500 gap-4" id="app-footer">
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-gray-400 font-semibold">© {new Date().getFullYear()} Kawser Ahmed Roni</p>
            <p className="text-[10px] text-gray-600">Enterprise Full-Stack Developer & Software Architect</p>
          </div>

          <div className="flex items-center space-x-1.5 bg-cyber-gray-950 border border-cyber-gray-950 px-3 py-1.5 rounded">
            <span className="w-2 h-2 rounded-full bg-cyber-emerald animate-pulse" />
            <span className="text-[10px] text-gray-400 uppercase tracking-wider">Deploy status:</span>
            <span className="text-cyber-emerald font-semibold">90+ APPROVED PROJECTS STABLE</span>
          </div>
        </footer>

      </div>
    </section>
  );
}
