/* ============================================================
   ANDY YANG — 交互（明亮艺术档案室版）
   ============================================================ */
(function () {
  "use strict";

  /* ---------- 工具 ---------- */
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
  const el = (tag, cls, text) => {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text != null) node.textContent = text;
    return node;
  };

  /* 彩胶盘心配色（参照每张参考唱片盘心的颜色与气质） */
  const DISC_LABEL = {
    "herbeast": "l-ink",        // 参考 A：深黑盘心
    "winona": "l-olive",        // 参考 B：橄榄灰绿盘心
    "spoon-rola": "l-gold",     // 参考 C：柠檬黄盘心
    "beauty-insider": "l-cream",// 参考 D：奶白盘心
    "zsiga": "l-ink",           // 参考 E：黑色盘心
    "andyopia": "l-ink",        // 参考 F：黑色盘心
  };

  /* 构建一张完整彩胶：真实盘面纹理 + 项目盘心（仅项目英文名 + 年份） */
  function buildDisc(rec, extraClass) {
    const disc = el("div", "vinyl vinyl-" + rec.id + (extraClass ? " " + extraClass : ""));
    disc.setAttribute("aria-hidden", "true");
    const label = el("div", "vinyl__label " + (DISC_LABEL[rec.id] || "l-ink"));
    label.append(
      el("span", "dl-title", rec.labelTitle || rec.title),
      el("span", "dl-hole"),
      el("span", "dl-year", rec.year)
    );
    disc.append(label);
    return disc;
  }

  /* ---------- 工作技能（标签墙） ---------- */
  const skillsWall = $("#skills-wall");
  SKILLS.forEach((s) => skillsWall.append(el("li", null, s)));

  /* ---------- 我的作品：六张方形封面横向铺开，悬停滑出彩胶 ---------- */
  const shelf = $("#record-shelf");

  RECORDS.forEach((rec, i) => {
    const row = el("article", "work");
    row.setAttribute("role", "listitem");
    row.dataset.id = rec.id;
    row.style.zIndex = RECORDS.length - i; // 最新项目在最上层

    // 视觉区：彩胶藏于封面后，悬停时从右侧滑出
    const visual = el("div", "work__visual");
    visual.append(buildDisc(rec, "work__disc"));

    const coverBtn = el("button", "work__cover");
    coverBtn.type = "button";
    coverBtn.setAttribute("aria-haspopup", "dialog");
    coverBtn.setAttribute(
      "aria-label",
      `${rec.title} ${rec.subtitle}，${rec.role}，${rec.period}。查看完整作品档案`
    );
    if (rec.cover) {
      const img = new Image();
      img.src = rec.cover;
      img.alt = rec.coverAlt || `${rec.title} 封面`;
      img.loading = "lazy";
      coverBtn.append(img);
    }
    coverBtn.addEventListener("click", () => openModal(rec.id));
    visual.append(coverBtn);

    // 信息区：封面下方紧凑图注（序号 / 年份 / 标题 / 副标题）
    const info = el("div", "work__info");
    info.append(
      el("p", "work__index", String(i + 1).padStart(2, "0")),
      el("p", "work__period", rec.period),
      el("h3", "work__title", rec.title),
      el("p", "work__sub", rec.subtitle)
    );

    row.append(visual, info);
    shelf.append(row);
  });

  /* ---------- 经历时间轴 ---------- */
  const timeline = $("#exp-timeline");
  TIMELINE.forEach((t) => {
    const li = el("li");
    li.append(
      el("p", "t-period", t.period),
      el("p", "t-title", t.title),
      el("p", "t-note", t.note)
    );
    timeline.append(li);
  });

  /* ---------- 数字锚点 ---------- */
  const metrics = $("#exp-metrics");
  METRICS.forEach((m) => {
    const box = el("div", "metric");
    box.append(el("p", "metric__value", m.value), el("p", "metric__label", m.label));
    metrics.append(box);
  });

  /* ---------- Now Spinning ---------- */
  const inspGrid = $("#insp-grid");
  INSPIRATIONS.forEach((item) => {
    const card = el("div", "insp-card insp-card--" + item.key);
    const art = el("div", "insp-card__art");
    art.setAttribute("aria-hidden", "true");
    art.append(el("p", "insp-card__now", "Now Spinning"));
    const body = el("div", "insp-card__body");
    body.append(
      el("p", "insp-card__en", item.en),
      el("p", "insp-card__zh", item.zh),
      el("p", "insp-card__desc", item.desc)
    );
    card.append(art, body);
    inspGrid.append(card);
  });

  /* ---------- 联系方式：邮箱 mailto / 小红书跳转主页 / 公众号点击复制 ---------- */
  const contactBox = $("#contact-links");
  const CONTACT_ITEMS = [
    { key: "email", en: "EMAIL", zh: "邮箱", value: CONTACT.email, href: "mailto:" + CONTACT.email },
    { key: "xiaohongshu", en: "RED", zh: "小红书", value: CONTACT.xiaohongshu, href: CONTACT.xiaohongshuUrl },
    { key: "wechat", en: "WECHAT", zh: "微信公众号", value: CONTACT.wechat },
  ];
  CONTACT_ITEMS.forEach((item) => {
    if (!item.value) return;
    let node;
    if (item.href) {
      node = el("a");
      node.href = item.href;
      if (item.href.startsWith("mailto:")) {
        node.setAttribute("aria-label", `发送邮件到 ${item.value}`);
      } else {
        node.target = "_blank";
        node.rel = "noopener noreferrer";
        node.setAttribute("aria-label", `打开${item.zh}主页 ${item.value}`);
        // 与公众号卡片一致的横线提示行：点击整卡直跳主页
        node.append(el("span", "c-act", "点击前往 GO ↗"));
      }
    } else {
      node = el("button");
      node.type = "button";
      node.setAttribute("aria-label", `复制${item.zh}账号 ${item.value}`);
      const hint = el("span", "c-act", "点击复制 COPY");
      node.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(item.value);
          hint.textContent = "已复制 COPIED ✓";
        } catch {
          hint.textContent = item.value;
        }
        setTimeout(() => { hint.textContent = "点击复制 COPY"; }, 1600);
      });
      node.append(hint);
    }
    node.classList.add("contact-item");
    node.prepend(
      el("span", "c-en", item.en),
      el("span", "c-zh", item.zh),
      el("span", "c-val", item.value)
    );
    contactBox.append(node);
  });

  /* ============================================================
     曲目渲染：点击打开第二层「作品详情弹窗」
     ============================================================ */
  function renderTrack(rec, track, listEl) {
    const li = el("li");

    if (track.url && track.direct) {
      // 直跳外链：点击直接新标签页打开，不经中间弹窗
      const a = el("a", "track-link");
      a.href = track.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.append(el("span", "t-name", track.name));
      a.append(el("span", "t-type", "Link ↗"));
      li.append(a);
    } else if (track.url) {
      // 外链曲目：点击先进入作品详情弹窗，再由弹窗内按钮新标签页打开
      const btn = el("button", "t-btn");
      btn.type = "button";
      btn.setAttribute("aria-haspopup", "dialog");
      btn.append(el("span", "t-name", track.name));
      btn.append(el("span", "t-type", "Link ↗"));
      btn.addEventListener("click", () => openWorkModal(rec, track));
      li.append(btn);
    } else if (track.items && track.items.length) {
      // 有素材：点击进入作品详情弹窗
      const btn = el("button", "t-btn");
      btn.type = "button";
      btn.setAttribute("aria-haspopup", "dialog");
      btn.append(el("span", "t-name", track.name));
      const kind =
        track.type === "video" ? `Video ×${track.items.length} ▸`
        : track.type === "image" ? `Image ×${track.items.length} ▸`
        : "File ▸";
      btn.append(el("span", "t-type", kind));
      btn.addEventListener("click", () => openWorkModal(rec, track));
      li.append(btn);
    } else {
      // 未配置：显示「作品待补充」，不可点击（noBadge 时只显示名称）
      const box = el("div", "t-btn is-static");
      box.setAttribute("aria-disabled", "true");
      box.style.cssText = "display:flex;align-items:center;gap:14px;width:100%;padding:13px 18px;background:#fff;border:2px dashed var(--line);font-size:14px;color:var(--ink-soft);";
      box.append(el("span", "t-name", track.name));
      if (!track.noBadge) box.append(el("span", "t-pending", "作品待补充"));
      li.append(box);
    }
    listEl.append(li);
  }

  /* ============================================================
     作品详情弹窗（第二层，叠于项目详情弹窗之上）
     ============================================================ */
  const wmodal = $("#work-modal");
  const wbody = $("#wmodal-body");
  let wLastFocus = null;

  function openWorkModal(rec, track) {
    if (!track.url && (!track.items || !track.items.length)) return;
    wLastFocus = document.activeElement;
    $("#wmodal-project").textContent = rec.labelTitle || rec.title;
    $("#wmodal-title").textContent = track.name;
    wbody.innerHTML = "";
    if (track.url) buildLinkViewer(track);
    else if (track.type === "video") buildVideoViewer(track.items);
    else if (track.type === "image") buildImageViewer(track.items);
    else buildLinkViewer(track);
    wmodal.hidden = false;
    void wmodal.offsetWidth; // 强制 reflow，确保过渡动画可靠触发
    wmodal.classList.add("is-open");
    $(".wmodal__close").focus();
  }

  function closeWorkModal() {
    closeLightbox(); // 若大图预览仍开着，一并关闭
    $$("video", wbody).forEach((v) => { v.pause(); v.removeAttribute("src"); v.load(); });
    wmodal.classList.remove("is-open");
    setTimeout(() => {
      wmodal.hidden = true;
      wbody.innerHTML = "";
      if (wLastFocus) wLastFocus.focus();
    }, 320);
  }

  wmodal.addEventListener("click", (e) => {
    if (e.target.closest("[data-wclose]")) closeWorkModal();
  });

  /* ---- 视频查看器：大播放器 + 列表切换 ---- */
  function buildVideoViewer(items) {
    const wrap = el("div", "wvideo");
    const main = el("div", "wvideo__main");
    const video = document.createElement("video");
    video.controls = true;          // 原生控件：播放/暂停/进度/静音/全屏
    video.playsInline = true;
    video.preload = "metadata";
    video.src = items[0].src;
    video.setAttribute("aria-label", items[0].title + " 视频播放");
    main.append(video);
    wrap.append(main);

    let cells = [];
    if (items.length > 1) {
      const list = el("div", "wvideo__list");
      items.forEach((item, i) => {
        const cell = el("button", "wvideo__item" + (i === 0 ? " is-active" : ""));
        cell.type = "button";
        const thumbWrap = el("span", "wvideo__thumb");
        const thumb = document.createElement("video");
        thumb.src = item.src;
        thumb.muted = true;
        thumb.preload = "metadata";   // 首帧即封面
        thumb.setAttribute("aria-hidden", "true");
        thumb.tabIndex = -1;
        const playIco = el("span", "wvideo__play");
        playIco.innerHTML = '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M7 4.5v15l13-7.5z" fill="currentColor"/></svg>';
        thumbWrap.append(thumb, playIco);
        const meta = el("span", "wvideo__meta");
        meta.append(
          el("span", "wvideo__t", item.title),
          el("span", "wvideo__state", i === 0 ? "已暂停" : "点击播放")
        );
        cell.append(thumbWrap, meta);
        cell.addEventListener("click", () => {
          video.src = item.src;
          video.setAttribute("aria-label", item.title + " 视频播放");
          video.play().catch(() => {});
          cells.forEach((c) => {
            const active = c === cell;
            c.classList.toggle("is-active", active);
            c.querySelector(".wvideo__state").textContent = active ? "正在播放" : "点击播放";
          });
        });
        cells.push(cell);
        list.append(cell);
      });
      wrap.append(list);
      // 播放状态与主播放器同步
      const syncState = (playing) => {
        cells.forEach((c) => {
          if (c.classList.contains("is-active")) {
            c.querySelector(".wvideo__state").textContent = playing ? "正在播放" : "已暂停";
          }
        });
      };
      video.addEventListener("play", () => syncState(true));
      video.addEventListener("pause", () => syncState(false));
      video.addEventListener("ended", () => syncState(false));
    }
    wbody.append(wrap);
  }

  /* ---- 图片查看器：Finder 式缩略图网格，点击进入全屏预览 ---- */
  function buildImageViewer(items) {
    const grid = el("div", "wgrid");
    grid.setAttribute("role", "list");
    items.forEach((item, i) => {
      const cell = el("button", "wgrid__cell");
      cell.type = "button";
      cell.setAttribute("role", "listitem");
      cell.setAttribute("aria-label", `查看大图 ${item.title}`);
      const frame = el("span", "wgrid__frame");
      const img = new Image();
      img.src = item.src;
      img.alt = item.title;
      img.loading = "lazy";
      frame.append(img);
      const cap = el("span", "wgrid__cap", item.title);
      cap.title = item.title; // 悬停显示完整名称
      cell.append(frame, cap);
      cell.addEventListener("click", () => {
        cell.focus({ preventScroll: true }); // 记录来源缩略图，关闭灯箱后焦点返回且不跳滚动
        openLightbox(items, i);
      });
      grid.append(cell);
    });
    wbody.append(grid);
  }

  /* ---- 全屏大图预览（第三层，叠于作品详情弹窗之上） ---- */
  let wlb = null;      // 灯箱根节点
  let wlbItems = [];   // 当前图片组
  let wlbIdx = 0;
  let wlbLastFocus = null;

  function ensureLightbox() {
    if (wlb) return wlb;
    wlb = el("div", "wlb");
    wlb.hidden = true;
    wlb.setAttribute("role", "dialog");
    wlb.setAttribute("aria-modal", "true");
    wlb.setAttribute("aria-label", "大图预览");
    wlb.innerHTML =
      '<div class="wlb__overlay" data-lbclose></div>' +
      '<figure class="wlb__stage">' +
      '  <img class="wlb__img" alt="" />' +
      '</figure>' +
      '<button type="button" class="wlb__nav wlb__nav--prev" aria-label="上一张">' +
      '  <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><path d="M15.5 4.5 8 12l7.5 7.5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
      '</button>' +
      '<button type="button" class="wlb__nav wlb__nav--next" aria-label="下一张">' +
      '  <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><path d="m8.5 4.5 7.5 7.5-7.5 7.5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
      '</button>' +
      '<div class="wlb__bar">' +
      '  <span class="wlb__counter"></span>' +
      '  <span class="wlb__name"></span>' +
      '</div>' +
      '<button type="button" class="wlb__close" data-lbclose aria-label="关闭大图预览">' +
      '  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/></svg>' +
      '</button>';
    wlb.addEventListener("click", (e) => {
      if (e.target.closest("[data-lbclose]")) { closeLightbox(); return; }
      if (e.target.closest(".wlb__nav--prev")) showLightbox(wlbIdx - 1);
      else if (e.target.closest(".wlb__nav--next")) showLightbox(wlbIdx + 1);
    });
    document.body.append(wlb);
    return wlb;
  }

  function openLightbox(items, startIdx) {
    ensureLightbox();
    wlbLastFocus = document.activeElement;
    wlbItems = items;
    showLightbox(startIdx);
    wlb.hidden = false;
    void wlb.offsetWidth;
    wlb.classList.add("is-open");
    $(".wlb__close", wlb).focus();
  }

  function showLightbox(i) {
    wlbIdx = (i + wlbItems.length) % wlbItems.length;
    const item = wlbItems[wlbIdx];
    const img = $(".wlb__img", wlb);
    img.src = item.src;
    img.alt = item.title;
    $(".wlb__counter", wlb).textContent = `${wlbIdx + 1} / ${wlbItems.length}`;
    $(".wlb__name", wlb).textContent = item.title;
  }

  function closeLightbox() {
    if (!wlb || wlb.hidden) return;
    wlb.classList.remove("is-open");
    setTimeout(() => {
      wlb.hidden = true;
      if (wlbLastFocus) wlbLastFocus.focus({ preventScroll: true }); // 焦点回到缩略图，网格滚动位置不变
    }, 250);
  }

  function lightboxOpen() {
    return wlb && !wlb.hidden;
  }

  /* ---- PDF / 外链查看器 ---- */
  function buildLinkViewer(track) {
    const wrap = el("div", "wlink");
    const url = track.url || (track.items && track.items[0] && track.items[0].src);
    if (url) {
      const a = el("a", "wlink__btn", (track.linkLabel || "查看完整作品") + " ↗");
      a.href = url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      wrap.append(a);
    }
    wbody.append(wrap);
  }

  /* ============================================================
     MODAL
     ============================================================ */
  const modal = $("#record-modal");
  let lastFocus = null;

  function fillList(listEl, items) {
    listEl.innerHTML = "";
    items.forEach((d) => listEl.append(el("li", null, d)));
  }

  function openModal(id) {
    const rec = RECORDS.find((r) => r.id === id);
    if (!rec) return;
    lastFocus = document.activeElement;

    const cover = $("#modal-cover");
    cover.src = rec.cover || "";
    cover.alt = rec.coverAlt || "";
    cover.style.display = rec.cover ? "" : "none";
    cover.onerror = () => { cover.style.display = "none"; };

    const disc = $("#modal-disc");
    disc.className = "modal__disc vinyl vinyl-" + rec.id;
    const labelEl = $("#modal-disc-label");
    labelEl.className = "vinyl__label " + (DISC_LABEL[rec.id] || "l-ink");
    labelEl.innerHTML = "";
    labelEl.append(
      el("span", "dl-title", rec.labelTitle || rec.title),
      el("span", "dl-hole"),
      el("span", "dl-year", rec.year)
    );

    $("#modal-period").textContent = rec.period;
    $("#modal-title").textContent = rec.title;
    $("#modal-subtitle").textContent = rec.subtitle;
    $("#modal-role").textContent = rec.role + (rec.org ? "｜" + rec.org : "");
    $("#modal-intro").textContent = rec.intro;
    $("#modal-summary").textContent = rec.summary;
    // DUTIES 标题：支持按项目自定义（默认「工作内容 DUTIES」）
    const dutiesTitle = $("#modal-duties-title");
    dutiesTitle.textContent = (rec.dutiesZh || "工作内容") + " ";
    dutiesTitle.append(el("span", null, rec.dutiesEn || "DUTIES"));
    fillList($("#modal-duties"), rec.duties);
    fillList($("#modal-results"), rec.results);

    const tracksEl = $("#modal-tracks");
    tracksEl.innerHTML = "";
    rec.tracks.forEach((t) => renderTrack(rec, t, tracksEl));

    const tagBox = $("#modal-tags");
    tagBox.innerHTML = "";
    rec.tags.forEach((t) => tagBox.append(el("span", null, t)));

    const linkBox = $("#modal-links");
    linkBox.innerHTML = "";
    (rec.links || []).forEach((l) => {
      if (!l.url) return; // 链接缺失时不渲染不可用按钮
      const a = el("a", null, l.label + " ↗");
      a.href = l.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      linkBox.append(a);
    });

    modal.hidden = false;
    void modal.offsetWidth; // 强制 reflow，确保过渡动画可靠触发
    modal.classList.add("is-open");
    document.body.style.overflow = "hidden";
    $(".modal__close").focus();
  }

  function closeModal() {
    // 若作品详情弹窗仍开着，先关闭它
    if (wmodal && !wmodal.hidden) closeWorkModal();
    modal.classList.remove("is-open");
    document.body.style.overflow = "";
    setTimeout(() => {
      modal.hidden = true;
      if (lastFocus) lastFocus.focus();
    }, 350);
  }

  modal.addEventListener("click", (e) => {
    if (e.target.closest("[data-close]")) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    // 第三层灯箱最优先：Esc 关闭 / 左右方向键切换大图
    if (lightboxOpen()) {
      if (e.key === "Escape") { e.preventDefault(); closeLightbox(); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); showLightbox(wlbIdx - 1); }
      else if (e.key === "ArrowRight") { e.preventDefault(); showLightbox(wlbIdx + 1); }
      return;
    }
    // 第二层弹窗：Esc 关闭
    if (!wmodal.hidden) {
      if (e.key === "Escape") { closeWorkModal(); return; }
      if (e.key === "Tab") {
        // 焦点圈定在第二层弹窗内
        const focusables = $$("button:not([disabled]), a[href], video[controls]", wmodal);
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault(); focusables[focusables.length - 1].focus();
        } else if (!e.shiftKey && document.activeElement === focusables[focusables.length - 1]) {
          e.preventDefault(); first.focus();
        }
      }
      return;
    }
    if (e.key === "Escape" && !modal.hidden) closeModal();
    // 简单焦点圈定
    if (e.key === "Tab" && !modal.hidden) {
      const focusables = $$(".modal__panel button:not([aria-disabled='true']), .modal__panel a[href]", modal);
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault(); last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); first.focus();
      }
    }
  });

  /* ---------- 导航锚点：平滑滚动 + 到位校验兜底 ---------- */
  $$('.nav__links a[href^="#"], .nav__logo, .skip-link, .btn--hero').forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      if (href === "#top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setTimeout(() => {
          if (window.scrollY > 120) window.scrollTo({ top: 0, behavior: "instant" });
        }, 1200);
        return;
      }
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      // 校验：若平滑滚动被环境取消/中断，1.2s 后未到位则直接跳转
      const expect = target.getBoundingClientRect().top + window.scrollY;
      setTimeout(() => {
        if (Math.abs(window.scrollY + 76 - expect) > 120) {
          target.scrollIntoView({ behavior: "instant", block: "start" });
        }
      }, 1200);
    });
  });

  /* ---------- 进场动效 ---------- */
  const revealTargets = $$(".section__head, .about__card, .about__bio, .about__skills, .work, .exp__timeline li, .metric, .insp-card, .contact__line, .skills-wall li");
  revealTargets.forEach((n) => n.classList.add("reveal"));
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("is-in");
          io.unobserve(en.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealTargets.forEach((n) => io.observe(n));
})();
