const fs = require('fs');
let css = fs.readFileSync('src/styles.css', 'utf8');

const mode1Styles = `
/* ─────────────────────────────────────────────────────────────
   Tech Constellation & Skills Matrix: Default/Dark Mode (Cream Section)
   ───────────────────────────────────────────────────────────── */
/* Category filter buttons in Default/Dark Mode (Cream Background) */
.section-bg-light-cream .constellation-cat-btn {
  padding: 0.45rem 1rem;
  border-radius: 999px;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 600;
  cursor: pointer;
  background: #ffffff !important;
  color: #1e293b !important;
  border: 1px solid rgba(0, 0, 0, 0.12) !important;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04) !important;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
}
.section-bg-light-cream .constellation-cat-btn:hover {
  border-color: #ff4e00 !important;
  color: #ff4e00 !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(255, 78, 0, 0.15) !important;
}
.section-bg-light-cream .constellation-cat-btn.active {
  background: var(--active-color, #ff4e00) !important;
  color: #ffffff !important;
  border-color: var(--active-color, #ff4e00) !important;
  box-shadow: 0 4px 14px rgba(255, 78, 0, 0.35) !important;
}

/* Cluster Header */
.section-bg-light-cream .constellation-cluster-title {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  margin-bottom: 0.85rem;
  text-transform: uppercase;
}

/* Skill Node Buttons in Default/Dark Mode (White Card on Cream Background) */
.section-bg-light-cream .constellation-node-btn {
  padding: 0.45rem 0.85rem;
  border-radius: 8px;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  background: #f8fafc !important;
  color: #1e293b !important;
  border: 1px solid rgba(15, 23, 42, 0.12) !important;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04) !important;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}
.section-bg-light-cream .constellation-node-btn:hover {
  background: #ffffff !important;
  color: var(--node-accent, #ff4e00) !important;
  border-color: var(--node-accent, #ff4e00) !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08) !important;
  transform: translateY(-1px);
}
.section-bg-light-cream .constellation-node-btn.active {
  background: #fff5ed !important;
  color: #0f172a !important;
  font-weight: 700 !important;
  border: 2px solid var(--node-accent, #ff4e00) !important;
  box-shadow: 0 0 12px rgba(255, 78, 0, 0.25), 0 2px 8px rgba(0, 0, 0, 0.08) !important;
  transform: scale(1.05);
}

/* Inspector Panel in Default/Dark Mode */
.section-bg-light-cream .constellation-inspector-panel {
  background: #ffffff !important;
  border: 1.5px solid var(--inspector-accent, #ff4e00) !important;
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.07) !important;
}
.section-bg-light-cream .constellation-inspector-eyebrow {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: #ea580c !important;
  letter-spacing: 0.15em;
  margin-bottom: 0.6rem;
  font-weight: 700;
}
.section-bg-light-cream .constellation-inspector-title {
  font-size: 1.75rem;
  font-weight: 800;
  color: #0f172a !important;
  margin-bottom: 0.4rem;
}
.section-bg-light-cream .constellation-inspector-badge {
  display: inline-block;
  padding: 0.25rem 0.65rem;
  border-radius: 4px;
  background: rgba(255, 78, 0, 0.08) !important;
  border: 1px solid rgba(255, 78, 0, 0.25) !important;
  color: #c2410c !important;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 700;
  margin-bottom: 1.4rem;
}
.section-bg-light-cream .constellation-inspector-label {
  font-family: var(--font-mono);
  font-size: 0.74rem;
  font-weight: 700;
  color: #64748b !important;
  letter-spacing: 0.08em;
  margin-bottom: 0.4rem;
}
.section-bg-light-cream .constellation-inspector-role {
  color: #1e293b !important;
  font-size: 0.95rem;
  line-height: 1.65;
}
.section-bg-light-cream .constellation-impl-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.section-bg-light-cream .constellation-impl-tag {
  padding: 0.35rem 0.7rem;
  border-radius: 4px;
  background: rgba(255, 78, 0, 0.07) !important;
  border: 1px solid rgba(255, 78, 0, 0.25) !important;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 600;
  color: #c2410c !important;
}

/* Skills.jsx Cards & Pills in Default/Dark Mode */
.section-bg-light-cream .skills-card {
  background: #ffffff !important;
  box-shadow: 0 8px 24px rgba(23, 25, 28, 0.05) !important;
}
.section-bg-light-cream .skills-category-heading {
  color: #17191C !important;
}
.section-bg-light-cream .skills-tag-pill {
  background: #f8fafc !important;
  border: 1px solid rgba(15, 23, 42, 0.12) !important;
  color: #1e293b !important;
  font-weight: 500;
}
.section-bg-light-cream .skills-tag-pill:hover {
  background: #ffffff !important;
  color: #0f172a !important;
  border-color: rgba(15, 23, 42, 0.25) !important;
}
`;

