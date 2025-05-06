<div align="center" style="
  position:relative;
  font-family:'Courier New',monospace;
  background:#0f0f1a;
  padding:3rem 1rem;
  border:1px solid #ff00ff;
  box-shadow:0 0 20px rgba(255,0,255,0.3);
  overflow:hidden;
">

<!-- GLITCH BACKGROUND LAYER -->
<div style="
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background:
    linear-gradient(rgba(255,0,255,0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,0,255,0.05) 1px, transparent 1px);
  background-size:20px 20px;
  pointer-events:none;
"></div>

<!-- MAIN GLITCH TITLE -->
<h1 style="
  color:#00ffcc;
  text-shadow:0 0 10px #00ffcc;
  position:relative;
  display:inline-block;
  margin:0 0 2rem;
  font-size:3rem;
">
  <span style="
    position:absolute;
    top:0;
    left:0;
    color:#ff00ff;
    clip-path:polygon(0 0,100% 0,100% 45%,0 45%);
    animation:glitch1 2.5s infinite linear;
  ">0xN3ON</span>
  <span style="
    position:absolute;
    top:0;
    left:0;
    color:#ffee00;
    clip-path:polygon(0 60%,100% 60%,100% 100%,0 100%);
    animation:glitch2 3s infinite linear reverse;
  ">0xN3ON</span>
  0xN3ON
</h1>

<!-- SCANLINE ANIMATION -->
<div style="
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:2px;
  background:linear-gradient(to right, transparent, #00ffcc, transparent);
  animation:scan 5s linear infinite;
  opacity:0.7;
"></div>

<!-- STATUS INDICATOR -->
<div style="
  animation:pulse 1.5s infinite ease-in-out;
  color:#ff003c;
  margin:1rem 0 2rem;
  position:relative;
  font-size:1.2rem;
">
  > STATUS: <span id="status-text">[ONLINE]</span>
</div>

<!-- PROFILE GRID -->
<div style="
  display:grid;
  grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));
  gap:1rem;
  position:relative;
  z-index:2;
">
  <!-- IDENTITY CARD -->
  <div style="
    background:rgba(0,0,0,0.3);
    border:1px solid #00ffcc;
    padding:1rem;
    transition:all 0.3s ease;
  ">
    <h3 style="color:#ff00ff;margin-top:0;">// USER_IDENTITY</h3>
    <p><span style="color:#ffee00;">NAME:</span> [REDACTED]</p>
    <p><span style="color:#ffee00;">ROLE:</span> CyberSec Mercenary</p>
    <p><span style="color:#ffee00;">LOC:</span> Neo-Tokyo</p>
  </div>

  <!-- SKILLS MATRIX -->
  <div style="
    background:rgba(0,0,0,0.3);
    border:1px solid #ff00ff;
    padding:1rem;
  ">
    <h3 style="color:#00ffcc;margin-top:0;">// SKILLS_MATRIX</h3>
    <ul style="list-style-type:'> ';padding-left:1.5rem;">
      <li><span style="color:#ffee00;">Pentesting</span></li>
      <li><span style="color:#ffee00;">AI/ML</span></li>
      <li><span style="color:#ffee00;">Blockchain</span></li>
    </ul>
  </div>
</div>

<!-- FAKE TERMINAL OUTPUT -->
<div style="
  background:rgba(0,0,0,0.5);
  border:1px solid #ff003c;
  margin-top:2rem;
  padding:1rem;
  font-family:monospace;
  text-align:left;
">
  <p style="color:#00ffcc;margin:0;">> Initializing neural interface...</p>
  <p style="color:#00ffcc;margin:0;">> Establishing darknet connection...</p>
  <p style="color:#00ffcc;margin:0;">> <span id="typing-text"></span><span style="animation:blink 1s infinite;">_</span></p>
</div>

<style>
  @keyframes pulse {
    0%,100% { opacity:0.6; text-shadow:0 0 5px #ff003c; }
    50% { opacity:1; text-shadow:0 0 15px #ff003c; }
  }
  @keyframes scan {
    0% { top:-100px; }
    100% { top:100%; }
  }
  @keyframes glitch1 {
    0%,100% { transform:translate(0); }
    20% { transform:translate(-3px,3px); }
    40% { transform:translate(-3px,-3px); }
    60% { transform:translate(3px,3px); }
    80% { transform:translate(3px,-3px); }
  }
  @keyframes glitch2 {
    0%,100% { transform:translate(0); }
    10% { transform:translate(-2px,2px); }
    30% { transform:translate(2px,-2px); }
    50% { transform:translate(-2px,2px); }
    70% { transform:translate(2px,-2px); }
    90% { transform:translate(-2px,2px); }
  }
  @keyframes blink {
    0%,100% { opacity:1; }
    50% { opacity:0; }
  }
</style>

<script>
  // Simple typing effect that works in GitHub's sanitizer
  document.addEventListener('DOMContentLoaded', function() {
    const text = "System ready for commands";
    let i = 0;
    const typing = setInterval(() => {
      document.getElementById('typing-text').textContent += text[i];
      i++;
      if (i >= text.length) clearInterval(typing);
    }, 100);
    
    // Status text flicker
    setInterval(() => {
      const status = document.getElementById('status-text');
      status.textContent = Math.random() > 0.9 ? '[ERROR]' : '[ONLINE]';
      status.style.color = Math.random() > 0.9 ? '#ffee00' : '#ff003c';
    }, 3000);
  });
</script>

</div>