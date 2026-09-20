/* ============================================
   个人简历 · 交互脚本
   1. 中 / EN 语言切换
   2. 导航栏滚动高亮（scrollspy）
   ============================================ */

(function () {
  'use strict';

  var root = document.documentElement;
  var toggle = document.getElementById('lang-toggle');
  var lang = 'zh'; // 默认中文

  /* ---------- 语言切换 ---------- */
  function setLang(next) {
    lang = next;
    // 切换根元素类，CSS 据此显示/隐藏对应语言
    root.classList.toggle('lang-en', lang === 'en');
    root.lang = lang === 'zh' ? 'zh-CN' : 'en';
    // 切换按钮文字：中文模式下显示「EN」，英文模式下显示「中」
    toggle.textContent = lang === 'zh' ? 'EN' : '中';
  }

  toggle.addEventListener('click', function () {
    setLang(lang === 'zh' ? 'en' : 'zh');
  });

  /* ---------- 导航栏滚动高亮 ---------- */
  var ids = ['summary', 'education', 'experience', 'research', 'skills', 'contact'];
  var links = document.querySelectorAll('a.nav-link');

  function highlight() {
    var current = '';
    ids.forEach(function (id) {
      var el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 120) {
        current = id;
      }
    });
    links.forEach(function (a) {
      var target = a.getAttribute('href').slice(1);
      a.classList.toggle('active', target === current);
    });
  }

  window.addEventListener('scroll', highlight, { passive: true });
  highlight();
})();
