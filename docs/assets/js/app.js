(function () {

  const PAGE_PATHS = {"index.html":"index.html","about.html":"site/about.html","contact.html":"site/contact.html","privacy.html":"site/privacy.html","terms.html":"site/terms.html","ads-guide.html":"site/ads-guide.html","public-check.html":"site/public-check.html","offline.html":"site/offline.html","java-basic.html":"courses/java-basic/index.html","java-basic-01.html":"courses/java-basic/lessons/01.html","java-basic-02.html":"courses/java-basic/lessons/02.html","java-basic-03.html":"courses/java-basic/lessons/03.html","java-basic-04.html":"courses/java-basic/lessons/04.html","java-basic-05.html":"courses/java-basic/lessons/05.html","java-basic-06.html":"courses/java-basic/lessons/06.html","java-basic-07.html":"courses/java-basic/lessons/07.html","java-basic-08.html":"courses/java-basic/lessons/08.html","java-basic-09.html":"courses/java-basic/lessons/09.html","java-basic-10.html":"courses/java-basic/lessons/10.html","java-basic-11.html":"courses/java-basic/lessons/11.html","java-basic-12.html":"courses/java-basic/lessons/12.html","java-basic-13.html":"courses/java-basic/lessons/13.html","java-basic-14.html":"courses/java-basic/lessons/14.html","java-basic-15.html":"courses/java-basic/lessons/15.html","java-basic-16.html":"courses/java-basic/lessons/16.html","java-basic-17.html":"courses/java-basic/lessons/17.html","java-basic-18.html":"courses/java-basic/lessons/18.html","java-basic-19.html":"courses/java-basic/lessons/19.html","java-basic-20.html":"courses/java-basic/lessons/20.html","bronze.html":"courses/bronze/index.html","bronze-01.html":"courses/bronze/lessons/01.html","bronze-02.html":"courses/bronze/lessons/02.html","bronze-03.html":"courses/bronze/lessons/03.html","bronze-04.html":"courses/bronze/lessons/04.html","bronze-05.html":"courses/bronze/lessons/05.html","bronze-06.html":"courses/bronze/lessons/06.html","bronze-practice-1.html":"courses/bronze/practice/basic-syntax.html","bronze-practice-2.html":"courses/bronze/practice/oop-basic.html","bronze-exam-a.html":"courses/bronze/exams/a.html","java11silver.html":"courses/java11-silver/index.html","java11silver-01.html":"courses/java11-silver/lessons/01.html","java11silver-02.html":"courses/java11-silver/lessons/02.html","java11silver-03.html":"courses/java11-silver/lessons/03.html","java11silver-04.html":"courses/java11-silver/lessons/04.html","java11silver-05.html":"courses/java11-silver/lessons/05.html","java11silver-06.html":"courses/java11-silver/lessons/06.html","java11silver-07.html":"courses/java11-silver/lessons/07.html","java11silver-08.html":"courses/java11-silver/lessons/08.html","java11-practice-1.html":"courses/java11-silver/practice/basic-syntax.html","java11-practice-2.html":"courses/java11-silver/practice/oop.html","java11-practice-3.html":"courses/java11-silver/practice/final-check.html","java11-exam-a.html":"courses/java11-silver/exams/a.html","java11-exam-b.html":"courses/java11-silver/exams/b.html","java17silver.html":"courses/java17-silver/index.html","practice-a.html":"courses/java17-silver/units/java-basic.html","practice-b.html":"courses/java17-silver/units/type-string-array.html","practice-l.html":"courses/java17-silver/units/reference-api.html","practice-c.html":"courses/java17-silver/units/operator-control.html","practice-d.html":"courses/java17-silver/units/class-design.html","practice-e.html":"courses/java17-silver/units/inheritance.html","practice-f.html":"courses/java17-silver/units/exception.html","practice-m.html":"courses/java17-silver/units/compile-check.html","practice-i.html":"courses/java17-silver/units/random.html","practice-g.html":"courses/java17-silver/exams/a.html","practice-h.html":"courses/java17-silver/exams/b.html","practice-j.html":"courses/java17-silver/exams/c.html","practice-k.html":"courses/java17-silver/exams/d.html","exam.html":"courses/java17-silver/exams/index.html","exam-aftercare.html":"courses/java17-silver/exams/aftercare.html","exam-quality.html":"courses/java17-silver/exams/quality.html","gold.html":"courses/gold/index.html","gold-01.html":"courses/gold/lessons/01.html","gold-02.html":"courses/gold/lessons/02.html","gold-03.html":"courses/gold/lessons/03.html","gold-04.html":"courses/gold/lessons/04.html","gold-05.html":"courses/gold/lessons/05.html","gold-06.html":"courses/gold/lessons/06.html","gold-07.html":"courses/gold/lessons/07.html","gold-08.html":"courses/gold/lessons/08.html","gold-practice-1.html":"courses/gold/practice/lambda-stream.html","gold-practice-2.html":"courses/gold/practice/generics-collections.html","gold-practice-3.html":"courses/gold/practice/io-concurrency.html","gold-practice-4.html":"courses/gold/practice/module-final.html","gold-exam-a.html":"courses/gold/exams/a.html","gold-exam-b.html":"courses/gold/exams/b.html","articles.html":"articles/index.html","article-types.html":"articles/types/index.html","article-string.html":"articles/string/index.html","article-reference.html":"articles/reference/index.html","article-pitfalls.html":"articles/pitfalls/index.html","article-operators-control.html":"articles/operators-control/index.html","article-class-design.html":"articles/class-design/index.html","article-inheritance.html":"articles/inheritance/index.html","article-exception.html":"articles/exception/index.html","article-compile-errors.html":"articles/compile-errors/index.html","methods.html":"articles/methods/index.html","glossary.html":"articles/glossary/index.html","cheatsheet.html":"articles/cheatsheet/index.html","study-plan.html":"articles/study-plan/index.html","before-exam.html":"articles/before-exam/index.html","weak-guides.html":"articles/weak-guides/index.html","mistake-patterns.html":"articles/mistake-patterns/index.html","exam-strategy.html":"articles/exam-strategy/index.html","dashboard.html":"app/dashboard.html","mode.html":"app/mode.html","learning-path.html":"app/learning-path.html","quality-map.html":"app/quality-map.html","search.html":"app/search.html","random.html":"app/random.html","notes.html":"app/notes.html","settings.html":"app/settings.html","sync.html":"app/sync.html","mistake-reasons.html":"app/mistake-reasons.html","review-wrong.html":"app/review/wrong.html","review-marked.html":"app/review/marked.html","review-weak.html":"app/review/weak.html","review-due.html":"app/review/due.html","tag-index.html":"app/tags/index.html","tag-array.html":"app/tags/array.html","tag-basic.html":"app/tags/basic.html","tag-class.html":"app/tags/class.html","tag-compile.html":"app/tags/compile.html","tag-control.html":"app/tags/control.html","tag-exception.html":"app/tags/exception.html","tag-inheritance.html":"app/tags/inheritance.html","tag-operator.html":"app/tags/operator.html","tag-output.html":"app/tags/output.html","tag-reference.html":"app/tags/reference.html","tag-runtime.html":"app/tags/runtime.html","tag-string.html":"app/tags/string.html","tag-type.html":"app/tags/type.html"};
  function pageHref(page) {
    if (!page) return (window.APP_ROOT || "") + "index.html";
    if (/^(https?:|mailto:|#|\/\/)/.test(page)) return page;
    const mapped = PAGE_PATHS[page] || page;
    return (window.APP_ROOT || "") + mapped;
  }
  function tagHref(tag) { return (window.APP_ROOT || "") + "app/tags/" + encodeURIComponent(tag) + ".html"; }
  const DATA = window.JAVA_STUDY_DATA;
  const unitId = window.UNIT_ID || null;
  const storageKey = "java-practice-lab-progress-v2";
  const examStorageKey = "java-practice-lab-exam-v1";
  const viewStorageKey = "java-practice-lab-view-v1";
  const reviewStorageKey = "java-practice-lab-review-v1";
  const examHistoryStorageKey = "java-practice-lab-exam-history-v1";
  const settingsStorageKey = "java-practice-lab-settings-v1";
  const notesStorageKey = "java-practice-lab-notes-v1";
  const mistakeReasonStorageKey = "java-practice-lab-mistake-reasons-v1";
  let examTimerId = null;
  const tagFilter = window.TAG_FILTER || null;
  const reviewMode = window.REVIEW_MODE || null;
  const randomMode = !!window.RANDOM_MODE;
  const urlParams = new URLSearchParams(location.search);
  const reviewUnitFilter = urlParams.get("unit") || null;
  const randomSize = Math.min(Math.max(Number(urlParams.get("size") || 20), 5), 60);
  const focusQuestionId = urlParams.get("q") || null;
  const viewKey = unitId || (tagFilter ? `tag:${tagFilter}` : reviewMode ? `review:${reviewMode}:${reviewUnitFilter || "all"}` : randomMode ? `random:${randomSize}` : "global");

  function allQuestions() {
    return Object.values(DATA.questions || {}).flat();
  }
  function isExamUnitId(id) {
    return (DATA.units || []).some(u => u.id === id && u.mode === "exam");
  }
  function practiceQuestions() {
    return Object.entries(DATA.questions || {})
      .filter(([uid]) => !isExamUnitId(uid))
      .flatMap(([, qs]) => qs || []);
  }
  function markedQuestionIdsFor(questions) {
    const allow = new Set((questions || []).map(q => q.id));
    return Array.from(markedQuestionIds()).filter(id => allow.has(id));
  }
  function unitOfQuestion(qid) {
    return Object.keys(DATA.questions || {}).find(uid => (DATA.questions[uid] || []).some(q => q.id === qid));
  }
  function tagTitle(tag) {
    return DATA.tagDefinitions?.[tag]?.title || tag;
  }
  function tagDescription(tag) {
    return DATA.tagDefinitions?.[tag]?.description || "指定タグの問題だけを集めた演習です。";
  }
  const mistakeReasonLabels = {
    compile: "コンパイル可否を見落とした",
    runtime: "例外発生を見落とした",
    output: "出力順を間違えた",
    reference: "参照比較を間違えた",
    api: "API仕様を忘れていた",
    reading: "問題文を読み違えた",
    time: "時間不足",
    guess: "勘で選んだ"
  };
  const tagMiniGuides = {
    reference: ["== は参照の同一性、equals は実装次第。", "String はリテラル・new・intern の参照先を分けて考える。", "record はコンポーネント値で equals が自動生成される。"],
    string: ["String は不変。replace / substring / concat は戻り値を受け取る。", "StringBuilder は破壊的変更が多いが、equals は内容比較ではない。", "indexOf と substring の範囲は境界値を確認する。"],
    array: ["配列要素のデフォルト値、length、ジャグ配列を確認する。", "clone は1次元目だけコピーする点に注意。", "配列共変はコンパイルできても実行時例外があり得る。"],
    type: ["byte/short/char は演算時に int へ昇格する。", "+= は暗黙キャストを含むが、通常代入は不可の場合がある。", "var はローカル変数だけ。フィールド・引数・戻り値には使えない。"],
    control: ["switch文のフォールスルーと switch式の yield を分ける。", "continue / break がどのループ・switchに効くかを見る。", "到達不能コードはコンパイルエラーになる。"],
    inheritance: ["フィールドは隠蔽、メソッドはオーバーライド。", "参照型で呼べるメンバーと実体型で動的束縛されるメソッドを分ける。", "default メソッド競合や sealed の継承制限を確認する。"],
    exception: ["checked 例外は throws/catch が必要。", "catch は狭い型から広い型へ並べる。", "try-with-resources は finally より前に close される。"],
    compile: ["出力を追う前に、宣言・初期化・アクセス修飾子・到達不能を確認する。"],
    runtime: ["null、配列範囲外、キャスト、NumberFormat を疑う。"],
    output: ["副作用のある式、コンストラクタ順、finally、文字列不変性を追う。"]
  };
  function firstLookPoint(q) {
    const tags = q.tags || [];
    if (q.examFocus) return q.examFocus;
    if (tags.includes("reference")) return "参照比較では、変数の値ではなく、同じインスタンスを指しているかを確認します。";
    if (tags.includes("string")) return "Stringは不変なので、メソッド呼び出し後の戻り値を受け取っているかを確認します。";
    if (tags.includes("compile")) return "出力候補を追う前に、宣言、初期化、アクセス修飾子、戻り値型が成立しているかを確認します。";
    if (tags.includes("exception") || tags.includes("runtime")) return "例外問題では、catch順序、checked例外、null参照、close順を確認します。";
    if (tags.includes("inheritance")) return "継承問題では、参照型で呼べるメンバーと、実行時に選ばれるオーバーライドメソッドを分けます。";
    if (tags.includes("operator")) return "演算子問題では、副作用がいつ反映されるかと、型変換が許されるかを分けます。";
    return "問題文が求めているものが、出力結果・コンパイル可否・実行時例外のどれかをまず切り分けます。";
  }
  function relatedLinksHtml(q) {
    const tags = [...new Set(q.tags || [])].slice(0, 4);
    if (!tags.length) return "";
    return `<div class="related-links"><strong>関連演習:</strong> ${tags.map(t => `<a href="${tagHref(t)}">${escapeHtml(tagTitle(t))}</a>`).join(" ")}</div>`;
  }
  function mistakeReasonPickerHtml(qid) {
    return `<details class="mistake-reason-box" open><summary>間違えた理由を記録</summary><div class="mistake-reason-grid">${Object.entries(mistakeReasonLabels).map(([key,label]) => `<label><input type="checkbox" data-mistake-reason value="${escapeHtml(key)}"> ${escapeHtml(label)}</label>`).join("")}</div><button class="btn ghost" type="button" data-save-reason>理由を保存</button><span class="inline-note" data-reason-message></span></details>`;
  }
  function bindMistakeReasonBox(card, qid) {
    const box = card.querySelector(".mistake-reason-box");
    if (!box) return;
    const saved = readMistakeReasons()[qid]?.reasons || [];
    saved.forEach(r => { const input = box.querySelector(`input[value="${CSS.escape(r)}"]`); if (input) input.checked = true; });
    box.querySelector("[data-save-reason]")?.addEventListener("click", () => {
      const reasons = Array.from(box.querySelectorAll("input[data-mistake-reason]:checked")).map(i => i.value);
      const all = readMistakeReasons();
      if (reasons.length) all[qid] = { reasons, updatedAt: new Date().toISOString(), unitId: unitOfQuestion(qid) };
      else delete all[qid];
      writeMistakeReasons(all);
      const msg = box.querySelector("[data-reason-message]");
      if (msg) msg.textContent = reasons.length ? "保存しました。" : "理由を削除しました。";
    });
  }
  function weakGuideHtml(tag) {
    const lines = tagMiniGuides[tag] || tagMiniGuides[tag?.replace(/^tag-/, "")] || [tagDescription(tag)];
    return `<ul>${lines.map(x => `<li>${escapeHtml(x)}</li>`).join("")}</ul>`;
  }

  function readJson(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key)) || fallback; }
    catch (_) { return fallback; }
  }
  function writeJson(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
  function readProgress() { return readJson(storageKey, {}); }
  function writeProgress(progress) { writeJson(storageKey, progress); }
  function readExamAll() { return readJson(examStorageKey, {}); }
  function writeExamAll(value) { writeJson(examStorageKey, value); }
  function readViewAll() { return readJson(viewStorageKey, {}); }
  function writeViewAll(value) { writeJson(viewStorageKey, value); }
  function readReviewAll() { return readJson(reviewStorageKey, {}); }
  function writeReviewAll(value) { writeJson(reviewStorageKey, value); }
  function readExamHistory() { return readJson(examHistoryStorageKey, []); }
  function writeExamHistory(value) { writeJson(examHistoryStorageKey, value); }
  function readSettings() { return { autoNext: false, theme: "light", dailyGoal: 20, ...readJson(settingsStorageKey, {}) }; }
  function writeSettings(value) { writeJson(settingsStorageKey, { ...readSettings(), ...value }); }
  function readNotes() { return readJson(notesStorageKey, {}); }
  function writeNotes(value) { writeJson(notesStorageKey, value); }
  function readMistakeReasons() { return readJson(mistakeReasonStorageKey, {}); }
  function writeMistakeReasons(value) { writeJson(mistakeReasonStorageKey, value); }
  function applySettings() {
    const s = readSettings();
    document.body.classList.toggle("theme-dark", s.theme === "dark");
  }
  function selectedConfidence(card) { return card?.querySelector("input[data-confidence]:checked")?.value || "medium"; }
  function confidenceLabel(value) { return ({ high: "高い", medium: "普通", low: "低い" })[value] || "普通"; }
  function progressTime(p) { return Date.parse(p?.answeredAt || p?.savedAt || 0) || 0; }
  function unitById(id) { return DATA.units.find(u => u.id === id); }
  function isGloballyMarked(qid) {
    return Object.values(readReviewAll()).some(map => !!map?.[qid]);
  }
  function markedQuestionIds() {
    const ids = new Set();
    Object.values(readReviewAll()).forEach(map => Object.keys(map || {}).forEach(id => ids.add(id)));
    return ids;
  }
  function shuffled(items) {
    const arr = [...items];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  function randomQuestions() {
    const all = allQuestions();
    const view = readViewAll();
    const stored = view[viewKey]?.randomIds || [];
    let ids = stored.filter(id => all.some(q => q.id === id));
    if (ids.length !== randomSize) {
      ids = shuffled(all).slice(0, randomSize).map(q => q.id);
      view[viewKey] = { ...(view[viewKey] || {}), randomIds: ids, currentIndex: 0, generatedAt: new Date().toISOString() };
      writeViewAll(view);
    }
    return ids.map(id => all.find(q => q.id === id)).filter(Boolean);
  }
  function questionsForCurrentUnit() {
    if (tagFilter) return allQuestions().filter(q => (q.tags || []).includes(tagFilter));
    if (randomMode) return randomQuestions();
    if (reviewMode === "wrong") {
      const progress = readProgress();
      return allQuestions().filter(q => {
        if (reviewUnitFilter && unitOfQuestion(q.id) !== reviewUnitFilter) return false;
        return progress[q.id]?.isCorrect === false;
      });
    }
    if (reviewMode === "marked") {
      const ids = markedQuestionIds();
      return allQuestions().filter(q => {
        if (reviewUnitFilter && unitOfQuestion(q.id) !== reviewUnitFilter) return false;
        return ids.has(q.id);
      });
    }
    if (reviewMode === "due") {
      const progress = readProgress();
      const now = Date.now();
      const day = 24 * 60 * 60 * 1000;
      return allQuestions().filter(q => {
        if (reviewUnitFilter && unitOfQuestion(q.id) !== reviewUnitFilter) return false;
        const p = progress[q.id];
        if (!p) return false;
        if (p.isCorrect === false) return true;
        const age = now - progressTime(p);
        if ((p.confidence || "medium") === "low") return true;
        if ((p.confidence || "medium") === "medium") return age >= 3 * day;
        return age >= 7 * day;
      }).sort((a, b) => {
        const pa = progress[a.id] || {};
        const pb = progress[b.id] || {};
        const score = p => (p.isCorrect === false ? 0 : (p.confidence === "low" ? 1 : p.confidence === "medium" ? 2 : 3));
        return score(pa) - score(pb) || progressTime(pa) - progressTime(pb);
      });
    }
    if (reviewMode === "weak") {
      const progress = readProgress();
      const tagStats = {};
      allQuestions().forEach(q => (q.tags || ["untagged"]).forEach(t => {
        tagStats[t] ||= { answered: 0, correct: 0 };
        if (progress[q.id]) tagStats[t].answered++;
        if (progress[q.id]?.isCorrect === true) tagStats[t].correct++;
      }));
      const weakScore = q => Math.min(...(q.tags || ["untagged"]).map(t => {
        const v = tagStats[t] || { answered: 0, correct: 0 };
        return v.answered ? v.correct / v.answered : 1;
      }));
      return allQuestions().filter(q => progress[q.id]?.isCorrect === false).sort((a,b) => weakScore(a) - weakScore(b));
    }
    return DATA.questions[unitId] || [];
  }
  function currentUnit() {
    if (tagFilter) return { id: `tag:${tagFilter}`, title: tagTitle(tagFilter), description: tagDescription(tagFilter), page: location.pathname.split('/').pop() };
    if (randomMode) return { id: `random:${randomSize}`, title: `ランダム演習 ${randomSize}問`, description: "全問題からランダムに抽出した1問ずつ演習です。毎回違うセットで確認できます。", page: location.pathname.split('/').pop() };
    if (reviewMode === "wrong") return { id: "review-wrong", title: "間違えた問題だけ復習", description: "過去に不正解だった問題だけを1問ずつ解き直すモードです。", page: location.pathname.split('/').pop() };
    if (reviewMode === "marked") return { id: "review-marked", title: "後で見直す問題", description: "見直しマークを付けた問題だけを集めた復習モードです。", page: location.pathname.split('/').pop() };
    if (reviewMode === "due") return { id: "review-due", title: "今日の復習", description: "不正解・自信低め・一定期間経過した問題を優先して出す復習モードです。", page: location.pathname.split('/').pop() };
    if (reviewMode === "weak") return { id: "review-weak", title: "弱点優先復習", description: "不正解だった問題を、弱いタグから優先して並べる復習モードです。", page: location.pathname.split('/').pop() };
    return unitById(unitId);
  }
  function isExamUnit() { return !!unitId && currentUnit()?.mode === "exam"; }
  function examDurationSec() { return (currentUnit()?.timeLimitMinutes || 90) * 60; }
  function getExamState() { return readExamAll()[unitId] || null; }
  function setExamState(next) {
    const all = readExamAll();
    if (next) all[unitId] = next; else delete all[unitId];
    writeExamAll(all);
  }
  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  }
  function renderCodeLines(code) {
    const lines = String(code ?? "").replace(/\r\n/g, "\n").split("\n");
    return `<pre class="code-lines"><code>${lines.map((line, index) => {
      const body = escapeHtml(line) || " ";
      return `<span class="code-line"><span class="line-no">${index + 1}</span><span class="line-code">${body}</span></span>`;
    }).join("")}</code></pre>`;
  }
  function renderCodeBlock(block) {
    return `<div class="code-block">
      ${block.title ? `<span class="code-title">${escapeHtml(block.title)}</span>` : ""}
      ${renderCodeLines(block.code)}
    </div>`;
  }
  function arraysEqual(a, b) {
    const aa = [...(a || [])].sort();
    const bb = [...(b || [])].sort();
    return aa.length === bb.length && aa.every((v, i) => v === bb[i]);
  }
  function formatTime(totalSeconds) {
    const sec = Math.max(0, Math.floor(totalSeconds));
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }
  function currentIndex() {
    const questions = questionsForCurrentUnit();
    const all = readViewAll();
    if (focusQuestionId && all[viewKey]?.focusedFromUrl !== focusQuestionId) {
      const focusedIndex = questions.findIndex(q => q.id === focusQuestionId);
      if (focusedIndex >= 0) {
        all[viewKey] = { ...(all[viewKey] || {}), currentIndex: focusedIndex, focusedFromUrl: focusQuestionId };
        writeViewAll(all);
        return focusedIndex;
      }
    }
    const value = Number(all[viewKey]?.currentIndex || 0);
    if (!questions.length) return 0;
    return Math.min(Math.max(0, value), questions.length - 1);
  }
  function setCurrentIndex(index) {
    const questions = questionsForCurrentUnit();
    const next = Math.min(Math.max(0, index), Math.max(0, questions.length - 1));
    const all = readViewAll();
    all[viewKey] = { ...(all[viewKey] || {}), currentIndex: next };
    writeViewAll(all);
  }
  function reviewMap() { return readReviewAll()[unitId || viewKey] || {}; }
  function setReviewMap(map) {
    const all = readReviewAll();
    all[unitId || viewKey] = map;
    writeReviewAll(all);
  }
  function isMarkedReview(qid) { return !!reviewMap()[qid] || isGloballyMarked(qid); }
  function toggleReview(qid) {
    const all = readReviewAll();
    if (Object.values(all).some(map => !!map?.[qid])) {
      Object.keys(all).forEach(scope => { if (all[scope]?.[qid]) delete all[scope][qid]; });
      writeReviewAll(all);
      return;
    }
    const scope = unitId || viewKey;
    all[scope] ||= {};
    all[scope][qid] = { markedAt: new Date().toISOString(), unitId: unitOfQuestion(qid) };
    writeReviewAll(all);
  }

  function renderNav() {
    const nav = document.getElementById("unitNav");
    if (!nav) return;
    const activePath = window.CURRENT_PAGE || location.pathname.split('/').pop() || "index.html";
    const path = location.pathname;
    const countFor = u => (DATA.questions[u.id] || []).length || u.fixedCount || 0;
    const link = (href, label, active, meta="") => `<a class="nav-link${active ? " active" : ""}" href="${escapeHtml(pageHref(href))}"><span>${escapeHtml(label)}</span>${meta ? `<small>${escapeHtml(meta)}</small>` : ""}</a>`;
    const direct = (href, label, active=false, meta="") => `<a class="nav-link${active ? " active" : ""}" href="${escapeHtml((window.APP_ROOT || "") + href)}"><span>${escapeHtml(label)}</span>${meta ? `<small>${escapeHtml(meta)}</small>` : ""}</a>`;
    const lessonLinks = (base, prefix, titles) => titles.map((item, i) => {
      const n = String(typeof item === "object" ? item.n : i + 1).padStart(2, "0");
      const t = typeof item === "object" ? item.title : item;
      return direct(`${base}/lessons/${n}.html`, t, path.includes(`${base}/lessons/${n}.html`));
    }).join("");
    const javaBasicTitles = [
      { n: 1, title: "コンピュータと機械語" },
      { n: 2, title: "OS・JDK・JVM" },
      { n: 3, title: "ソースから実行まで" },
      { n: 4, title: "mainメソッド" },
      { n: 5, title: "変数・値・型" },
      { n: 6, title: "数値型と型変換" },
      { n: 7, title: "Stringの基本" },
      { n: 8, title: "if文と条件式" },
      { n: 9, title: "for・while" },
      { n: 10, title: "配列" },
      { n: 11, title: "メソッドと引数" },
      { n: 12, title: "クラスとオブジェクト" },
      { n: 13, title: "static" },
      { n: 14, title: "コンストラクタ" },
      { n: 15, title: "継承の入口" },
      { n: 16, title: "interfaceの入口" },
      { n: 17, title: "例外処理の入口" },
      { n: 18, title: "コンパイルエラーと実行時例外" },
      { n: 19, title: "Javaファイルとクラス名" },
      { n: 20, title: "コードを読む順番" },
      { n: 21, title: "ビット・バイト・2進数" },
      { n: 22, title: "文字コードとUnicode" },
      { n: 23, title: "メモリ・スタック・ヒープ" },
      { n: 24, title: "ターミナル・Javaコマンド" }
    ];
    const bronzeTitles = ["全体像", "データ型", "条件分岐・ループ", "クラスとオブジェクト", "配列", "直前確認"];
    const java11Titles = ["全体像", "型と演算子", "String", "配列とList", "クラス", "継承", "例外", "Java17との差分"];
    const goldTitles = ["全体像", "ラムダ式", "Stream API", "ジェネリクス", "I/O", "モジュール", "並行処理", "総合確認"];
    const courseUnits = (course, exam=false) => DATA.units.filter(u => (u.course || "java17") === course && (exam ? u.mode === "exam" : u.mode !== "exam"));
    const unitLinks = (course, exam=false) => courseUnits(course, exam).map(u => link(u.page, u.title, u.id === unitId, exam ? `${countFor(u) || 60}問・${u.timeLimitMinutes || 90}分` : `${countFor(u)}問`)).join("");
    const activeCourse = (() => {
      if (path.includes('/courses/java-basic/') || activePath.startsWith('java-basic')) return 'basic';
      if (path.includes('/courses/bronze/') || activePath.startsWith('bronze')) return 'bronze';
      if (path.includes('/courses/java11-silver/') || activePath.startsWith('java11')) return 'java11';
      if (path.includes('/courses/java17-silver/') || activePath.startsWith('practice') || activePath === 'exam.html') return 'java17';
      if (path.includes('/courses/gold/') || activePath.startsWith('gold')) return 'gold';
      if (path.includes('/articles/') || activePath.startsWith('article') || ["methods.html","glossary.html","cheatsheet.html","before-exam.html","weak-guides.html"].includes(activePath)) return 'articles';
      if (path.includes('/app/') || ["dashboard.html","mode.html","search.html","random.html","notes.html","settings.html","sync.html","mistake-reasons.html"].includes(activePath)) return 'app';
      return 'portal';
    })();
    const courseHome = {
      basic: direct('courses/java-basic/index.html', 'Java基礎トップ', activePath === 'java-basic.html'),
      bronze: direct('courses/bronze/index.html', 'Bronzeトップ', activePath === 'bronze.html'),
      java11: direct('courses/java11-silver/index.html', 'Java11 Silverトップ', activePath === 'java11silver.html'),
      java17: direct('courses/java17-silver/index.html', 'Java17 Silverトップ', activePath === 'java17silver.html'),
      gold: direct('courses/gold/index.html', 'Goldトップ', activePath === 'gold.html')
    };
    const commonCourseLinks = `<details class="nav-section"><summary>他のコース</summary><div>
      ${direct('courses/java-basic/index.html','1からわかるJava基礎')}
      ${direct('courses/bronze/index.html','Java Bronze')}
      ${direct('courses/java11-silver/index.html','Java11 Silver')}
      ${direct('courses/java17-silver/index.html','Java17 Silver')}
      ${direct('courses/gold/index.html','Java Gold')}
    </div></details>`;

    const silverCourseLinks = `<details class="nav-section"><summary>関連コース</summary><div>
      ${direct('courses/java-basic/index.html','1からわかるJava基礎')}
      ${direct('courses/bronze/index.html','Java Bronze')}
      ${direct('courses/java11-silver/index.html','Java11 Silver')}
    </div></details>`;
    const reviewLinks = [
      link("review-wrong.html", "間違えた問題", reviewMode === "wrong"),
      link("review-marked.html", "見直し問題", reviewMode === "marked"),
      link("review-due.html", "今日の復習", reviewMode === "due"),
      link("dashboard.html", "弱点分析", activePath === "dashboard.html"),
      link("mistake-reasons.html", "間違えた理由", activePath === "mistake-reasons.html")
    ].join("");
    const toolLinks = [link("tag-index.html", "タグ別演習", !!tagFilter), link("search.html", "問題検索", activePath === "search.html"), link("random.html", "ランダム出題", randomMode), link("notes.html", "学習メモ", activePath === "notes.html")].join("");
    const articleLinks = [
      direct('articles/index.html','記事一覧', activePath === 'articles.html'),
      direct('articles/compile-errors/index.html','コンパイルエラー原因', activePath === 'article-compile-errors.html'),
      direct('articles/reference/index.html','参照比較', activePath === 'article-reference.html'),
      direct('articles/string/index.html','String', activePath === 'article-string.html'),
      direct('articles/course-scope/index.html','範囲整理', activePath === 'course-scope.html'),
      direct('articles/methods/index.html','メソッド表', activePath === 'methods.html'),
      direct('articles/before-exam/index.html','直前チェック', activePath === 'before-exam.html')
    ].join("");
    const settingsLinks = [link("settings.html", "設定", activePath === "settings.html"), link("sync.html", "学習履歴の移行", activePath === "sync.html"), link("public-check.html", "公開前チェック", activePath === "public-check.html")].join("");
    const section = (title, body, open=true) => `<details class="nav-section"${open ? " open" : ""}><summary>${escapeHtml(title)}</summary><div>${body}</div></details>`;
    let html = '';
    if (activeCourse === 'basic') {
      html += section('Java基礎', courseHome.basic + lessonLinks('courses/java-basic','java-basic',javaBasicTitles), true) + commonCourseLinks + section('学習記事', articleLinks, false);
    } else if (activeCourse === 'bronze') {
      html += section('Bronze', courseHome.bronze + lessonLinks('courses/bronze','bronze',bronzeTitles), true)
        + section('Bronze演習', unitLinks('bronze', false), !!unitId && unitById(unitId)?.course === 'bronze')
        + section('Bronze模試', unitLinks('bronze', true), isExamUnit() && unitById(unitId)?.course === 'bronze')
        + commonCourseLinks;
    } else if (activeCourse === 'java11') {
      html += section('Java11 Silver', courseHome.java11 + lessonLinks('courses/java11-silver','java11',java11Titles), true)
        + section('Java11演習', unitLinks('java11', false), !!unitId && unitById(unitId)?.course === 'java11')
        + section('Java11模試', unitLinks('java11', true), isExamUnit() && unitById(unitId)?.course === 'java11')
        + commonCourseLinks;
    } else if (activeCourse === 'java17') {
      html += section('Java17 Silver', courseHome.java17 + unitLinks('java17', false), true)
        + section('実践模試', link('exam.html','模試センター', activePath === 'exam.html') + unitLinks('java17', true), isExamUnit() || activePath === 'exam.html')
        + section('復習・分析', reviewLinks, !!reviewMode || ["dashboard.html","mistake-reasons.html"].includes(activePath))
        + section('演習ツール', toolLinks, !!tagFilter || randomMode || ["search.html","notes.html"].includes(activePath))
        + silverCourseLinks;
    } else if (activeCourse === 'gold') {
      html += section('Java Gold', courseHome.gold + lessonLinks('courses/gold','gold',goldTitles), true)
        + section('Gold演習', unitLinks('gold', false), !!unitId && unitById(unitId)?.course === 'gold')
        + section('Gold模試', unitLinks('gold', true), isExamUnit() && unitById(unitId)?.course === 'gold')
        + commonCourseLinks;
    } else if (activeCourse === 'articles') {
      html += section('学習記事', articleLinks, true) + commonCourseLinks + section('復習・分析', reviewLinks, false);
    } else if (activeCourse === 'app') {
      html += section('復習・分析', reviewLinks, true) + section('演習ツール', toolLinks, true) + section('設定・データ管理', settingsLinks, activePath === 'settings.html' || activePath === 'sync.html') + commonCourseLinks;
    } else {
      html += section('コース選択', `${direct('courses/java-basic/index.html','1からわかるJava基礎')}${direct('courses/bronze/index.html','Java Bronze')}${direct('courses/java11-silver/index.html','Java11 Silver')}${direct('courses/java17-silver/index.html','Java17 Silver')}${direct('courses/gold/index.html','Java Gold')}`, true)
        + section('学習記事', articleLinks, false) + section('設定・データ管理', settingsLinks, false);
    }
    nav.innerHTML = html;
  }

  function unitCardHtml(u, labelOverride) {
    const count = (DATA.questions[u.id] || []).length;
    const label = labelOverride || u.title;
    const shortTags = {
      unit01: "main / コンパイル / 実行",
      unit02: "型変換 / String / 配列",
      unit12: "参照比較 / API / ArrayList",
      unit03: "演算子 / switch / loop",
      unit04: "this / static / record",
      unit05: "継承 / interface / sealed",
      unit06: "try-catch / finally / close",
      unit13: "var / static / 到達不能",
      unit09: "全範囲 / 総合確認"
    };
    if (u.mode === "exam") {
      const level = ({ unit07: "標準", unit08: "標準〜難", unit10: "複合問題多め", unit11: "仕上げ" })[u.id] || "実践";
      return `<a class="unit-card exam-unit-card" href="${escapeHtml(u.page)}">
        <strong>${escapeHtml(label)}</strong>
        <span class="badge ready">${count || u.fixedCount || 60}問 / ${u.timeLimitMinutes || 90}分</span>
        <span class="inline-note">${escapeHtml(level)}</span>
        <span class="btn primary fake-start">開始する</span>
      </a>`;
    }
    return `<a class="unit-card" href="${escapeHtml(u.page)}">
      <strong>${escapeHtml(label)}</strong>
      <span class="badge ready">${count}問</span>
      <span class="unit-tags">${escapeHtml(shortTags[u.id] || u.description || "Javaの重要論点")}</span>
    </a>`;
  }

  function renderIndex() {
    const grid = document.getElementById("unitGrid");
    if (grid) {
      grid.innerHTML = DATA.units.filter(u => u.mode !== "exam").map(u => unitCardHtml(u)).join("");
    }
    renderExamGrid();
  }

  function renderExamGrid() {
    const grids = [document.getElementById("examGrid"), document.getElementById("examHubGrid")].filter(Boolean);
    if (!grids.length) return;
    const exams = DATA.units.filter(u => u.mode === "exam");
    const html = exams.map(u => unitCardHtml(u)).join("");
    grids.forEach(grid => { grid.innerHTML = html; });
    const summary = document.getElementById("examSummaryRoot");
    if (summary) {
      const total = exams.reduce((sum, u) => sum + (DATA.questions[u.id] || []).length, 0);
      summary.innerHTML = `<div class="stat-grid"><div class="stat-card"><strong>${exams.length}</strong><span>模試数</span></div><div class="stat-card"><strong>60問</strong><span>各模試固定</span></div><div class="stat-card"><strong>90分</strong><span>各模試制限時間</span></div></div>`;
    }
  }

  function selectedKeys(card) {
    return Array.from(card.querySelectorAll("input[data-option]:checked")).map(input => input.value);
  }
  function optionHtml(q, opt) {
    const inputType = q.type === "multi" ? "checkbox" : "radio";
    const body = opt.code ? renderCodeLines(opt.code) : `<span>${escapeHtml(opt.text)}</span>`;
    return `<label class="option" data-key="${escapeHtml(opt.key)}">
      <input type="${inputType}" name="${escapeHtml(q.id)}" value="${escapeHtml(opt.key)}" data-option>
      <div><span class="option-key">${escapeHtml(opt.key)}.</span>${body}</div>
    </label>`;
  }
  function questionHtml(q) {
    const codeBlocks = (q.codeBlocks || []).map(block => renderCodeBlock(block)).join("");
    const command = q.command ? `<div class="command">${escapeHtml(q.command)}</div>` : "";
    const selectText = q.type === "multi" ? `${q.selectCount}つ選択` : "1つ選択";
    const difficultyText = q.difficulty ? `・${q.difficulty === "hard" ? "応用" : q.difficulty === "basic" ? "基礎" : "標準"}` : "";
    const tagText = q.tags && q.tags.length ? `・${q.tags.slice(0, 3).join(" / ")}` : "";
    const submitLabel = isExamUnit() ? "回答を保存して次へ" : "解答する";
    const note = isExamUnit() ? `<span class="exam-save-state" data-save-state>未保存</span>` : "";
    return `<article class="question-card" id="${escapeHtml(q.id)}" data-question-id="${escapeHtml(q.id)}">
      <div class="q-head"><h2 class="q-title">問${q.number}. ${escapeHtml(q.title)}</h2><div class="q-meta">${escapeHtml(selectText + difficultyText + tagText)}</div></div>
      <div class="tag-row">${tagBadges(q.tags)}</div>
      <p class="prompt">${escapeHtml(q.prompt)}</p>
      ${command}${codeBlocks}
      <div class="options">${q.options.map(opt => optionHtml(q, opt)).join("")}</div>
      <div class="study-assist-panel">
        <div class="confidence-row" role="group" aria-label="自信度">
          <span>自信度</span>
          <label><input type="radio" name="${escapeHtml(q.id)}-confidence" value="high" data-confidence> 高い</label>
          <label><input type="radio" name="${escapeHtml(q.id)}-confidence" value="medium" data-confidence checked> 普通</label>
          <label><input type="radio" name="${escapeHtml(q.id)}-confidence" value="low" data-confidence> 低い</label>
        </div>
        <label class="memo-label">学習メモ<textarea data-note rows="3" placeholder="なぜ迷ったか、覚えるべきポイント、あとで確認する内容を残せます。"></textarea></label>
      </div>
      <div class="answer-actions">
        <button class="btn primary" data-submit>${escapeHtml(submitLabel)}</button>
        <button class="btn ghost" data-clear>この問題をリセット</button>
        <button class="btn ghost" data-copy-link type="button">リンクをコピー</button>
        ${note}<button class="btn primary quick-next-btn" data-next type="button">次の問題へ</button><span class="inline-note" data-message></span>
      </div>
      <div class="result" data-result></div>
    </article>`;
  }

  function renderQuestionControls() {
    const questions = questionsForCurrentUnit();
    const idx = currentIndex();
    const current = questions[idx];
    const progress = readProgress();
    const reviews = reviewMap();
    const finished = isExamUnit() && !!getExamState()?.finishedAt;
    const palette = questions.map((q, i) => {
      const p = progress[q.id];
      const classes = ["qnum"];
      if (i === idx) classes.push("current");
      if (p) classes.push("answered");
      if (reviews[q.id] || isGloballyMarked(q.id)) classes.push("review");
      if (finished && p?.isCorrect === true) classes.push("correct");
      if (finished && p?.isCorrect === false) classes.push("wrong");
      return `<button class="${classes.join(" ")}" type="button" data-goto="${i}" title="問${q.number}">${q.number}</button>`;
    }).join("");
    const reviewButton = current ? `<button class="btn review-btn ${isMarkedReview(current.id) ? "active" : ""}" data-review-toggle>${isMarkedReview(current.id) ? "見直し解除" : "後で見直す"}</button>` : "";
    return `<section class="single-nav-panel" aria-label="問題移動">
      <div class="single-nav-main">
        <button class="btn" data-prev ${idx === 0 ? "disabled" : ""}>前の問題</button>
        <strong>問${questions[idx]?.number || 0} / ${questions.length}</strong>
        <button class="btn" data-next ${idx >= questions.length - 1 ? "disabled" : ""}>次の問題</button>
        ${reviewButton}
      </div>
      <details class="question-palette" ${isExamUnit() ? "open" : ""}>
        <summary>問題番号一覧${isExamUnit() ? "（保存済み・見直しマークを確認）" : ""}</summary>
        <div class="qnum-grid">${palette}</div>
      </details>
      <p class="shortcut-help">ショートカット：A〜Hで選択 / Enterで解答 / N・Pで前後移動 / Mで見直し</p>
    </section>`;
  }

  function setQuestionDisabled(disabled) {
    document.querySelectorAll("input[data-option], button[data-submit]").forEach(el => { el.disabled = disabled; });
  }
  function validateSelection(q, selected) {
    if (q.type === "multi" && selected.length !== q.selectCount) return `${q.selectCount}つ選択してください。現在 ${selected.length}つです。`;
    if (q.type === "single" && selected.length !== 1) return "1つ選択してください。";
    return "";
  }

  function renderResult(card, q, selected, persist) {
    const isCorrect = arraysEqual(selected, q.answer);
    const result = card.querySelector("[data-result]");
    const answerText = q.answer.join("・");
    card.querySelectorAll(".option").forEach(label => {
      const key = label.dataset.key;
      label.classList.remove("correct", "incorrect", "missed");
      if (q.answer.includes(key)) label.classList.add("correct");
      if (selected.includes(key) && !q.answer.includes(key)) label.classList.add("incorrect");
      if (!selected.includes(key) && q.answer.includes(key) && !isCorrect) label.classList.add("missed");
    });
    result.className = `result visible ${isCorrect ? "ok" : "bad"}`;
    const confidence = selectedConfidence(card);
    const noteText = readNotes()[q.id] || "";
    result.innerHTML = `<h4>${isCorrect ? "正解" : "不正解"}</h4>
      <p><strong>あなたの回答:</strong> ${selected.length ? escapeHtml(selected.join("・")) : "未回答"}</p>
      <p><strong>正解:</strong> ${escapeHtml(answerText)}</p>
      <p><strong>自信度:</strong> ${escapeHtml(confidenceLabel(confidence))}${noteText ? ` ／ <strong>メモあり</strong>` : ""}</p>
      <p class="first-look"><strong>まず見るべきポイント:</strong> ${escapeHtml(firstLookPoint(q))}</p>
      <p>${escapeHtml(q.explanation.summary)}</p>
      ${q.explanation.points ? `<ul>${q.explanation.points.map(p => `<li>${escapeHtml(p)}</li>`).join("")}</ul>` : ""}
      ${q.explanation.optionDetails ? `<details class="option-detail-box" open><summary>選択肢別の確認</summary><ul>${q.explanation.optionDetails.map(p => `<li>${escapeHtml(p)}</li>`).join("")}</ul></details>` : ""}
      ${q.examFocus ? `<p class="exam-focus"><strong>復習焦点:</strong> ${escapeHtml(q.examFocus)}</p>` : ""}
      ${!isCorrect ? mistakeReasonPickerHtml(q.id) : ""}
      ${relatedLinksHtml(q)}
      <div class="source-note">${escapeHtml(q.source)}</div>`;
    bindMistakeReasonBox(card, q.id);
    if (persist) {
      const progress = readProgress();
      progress[q.id] = { selected, isCorrect, confidence, answeredAt: new Date().toISOString(), unitId: unitOfQuestion(q.id), tags: q.tags || [] };
      writeProgress(progress);
      updateProgressUi();
    }
    return isCorrect;
  }

  function saveExamAnswer(card, q, selected) {
    const progress = readProgress();
    progress[q.id] = { selected, isCorrect: null, confidence: selectedConfidence(card), savedAt: new Date().toISOString(), unitId: unitOfQuestion(q.id), tags: q.tags || [] };
    writeProgress(progress);
    const saveState = card.querySelector("[data-save-state]");
    if (saveState) saveState.textContent = "保存済み";
    updateProgressUi();
  }

  function resetQuestion(card, q) {
    card.querySelectorAll("input[data-option]").forEach(input => { input.checked = false; });
    card.querySelectorAll(".option").forEach(label => label.classList.remove("correct", "incorrect", "missed"));
    const result = card.querySelector("[data-result]"); result.className = "result"; result.innerHTML = "";
    const msg = card.querySelector("[data-message]"); if (msg) msg.textContent = "";
    const saveState = card.querySelector("[data-save-state]"); if (saveState) saveState.textContent = "未保存";
    const progress = readProgress(); delete progress[q.id]; writeProgress(progress);
    updateProgressUi();
    renderQuestionView(false);
  }

  function updateProgressUi() {
    if (!unitId && !tagFilter && !reviewMode && !randomMode) return;
    const questions = questionsForCurrentUnit();
    const progress = readProgress();
    const reviewed = Object.keys(reviewMap()).length;
    const answered = questions.filter(q => progress[q.id]).length;
    const correct = questions.filter(q => progress[q.id]?.isCorrect === true).length;
    const fill = document.getElementById("progressFill");
    const text = document.getElementById("progressText");
    if (fill) fill.style.width = questions.length ? `${Math.round(answered / questions.length * 100)}%` : "0%";
    if (text) {
      text.textContent = isExamUnit()
        ? `${answered}/${questions.length} 保存済み・見直し ${reviewed}${getExamState()?.finishedAt ? `・正解 ${correct}` : ""}`
        : `${answered}/${questions.length} 解答済み・正解 ${correct}`;
    }
  }

  function goToQuestion(index, scrollTop) {
    setCurrentIndex(index);
    renderQuestionView(scrollTop !== false);
  }
  function goRelative(delta) { goToQuestion(currentIndex() + delta, true); }

  function bindQuestion(card, q) {
    card.querySelectorAll("input[data-option]").forEach(input => {
      input.addEventListener("change", () => {
        if (!isExamUnit()) return;
        const state = getExamState();
        if (!state?.startedAt || state?.finishedAt) return;
        const selected = selectedKeys(card);
        if (!validateSelection(q, selected)) saveExamAnswer(card, q, selected);
      });
    });
    const noteBox = card.querySelector("[data-note]");
    if (noteBox) {
      noteBox.addEventListener("input", () => {
        const notes = readNotes();
        const value = noteBox.value.trim();
        if (value) notes[q.id] = { text: noteBox.value, updatedAt: new Date().toISOString(), unitId: unitOfQuestion(q.id), tags: q.tags || [] };
        else delete notes[q.id];
        writeNotes(notes);
      });
    }
    card.querySelectorAll("input[data-confidence]").forEach(input => input.addEventListener("change", () => {
      const progress = readProgress();
      if (progress[q.id]) {
        progress[q.id].confidence = selectedConfidence(card);
        writeProgress(progress);
      }
    }));
    card.querySelector("[data-submit]").addEventListener("click", () => {
      const selected = selectedKeys(card);
      const msg = card.querySelector("[data-message]");
      const err = validateSelection(q, selected);
      if (err) { msg.textContent = err; return; }
      msg.textContent = "";
      if (isExamUnit()) {
        const state = getExamState();
        if (!state?.startedAt) { msg.textContent = "先に模試を開始してください。"; return; }
        if (state?.finishedAt) { msg.textContent = "採点済みです。やり直す場合は模試をリセットしてください。"; return; }
        saveExamAnswer(card, q, selected);
        if (currentIndex() < questionsForCurrentUnit().length - 1) goRelative(1);
      } else {
        renderResult(card, q, selected, true);
        if (readSettings().autoNext && currentIndex() < questionsForCurrentUnit().length - 1) {
          setTimeout(() => goRelative(1), 650);
        }
      }
    });
    card.querySelector("[data-clear]").addEventListener("click", () => {
      if (isExamUnit() && getExamState()?.finishedAt) return;
      resetQuestion(card, q);
    });
    card.querySelector("[data-copy-link]")?.addEventListener("click", async () => {
      const u = unitById(unitOfQuestion(q.id));
      const url = new URL(u?.page || location.pathname.split('/').pop(), location.href);
      url.searchParams.set("q", q.id);
      try { await navigator.clipboard.writeText(url.href); card.querySelector("[data-message]").textContent = "問題リンクをコピーしました。"; }
      catch (_) { card.querySelector("[data-message]").textContent = url.href; }
    });
  }

  function restoreCurrentProgress(q) {
    const progress = readProgress();
    const saved = progress[q.id];
    const card = document.querySelector(`[data-question-id="${q.id}"]`);
    if (!card) { updateProgressUi(); return; }
    const noteBoxOnly = card.querySelector("[data-note]");
    const noteOnly = readNotes()[q.id];
    if (noteBoxOnly && noteOnly?.text) noteBoxOnly.value = noteOnly.text;
    if (!saved) { updateProgressUi(); return; }
    (saved.selected || []).forEach(key => {
      const input = card.querySelector(`input[value="${CSS.escape(key)}"]`);
      if (input) input.checked = true;
    });
    const confidence = saved.confidence || "medium";
    const confidenceInput = card.querySelector(`input[data-confidence][value="${CSS.escape(confidence)}"]`);
    if (confidenceInput) confidenceInput.checked = true;
    const saveState = card.querySelector("[data-save-state]");
    if (saveState) saveState.textContent = "保存済み";
    if (isExamUnit()) {
      if (getExamState()?.finishedAt) renderResult(card, q, saved.selected || [], false);
    } else {
      renderResult(card, q, saved.selected || [], false);
    }
    updateProgressUi();
  }

  function examRemainingSeconds(state) {
    if (!state?.startedAt) return examDurationSec();
    if (state.finishedAt) return Math.max(0, state.remainingAtFinish ?? 0);
    const elapsed = Math.floor((Date.now() - Date.parse(state.startedAt)) / 1000);
    return examDurationSec() - elapsed;
  }
  function renderExamPanel() {
    if (!isExamUnit()) return;
    const hero = document.querySelector(".hero");
    if (!hero || document.getElementById("examPanel")) return;
    const unit = currentUnit();
    const panel = document.createElement("div");
    panel.id = "examPanel";
    panel.className = "exam-panel";
    panel.innerHTML = `<div class="exam-status">
        <strong>実践形式</strong>
        <span>制限時間 ${unit.timeLimitMinutes || 90}分 / ${unit.fixedCount || 60}問</span>
        <span class="timer" id="examTimer">${formatTime(examDurationSec())}</span>
      </div>
      <div class="exam-actions">
        <button id="startExam" class="btn primary">模試を開始</button>
        <button id="finishExam" class="btn">採点する</button>
        <button id="resetExam" class="btn ghost">模試をリセット</button>
        <button id="jumpReview" class="btn ghost">見直しへ</button>
      </div>
      <p class="inline-note" id="examMessage">開始後はタイマーが動きます。採点するまで正解・解説は表示されません。</p><div id="examResult"></div>`;
    hero.appendChild(panel);
    document.getElementById("startExam")?.addEventListener("click", startExam);
    document.getElementById("finishExam")?.addEventListener("click", () => finishExam(false));
    document.getElementById("resetExam")?.addEventListener("click", resetExam);
    document.getElementById("jumpReview")?.addEventListener("click", jumpToFirstReview);
    refreshExamUi();
  }
  function startExam() {
    const state = getExamState();
    if (state?.startedAt && !state.finishedAt) return;
    setExamState({ startedAt: new Date().toISOString(), durationSec: examDurationSec(), finishedAt: null });
    refreshExamUi();
    renderQuestionView(false);
  }
  function resetExam() {
    if (!confirm("この模試のタイマー・回答・採点結果・見直しマークをすべて削除します。よろしいですか？")) return;
    setExamState(null);
    setReviewMap({});
    const progress = readProgress();
    questionsForCurrentUnit().forEach(q => delete progress[q.id]);
    writeProgress(progress);
    setCurrentIndex(0);
    location.reload();
  }
  function finishExam(timeUp) {
    if (!isExamUnit()) return;
    const state = getExamState();
    if (!state?.startedAt || state.finishedAt) return;
    const remaining = Math.max(0, examRemainingSeconds(state));
    const progress = readProgress();
    let correct = 0;
    questionsForCurrentUnit().forEach(q => {
      const selected = progress[q.id]?.selected || [];
      const isCorrect = arraysEqual(selected, q.answer);
      progress[q.id] = { ...(progress[q.id] || {}), selected, isCorrect, answeredAt: new Date().toISOString(), unitId: unitOfQuestion(q.id), tags: q.tags || [] };
      if (isCorrect) correct++;
    });
    writeProgress(progress);
    const finishedAt = new Date().toISOString();
    setExamState({ ...state, finishedAt, remainingAtFinish: remaining, timeUp: !!timeUp, score: correct });
    const history = readExamHistory();
    history.unshift({ unitId, title: currentUnit()?.title || unitId, startedAt: state.startedAt, finishedAt, score: correct, total: questionsForCurrentUnit().length, usedSec: Math.max(0, (state.durationSec || examDurationSec()) - remaining), timeUp: !!timeUp });
    writeExamHistory(history.slice(0, 30));
    refreshExamUi();
    renderQuestionView(false);
    updateProgressUi();
    document.getElementById("examPanel")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function examResultHtml() {
    const state = getExamState();
    if (!state?.finishedAt) return "";
    const questions = questionsForCurrentUnit();
    const progress = readProgress();
    const reviews = reviewMap();
    const total = questions.length || 1;
    const correct = questions.filter(q => progress[q.id]?.isCorrect === true).length;
    const wrong = questions.filter(q => progress[q.id]?.isCorrect === false).length;
    const unanswered = questions.filter(q => !(progress[q.id]?.selected || []).length).length;
    const usedSec = Math.max(0, (state.durationSec || examDurationSec()) - (state.remainingAtFinish || 0));
    const answered = questions.filter(q => progress[q.id]);
    const settings = readSettings();
    const today = new Date().toISOString().slice(0, 10);
    const todayAnswered = answered.filter(q => String(progress[q.id]?.answeredAt || progress[q.id]?.savedAt || "").slice(0, 10) === today);
    const highWrong = answered.filter(q => progress[q.id]?.isCorrect === false && progress[q.id]?.confidence === "high");
    const lowCorrect = answered.filter(q => progress[q.id]?.isCorrect === true && progress[q.id]?.confidence === "low");
    const noteCount = Object.keys(readNotes()).length;
    const byTag = {};
    const byDifficulty = {};
    const reasons = readMistakeReasons();
    const reasonCounts = {};
    Object.values(reasons).forEach(v => (v.reasons || []).forEach(r => reasonCounts[r] = (reasonCounts[r] || 0) + 1));
    const reasonRows = Object.entries(reasonCounts).sort((a,b)=>b[1]-a[1]).slice(0,6).map(([r,c]) => `<tr><td>${escapeHtml(mistakeReasonLabels[r] || r)}</td><td>${c}</td></tr>`).join("") || `<tr><td colspan="2">まだ記録がありません。</td></tr>`;
    questions.forEach(q => {
      const ok = progress[q.id]?.isCorrect === true;
      (q.tags || ["untagged"]).forEach(t => {
        byTag[t] ||= { total: 0, correct: 0 };
        byTag[t].total++;
        if (ok) byTag[t].correct++;
      });
      const d = q.difficulty || "standard";
      byDifficulty[d] ||= { total: 0, correct: 0 };
      byDifficulty[d].total++;
      if (ok) byDifficulty[d].correct++;
    });
    const weakTags = Object.entries(byTag)
      .filter(([,v]) => v.total >= 2)
      .sort((a,b) => (a[1].correct/a[1].total) - (b[1].correct/b[1].total))
      .slice(0,5);
    const tagRows = weakTags.map(([tag,v]) => `<tr><td>${escapeHtml(tagTitle(tag))}</td><td>${v.correct}/${v.total}</td><td>${Math.round(v.correct/v.total*100)}%</td><td><a href="${tagHref(tag)}">練習</a></td></tr>`).join("") || `<tr><td colspan="4">弱点タグを出すには、もう少し回答データが必要です。</td></tr>`;
    const diffLabel = { basic: "基本確認", standard: "標準", hard: "応用" };
    const diffRows = Object.entries(byDifficulty).map(([d,v]) => `<tr><td>${escapeHtml(diffLabel[d] || d)}</td><td>${v.correct}/${v.total}</td><td>${Math.round(v.correct/v.total*100)}%</td></tr>`).join("");
    return `<div class="exam-result-box">
      <h3>模試結果</h3>
      <div class="result-summary-grid">
        <div><strong>${correct}/${total}</strong><span>正解数</span></div>
        <div><strong>${Math.round(correct/total*100)}%</strong><span>正答率</span></div>
        <div><strong>${formatTime(usedSec)}</strong><span>使用時間</span></div>
        <div><strong>${unanswered}</strong><span>未回答</span></div>
        <div><strong>${Object.keys(reviews).length}</strong><span>見直し</span></div>
        <div><strong>${wrong}</strong><span>不正解</span></div>
      </div>
      <h4>弱点タグ</h4>
      <table class="mini-table"><thead><tr><th>タグ</th><th>正解</th><th>正答率</th><th>練習</th></tr></thead><tbody>${tagRows}</tbody></table>
      <h4>難易度別</h4>
      <table class="mini-table"><thead><tr><th>難易度</th><th>正解</th><th>正答率</th></tr></thead><tbody>${diffRows}</tbody></table>
      <h4>間違えた理由</h4>
      <table class="mini-table"><thead><tr><th>理由</th><th>件数</th></tr></thead><tbody>${reasonRows}</tbody></table>
      <div class="exam-result-actions"><a class="btn primary" href="${pageHref('review-wrong.html')}?unit=${encodeURIComponent(unitId)}">この模試の間違えた問題だけ復習</a><button class="btn" type="button" id="jumpWrongExam">最初の不正解へ</button><button class="btn ghost" type="button" id="jumpMarkedExam">見直し問題へ</button></div>
    </div>`;
  }
  function bindExamResultButtons() {
    document.getElementById("jumpWrongExam")?.addEventListener("click", () => {
      const p = readProgress();
      const idx = questionsForCurrentUnit().findIndex(q => p[q.id]?.isCorrect === false);
      if (idx >= 0) goToQuestion(idx, true); else alert("不正解の問題はありません。");
    });
    document.getElementById("jumpMarkedExam")?.addEventListener("click", jumpToFirstReview);
  }

  function refreshExamUi() {
    if (!isExamUnit()) return;
    const state = getExamState();
    const timer = document.getElementById("examTimer");
    const msg = document.getElementById("examMessage");
    const startBtn = document.getElementById("startExam");
    const finishBtn = document.getElementById("finishExam");
    if (examTimerId) clearInterval(examTimerId);
    const tick = () => {
      const current = getExamState();
      const remaining = examRemainingSeconds(current);
      if (timer) {
        timer.textContent = formatTime(remaining);
        timer.classList.toggle("danger", remaining <= 300 && !!current?.startedAt && !current?.finishedAt);
      }
      if (current?.startedAt && !current?.finishedAt && remaining <= 0) finishExam(true);
    };
    tick();
    if (state?.startedAt && !state.finishedAt) examTimerId = setInterval(tick, 1000);
    if (startBtn) startBtn.disabled = !!state?.startedAt && !state?.finishedAt;
    if (finishBtn) finishBtn.disabled = !state?.startedAt || !!state?.finishedAt;
    setQuestionDisabled(!state?.startedAt || !!state?.finishedAt);
    const resultSlot = document.getElementById("examResult");
    if (resultSlot) { resultSlot.innerHTML = examResultHtml(); bindExamResultButtons(); }
    if (msg) {
      if (!state?.startedAt) msg.textContent = "開始後はタイマーが動きます。1問ずつ解答し、前後移動・問題番号一覧から戻れます。";
      else if (state.finishedAt) msg.textContent = `${state.timeUp ? "時間切れで採点しました。" : "採点済みです。"} スコア: ${state.score ?? 0}/${questionsForCurrentUnit().length}`;
      else msg.textContent = "選択すると自動保存されます。迷う問題は「後で見直す」を押してください。最後に「採点する」で結果を表示します。";
    }
  }
  function jumpToFirstReview() {
    const map = reviewMap();
    const questions = questionsForCurrentUnit();
    const idx = questions.findIndex(q => map[q.id]);
    if (idx >= 0) goToQuestion(idx, true);
    else alert("見直しマーク付きの問題はありません。");
  }
  function jumpToFirstUnanswered() {
    const p = readProgress();
    const targetIndex = questionsForCurrentUnit().findIndex(q => !p[q.id]);
    if (targetIndex >= 0) goToQuestion(targetIndex, true);
  }

  function renderQuestionView(scrollTop) {
    const root = document.getElementById("questionRoot");
    if (!root || (!unitId && !tagFilter && !reviewMode && !randomMode)) return;
    const questions = questionsForCurrentUnit();
    if (!questions.length) { root.innerHTML = `<p class="notice">問題が見つかりません。</p>`; return; }
    const idx = currentIndex();
    const q = questions[idx];
    root.classList.add("single-question-root");
    root.innerHTML = `${renderQuestionControls()}${questionHtml(q)}<div class="bottom-nav">${renderQuestionControls()}</div><div class="ad-slot" aria-label="広告枠"><span>スポンサーリンク配置予定</span></div>`;
    const card = root.querySelector(`[data-question-id="${q.id}"]`);
    if (card) bindQuestion(card, q);
    root.querySelectorAll("[data-prev]").forEach(btn => btn.addEventListener("click", () => goRelative(-1)));
    root.querySelectorAll("[data-next]").forEach(btn => btn.addEventListener("click", () => goRelative(1)));
    root.querySelectorAll("[data-goto]").forEach(btn => btn.addEventListener("click", () => goToQuestion(Number(btn.dataset.goto), true)));
    root.querySelectorAll("[data-review-toggle]").forEach(btn => btn.addEventListener("click", () => {
      toggleReview(q.id);
      renderQuestionView(false);
    }));
    restoreCurrentProgress(q);
    refreshExamUi();
    if (scrollTop) document.querySelector(".hero")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function renderUnit() {
    const root = document.getElementById("questionRoot");
    if (!root || (!unitId && !tagFilter && !reviewMode && !randomMode)) return;
    const unit = currentUnit();
    const title = document.getElementById("unitTitle");
    const desc = document.getElementById("unitDesc");
    if (title) title.textContent = unit ? unit.title : "セットが見つかりません";
    if (desc) desc.textContent = unit ? unit.description : "";
    renderExamPanel();
    renderPracticeTools();
    renderQuestionView(false);
    updateProgressUi();
    refreshExamUi();
  }

  function renderPracticeTools() {
    const hero = document.querySelector(".hero");
    if (!hero || document.getElementById("practiceTools")) return;
    if (isExamUnit()) return;
    const box = document.createElement("div");
    box.id = "practiceTools";
    box.className = "practice-tools";
    const unitParam = unitId ? `?unit=${encodeURIComponent(unitId)}` : "";
    const settings = readSettings();
    box.innerHTML = `<a class="btn" href="${pageHref('review-wrong.html')}${unitParam}">この範囲の間違えた問題だけ解く</a>
      <a class="btn" href="${pageHref('review-marked.html')}${unitParam}">見直し問題だけ解く</a>
      <a class="btn" href="${pageHref('review-due.html')}${unitParam}">今日の復習</a>
      <a class="btn ghost" href="${pageHref('dashboard.html')}">弱点分析を見る</a>
      <a class="btn ghost" href="${pageHref('tag-index.html')}">タグ別演習へ</a>
      ${randomMode ? `<button class="btn primary" id="newRandomSet" type="button">新しいランダムセット</button>` : ""}
      <label class="toggle-inline"><input type="checkbox" id="autoNextToggle" ${settings.autoNext ? "checked" : ""}> 解答後に自動で次の問題へ</label>`;
    hero.appendChild(box);
    document.getElementById("newRandomSet")?.addEventListener("click", () => {
      const all = readViewAll();
      delete all[viewKey];
      writeViewAll(all);
      location.reload();
    });
    document.getElementById("autoNextToggle")?.addEventListener("change", e => {
      writeSettings({ ...readSettings(), autoNext: !!e.target.checked });
    });
  }

  function tagBadges(tags) {
    return (tags || []).map(t => `<a class="tag-badge" href="${tagHref(t)}">${escapeHtml(tagTitle(t))}</a>`).join("");
  }

  function bindToolbar() {
    document.body.classList.toggle("is-practice-page", !!unitId);
    document.body.classList.toggle("is-exam-page", isExamUnit() || (window.CURRENT_PAGE || location.pathname.split("/").pop()) === "exam.html");
    const toggle = document.getElementById("sidebarToggle");
    const openBtn = document.getElementById("sidebarOpen");
    const sidebar = document.getElementById("siteSidebar");
    const applySidebarState = () => {
      const collapsed = localStorage.getItem("java-practice-lab-sidebar-collapsed") === "1";
      document.body.classList.toggle("sidebar-collapsed", collapsed);
      if (sidebar) sidebar.style.display = collapsed ? "none" : "";
      if (toggle) {
        toggle.textContent = "×";
        toggle.setAttribute("aria-pressed", String(collapsed));
        toggle.setAttribute("title", "サイドバーを隠す");
      }
      if (openBtn) {
        openBtn.setAttribute("aria-hidden", String(!collapsed));
        openBtn.hidden = !collapsed;
        openBtn.style.display = collapsed ? "inline-flex" : "none";
      }
    };
    applySidebarState();
    toggle?.addEventListener("click", () => {
      const next = !(localStorage.getItem("java-practice-lab-sidebar-collapsed") === "1");
      localStorage.setItem("java-practice-lab-sidebar-collapsed", next ? "1" : "0");
      applySidebarState();
    });
    openBtn?.addEventListener("click", () => {
      localStorage.setItem("java-practice-lab-sidebar-collapsed", "0");
      applySidebarState();
    });
    const reset = document.getElementById("resetUnit");
    if (reset) reset.addEventListener("click", () => {
      const p = readProgress();
      questionsForCurrentUnit().forEach(q => delete p[q.id]);
      writeProgress(p);
      if (isExamUnit()) { setExamState(null); setReviewMap({}); }
      setCurrentIndex(0);
      location.reload();
    });
    const first = document.getElementById("firstUnanswered");
    if (first) first.addEventListener("click", jumpToFirstUnanswered);
  }

  function renderDashboard() {
    const root = document.getElementById("dashboardRoot");
    if (!root) return;
    const progress = readProgress();
    const questions = allQuestions();
    const answered = questions.filter(q => progress[q.id]);
    const correct = answered.filter(q => progress[q.id].isCorrect === true);
    const wrong = answered.filter(q => progress[q.id].isCorrect === false);
    const byTag = {};
    questions.forEach(q => {
      (q.tags || ["untagged"]).forEach(t => {
        byTag[t] ||= { total: 0, answered: 0, correct: 0, wrong: 0 };
        byTag[t].total++;
        if (progress[q.id]) byTag[t].answered++;
        if (progress[q.id]?.isCorrect === true) byTag[t].correct++;
        if (progress[q.id]?.isCorrect === false) byTag[t].wrong++;
      });
    });
    const rows = Object.entries(byTag).sort((a,b) => b[1].wrong - a[1].wrong || b[1].answered - a[1].answered).map(([tag,v]) => {
      const rate = v.answered ? Math.round(v.correct/v.answered*100) + "%" : "-";
      return `<tr><td><a href="${tagHref(tag)}">${escapeHtml(tagTitle(tag))}</a></td><td>${v.total}</td><td>${v.answered}</td><td>${v.correct}</td><td>${v.wrong}</td><td>${rate}</td><td><a href="${tagHref(tag)}">練習</a></td></tr>`;
    }).join("");
    const history = readExamHistory();
    const recentRows = history.slice(0, 8).map(h => `<tr><td>${escapeHtml(h.title || h.unitId)}</td><td>${h.score}/${h.total}</td><td>${Math.round((h.score || 0)/(h.total || 1)*100)}%</td><td>${formatTime(h.usedSec || 0)}</td><td>${escapeHtml(new Date(h.finishedAt).toLocaleString())}</td></tr>`).join("") || `<tr><td colspan="5">模試の採点履歴はまだありません。</td></tr>`;
    const weakTop = Object.entries(byTag).filter(([,v]) => v.wrong > 0).sort((a,b) => b[1].wrong - a[1].wrong).slice(0, 3);
    const recommend = wrong.length ? `まず不正解${wrong.length}問を復習し、その後 ${weakTop.map(([t]) => tagTitle(t)).join("・") || "苦手タグ"} をタグ別演習で確認してください。` : answered.length ? "現時点では不正解履歴がありません。実践模試A/B/C/D/C/Dで弱点を出してください。" : "まだ解答履歴がありません。まずJavaの基礎か実践模試Aを解いてください。";
    root.innerHTML = `<div class="result-summary-grid dashboard-summary">
      <div><strong>${questions.length}</strong><span>総問題数</span></div>
      <div><strong>${answered.length}</strong><span>解答済み</span></div>
      <div><strong>${correct.length}</strong><span>正解</span></div>
      <div><strong>${wrong.length}</strong><span>不正解</span></div>
      <div><strong>${answered.length ? Math.round(correct.length/answered.length*100) : 0}%</strong><span>全体正答率</span></div>
      <div><strong>${todayAnswered.length}/${settings.dailyGoal || 20}</strong><span>今日の目標</span></div>
      <div><strong>${highWrong.length}</strong><span>自信あり不正解</span></div>
      <div><strong>${noteCount}</strong><span>学習メモ</span></div>
    </div>
    <div class="notice"><strong>次にやること：</strong>${escapeHtml(recommend)}</div>
    <div class="practice-tools"><a class="btn primary" href="${pageHref('review-due.html')}">今日の復習</a><a class="btn" href="${pageHref('review-wrong.html')}">間違えた問題だけ復習</a><a class="btn" href="${pageHref('review-weak.html')}">弱点優先復習</a><a class="btn" href="${pageHref('review-marked.html')}">見直し問題</a><a class="btn" href="${pageHref('notes.html')}">学習メモ</a><a class="btn" href="${pageHref('tag-index.html')}">タグ別演習</a><a class="btn" href="${pageHref('random.html')}">ランダム演習</a><a class="btn" href="${pageHref('sync.html')}">履歴を移行</a><button class="btn ghost" id="clearAllProgress" type="button">全履歴を削除</button></div>
    <h2>自信度のズレ</h2>
    <p class="inline-note">自信ありで間違えた問題は、理解の穴が大きい箇所です。自信低めで正解した問題は、定着前なので早めに再確認してください。</p>
    <div class="result-summary-grid"><div><strong>${highWrong.length}</strong><span>自信あり不正解</span></div><div><strong>${lowCorrect.length}</strong><span>自信低め正解</span></div></div>
    <h2>模試履歴</h2>
    <table class="study-table"><thead><tr><th>模試</th><th>正解</th><th>正答率</th><th>使用時間</th><th>日時</th></tr></thead><tbody>${recentRows}</tbody></table>
    <h2>タグ別の弱点</h2>
    <p class="inline-note">不正解数が多いタグから優先して復習してください。正答率だけでなく、解答数が多いタグほど信頼できます。</p>
    <table class="study-table"><thead><tr><th>タグ</th><th>総数</th><th>解答済み</th><th>正解</th><th>不正解</th><th>正答率</th><th>演習</th></tr></thead><tbody>${rows}</tbody></table>`;
    document.getElementById("clearAllProgress")?.addEventListener("click", () => {
      if (!confirm("全問題の解答履歴・模試履歴・見直しマークを削除します。よろしいですか？")) return;
      localStorage.removeItem(storageKey); localStorage.removeItem(examStorageKey); localStorage.removeItem(viewStorageKey); localStorage.removeItem(reviewStorageKey); localStorage.removeItem(examHistoryStorageKey); localStorage.removeItem(settingsStorageKey); localStorage.removeItem(notesStorageKey); localStorage.removeItem(mistakeReasonStorageKey); location.reload();
    });
  }


  function renderSyncPage() {
    const root = document.getElementById("syncRoot");
    if (!root) return;
    const keys = [storageKey, examStorageKey, viewStorageKey, reviewStorageKey, examHistoryStorageKey, settingsStorageKey, notesStorageKey, mistakeReasonStorageKey];
    function buildPayload() {
      const payload = {
        app: "Java Practice Lab",
        version: 1,
        exportedAt: new Date().toISOString(),
        storage: {}
      };
      keys.forEach(key => payload.storage[key] = readJson(key, {}));
      return payload;
    }
    function setStatus(text, isError) {
      const status = document.getElementById("syncStatus");
      if (!status) return;
      status.textContent = text;
      status.className = isError ? "notice sync-error" : "notice sync-ok";
    }
    root.innerHTML = `<div class="compare-grid">
      <div class="compare-card">
        <h2>1. この端末の履歴を書き出す</h2>
        <p>解答履歴、模試の状態、現在位置、見直しマークをJSONで保存します。別端末へ移すときは、このファイルを送ってください。</p>
        <button class="btn primary" id="exportProgress" type="button">履歴JSONをダウンロード</button>
      </div>
      <div class="compare-card">
        <h2>2. 別端末で読み込む</h2>
        <p>書き出したJSONを選択すると、この端末の履歴に上書きします。既存履歴は置き換わるので注意してください。</p>
        <input class="file-input" id="importProgressFile" type="file" accept="application/json,.json">
        <button class="btn" id="importProgress" type="button">選択したJSONを読み込む</button>
      </div>
    </div>
    <div class="warning-box"><strong>注意：</strong>ログイン同期ではありません。端末間共有は、JSONを書き出して別端末で読み込む方式です。公開サイトに置く場合でも、履歴は利用者のブラウザ内に保存されます。</div>
    <div id="syncStatus" class="notice">まだ操作していません。</div>`;

    document.getElementById("exportProgress")?.addEventListener("click", () => {
      const blob = new Blob([JSON.stringify(buildPayload(), null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      const stamp = new Date().toISOString().slice(0, 19).replace(/[:T]/g, "-");
      a.href = url;
      a.download = `java-practice-lab-progress-${stamp}.json`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      setStatus("履歴JSONを書き出しました。", false);
    });
    document.getElementById("importProgress")?.addEventListener("click", async () => {
      const file = document.getElementById("importProgressFile")?.files?.[0];
      if (!file) { setStatus("読み込むJSONファイルを選択してください。", true); return; }
      try {
        const text = await file.text();
        const payload = JSON.parse(text);
        if (!payload || typeof payload !== "object" || !payload.storage) throw new Error("invalid payload");
        if (!confirm("この端末の学習履歴を、選択したJSONの内容で上書きします。よろしいですか？")) return;
        keys.forEach(key => writeJson(key, payload.storage[key] || {}));
        setStatus("履歴を読み込みました。ページを再読み込みします。", false);
        setTimeout(() => location.reload(), 800);
      } catch (_) {
        setStatus("JSONの読み込みに失敗しました。Java Practice Labから書き出したファイルか確認してください。", true);
      }
    });
  }



  function renderSearchPage() {
    const root = document.getElementById("searchRoot");
    if (!root) return;
    const tags = Object.keys(DATA.tagDefinitions || {}).sort();
    const units = DATA.units || [];
    root.innerHTML = `<div class="search-panel">
      <label>キーワード<input id="searchKeyword" class="search-input" type="search" placeholder="例：equals, StringBuilder, 継承, コンパイルエラー"></label>
      <label>タグ<select id="searchTag" class="search-input"><option value="">すべて</option>${tags.map(t => `<option value="${escapeHtml(t)}">${escapeHtml(tagTitle(t))}</option>`).join("")}</select></label>
      <label>セット<select id="searchUnit" class="search-input"><option value="">すべて</option>${units.map(u => `<option value="${escapeHtml(u.id)}">${escapeHtml(u.title)}</option>`).join("")}</select></label>
      <label>難易度<select id="searchDifficulty" class="search-input"><option value="">すべて</option><option value="basic">基礎</option><option value="standard">標準</option><option value="hard">応用</option></select></label>
      <label>自信度<select id="searchConfidence" class="search-input"><option value="">すべて</option><option value="high">高い</option><option value="medium">普通</option><option value="low">低い</option></select></label>
      <label>間違えた理由<select id="searchReason" class="search-input"><option value="">すべて</option>${Object.entries(mistakeReasonLabels).map(([k,v]) => `<option value="${escapeHtml(k)}">${escapeHtml(v)}</option>`).join("")}</select></label>
      <label class="check-line"><input id="searchWrong" type="checkbox"> 不正解のみ</label>
      <label class="check-line"><input id="searchUnanswered" type="checkbox"> 未回答のみ</label>
      <label class="check-line"><input id="searchMarked" type="checkbox"> 見直しのみ</label>
      <button class="btn primary" id="runSearch" type="button">検索する</button>
    </div><div id="searchResult" class="search-results"></div>`;
    const result = document.getElementById("searchResult");
    const run = () => {
      const keyword = document.getElementById("searchKeyword").value.trim().toLowerCase();
      const tag = document.getElementById("searchTag").value;
      const uid = document.getElementById("searchUnit").value;
      const difficulty = document.getElementById("searchDifficulty").value;
      const onlyWrong = document.getElementById("searchWrong").checked;
      const onlyUnanswered = document.getElementById("searchUnanswered").checked;
      const onlyMarked = document.getElementById("searchMarked").checked;
      const confidence = document.getElementById("searchConfidence").value;
      const reason = document.getElementById("searchReason").value;
      const reasons = readMistakeReasons();
      const progress = readProgress();
      const markedIds = markedQuestionIds();
      const rows = allQuestions().filter(q => {
        const qUnit = unitOfQuestion(q.id);
        if (uid && qUnit !== uid) return false;
        if (tag && !(q.tags || []).includes(tag)) return false;
        if (difficulty && q.difficulty !== difficulty) return false;
        if (onlyWrong && progress[q.id]?.isCorrect !== false) return false;
        if (onlyUnanswered && progress[q.id]) return false;
        if (onlyMarked && !markedIds.has(q.id)) return false;
        if (confidence && progress[q.id]?.confidence !== confidence) return false;
        if (reason && !(reasons[q.id]?.reasons || []).includes(reason)) return false;
        if (keyword) {
          const hay = [q.title, q.prompt, q.command, q.source, q.explanation?.summary, ...(q.explanation?.points || []), ...(q.tags || []), ...(q.options || []).map(o => `${o.text || ""} ${o.code || ""}`), ...(q.codeBlocks || []).map(b => `${b.title || ""} ${b.code || ""}`)].join("\n").toLowerCase();
          if (!hay.includes(keyword)) return false;
        }
        return true;
      }).slice(0, 120);
      result.innerHTML = `<p class="inline-note">${rows.length}件表示しています。多すぎる場合はキーワード・タグ・セットで絞ってください。</p>` + rows.map(q => {
        const u = unitById(unitOfQuestion(q.id));
        const status = progress[q.id]?.isCorrect === true ? "正解済み" : progress[q.id]?.isCorrect === false ? "不正解" : progress[q.id] ? "保存済み" : "未回答";
        const href = `${pageHref(u?.page || "index.html")}?q=${encodeURIComponent(q.id)}`;
        return `<a class="search-result-card" href="${escapeHtml(href)}"><strong>${escapeHtml(u?.title || "演習")} / 問${q.number}. ${escapeHtml(q.title)}</strong><span>${escapeHtml(q.prompt).slice(0, 120)}${q.prompt.length > 120 ? "..." : ""}</span><small>${escapeHtml(status)} ・ ${(q.tags || []).map(tagTitle).join(" / ")}</small></a>`;
      }).join("") || `<p class="notice">条件に合う問題がありません。</p>`;
    };
    document.getElementById("runSearch")?.addEventListener("click", run);
    ["searchKeyword", "searchTag", "searchUnit", "searchDifficulty", "searchConfidence", "searchReason", "searchWrong", "searchUnanswered", "searchMarked"].forEach(id => document.getElementById(id)?.addEventListener("change", run));
    document.getElementById("searchKeyword")?.addEventListener("input", run);
    document.getElementById("searchKeyword")?.addEventListener("keydown", e => { if (e.key === "Enter") run(); });
    run();
  }

  function renderNotesPage() {
    const root = document.getElementById("notesRoot");
    if (!root) return;
    const notes = readNotes();
    const progress = readProgress();
    const rows = Object.entries(notes).map(([qid, note]) => {
      const q = allQuestions().find(item => item.id === qid);
      if (!q) return "";
      const u = unitById(unitOfQuestion(qid));
      const p = progress[qid];
      const status = p?.isCorrect === true ? "正解" : p?.isCorrect === false ? "不正解" : p ? "回答済み" : "未回答";
      return `<article class="note-card"><div><strong>${escapeHtml(u?.title || "演習")} / 問${q.number}. ${escapeHtml(q.title)}</strong><p>${escapeHtml(note.text || "")}</p><small>${escapeHtml(status)} ・ 更新 ${escapeHtml(note.updatedAt ? new Date(note.updatedAt).toLocaleString() : "-")}</small></div><div class="note-actions"><a class="btn" href="${escapeHtml(pageHref(u?.page || "index.html"))}?q=${encodeURIComponent(qid)}">問題へ</a><button class="btn ghost" data-delete-note="${escapeHtml(qid)}" type="button">削除</button></div></article>`;
    }).join("");
    root.innerHTML = `<div class="practice-tools"><a class="btn primary" href="${pageHref('search.html')}">問題検索へ</a><a class="btn" href="${pageHref('review-marked.html')}">見直し問題へ</a><button class="btn ghost" id="exportNotes" type="button">メモをJSONで保存</button></div>${rows || `<p class="notice">学習メモはまだありません。問題画面のメモ欄に、迷った理由や覚えるべきポイントを残してください。</p>`}`;
    root.querySelectorAll("[data-delete-note]").forEach(btn => btn.addEventListener("click", () => {
      const next = readNotes();
      delete next[btn.dataset.deleteNote];
      writeNotes(next);
      renderNotesPage();
    }));
    document.getElementById("exportNotes")?.addEventListener("click", () => {
      const blob = new Blob([JSON.stringify(readNotes(), null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "java-practice-lab-notes.json";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    });
  }

  function renderSettingsPage() {
    const root = document.getElementById("settingsRoot");
    if (!root) return;
    const s = readSettings();
    root.innerHTML = `<div class="compare-grid">
      <div class="compare-card"><h2>表示</h2><label>テーマ<select id="settingTheme" class="search-input"><option value="light" ${s.theme !== "dark" ? "selected" : ""}>ライト</option><option value="dark" ${s.theme === "dark" ? "selected" : ""}>ダーク</option></select></label></div>
      <div class="compare-card"><h2>演習</h2><label class="toggle-inline"><input type="checkbox" id="settingAutoNext" ${s.autoNext ? "checked" : ""}> 通常演習で解答後に自動で次へ</label><label>1日の目標回答数<input id="settingDailyGoal" class="search-input" type="number" min="1" max="200" value="${Number(s.dailyGoal || 20)}"></label></div>
      <div class="compare-card"><h2>データ管理</h2><p>履歴移行、メモの保存、全履歴削除は各専用ページから行えます。</p><a class="btn" href="${pageHref('sync.html')}">履歴移行へ</a> <a class="btn" href="${pageHref('notes.html')}">学習メモへ</a></div>
    </div><div id="settingsStatus" class="notice">設定は変更すると自動保存されます。</div>`;
    const save = () => {
      writeSettings({ theme: document.getElementById("settingTheme").value, autoNext: document.getElementById("settingAutoNext").checked, dailyGoal: Number(document.getElementById("settingDailyGoal").value || 20) });
      applySettings();
      document.getElementById("settingsStatus").textContent = "設定を保存しました。";
    };
    ["settingTheme", "settingAutoNext", "settingDailyGoal"].forEach(id => document.getElementById(id)?.addEventListener("change", save));
  }


  function difficultyLabel(value) {
    return ({ basic: "基本", standard: "標準", hard: "応用" })[value] || value || "標準";
  }

  function tagStatsFromProgress(sourceQuestions = allQuestions()) {
    const progress = readProgress();
    const stats = {};
    sourceQuestions.forEach(q => (q.tags || ["untagged"]).forEach(t => {
      stats[t] ||= { total: 0, answered: 0, correct: 0, wrong: 0 };
      stats[t].total++;
      if (progress[q.id]) stats[t].answered++;
      if (progress[q.id]?.isCorrect === true) stats[t].correct++;
      if (progress[q.id]?.isCorrect === false) stats[t].wrong++;
    }));
    return stats;
  }

  function renderHomeStats() {
    const root = document.getElementById("homeStatsRoot");
    if (!root) return;
    const questions = practiceQuestions();
    const progress = readProgress();
    const answered = questions.filter(q => progress[q.id]);
    const correct = answered.filter(q => progress[q.id]?.isCorrect === true);
    const wrong = answered.filter(q => progress[q.id]?.isCorrect === false);
    const marked = markedQuestionIdsFor(questions).length;
    const due = questionsForDueCount(questions);
    const rate = answered.length ? Math.round(correct.length / answered.length * 100) : 0;
    const stats = tagStatsFromProgress(questions);
    const weak = Object.entries(stats).filter(([,v]) => v.answered >= 3).sort((a,b) => (a[1].correct/a[1].answered) - (b[1].correct/b[1].answered)).slice(0,3);
    const weakHtml = weak.length ? weak.map(([tag,v]) => `<a class="mini-chip" href="${tagHref(tag)}">${escapeHtml(tagTitle(tag))} ${Math.round(v.correct/v.answered*100)}%</a>`).join("") : `<span class="inline-note">まだ集計に十分な回答がありません。</span>`;
    root.innerHTML = `<div class="stat-grid">
      <div class="stat-card"><strong>${answered.length}/${questions.length}</strong><span>解答済み</span></div>
      <div class="stat-card"><strong>${rate}%</strong><span>正答率</span></div>
      <div class="stat-card"><strong>${wrong.length}</strong><span>不正解</span></div>
      <div class="stat-card"><strong>${marked}</strong><span>見直し</span></div>
      <div class="stat-card"><strong>${due}</strong><span>今日の復習候補</span></div>
    </div><p class="inline-note">※この進捗は通常演習のみです。模試A〜Dや各コース模試は実践模試センター・模試履歴で確認します。</p><div class="recommend-box"><h3>次にやること</h3><p>${wrong.length ? "まず不正解と自信低めの問題を処理してください。" : answered.length ? "次はタグ別演習で弱点を補強するか、実践模試センターで本番形式を確認してください。" : "まずは通常演習を20問ほど解いて、弱点データを作ってください。"}</p><div class="practice-tools"><a class="btn primary" href="${pageHref('review-due.html')}">今日の復習</a><a class="btn" href="${pageHref('dashboard.html')}">弱点分析</a><a class="btn" href="${pageHref('exam.html')}">実践模試</a><a class="btn" href="${pageHref('learning-path.html')}">ロードマップ</a></div><div class="chip-row">${weakHtml}</div></div>`;
  }

  function questionsForDueCount(sourceQuestions = allQuestions()) {
    const progress = readProgress();
    const now = Date.now();
    const day = 86400000;
    return sourceQuestions.filter(q => {
      const p = progress[q.id];
      if (!p) return false;
      if (p.isCorrect === false) return true;
      const age = now - progressTime(p);
      if ((p.confidence || "medium") === "low") return true;
      if ((p.confidence || "medium") === "medium") return age >= 3 * day;
      return age >= 7 * day;
    }).length;
  }

  function renderQualityMapPage() {
    const root = document.getElementById("qualityMapRoot");
    if (!root) return;
    const progress = readProgress();
    const rows = DATA.units.map(u => {
      const qs = DATA.questions[u.id] || [];
      const diff = { basic: 0, standard: 0, hard: 0 };
      const tags = {};
      let multi = 0, detailed = 0, code = 0;
      qs.forEach(q => {
        diff[q.difficulty || "standard"] = (diff[q.difficulty || "standard"] || 0) + 1;
        if (q.type === "multi") multi++;
        if ((q.explanation?.points || []).length >= 4 && q.explanation?.summary) detailed++;
        if ((q.codeBlocks || []).length || q.command) code++;
        (q.tags || []).forEach(t => tags[t] = (tags[t] || 0) + 1);
      });
      const topTags = Object.entries(tags).sort((a,b) => b[1]-a[1]).slice(0,4).map(([t,c]) => `${tagTitle(t)}(${c})`).join(" / ");
      const answered = qs.filter(q => progress[q.id]).length;
      return `<tr><td><a href="${escapeHtml(u.page)}">${escapeHtml(u.title)}</a></td><td>${qs.length}</td><td>${code}</td><td>${multi}</td><td>${diff.basic}/${diff.standard}/${diff.hard}</td><td>${detailed}/${qs.length}</td><td>${answered}/${qs.length}</td><td>${escapeHtml(topTags)}</td></tr>`;
    }).join("");
    const all = allQuestions();
    const missingTags = all.filter(q => !(q.tags || []).length).length;
    const missingExplanation = all.filter(q => !q.explanation?.summary || !(q.explanation?.points || []).length).length;
    const duplicateTitles = Object.entries(all.reduce((m,q)=>{m[q.title]=(m[q.title]||0)+1; return m;},{})).filter(([,c])=>c>8).length;
    root.innerHTML = `<div class="stat-grid"><div class="stat-card"><strong>${all.length}</strong><span>総問題数</span></div><div class="stat-card"><strong>${DATA.units.filter(u=>u.mode==='exam').length}</strong><span>模試数</span></div><div class="stat-card"><strong>${missingTags}</strong><span>タグ未設定</span></div><div class="stat-card"><strong>${missingExplanation}</strong><span>解説不足</span></div><div class="stat-card"><strong>${duplicateTitles}</strong><span>重複傾向タイトル</span></div></div>
    <h2>セット別分布</h2><table class="mini-table wide-table"><thead><tr><th>セット</th><th>問数</th><th>コード系</th><th>複数選択</th><th>基本/標準/応用</th><th>詳説</th><th>進捗</th><th>主要タグ</th></tr></thead><tbody>${rows}</tbody></table>
    <p class="notice">ここで「解説不足」「タグ未設定」が0なら、公開前の最低限の構造チェックは通っています。中身の精度は模試A〜Dを実際に解いて確認してください。</p>`;
  }

  function renderLearningPathPage() {
    const root = document.getElementById("learningPathRoot");
    if (!root) return;
    const progress = readProgress();
    const all = allQuestions();
    const answered = all.filter(q => progress[q.id]);
    const wrong = all.filter(q => progress[q.id]?.isCorrect === false);
    const low = all.filter(q => progress[q.id]?.confidence === "low");
    const stats = tagStatsFromProgress();
    const weak = Object.entries(stats).filter(([,v]) => v.answered >= 3).sort((a,b) => (a[1].correct/a[1].answered) - (b[1].correct/b[1].answered)).slice(0,5);
    const stage = answered.length < 50 ? "基礎データ作成" : wrong.length > 20 ? "弱点処理" : answered.length < 240 ? "模試準備" : "仕上げ";
    const weakRows = weak.map(([tag,v]) => `<tr><td><a href="${tagHref(tag)}">${escapeHtml(tagTitle(tag))}</a></td><td>${v.correct}/${v.answered}</td><td>${Math.round(v.correct/v.answered*100)}%</td><td>${v.wrong}</td></tr>`).join("") || `<tr><td colspan="4">まだ弱点判定に十分な回答数がありません。</td></tr>`;
    root.innerHTML = `<div class="stat-grid"><div class="stat-card"><strong>${stage}</strong><span>現在の段階</span></div><div class="stat-card"><strong>${answered.length}</strong><span>解答済み</span></div><div class="stat-card"><strong>${wrong.length}</strong><span>不正解</span></div><div class="stat-card"><strong>${low.length}</strong><span>自信低め</span></div><div class="stat-card"><strong>${questionsForDueCount()}</strong><span>復習候補</span></div></div>
    <div class="compare-grid"><article class="compare-card"><h2>今日やるべきこと</h2><ol><li>${wrong.length ? "間違えた問題だけ復習を10〜20問処理する" : "通常演習かランダム演習を20問解く"}</li><li>${low.length ? "自信低めの問題にメモを残す" : "参照比較・String・例外の記事を読む"}</li><li>${answered.length >= 120 ? "模試を1セット90分で解く" : "タグ別演習で苦手タグを作る"}</li></ol><div class="practice-tools"><a class="btn primary" href="${pageHref('review-due.html')}">今日の復習</a><a class="btn" href="${pageHref('random.html')}">ランダム演習</a><a class="btn" href="${pageHref('practice-g.html')}">模試A</a></div></article><article class="compare-card"><h2>弱点タグ</h2><table class="mini-table"><thead><tr><th>タグ</th><th>正解</th><th>率</th><th>不正解</th></tr></thead><tbody>${weakRows}</tbody></table></article></div>`;
  }

  function bindKeyboardShortcuts() {
    document.addEventListener("keydown", e => {
      const root = document.getElementById("questionRoot");
      if (!root) return;
      if (["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName)) return;
      const key = e.key.toLowerCase();
      const card = root.querySelector(".question-card");
      if (!card) return;
      const letters = "abcdefgh";
      const idx = letters.indexOf(key);
      if (idx >= 0) {
        const option = card.querySelectorAll("input[data-option]")[idx];
        if (option && !option.disabled) {
          e.preventDefault();
          option.checked = option.type === "checkbox" ? !option.checked : true;
          option.dispatchEvent(new Event("change", { bubbles: true }));
        }
      } else if (key === "enter") {
        const btn = card.querySelector("[data-submit]");
        if (btn && !btn.disabled) { e.preventDefault(); btn.click(); }
      } else if (key === "n" || e.key === "ArrowRight") {
        e.preventDefault(); goRelative(1);
      } else if (key === "p" || e.key === "ArrowLeft") {
        e.preventDefault(); goRelative(-1);
      } else if (key === "m") {
        const qid = card.dataset.questionId;
        if (qid) { e.preventDefault(); toggleReview(qid); renderQuestionView(false); }
      }
    });
  }



  function renderModePage() {
    const root = document.getElementById("modeRoot");
    if (!root) return;
    root.innerHTML = `<div class="mode-grid">
      <a class="mode-card" href="${pageHref('articles.html')}"><strong>初めて学ぶ</strong><span>記事で理解してから通常演習へ進みます。</span><em>記事 → 通常演習</em></a>
      <a class="mode-card" href="${pageHref('dashboard.html')}"><strong>苦手を潰す</strong><span>弱点タグと間違えた理由を確認し、タグ別演習で補強します。</span><em>弱点分析 → タグ別</em></a>
      <a class="mode-card" href="${pageHref('exam.html')}"><strong>本番練習する</strong><span>60問・90分の模試A〜Dで時間配分と判定力を確認します。</span><em>模試A〜D</em></a>
      <a class="mode-card" href="${pageHref('review-due.html')}"><strong>昨日のミスを復習する</strong><span>不正解・自信低め・間隔が空いた問題を優先します。</span><em>今日の復習</em></a>
      <a class="mode-card" href="${pageHref('before-exam.html')}"><strong>直前確認する</strong><span>頻出メソッド、例外、参照比較、コンパイルエラーを一気に確認します。</span><em>直前チェック</em></a>
    </div>`;
  }

  function renderMistakeReasonsPage() {
    const root = document.getElementById("mistakeReasonsRoot");
    if (!root) return;
    const reasons = readMistakeReasons();
    const progress = readProgress();
    const grouped = {};
    Object.entries(reasons).forEach(([qid, v]) => (v.reasons || []).forEach(r => {
      grouped[r] ||= [];
      grouped[r].push(qid);
    }));
    const sections = Object.entries(mistakeReasonLabels).map(([key, label]) => {
      const ids = grouped[key] || [];
      const cards = ids.slice(0, 30).map(qid => {
        const q = allQuestions().find(x => x.id === qid);
        if (!q) return "";
        const u = unitById(unitOfQuestion(qid));
        const p = progress[qid];
        return `<a class="search-result-card" href="${escapeHtml(pageHref(u?.page || 'index.html'))}?q=${encodeURIComponent(qid)}"><strong>${escapeHtml(u?.title || '演習')} / 問${q.number}. ${escapeHtml(q.title)}</strong><span>${escapeHtml(q.prompt).slice(0,110)}${q.prompt.length>110?'...':''}</span><small>${p?.isCorrect===false?'不正解':'記録あり'} ・ ${(q.tags || []).map(tagTitle).join(' / ')}</small></a>`;
      }).join("");
      return `<details class="reason-section" ${ids.length ? "open" : ""}><summary>${escapeHtml(label)} <span>${ids.length}件</span></summary>${cards || `<p class="inline-note">まだ記録がありません。</p>`}</details>`;
    }).join("");
    root.innerHTML = `<p class="notice">正誤だけではなく、なぜ間違えたかを分類します。ここを見ると、次に潰すべき癖が見えます。</p>${sections}`;
  }

  function renderWeakGuidePage() {
    const root = document.getElementById("weakGuideRoot");
    if (!root) return;
    const stats = tagStatsFromProgress();
    const rows = Object.keys(DATA.tagDefinitions || {}).map(tag => {
      const s = stats[tag] || { answered: 0, correct: 0, wrong: 0 };
      const rate = s.answered ? `${Math.round(s.correct/s.answered*100)}%` : "未回答";
      return `<article class="weak-guide-card"><h2>${escapeHtml(tagTitle(tag))}</h2><p>${escapeHtml(tagDescription(tag))}</p>${weakGuideHtml(tag)}<p><strong>成績:</strong> ${s.correct || 0}/${s.answered || 0}（${rate}）</p><div class="practice-tools"><a class="btn" href="${tagHref(tag)}">このタグを練習</a><a class="btn ghost" href="search.html?tag=${encodeURIComponent(tag)}">検索</a></div></article>`;
    }).join("");
    root.innerHTML = rows;
  }

  function renderBeforeExamPage() {
    const root = document.getElementById("beforeExamRoot");
    if (!root) return;
    root.innerHTML = `<div class="before-exam-grid">
      <section class="panel"><h2>参照比較</h2><ul><li>== は同じオブジェクトかを見る。</li><li>equals はクラスの実装次第。</li><li>String リテラル、new、intern を分ける。</li><li>配列の equals は参照比較。内容比較は Arrays.equals。</li></ul></section>
      <section class="panel"><h2>コンパイルエラー頻出</h2><ul><li>ローカル変数未初期化。</li><li>var をフィールド・引数・戻り値で使う。</li><li>catch の順序が広い型から狭い型。</li><li>this()/super() がコンストラクタ先頭でない。</li><li>interface 定数を書き換える。</li></ul></section>
      <section class="panel"><h2>実行時例外頻出</h2><ul><li>null に対するメソッド呼び出し。</li><li>配列範囲外。</li><li>不正なキャスト。</li><li>parseInt の不正文字列。</li><li>List.of の変更操作。</li></ul></section>
      <section class="panel"><h2>String / StringBuilder</h2><ul><li>String は不変。戻り値を受け取る。</li><li>StringBuilder は append/delete/insert が自身を変更。</li><li>StringBuilder.equals は内容比較ではない。</li><li>substring の第2引数は含まない。</li></ul></section>
      <section class="panel"><h2>演算・制御</h2><ul><li>++i は増やしてから値、i++ は値を使ってから増える。</li><li>&& / || は短絡評価、& / | は両辺評価。</li><li>switch文はフォールスルー、switch式は値を返す。</li><li>+= は暗黙キャストを含む。</li></ul></section>
      <section class="panel"><h2>継承・例外</h2><ul><li>フィールドは隠蔽、メソッドはオーバーライド。</li><li>private メソッドはオーバーライドではない。</li><li>checked 例外は処理または宣言が必要。</li><li>try-with-resources は close 後に finally。</li></ul></section>
    </div><div class="practice-tools"><a class="btn primary" href="${pageHref('exam.html')}">模試センターへ</a><a class="btn" href="${pageHref('methods.html')}">メソッド表</a><a class="btn" href="${pageHref('mistake-patterns.html')}">誤答パターン集</a></div>`;
  }

  function renderAdsGuidePage() {
    const root = document.getElementById("adsGuideRoot");
    if (!root) return;
    root.innerHTML = `<table class="mini-table wide-table"><thead><tr><th>ページ</th><th>広告方針</th><th>理由</th></tr></thead><tbody>
      <tr><td>学習記事</td><td>本文上部・中盤・末尾</td><td>検索流入向け。読む導線を壊しにくい。</td></tr>
      <tr><td>トップ</td><td>控えめに1〜2箇所</td><td>入口なので圧迫しない。</td></tr>
      <tr><td>通常演習</td><td>下部またはサイドのみ</td><td>コード読解中に割り込ませない。</td></tr>
      <tr><td>模試中</td><td>原則なし</td><td>90分の集中を壊すと教材価値が落ちる。</td></tr>
      <tr><td>模試結果</td><td>下部のみ可</td><td>復習導線を邪魔しない。</td></tr>
    </tbody></table><p class="notice">収益化するなら、問題ページより記事ページを主な流入・広告配置先にする方が安全です。</p>`;
  }

  document.addEventListener("DOMContentLoaded", () => { applySettings(); renderNav(); renderIndex(); renderHomeStats(); renderDashboard(); renderQualityMapPage(); renderLearningPathPage(); renderNotesPage(); renderSettingsPage(); renderSearchPage(); renderModePage(); renderMistakeReasonsPage(); renderWeakGuidePage(); renderBeforeExamPage(); renderAdsGuidePage(); renderSyncPage(); renderUnit(); bindToolbar(); bindKeyboardShortcuts(); });
})();
