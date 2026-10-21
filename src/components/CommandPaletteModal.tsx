
import React, { useEffect, useState, useRef } from 'react';
import { Link } from '@/components/Link';
import { SERVICES, COMPANY } from '@/lib/data';

interface CommandModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandPaletteModal({ isOpen, onClose }: CommandModalProps) {
  const [query, setQuery] = useState('');
  const [selectedIdx, setSelectedIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Keyboard shortcut Cmd+K or Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open handled by parent or custom event
          const event = new CustomEvent('open-command-palette');
          window.dispatchEvent(event);
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
      setSelectedIdx(0);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const quickActions = [
    {
      category: 'Project Brief',
      id: 'contact-brief',
      title: 'Submit New Project Brief',
      subtitle: 'Schedule discovery audit with technical leads (1-day response)',
      href: '/#contact',
      badge: 'ACTION',
    },
    {
      category: 'Direct Channels',
      id: 'call-lead-1',
      title: `Call Mysore Studio: ${COMPANY.phone1}`,
      subtitle: 'Direct telephone line for active client inquiries',
      href: `tel:${COMPANY.phone1.replace(/\s+/g, '')}`,
      badge: 'TELEPHONE',
    },
    {
      category: 'Direct Channels',
      id: 'wa-chat',
      title: `WhatsApp Technical Infoline: ${COMPANY.phone2}`,
      subtitle: 'Direct chat with studio team',
      href: COMPANY.whatsappUrl,
      badge: 'CHAT',
    },
    ...SERVICES.map((s) => ({
      category: 'Engineering Capabilities',
      id: s.id,
      title: `${s.num} // ${s.title}`,
      subtitle: s.shortDesc,
      href: `/#capabilities`,
      badge: 'SERVICE',
    })),
  ];

  const filtered = quickActions.filter((item) =>
    (item.title + ' ' + item.subtitle + ' ' + item.category)
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <div
      className="cmd-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
    >
      <div className="cmd-window" onClick={(e) => e.stopPropagation()}>
        {/* Terminal Header Bar */}
        <div className="cmd-header">
          <div className="cmd-input-wrap">
            <span className="cmd-prompt-icon" aria-hidden="true">
              &gt;
            </span>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedIdx(0);
              }}
              placeholder="Type a command, service name, or channel..."
              className="cmd-input"
              aria-label="Search command palette"
            />
          </div>
          <div className="cmd-key-badge">
            <kbd>ESC</kbd> to close
          </div>
        </div>

        {/* Command List */}
        <div className="cmd-list" role="listbox">
          {filtered.length === 0 ? (
            <div className="cmd-empty">
              No matching commands found for &quot;{query}&quot;. Press ESC to exit.
            </div>
          ) : (
            filtered.map((item, index) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={onClose}
                className={`cmd-item ${index === selectedIdx ? 'cmd-item--active' : ''}`}
                onMouseEnter={() => setSelectedIdx(index)}
              >
                <div className="cmd-item-info">
                  <div className="cmd-item-title-row">
                    <span className="cmd-item-title">{item.title}</span>
                    <span className="cmd-item-badge">{item.badge}</span>
                  </div>
                  <span className="cmd-item-sub">{item.subtitle}</span>
                </div>
                <span className="cmd-item-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            ))
          )}
        </div>

        {/* Footer Meta */}
        <div className="cmd-footer">
          <span>AdMark Digitals // Technical Command Interface</span>
          <span>Mysuru · Bengaluru · Hyderabad</span>
        </div>
      </div>
    </div>
  );
}
