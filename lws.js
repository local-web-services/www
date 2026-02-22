(function () {
  'use strict';

  function detectLanguage(text) {
    const t = text.trim();
    // TypeScript: TS-specific syntax
    if (/\b(interface |const |let |var |async |await |import\s+\{|from\s+'|LwsSession|session\.client<|\.assertItem|beforeAll|afterAll|beforeEach)\b/.test(t)) {
      return 'typescript';
    }
    // Python: typical Python keywords / lws SDK patterns
    if (/\b(def |import |from |class |@pytest|lws_session|session\.|pytest\.|lws_reset)\b/.test(t)) {
      return 'python';
    }
    // YAML: multiple "key: value" lines not starting with a shell command
    if (!/^(pip|uv|uvx|ldk|lws|git|docker|aws|npm|yarn|curl)\b/.test(t)) {
      const yamlLines = (t.match(/^\s*[\w-]+\s*:/gm) || []).length;
      if (yamlLines >= 2) return 'yaml';
    }
    // Default: bash / shell
    return 'bash';
  }

  function copySVG() {
    return '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';
  }

  function checkSVG() {
    return '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
  }

  function copyText(text, btn) {
    var clean = text.replace(/\n$/, '');
    var succeed = function () {
      btn.innerHTML = checkSVG() + '<span>Copied!</span>';
      btn.classList.add('copy-btn--copied');
      setTimeout(function () {
        btn.innerHTML = copySVG() + '<span>Copy</span>';
        btn.classList.remove('copy-btn--copied');
      }, 2000);
    };
    if (navigator.clipboard) {
      navigator.clipboard.writeText(clean).then(succeed);
    } else {
      var ta = document.createElement('textarea');
      ta.value = clean;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      succeed();
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.code-block').forEach(function (block) {
      var code = block.querySelector('code');
      if (!code) return;

      // Set language class for Prism
      if (!code.className.includes('language-')) {
        code.className = 'language-' + detectLanguage(code.textContent);
      }

      // Wrap in <pre> so Prism can highlight it
      if (code.parentElement.tagName !== 'PRE') {
        var pre = document.createElement('pre');
        code.parentNode.replaceChild(pre, code);
        pre.appendChild(code);
      }

      // Inject copy button
      var btn = document.createElement('button');
      btn.className = 'copy-btn';
      btn.setAttribute('aria-label', 'Copy code');
      btn.innerHTML = copySVG() + '<span>Copy</span>';
      btn.addEventListener('click', function () { copyText(code.textContent, btn); });
      block.appendChild(btn);
    });

    // Run Prism after language classes are set
    if (window.Prism) {
      Prism.highlightAll();
    }
  });
}());
