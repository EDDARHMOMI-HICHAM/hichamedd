/**
 * HICHAM EDD — BRAND & MARKETING AUDIT ENGINE
 * Fully Bilingual: Moroccan Darija & French
 */

(function () {
  'use strict';

  const WHATSAPP_PHONE = "212653342503";

  let auditStep = 0;
  let auditTotalScore = 0;
  let auditAnswersRecord = [];
  let founderNameVal = "";
  let companyNameVal = "";

  function getLang() {
    return localStorage.getItem('hicham_lang') === 'fr' ? 'fr' : 'darija';
  }

  window.updateAuditStrings = function (lang) {
    if (!lang) lang = getLang();

    const titleH = document.getElementById('audit-title-header');
    const stepLbl = document.getElementById('audit-step-label');
    const modalTitle = document.getElementById('modal-lead-title');
    const modalDesc = document.getElementById('modal-lead-desc');
    const lblName = document.getElementById('modal-lbl-name');
    const lblComp = document.getElementById('modal-lbl-company');
    const inpName = document.getElementById('audit-founder-name');
    const inpComp = document.getElementById('audit-company-name');
    const errCapture = document.getElementById('audit-capture-error');
    const btnSubmit = document.getElementById('modal-btn-submit');
    const certTitleTop = document.getElementById('cert-title-top');
    const certYearTag = document.getElementById('cert-year-tag');
    const certHeadingMain = document.getElementById('cert-heading-main');
    const certAwardedLbl = document.getElementById('cert-awarded-to-label');
    const certFounderPre = document.getElementById('cert-founder-prefix');
    const certScoreLbl = document.getElementById('cert-score-label');
    const waCardTag = document.getElementById('wa-card-tag');
    const waCardTitle = document.getElementById('wa-card-title');
    const waCardDesc = document.getElementById('wa-card-desc');
    const waCardBtn = document.getElementById('wa-card-btn-text');
    const btnRestart = document.getElementById('audit-btn-restart');
    const btnDl = document.getElementById('audit-btn-download-cert');
    const screenshotTip = document.getElementById('audit-screenshot-tip');

    if (lang === 'fr') {
      if (titleH) titleH.innerText = "Audit d'Identité & Marketing Commercial";
      if (stepLbl) stepLbl.innerText = "Critère n°";
      if (modalTitle) modalTitle.innerText = "Audit terminé avec succès !";
      if (modalDesc) modalDesc.innerText = "Entrez votre nom complet et le nom de votre marque pour générer votre certificat d'audit et préparer votre bilan complet sur WhatsApp :";
      if (lblName) lblName.innerText = "1. Votre nom complet : *";
      if (lblComp) lblComp.innerText = "2. Nom de l'entreprise ou marque : *";
      if (inpName) inpName.placeholder = "Ex. : Youssef El Maataoui";
      if (inpComp) inpComp.placeholder = "Ex. : Ocean Express";
      if (errCapture) errCapture.innerText = "⚠️ Veuillez renseigner votre nom et votre entreprise !";
      if (btnSubmit) btnSubmit.innerText = "Délivrer le certificat & voir le rapport 🚀";
      if (certTitleTop) certTitleTop.innerText = "Certificat d'Audit & Diagnostic de Marque";
      if (certYearTag) certYearTag.innerText = "BILAN D'AUDIT VISUEL 2026";
      if (certHeadingMain) certHeadingMain.innerText = "Certificat d'Évaluation de Marque";
      if (certAwardedLbl) certAwardedLbl.innerText = "Ce certificat officiel est décerné à la marque :";
      if (certFounderPre) certFounderPre.innerText = "Sous la direction de :";
      if (certScoreLbl) certScoreLbl.innerText = "Indice de conformité de marque :";
      if (waCardTag) waCardTag.innerText = "🚀 Pour aller plus loin et appliquer les solutions :";
      if (waCardTitle) waCardTitle.innerText = "Transmettre le bilan complet et débriefer sur WhatsApp";
      if (waCardDesc) waCardDesc.innerText = "Cliquez sur le bouton pour transmettre votre rapport détaillé à Hicham sur WhatsApp. Vous recevrez une analyse approfondie et un devis préalable pour réserver une journée de travail créatif (Sprint Per Day) avec facture légale.";
      if (waCardBtn) waCardBtn.innerText = "Envoyer mon rapport à Hicham sur WhatsApp 📲";
      if (btnRestart) btnRestart.innerText = "🔄 Réaliser l'audit d'un autre projet";
      if (btnDl) btnDl.innerHTML = "<span>📥</span> <span>Télécharger le certificat (Image)</span>";
      if (screenshotTip) screenshotTip.innerText = "📸 Conseil : Téléchargez votre certificat ou faites une capture d'écran pour le conserver sur votre téléphone !";
    } else {
      if (titleH) titleH.innerText = "تشخيص الهوية والتسويق التجاري";
      if (stepLbl) stepLbl.innerText = "المعيار رقم";
      if (modalTitle) modalTitle.innerText = "ساليتي الفحص بنجاح!";
      if (modalDesc) modalDesc.innerText = "دخل سميتك الكاملة واسم شركتك باش نقادو شهادة التدقيق ونوجدو تقرير الفحص الشامل لمراسلته على واتساب:";
      if (lblName) lblName.innerText = "1. سميتك الكاملة: *";
      if (lblComp) lblComp.innerText = "2. اسم الشركة أو المشروع: *";
      if (inpName) inpName.placeholder = "مثال: يوسف المعطاوي";
      if (inpComp) inpComp.placeholder = "مثال: Ocean Express";
      if (errCapture) errCapture.innerText = "⚠️ عافاك دخل سميتك واسم شركتك!";
      if (btnSubmit) btnSubmit.innerText = "إصدار الشهادة وعرض التقرير الشامل 🚀";
      if (certTitleTop) certTitleTop.innerText = "شهادة تدقيق وتشخيص الهوية التجارية";
      if (certYearTag) certYearTag.innerText = "تقرير التدقيق البصري لعام 2026";
      if (certHeadingMain) certHeadingMain.innerText = "شهادة تقييم الهوية المؤسساتية";
      if (certAwardedLbl) certAwardedLbl.innerText = "تُمنح هذه الشهادة والتشخيص الرسمي لعلامة:";
      if (certFounderPre) certFounderPre.innerText = "بإشراف المدير(ة):";
      if (certScoreLbl) certScoreLbl.innerText = "معدل قوة الهوية الحالي:";
      if (waCardTag) waCardTag.innerText = "🚀 للمزيد من التفاصيل والحلول العملية:";
      if (waCardTitle) waCardTitle.innerText = "إرسال التقرير الكامل ومراجعة الثغرات فـ WhatsApp";
      if (waCardDesc) waCardDesc.innerText = "كليكي على الزر باش ترسل لهشام الدغمومي الأجوبة والتحليل كامل فـ WhatsApp، وغيجاوبك بتشخيص مفصل و Devis مسبق لحجز نهار عمل لمعالجة المشاكل والوصول ببراندك لـ 100%.";
      if (waCardBtn) waCardBtn.innerText = "مراسلة هشام بالتقرير فـ WhatsApp 📲";
      if (btnRestart) btnRestart.innerText = "🔄 إعادة فحص مشروع آخر";
      if (btnDl) btnDl.innerHTML = "<span>📥</span> <span>احتفظ بالشهادة (تحميل كصورة)</span>";
      if (screenshotTip) screenshotTip.innerText = "📸 نصيحة: تقدر تيليشارجي الشهادة أو تدير سكرينشوت وتحتفظ بيها فتيليفونك!";
    }
  };

  window.initAudit = function () {
    const questionsView = document.getElementById('audit-questions-view');
    if (!questionsView) return;

    auditStep = 0;
    auditTotalScore = 0;
    auditAnswersRecord = [];
    window.updateAuditStrings();
    window.loadAuditQuestion();
  };

  window.loadAuditQuestion = function () {
    if (!window.AUDIT_QUESTIONS || !window.AUDIT_QUESTIONS.length) return;
    const lang = getLang();

    if (auditStep >= window.AUDIT_QUESTIONS.length) {
      const modal = document.getElementById('audit-lead-modal');
      if (modal) modal.classList.remove('hidden');
      return;
    }

    const q = window.AUDIT_QUESTIONS[auditStep];
    const stepNumEl = document.getElementById('audit-step-num');
    const stepIndEl = document.getElementById('audit-step-indicator');
    const catBadge = document.getElementById('audit-cat-badge');
    const iconDisp = document.getElementById('audit-icon-display');
    const qText = document.getElementById('audit-question-text');
    const pBar = document.getElementById('audit-progress-bar');
    const container = document.getElementById('audit-options-container');

    if (stepNumEl) stepNumEl.innerText = auditStep + 1;
    if (stepIndEl) stepIndEl.innerText = (auditStep + 1) + " / 12";
    if (catBadge) catBadge.innerText = q.cat[lang] || q.cat.darija;
    if (iconDisp) iconDisp.innerText = q.icon;
    if (qText) qText.innerText = q.q[lang] || q.q.darija;

    const pct = Math.round(((auditStep + 1) / window.AUDIT_QUESTIONS.length) * 100);
    if (pBar) pBar.style.width = pct + "%";

    const letters = lang === 'fr' ? ['A', 'B', 'C'] : ['أ', 'ب', 'ج'];

    if (container) {
      container.innerHTML = q.options.map((opt, i) => {
        const text = opt.text[lang] || opt.text.darija;
        const label = opt.label[lang] || opt.label.darija;
        return `
          <div 
            onclick="selectAuditOption(${i}, ${opt.score}, '${label.replace(/'/g, "\\'")}')" 
            id="audit-opt-${i}"
            class="audit-option-card p-4 sm:p-5 rounded-2xl flex items-start gap-4 select-none cursor-pointer transition-all border border-brand-border/60 hover:border-brand-gold bg-brand-card/80 hover:bg-[#1C180E]"
          >
            <span class="w-8 h-8 rounded-xl bg-black/60 border border-brand-border flex items-center justify-center font-mono font-bold text-brand-gold text-xs shrink-0 mt-0.5">
              ${letters[i]}
            </span>
            <div class="flex-grow">
              <p class="text-xs sm:text-sm text-gray-200 leading-relaxed">${text}</p>
            </div>
          </div>
        `;
      }).join('');
    }
  };

  window.selectAuditOption = function (idx, score, label) {
    const card = document.getElementById(`audit-opt-${idx}`);
    if (card) {
      card.classList.add('selected');
      card.style.borderColor = 'var(--color-gold)';
      card.style.background = 'linear-gradient(135deg, #2A210A 0%, #3D2F0E 100%)';
    }

    auditTotalScore += score;
    const lang = getLang();
    const q = window.AUDIT_QUESTIONS[auditStep];

    auditAnswersRecord.push({
      questionNum: auditStep + 1,
      category: q.cat[lang] || q.cat.darija,
      label: label,
      score: score
    });

    setTimeout(() => {
      auditStep++;
      window.loadAuditQuestion();
    }, 280);
  };

  window.submitAuditLead = function () {
    const lang = getLang();
    const fInput = document.getElementById('audit-founder-name');
    const cInput = document.getElementById('audit-company-name');
    const err = document.getElementById('audit-capture-error');

    const fVal = fInput ? fInput.value.trim() : "";
    const cVal = cInput ? cInput.value.trim() : "";

    if (!fVal || !cVal) {
      if (err) err.classList.remove('hidden');
      if (!fVal && fInput) fInput.focus();
      else if (cInput) cInput.focus();
      return;
    }

    if (err) err.classList.add('hidden');
    founderNameVal = fVal;
    companyNameVal = cVal;

    const modal = document.getElementById('audit-lead-modal');
    const qView = document.getElementById('audit-questions-view');
    const rView = document.getElementById('audit-report-view');

    if (modal) modal.classList.add('hidden');
    if (qView) qView.classList.add('hidden');
    if (rView) rView.classList.remove('hidden');

    window.updateAuditStrings(lang);

    const pctScore = Math.round((auditTotalScore / 120) * 100);

    const fDisp = document.getElementById('cert-founder-display');
    const cDisp = document.getElementById('cert-company-display');
    const pDisp = document.getElementById('cert-pct-display');
    const bDisp = document.getElementById('cert-badge-display');
    const aText = document.getElementById('cert-analysis-text');
    const dDisp = document.getElementById('cert-date-display');
    const waBtn = document.getElementById('audit-send-report-wa-btn');

    if (fDisp) fDisp.innerText = fVal;
    if (cDisp) cDisp.innerText = cVal;
    if (pDisp) pDisp.innerText = pctScore + "%";

    let rankLabel = "";
    if (pctScore < 50) {
      if (lang === 'fr') {
        rankLabel = "État Critique 🚨 (Risque de Pertes de Ventes)";
        if (bDisp) {
          bDisp.className = "text-xs font-bold px-3 py-1 rounded-full bg-red-500/20 text-red-400 border border-red-500/30";
          bDisp.innerText = rankLabel;
        }
        if (aText) {
          aText.innerHTML = `L'audit révèle que la marque <strong class="text-brand-gold">${cVal}</strong> présente des <strong class="text-red-400">failles visuelles et techniques critiques</strong> (absence de fichiers sources, lenteur publicitaire, manque de lisibilité mobile). Ces lacunes freinent directement votre taux de conversion au profit de vos concurrents. Un sprint de refonte immédiat est recommandé.`;
        }
      } else {
        rankLabel = "حالة حرجة 🚨 (خسائر فـ المبيعات)";
        if (bDisp) {
          bDisp.className = "text-xs font-bold px-3 py-1 rounded-full bg-red-500/20 text-red-400 border border-red-500/30";
          bDisp.innerText = rankLabel;
        }
        if (aText) {
          aText.innerHTML = `أظهر الفحص أن علامة <strong class="text-brand-gold">${cVal}</strong> تعاني من <strong class="text-red-400">فجوات بصرية وتقنية حرجة</strong> (غياب ملفات أصلية، بطء إعلانات، وغياب هوية متجاوبة). هذا الأمر يتسبب في ضياع مبيعاتكم المحتملة لصالح المنافسين! سارع بحجز سبرينت عمل لمعالجة المشاكل.`;
        }
      }
    } else if (pctScore <= 80) {
      if (lang === 'fr') {
        rankLabel = "Niveau Intermédiaire ⚠️ (Optimisation vers 100%)";
        if (bDisp) {
          bDisp.className = "text-xs font-bold px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30";
          bDisp.innerText = rankLabel;
        }
        if (aText) {
          aText.innerHTML = `L'entreprise <strong class="text-brand-gold">${cVal}</strong> dispose d'une bonne base, mais présente des <strong class="text-amber-400">déperditions sur l'impact vidéo, la cohérence typographique et le packaging</strong>. Combler ces failles vous permettra d'atteindre l'excellence et de maximiser votre ROI publicitaire. Contactez-nous pour planifier un sprint d'optimisation.`;
        }
      } else {
        rankLabel = "مستوى متوسط ⚠️ (يحتاج تحسين لـ 100%)";
        if (bDisp) {
          bDisp.className = "text-xs font-bold px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30";
          bDisp.innerText = rankLabel;
        }
        if (aText) {
          aText.innerHTML = `تمتلك شركة <strong class="text-brand-gold">${cVal}</strong> أساسيات جيدة، لكنها تعاني من <strong class="text-amber-400">تسريبات في أداء الفيديوهات وتوحيد الخطوط والباكاجينغ</strong>. سد هذه الثغرات كفيل بمضاعفة عائد إعلاناتكم والوصول إلى 100%. تواصل معنا لحجز يوم عمل لمعالجة هذه النقاط.`;
        }
      }
    } else {
      if (lang === 'fr') {
        rankLabel = "Marque Forte & Professionnelle 🏆 (Excellence)";
        if (bDisp) {
          bDisp.className = "text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30";
          bDisp.innerText = rankLabel;
        }
        if (aText) {
          aText.innerHTML = `Toutes nos félicitations ! L'entreprise <strong class="text-brand-gold">${cVal}</strong> bénéficie d'une <strong class="text-emerald-400">excellente gouvernance visuelle et d'une maturité marketing avancée</strong> qui renforcent votre crédibilité et justifient des tarifs premium sur le marché. Contactez-nous pour passer au palier supérieur.`;
        }
      } else {
        rankLabel = "براند قوية ومحترفة 🏆 (90%+)";
        if (bDisp) {
          bDisp.className = "text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30";
          bDisp.innerText = rankLabel;
        }
        if (aText) {
          aText.innerHTML = `تهانينا الحارة! تتمتع شركة <strong class="text-brand-gold">${cVal}</strong> بـ <strong class="text-emerald-400">حوكمة بصرية ممتازة وجاهزية تسويقية متقدمة</strong> تعكس الاحترافية وتبرر الأسعار القوية في السوق المغربي. تواصل معنا للحفاظ على هذا التميز ومضاعفة التوسع.`;
        }
      }
    }

    const today = new Date();
    if (dDisp) {
      dDisp.innerText = lang === 'fr'
        ? today.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })
        : today.toLocaleDateString('ar-MA', { year: 'numeric', month: 'long', day: 'numeric' });
    }

    let detailedAnswersText = auditAnswersRecord.map(rec => 
      `▫️ *[${rec.category}]*: ${rec.label} (${rec.score} pts)`
    ).join('\n');

    let fullWhatsAppReport = "";
    if (lang === 'fr') {
      fullWhatsAppReport = `Bonjour Hicham ! Je suis ${fVal}, dirigeant de ${cVal} 👋
J'ai effectué l'audit diagnostique de marque sur votre site web et voici mon bilan officiel :

📊 *Résultat officiel* : ${pctScore}% (${rankLabel})

📋 *Détail des 12 critères évalués* :
${detailedAnswersText}

Je souhaite vous consulter et demander un devis pour réserver un sprint de travail créatif (Per Day) avec facture légale afin de combler ces failles et porter notre marque à 100%.`;
    } else {
      fullWhatsAppReport = `سلام هشام! أنا ${fVal} مدير شركة ${cVal} 👋
درت فحص الهوية البصرية والتسويقية فـ الموقع وها هو التقرير الكامل ديالي:

📊 *النتيجة الرسمية*: ${pctScore}% (${rankLabel})

📋 *تفاصيل الأجوبة الـ 12*:
${detailedAnswersText}

باغي نستشر معك ونطلب Devis لحجز نهار عمل (Sprint) باش نصلحو هاد الثغرات ونوصلو هويتنا لـ 100% مع فاتورة قانونية Facture.`;
    }

    if (waBtn) {
      waBtn.href = "https://wa.me/" + WHATSAPP_PHONE + "?text=" + encodeURIComponent(fullWhatsAppReport);
    }
  };

  window.restartAudit = function () {
    auditStep = 0;
    auditTotalScore = 0;
    auditAnswersRecord = [];
    const rView = document.getElementById('audit-report-view');
    const qView = document.getElementById('audit-questions-view');
    if (rView) rView.classList.add('hidden');
    if (qView) qView.classList.remove('hidden');
    window.updateAuditStrings();
    window.loadAuditQuestion();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('languageChanged', (e) => {
    const lang = e.detail && e.detail.lang ? e.detail.lang : getLang();
    window.updateAuditStrings(lang);
    const qView = document.getElementById('audit-questions-view');
    const rView = document.getElementById('audit-report-view');
    if (qView && !qView.classList.contains('hidden')) {
      window.loadAuditQuestion();
    } else if (rView && !rView.classList.contains('hidden') && founderNameVal && companyNameVal) {
      window.submitAuditLead();
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    window.initAudit();
  });

})();
