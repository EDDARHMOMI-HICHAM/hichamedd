/**
 * HICHAM EDD — CREATIVE MILLIONAIRE CHALLENGE ENGINE
 * Fully Bilingual: Moroccan Darija & French
 * Web Audio API Sound Synthesizer (Zero External Dependencies)
 */

(function () {
  'use strict';

  function getLang() {
    return localStorage.getItem('hicham_lang') === 'fr' ? 'fr' : 'darija';
  }

  const LADDER_STEPS_DATA = {
    fr: [
      { level: 1, points: "1 000", label: "Débutant Curieux", milestone: false },
      { level: 2, points: "2 000", label: "Amateur Motivé", milestone: false },
      { level: 3, points: "5 000", label: "Stagiaire Prometteur", milestone: false },
      { level: 4, points: "10 000", label: "Maîtrise des Outils", milestone: false },
      { level: 5, points: "20 000", label: "Assistant Créatif (Palier 1)", milestone: true },
      { level: 6, points: "40 000", label: "Junior Designer", milestone: false },
      { level: 7, points: "75 000", label: "Créateur de Contenu", milestone: false },
      { level: 8, points: "150 000", label: "Freelance Confirmé", milestone: false },
      { level: 9, points: "250 000", label: "Producteur Rapide", milestone: false },
      { level: 10, points: "500 000", label: "Mid-Senior (Palier 2)", milestone: true },
      { level: 11, points: "1 000 000", label: "Lead & Mentor Artistique", milestone: false },
      { level: 12, points: "2 500 000", label: "Senior Creative Specialist", milestone: false },
      { level: 13, points: "5 000 000", label: "Directeur Artistique Certifié", milestone: false },
      { level: 14, points: "7 500 000", label: "Creative Agency Lead", milestone: false },
      { level: 15, points: "10 000 000", label: "Légende Créative (Grand Master)", milestone: true }
    ],
    darija: [
      { level: 1, points: "1,000", label: "مبتدئ فضولي", milestone: false },
      { level: 2, points: "2,000", label: "هاوي متحمس", milestone: false },
      { level: 3, points: "5,000", label: "متدرب واعد", milestone: false },
      { level: 4, points: "10,000", label: "فاهم الأدوات", milestone: false },
      { level: 5, points: "20,000", label: "مساعد ديزاينر (أمان 1)", milestone: true },
      { level: 6, points: "40,000", label: "Junior Designer", milestone: false },
      { level: 7, points: "75,000", label: "صانع محتوى متمكن", milestone: false },
      { level: 8, points: "150,000", label: "ممارس مستقل (Freelancer)", milestone: false },
      { level: 9, points: "250,000", label: "سريع فالتنفيذ", milestone: false },
      { level: 10, points: "500,000", label: "Mid-Senior (أمان 2)", milestone: true },
      { level: 11, points: "1,000,000", label: "خبير وموجه فني", milestone: false },
      { level: 12, points: "2,500,000", label: "Senior Creative Specialist", milestone: false },
      { level: 13, points: "5,000,000", label: "Art Director معتمد", milestone: false },
      { level: 14, points: "7,500,000", label: "Creative Agency Lead", milestone: false },
      { level: 15, points: "10,000,000", label: "الأسطورة الإبداعية (Grand Master)", milestone: true }
    ]
  };

  // =========================================================================
  // AUDIO SYNTHESIZER
  // =========================================================================
  let audioMuted = false;
  let audioCtx = null;

  function getAudioContext() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) audioCtx = new AudioContext();
    }
    if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
    return audioCtx;
  }

  function playTone(freq, type, duration, startTime = 0, gainLevel = 0.15) {
    if (audioMuted) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime + startTime);
      gain.gain.setValueAtTime(gainLevel, ctx.currentTime + startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + startTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + startTime);
      osc.stop(ctx.currentTime + startTime + duration);
    } catch (e) {}
  }

  const SOUNDS = {
    click: () => playTone(600, 'sine', 0.08, 0, 0.1),
    selectOption: () => {
      playTone(330, 'triangle', 0.18, 0, 0.15);
      playTone(260, 'triangle', 0.3, 0.08, 0.12);
    },
    correct: () => {
      [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
        playTone(freq, 'sine', 0.5, i * 0.08, 0.15);
      });
    },
    wrong: () => {
      playTone(180, 'sawtooth', 0.45, 0, 0.2);
      playTone(130, 'sawtooth', 0.55, 0.1, 0.22);
    },
    lifeline5050: () => {
      playTone(880, 'sine', 0.15, 0, 0.12);
      playTone(440, 'sine', 0.25, 0.1, 0.15);
    },
    lifelineAudience: () => {
      for (let i = 0; i < 6; i++) {
        playTone(300 + Math.random() * 400, 'sine', 0.15, i * 0.08, 0.08);
      }
    },
    lifelinePhone: () => {
      playTone(440, 'sine', 0.3, 0, 0.15);
      playTone(480, 'sine', 0.3, 0, 0.15);
    },
    victory: () => {
      [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98].forEach((freq, idx) => {
        playTone(freq, 'triangle', 0.7, idx * 0.1, 0.18);
      });
    }
  };

  window.toggleAudioMute = function () {
    audioMuted = !audioMuted;
    const icon = document.getElementById('sound-icon');
    const label = document.getElementById('sound-label');
    const lang = getLang();
    if (icon) icon.innerText = audioMuted ? '🔇' : '🔊';
    if (label) {
      if (lang === 'fr') label.innerText = audioMuted ? 'Son coupé' : 'Effets sonores';
      else label.innerText = audioMuted ? 'الصوت مكتوم' : 'المؤثرات الصوتية';
    }
  };

  // =========================================================================
  // DYNAMIC BILINGUAL STRINGS
  // =========================================================================
  window.updateChallengeStrings = function (lang) {
    if (!lang) lang = getLang();

    const introTag = document.getElementById('cr-intro-tag');
    const introH1 = document.getElementById('cr-intro-h1');
    const introP = document.getElementById('cr-intro-p');
    const lblPlayer = document.getElementById('cr-lbl-player');
    const lblNote = document.getElementById('cr-lbl-player-note');
    const pInput = document.getElementById('cr-player-name');
    const errName = document.getElementById('cr-name-error');
    const lblSpec = document.getElementById('cr-lbl-spec');
    const specDesTitle = document.getElementById('cr-spec-des-title');
    const specDesSub = document.getElementById('cr-spec-des-sub');
    const specVidTitle = document.getElementById('cr-spec-vid-title');
    const specVidSub = document.getElementById('cr-spec-vid-sub');
    const btnStart = document.getElementById('cr-btn-start');
    const pPrefix = document.getElementById('cr-player-prefix');
    const qPrefix = document.getElementById('cr-q-prefix');
    const lblAud = document.getElementById('lbl-ll-aud');
    const lblPh = document.getElementById('lbl-ll-ph');
    const ptsLbl = document.getElementById('cr-pts-label');
    const expHead = document.getElementById('cr-exp-heading');
    const ladderHead = document.getElementById('cr-ladder-heading');
    const soundLbl = document.getElementById('sound-label');
    const audTitle = document.getElementById('cr-aud-box-title');
    const certTop = document.getElementById('cr-cert-top-title');
    const certMain = document.getElementById('cr-cert-main-title');
    const certAward = document.getElementById('cr-cert-awarded-lbl');
    const shareTitle = document.getElementById('cr-share-title');
    const shareDesc = document.getElementById('cr-share-desc');
    const shareBtn = document.getElementById('cr-share-btn-text');
    const btnHome = document.getElementById('cr-btn-back-home');
    const btnDl = document.getElementById('cr-btn-download-cert');

    if (lang === 'fr') {
      if (introTag) introTag.innerText = "🏆 DÉFI CRÉATIF : QUI VEUT GAGNER DES MILLIONS ?";
      if (introH1) introH1.innerHTML = 'Êtes-vous un <span class="text-brand-gold">vrai créatif</span> ou maîtrisez-vous seulement les outils ?';
      if (introP) introP.innerText = "Testez vos connaissances à travers 15 questions techniques et décrochez votre certificat officiel pour défier vos pairs sur les réseaux sociaux !";
      if (lblPlayer) lblPlayer.innerText = "1. Entrez votre nom ou pseudo créatif : *";
      if (lblNote) lblNote.innerText = "(Pour le certificat officiel)";
      if (pInput) pInput.placeholder = "Ex. : Youssef El Maataoui";
      if (errName) errName.innerText = "⚠️ Veuillez renseigner votre nom pour démarrer !";
      if (lblSpec) lblSpec.innerText = "2. Choisissez votre spécialité créative : *";
      if (specDesTitle) specDesTitle.innerText = "Graphic Design";
      if (specDesSub) specDesSub.innerText = "50 questions techniques";
      if (specVidTitle) specVidTitle.innerText = "Montage Vidéo";
      if (specVidSub) specVidSub.innerText = "50 questions spécialisées";
      if (btnStart) btnStart.innerText = "Lancer le défi maintenant";
      if (pPrefix) pPrefix.innerText = "Candidat :";
      if (qPrefix) qPrefix.innerText = "Question";
      if (lblAud) lblAud.innerText = "Public";
      if (lblPh) lblPh.innerText = "Ami Expert";
      if (ptsLbl) ptsLbl.innerText = "Cagnotte :";
      if (expHead) expHead.innerText = "💡 Explication technique :";
      if (ladderHead) ladderHead.innerText = "Paliers";
      if (soundLbl) soundLbl.innerText = audioMuted ? "Son coupé" : "Effets sonores";
      if (audTitle) audTitle.innerText = "📊 Vote du public créatif :";
      if (certTop) certTop.innerText = "Certificat de Maîtrise Créative";
      if (certMain) certMain.innerText = "Certificat de Victoire & Excellence";
      if (certAward) certAward.innerText = "Ce certificat officiel est décerné à :";
      if (shareTitle) shareTitle.innerText = "🔥 Partagez votre résultat et défiez vos amis sur WhatsApp !";
      if (shareDesc) shareDesc.innerText = "Partagez votre score avec vos collègues et amis créatifs pour découvrir qui saura atteindre le palier suprême des 10 millions !";
      if (shareBtn) shareBtn.innerText = "Défier mes amis sur WhatsApp 📲";
      if (btnHome) btnHome.innerText = "🏠 Rejouer une nouvelle partie";
      if (btnDl) btnDl.innerHTML = "<span>📥</span> <span>Télécharger le certificat (Image)</span>";
    } else {
      if (introTag) introTag.innerText = "🏆 مسابقة من سيربح الإبداع؟";
      if (introH1) introH1.innerHTML = 'واش أنت <span class="text-brand-gold">مبدع حقيقي</span> ولا غير حافظ الأدوات؟';
      if (introP) introP.innerText = "اختبر معلوماتك فـ 15 سؤالاً تقنياً، وربح شهادة رسمية باسمك لمشاركتها وتحدي أصدقائك فالسوشيال ميديا!";
      if (lblPlayer) lblPlayer.innerText = "1. كتب سميتك أو لقبك الإبداعي: *";
      if (lblNote) lblNote.innerText = "(باش تطلع فـ الشهادة الرسمية)";
      if (pInput) pInput.placeholder = "مثال: يوسف المعطاوي";
      if (errName) errName.innerText = "⚠️ عافاك كتب سميتك باش تقدر تبدا اللعبة وتستلم شهادتك!";
      if (lblSpec) lblSpec.innerText = "2. عزل التخصص اللي باغي تلعب فيه: *";
      if (specDesTitle) specDesTitle.innerText = "الجرافيك ديزاين";
      if (specDesSub) specDesSub.innerText = "50 سؤالاً تقنياً";
      if (specVidTitle) specVidTitle.innerText = "مونتاج الفيديو";
      if (specVidSub) specVidSub.innerText = "50 سؤالاً تخصصياً";
      if (btnStart) btnStart.innerText = "بدء التحدي الآن";
      if (pPrefix) pPrefix.innerText = "المتسابق:";
      if (qPrefix) qPrefix.innerText = "السؤال رقم";
      if (lblAud) lblAud.innerText = "الجمهور";
      if (lblPh) lblPh.innerText = "صديق خبير";
      if (ptsLbl) ptsLbl.innerText = "الرصيد:";
      if (expHead) expHead.innerText = "💡 الشرح التقني:";
      if (ladderHead) ladderHead.innerText = "سلم المراتب";
      if (soundLbl) soundLbl.innerText = audioMuted ? "الصوت مكتوم" : "المؤثرات الصوتية";
      if (audTitle) audTitle.innerText = "📊 تصويت الجمهور الإبداعي:";
      if (certTop) certTop.innerText = "شهادة إتقان الإبداع الرقمي";
      if (certMain) certMain.innerText = "شهادة فوز وتفوق";
      if (certAward) certAward.innerText = "تُمنح هذه الشهادة رسمياً إلى المبدع(ة):";
      if (shareTitle) shareTitle.innerText = "🔥 بارطاجي النتيجة وتحدى أصحابك فـ WhatsApp!";
      if (shareDesc) shareDesc.innerText = "شارك الشهادة والتحدي على الواتساب مع أصدقائك، وشوف شكون فيكم اللي غادي يربح ويوصل لأعلى نقطة فالتصميم والمونتاج!";
      if (shareBtn) shareBtn.innerText = "مشاركة الشهادة والتحدي فـ WhatsApp 📲";
      if (btnHome) btnHome.innerText = "🏠 العودة إلى بداية اللعبة";
      if (btnDl) btnDl.innerHTML = "<span>📥</span> <span>احتفظ بالشهادة (تحميل كصورة)</span>";
    }
  };

  // =========================================================================
  // GAME STATE & FLOW
  // =========================================================================
  let crPlayerName = "";
  let crSpec = 'design';
  let crPool = [];
  let crIdx = 0;
  let crLocked = false;
  let crCorrectCount = 0;

  window.toggleCrSpec = function (spec) {
    crSpec = spec;
    const rDes = document.getElementById('cr-rad-design');
    const rVid = document.getElementById('cr-rad-video');
    const lDes = document.getElementById('cr-lbl-design');
    const lVid = document.getElementById('cr-lbl-video');

    if (spec === 'design') {
      if (rDes) rDes.checked = true;
      if (rVid) rVid.checked = false;
      if (lDes) lDes.className = "cursor-pointer p-4 rounded-2xl border-2 border-brand-gold bg-brand-card shadow-xl transition-all flex items-center justify-between";
      if (lVid) lVid.className = "cursor-pointer p-4 rounded-2xl border-2 border-brand-border bg-brand-surface opacity-80 hover:opacity-100 transition-all flex items-center justify-between";
    } else {
      if (rDes) rDes.checked = false;
      if (rVid) rVid.checked = true;
      if (lVid) lVid.className = "cursor-pointer p-4 rounded-2xl border-2 border-brand-gold bg-brand-card shadow-xl transition-all flex items-center justify-between";
      if (lDes) lDes.className = "cursor-pointer p-4 rounded-2xl border-2 border-brand-border bg-brand-surface opacity-80 hover:opacity-100 transition-all flex items-center justify-between";
    }
    SOUNDS.click();
  };

  window.startCreativeGame = function () {
    const pInput = document.getElementById('cr-player-name');
    const pErr = document.getElementById('cr-name-error');
    const pVal = pInput ? pInput.value.trim() : "";

    if (!pVal) {
      if (pErr) pErr.classList.remove('hidden');
      if (pInput) pInput.focus();
      return;
    }

    if (pErr) pErr.classList.add('hidden');
    crPlayerName = pVal;
    SOUNDS.click();

    if (!window.CHALLENGE_DB || !window.CHALLENGE_DB[crSpec]) return;
    const source = [...window.CHALLENGE_DB[crSpec]];

    // Shuffle pool
    for (let i = source.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [source[i], source[j]] = [source[j], source[i]];
    }

    const selected15 = source.slice(0, 15);

    crPool = selected15.map((item) => {
      const allOpts = [
        { text: item.correct, isCorrect: true },
        { text: item.wrong[0], isCorrect: false },
        { text: item.wrong[1], isCorrect: false },
        { text: item.wrong[2], isCorrect: false }
      ];

      for (let i = allOpts.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allOpts[i], allOpts[j]] = [allOpts[j], allOpts[i]];
      }

      const pos = allOpts.findIndex(o => o.isCorrect);

      return {
        question: item.q,
        explanation: item.exp,
        options: allOpts,
        correctIndex: pos
      };
    });

    crIdx = 0;
    crCorrectCount = 0;
    crLocked = false;

    const b50 = document.getElementById('cr-ll-5050');
    const bAud = document.getElementById('cr-ll-audience');
    const bPh = document.getElementById('cr-ll-phone');
    if (b50) b50.disabled = false;
    if (bAud) bAud.disabled = false;
    if (bPh) bPh.disabled = false;

    const pDisp = document.getElementById('cr-player-display');
    const av = document.getElementById('cr-avatar');
    if (pDisp) pDisp.innerText = crPlayerName;
    if (av) av.innerText = crSpec === 'design' ? '🎨' : '🎬';

    const intro = document.getElementById('cr-intro-view');
    const res = document.getElementById('cr-result-view');
    const game = document.getElementById('cr-gameplay-view');

    if (intro) intro.classList.add('hidden');
    if (res) res.classList.add('hidden');
    if (game) game.classList.remove('hidden');

    window.updateChallengeStrings();
    renderCrLadder();
    loadCrQuestion();
  };

  window.resetGameToStart = function () {
    const intro = document.getElementById('cr-intro-view');
    const res = document.getElementById('cr-result-view');
    const game = document.getElementById('cr-gameplay-view');

    if (res) res.classList.add('hidden');
    if (game) game.classList.add('hidden');
    if (intro) intro.classList.remove('hidden');
    window.updateChallengeStrings();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    SOUNDS.click();
  };

  function renderCrLadder() {
    const container = document.getElementById('cr-ladder-container');
    if (!container) return;
    const lang = getLang();
    const ladder = LADDER_STEPS_DATA[lang] || LADDER_STEPS_DATA.darija;

    const html = [];
    for (let i = 14; i >= 0; i--) {
      const step = ladder[i];
      const isCur = i === crIdx;
      const isPast = i < crIdx;
      let cls = "ladder-step flex items-center justify-between p-1.5 rounded-lg transition-colors ";
      if (isCur) cls += "active text-brand-gold bg-brand-gold/15 font-bold border-l-2 rtl:border-l-0 rtl:border-r-2 border-brand-gold ";
      else if (isPast) cls += "text-emerald-400 opacity-60 ";
      else if (step.milestone) cls += "text-amber-400 font-bold ";
      else cls += "text-gray-400 ";

      html.push(`
        <div class="${cls}">
          <span class="w-5 font-mono text-center">${i + 1}</span>
          <span class="text-[10px] truncate max-w-[95px]">${step.label}</span>
          <span class="font-mono text-xs">${step.points}</span>
        </div>
      `);
    }
    container.innerHTML = html.join('');
  }

  function loadCrQuestion() {
    if (crIdx >= 15) {
      showCrVictory();
      return;
    }

    crLocked = false;
    const q = crPool[crIdx];
    const lang = getLang();
    const ladder = LADDER_STEPS_DATA[lang] || LADDER_STEPS_DATA.darija;
    const step = ladder[crIdx];

    const qNum = document.getElementById('cr-q-num');
    const pDisp = document.getElementById('cr-points-display');
    const tBadge = document.getElementById('cr-topic-badge');
    const qText = document.getElementById('cr-question-text');

    if (qNum) qNum.innerText = crIdx + 1;
    if (pDisp) pDisp.innerText = step.points;

    const specLabel = crSpec === 'design' 
      ? (lang === 'fr' ? "Graphic Design" : "الجرافيك ديزاين")
      : (lang === 'fr' ? "Montage Vidéo" : "مونتاج الفيديو");

    if (tBadge) {
      tBadge.innerText = lang === 'fr' 
        ? `Question ${crIdx + 1} / 15 • ${specLabel}`
        : `السؤال ${crIdx + 1} من 15 • تخصص ${specLabel}`;
    }

    if (qText) qText.innerText = q.question[lang] || q.question.darija;

    const audBox = document.getElementById('cr-audience-box');
    const phBox = document.getElementById('cr-phone-box');
    const expBox = document.getElementById('cr-exp-box');
    if (audBox) audBox.classList.add('hidden');
    if (phBox) phBox.classList.add('hidden');
    if (expBox) expBox.classList.add('hidden');

    const letters = lang === 'fr' ? ['A', 'B', 'C', 'D'] : ['أ', 'ب', 'ج', 'د'];
    const container = document.getElementById('cr-options-container');

    if (container) {
      container.innerHTML = q.options.map((opt, i) => {
        const text = opt.text[lang] || opt.text.darija;
        return `
          <button 
            id="cr-opt-btn-${i}" 
            onclick="handleCrSelect(${i})" 
            class="game-option-btn w-full p-4 rounded-xl text-left rtl:text-right flex items-center justify-between gap-3 group text-sm font-semibold select-none border border-brand-border/60 hover:border-brand-gold bg-brand-card/90 transition-all hover:bg-[#1E1A0F]"
          >
            <div class="flex items-center gap-3 w-full">
              <span class="w-7 h-7 rounded-lg bg-black/60 border border-brand-border flex items-center justify-center font-mono font-bold text-brand-gold text-xs shrink-0">
                ${letters[i]}
              </span>
              <span class="text-gray-200 text-xs sm:text-sm leading-relaxed">${text}</span>
            </div>
          </button>
        `;
      }).join('');
    }

    renderCrLadder();
  }

  window.handleCrSelect = function (idx) {
    if (crLocked) return;
    crLocked = true;

    SOUNDS.selectOption();
    const btn = document.getElementById(`cr-opt-btn-${idx}`);
    if (btn) {
      btn.classList.add('selected');
      btn.style.borderColor = '#F59E0B';
      btn.style.background = 'linear-gradient(135deg, #78350F 0%, #B45309 100%)';
    }

    setTimeout(() => {
      evaluateCrAnswer(idx);
    }, 1500);
  };

  function evaluateCrAnswer(idx) {
    const q = crPool[crIdx];
    const isCorrect = idx === q.correctIndex;
    const selBtn = document.getElementById(`cr-opt-btn-${idx}`);
    const corBtn = document.getElementById(`cr-opt-btn-${q.correctIndex}`);

    if (isCorrect) {
      SOUNDS.correct();
      crCorrectCount++;
      if (selBtn) {
        selBtn.classList.remove('selected');
        selBtn.classList.add('correct');
        selBtn.style.borderColor = '#10B981';
        selBtn.style.background = 'linear-gradient(135deg, #064E3B 0%, #047857 100%)';
      }

      showCrExp(q.explanation, true);

      setTimeout(() => {
        crIdx++;
        loadCrQuestion();
      }, 2000);

    } else {
      SOUNDS.wrong();
      if (selBtn) {
        selBtn.classList.remove('selected');
        selBtn.classList.add('wrong');
        selBtn.style.borderColor = '#EF4444';
        selBtn.style.background = 'linear-gradient(135deg, #7F1D1D 0%, #B91C1C 100%)';
      }
      if (corBtn) {
        corBtn.classList.add('correct');
        corBtn.style.borderColor = '#10B981';
        corBtn.style.background = 'linear-gradient(135deg, #064E3B 0%, #047857 100%)';
      }

      showCrExp(q.explanation, false);

      setTimeout(() => {
        showCrGameOver();
      }, 2600);
    }
  }

  function showCrExp(expObj, isCor) {
    const box = document.getElementById('cr-exp-box');
    const textEl = document.getElementById('cr-exp-text');
    const lang = getLang();
    const text = expObj[lang] || expObj.darija;

    if (box && textEl) {
      const prefix = isCor 
        ? (lang === 'fr' ? '<span class="text-emerald-400 font-bold">✓ Bonne réponse ! </span>' : '<span class="text-emerald-400 font-bold">✓ إجابة صحيحة! </span>')
        : (lang === 'fr' ? '<span class="text-red-400 font-bold">✗ Réponse incorrecte ! </span>' : '<span class="text-red-400 font-bold">✗ للأسف إجابة خاطئة! </span>');

      textEl.innerHTML = prefix + text;
      box.classList.remove('hidden');
    }
  }

  window.useLifeline5050 = function () {
    if (crLocked) return;
    const btn = document.getElementById('cr-ll-5050');
    if (btn) btn.disabled = true;
    SOUNDS.lifeline5050();

    const q = crPool[crIdx];
    const wrong = [];
    q.options.forEach((opt, i) => { if (!opt.isCorrect) wrong.push(i); });
    wrong.sort(() => Math.random() - 0.5);
    const toElim = wrong.slice(0, 2);

    toElim.forEach(i => {
      const optBtn = document.getElementById(`cr-opt-btn-${i}`);
      if (optBtn) {
        optBtn.classList.add('eliminated');
        optBtn.style.opacity = '0.15';
        optBtn.style.pointerEvents = 'none';
      }
    });
  };

  window.useLifelineAudience = function () {
    if (crLocked) return;
    const btn = document.getElementById('cr-ll-audience');
    if (btn) btn.disabled = true;
    SOUNDS.lifelineAudience();

    const q = crPool[crIdx];
    const correctIdx = q.correctIndex;
    let correctPct = Math.floor(60 + Math.random() * 25);
    let rem = 100 - correctPct;
    const pcts = [0, 0, 0, 0];
    pcts[correctIdx] = correctPct;

    const wrong = [0, 1, 2, 3].filter(i => i !== correctIdx);
    const p1 = Math.floor(Math.random() * (rem - 4));
    const p2 = Math.floor(Math.random() * (rem - p1 - 2));
    const p3 = rem - p1 - p2;
    pcts[wrong[0]] = p1; pcts[wrong[1]] = p2; pcts[wrong[2]] = p3;

    const lang = getLang();
    const letters = lang === 'fr' ? ['A', 'B', 'C', 'D'] : ['أ', 'ب', 'ج', 'د'];
    const barsContainer = document.getElementById('cr-audience-bars');

    if (barsContainer) {
      barsContainer.innerHTML = [0, 1, 2, 3].map(i => `
        <div class="flex flex-col items-center">
          <span class="text-brand-gold font-bold mb-1">${pcts[i]}%</span>
          <div class="w-full bg-brand-surface rounded-t-lg h-24 flex items-end p-1 border border-brand-border">
            <div class="w-full rounded bg-gradient-to-t ${i === correctIdx ? 'from-emerald-600 to-emerald-400' : 'from-brand-gold/60 to-brand-gold/30'}" style="height: ${pcts[i]}%"></div>
          </div>
          <span class="text-xs text-white font-bold mt-1 font-mono">${letters[i]}</span>
        </div>
      `).join('');
    }

    const box = document.getElementById('cr-audience-box');
    if (box) box.classList.remove('hidden');
  };

  window.closeCrAudience = function () {
    const box = document.getElementById('cr-audience-box');
    if (box) box.classList.add('hidden');
  };

  window.useLifelinePhone = function () {
    if (crLocked) return;
    const btn = document.getElementById('cr-ll-phone');
    if (btn) btn.disabled = true;
    SOUNDS.lifelinePhone();

    const q = crPool[crIdx];
    const lang = getLang();
    const letters = lang === 'fr' ? ['A', 'B', 'C', 'D'] : ['أ', 'ب', 'ج', 'د'];
    const corLetter = letters[q.correctIndex];
    const corText = q.options[q.correctIndex].text[lang] || q.options[q.correctIndex].text.darija;

    const phName = document.getElementById('cr-phone-name');
    const phMsg = document.getElementById('cr-phone-msg');

    if (lang === 'fr') {
      if (phName) phName.innerText = "📞 Appel expert : Sarah El Bouanani (Lead Designer & Art Director)";
      if (phMsg) {
        phMsg.innerHTML = `"Salut ${crPlayerName} ! Question technique pointue. À plus de 90 %, la réponse exacte est l'option <strong class='text-brand-gold font-mono'>(${corLetter})</strong> : '${corText}'."`;
      }
    } else {
      if (phName) phName.innerText = "📞 اتصال مع الخبير: سارة البوعناني (Lead Designer)";
      if (phMsg) {
        phMsg.innerHTML = `"سلام ${crPlayerName}! سؤال تقني كيحتاج تركيز. بنسبة تفوق 90% الجواب الصحيح هو الحرف <strong class='text-brand-gold font-mono'>(${corLetter})</strong>: '${corText}'."`;
      }
    }

    const box = document.getElementById('cr-phone-box');
    if (box) box.classList.remove('hidden');
  };

  function showCrVictory() {
    SOUNDS.victory();
    const lang = getLang();
    const ladder = LADDER_STEPS_DATA[lang] || LADDER_STEPS_DATA.darija;
    const rank = ladder[14].label;
    const pts = ladder[14].points;
    renderCrCertificate(15, pts, rank, true);
  }

  function showCrGameOver() {
    const lang = getLang();
    const ladder = LADDER_STEPS_DATA[lang] || LADDER_STEPS_DATA.darija;
    const reached = ladder[Math.max(0, crIdx - 1)];
    const pts = reached ? reached.points : "0";
    const rank = reached ? reached.label : (lang === 'fr' ? "Débutant Curieux" : "مبتدئ فضولي");
    renderCrCertificate(crCorrectCount, pts, rank, false);
  }

  function renderCrCertificate(correct, pts, rank, isWin) {
    const game = document.getElementById('cr-gameplay-view');
    const res = document.getElementById('cr-result-view');
    if (game) game.classList.add('hidden');
    if (res) res.classList.remove('hidden');

    const lang = getLang();
    window.updateChallengeStrings(lang);

    const specName = crSpec === 'design' 
      ? (lang === 'fr' ? "Graphic Design" : "الجرافيك ديزاين")
      : (lang === 'fr' ? "Montage Vidéo" : "مونتاج الفيديو");

    const pName = document.getElementById('cr-cert-player-name');
    const desc = document.getElementById('cr-cert-desc');
    const icon = document.getElementById('cr-cert-icon');
    const badge = document.getElementById('cr-cert-badge');
    const dateEl = document.getElementById('cr-cert-date');
    const waBtn = document.getElementById('cr-share-wa-btn');

    const pct = Math.round((correct / 15) * 100);
    const pctEl = document.getElementById('cr-cert-pct');
    const fracEl = document.getElementById('cr-cert-correct-fraction');
    const scoreLbl = document.getElementById('cr-cert-score-label');
    const rankEl = document.getElementById('cr-cert-rank');
    const ptsEl = document.getElementById('cr-cert-pts');
    const specEl = document.getElementById('cr-cert-spec');

    if (pctEl) pctEl.innerText = pct + "%";
    if (fracEl) fracEl.innerText = `${correct} / 15`;
    if (scoreLbl) scoreLbl.innerText = lang === 'fr' ? "Score & Taux de réussite :" : "النتيجة والنسبة المحققة :";
    if (rankEl) rankEl.innerText = rank;
    if (ptsEl) ptsEl.innerText = pts;
    if (specEl) specEl.innerText = specName;

    if (pName) pName.innerText = crPlayerName;
    if (icon) icon.innerText = isWin ? "🏆" : "🎖️";

    if (badge) {
      if (lang === 'fr') {
        badge.innerText = isWin ? "CERTIFICAT OFFICIEL : GRAND MASTER 10 000 000 PTS" : "CERTIFICAT DE PARTICIPATION & MAÎTRISE CRÉATIVE";
      } else {
        badge.innerText = isWin ? "شهادة فوز بالمليون نقطة إبداعية" : "شهادة مشاركة وتقدير إبداعي";
      }
    }

    if (desc) {
      if (lang === 'fr') {
        if (isWin) {
          desc.innerHTML = `Toutes nos félicitations à l'artiste créatif(ve) <strong class="text-white">${crPlayerName}</strong> ! Vous avez brillamment réussi un score parfait de <strong class="text-emerald-400">100% (15/15)</strong> dans la spécialité <strong class="text-brand-gold">${specName}</strong>, remportant la cagnotte ultime de <strong class="text-emerald-400">${pts}</strong> points avec le titre suprême de <strong class="text-amber-400">${rank}</strong>.`;
        } else {
          desc.innerHTML = `Ce certificat officiel atteste que <strong class="text-white">${crPlayerName}</strong> a obtenu un score de <strong class="text-emerald-400">${pct}% (${correct}/15)</strong> dans le défi technique <strong class="text-brand-gold">${specName}</strong>, atteignant le rang de <strong class="text-amber-400">${rank}</strong> avec <strong class="text-brand-gold">${pts}</strong> points.`;
        }
      } else {
        if (isWin) {
          desc.innerHTML = `تهانينا الحارة للمبدع(ة) <strong class="text-white">${crPlayerName}</strong>! لقد اجتزت بنجاح باهر جميع الأسئلة بنسبة كاملة <strong class="text-emerald-400">100% (15 / 15)</strong> في مسابقة <strong class="text-brand-gold">من سيربح الإبداع</strong> تخصص <strong class="text-brand-gold">${specName}</strong> وحققت الجائزة الكبرى برصيد <strong class="text-emerald-400">${pts}</strong> نقطة برتبة <strong class="text-amber-400">${rank}</strong>.`;
        } else {
          desc.innerHTML = `تُمنح هذه الشهادة الرسمية للمبدع(ة) <strong class="text-white">${crPlayerName}</strong> تقديراً لتحقيقه نتيجة <strong class="text-emerald-400">${pct}% (${correct} من 15 سؤالاً صحيحاً)</strong> في مسابقة <strong class="text-brand-gold">من سيربح الإبداع</strong> تخصص <strong class="text-brand-gold">${specName}</strong> برصيد <strong class="text-brand-gold">${pts}</strong> نقطة برتبة <strong class="text-amber-400">${rank}</strong>.`;
        }
      }
    }

    const today = new Date();
    if (dateEl) {
      dateEl.innerText = lang === 'fr'
        ? today.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })
        : today.toLocaleDateString('ar-MA', { year: 'numeric', month: 'long', day: 'numeric' });
    }

    // WhatsApp viral sharing link
    let shareMsg = "";
    if (lang === 'fr') {
      shareMsg = `Salut l'artiste ! Je suis ${crPlayerName} 👋
J'ai relevé le "Défi Créatif" en ${specName} et j'ai réussi ${correct} questions sur 15, décrochant ${pts} points (Rang : ${rank}) ! 🏆

Penses-tu pouvoir faire mieux et remporter les 10 millions ? Entre ton nom et teste tes compétences ici :
https://hichamedd.com/challenge.html`;
    } else {
      shareMsg = `سلام صديقي! أنا ${crPlayerName} 👋
جربت لعبة "من سيربح الإبداع؟" فـ تخصص ${specName} وجاوبت على ${correct} من أصل 15 سؤال وربحت رصيد ${pts} نقطة (${rank})! 🏆

واش تقدر تجيب كثر مني وتربح النقط د المليون؟ دخّل سميتك وجرب دابا وشوف شكون فينا اللي غادي يربح:
https://hichamedd.com/challenge.html`;
    }

    if (waBtn) {
      waBtn.href = "https://wa.me/?text=" + encodeURIComponent(shareMsg);
    }
  }

  // Update on language change
  window.addEventListener('languageChanged', (e) => {
    const lang = e.detail && e.detail.lang ? e.detail.lang : getLang();
    window.updateChallengeStrings(lang);
    const game = document.getElementById('cr-gameplay-view');
    const res = document.getElementById('cr-result-view');
    if (game && !game.classList.contains('hidden')) {
      renderCrLadder();
      loadCrQuestion();
    } else if (res && !res.classList.contains('hidden') && crPlayerName) {
      showCrGameOver();
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    window.updateChallengeStrings();
  });

})();