const mode2Styles = `
/* ─────────────────────────────────────────────────────────────
   Tech Constellation & Skills Matrix: Light Mode Interchange (Dark Midnight Section)
   ───────────────────────────────────────────────────────────── */
/* Category filter buttons in Light Mode (Deep Dark Background) */
[data-theme="light"] .section-bg-light-cream .constellation-cat-btn {
  background: rgba(255, 255, 255, 0.06) !important;
  color: #e2e8f0 !important;
  border: 1px solid rgba(255, 255, 255, 0.16) !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3) !important;
}
[data-theme="light"] .section-bg-light-cream .constellation-cat-btn:hover {
  background: rgba(255, 255, 255, 0.12) !important;
  color: #ffffff !important;
  border-color: #ff4e00 !important;
  box-shadow: 0 4px 16px rgba(255, 78, 0, 0.3) !important;
}
[data-theme="light"] .section-bg-light-cream .constellation-cat-btn.active {
  background: var(--active-color, #ff4e00) !important;
  color: #ffffff !important;
  border-color: var(--active-color, #ff4e00) !important;
  box-shadow: 0 0 16px rgba(255, 78, 0, 0.45) !important;
}

/* Skill Node Buttons in Light Mode (Dark Cyber Card on Dark Background) */
[data-theme="light"] .section-bg-light-cream .constellation-node-btn {
  background: rgba(255, 255, 255, 0.05) !important;
  color: #cbd5e1 !important;
  border: 1px solid rgba(255, 255, 255, 0.12) !important;
  box-shadow: none !important;
}
[data-theme="light"] .section-bg-light-cream .constellation-node-btn:hover {
  background: rgba(255, 255, 255, 0.10) !important;
  color: #ffffff !important;
  border-color: var(--node-accent, #ff4e00) !important;
  box-shadow: 0 0 12px rgba(255, 255, 255, 0.1) !important;
}
[data-theme="light"] .section-bg-light-cream .constellation-node-btn.active {
  background: rgba(255, 255, 255, 0.12) !important;
  color: #ffffff !important;
  font-weight: 700 !important;
  border: 2px solid var(--node-accent, #ff4e00) !important;
  box-shadow: 0 0 18px var(--node-accent, rgba(255, 78, 0, 0.4)) !important;
  transform: scale(1.05);
}

/* Inspector Panel in Light Mode */
[data-theme="light"] .section-bg-light-cream .constellation-inspector-panel {
  background: rgba(13, 21, 37, 0.95) !important;
  border: 1.5px solid var(--inspector-accent, #ff4e00) !important;
  box-shadow: 0 0 35px rgba(0, 0, 0, 0.8), 0 0 20px rgba(255, 78, 0, 0.2) !important;
}
[data-theme="light"] .section-bg-light-cream .constellation-inspector-eyebrow {
  color: var(--inspector-accent, #ff4e00) !important;
}
[data-theme="light"] .section-bg-light-cream .constellation-inspector-title {
  color: #f8fafc !important;
}
[data-theme="light"] .section-bg-light-cream .constellation-inspector-badge {
  background: rgba(255, 78, 0, 0.18) !important;
  border: 1px solid rgba(255, 78, 0, 0.4) !important;
  color: #ff9166 !important;
}
[data-theme="light"] .section-bg-light-cream .constellation-inspector-label {
  color: #94a3b8 !important;
}
[data-theme="light"] .section-bg-light-cream .constellation-inspector-role {
  color: #e2e8f0 !important;
}
[data-theme="light"] .section-bg-light-cream .constellation-impl-tag {
  background: rgba(255, 78, 0, 0.15) !important;
  border: 1px solid rgba(255, 78, 0, 0.35) !important;
  color: #ff9166 !important;
}

/* Skills.jsx Cards & Pills in Light Mode */
[data-theme="light"] .section-bg-light-cream .skills-card {
  background: rgba(13, 21, 37, 0.90) !important;
  box-shadow: 0 15px 45px rgba(0, 0, 0, 0.7) !important;
}
[data-theme="light"] .section-bg-light-cream .skills-category-heading {
  color: #f1f5f9 !important;
}
[data-theme="light"] .section-bg-light-cream .skills-tag-pill {
  background: rgba(255, 255, 255, 0.05) !important;
  border: 1px solid rgba(255, 255, 255, 0.12) !important;
  color: #cbd5e1 !important;
}
[data-theme="light"] .section-bg-light-cream .skills-tag-pill:hover {
  background: rgba(255, 255, 255, 0.10) !important;
  color: #ffffff !important;
  border-color: rgba(255, 255, 255, 0.25) !important;
}
`;

const anchor1 = '2. LIGHT MODE INTERCHANGE';
const anchor2 = '/* Ensure all section content stays above the pseudo backgrounds */';

const idx1 = css.indexOf(anchor1);
if (idx1 === -1) {
  console.error('Anchor 1 not found');
  process.exit(1);
}
// Find the comment box start before anchor 1
const commentBoxStart = css.lastIndexOf('/* ═════', idx1);
css = css.slice(0, commentBoxStart) + mode1Styles + '\n\n' + css.slice(commentBoxStart);

const idx2 = css.indexOf(anchor2);
if (idx2 === -1) {
  console.error('Anchor 2 not found');
  process.exit(1);
}
css = css.slice(0, idx2) + mode2Styles + '\n\n' + css.slice(idx2);

fs.writeFileSync('src/styles.css', css, 'utf8');
console.log('Successfully updated src/styles.css');

