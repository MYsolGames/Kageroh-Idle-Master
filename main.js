// main.js
(() => {
  'use strict';

  // DOM準備後にイベントを結線
  window.addEventListener('DOMContentLoaded', () => {
    const $ = (sel) => document.querySelector(sel);

    const saveBtn = $('#saveBtn');
    const loadBtn = $('#loadBtn');

    if (saveBtn) {
      saveBtn.addEventListener('click', () => {
        // TODO: セーブ処理を実装予定
        console.log('[placeholder] Save clicked');
      });
    }

    if (loadBtn) {
      loadBtn.addEventListener('click', () => {
        // TODO: ロード処理を実装予定
        console.log('[placeholder] Load clicked');
      });
    }
  });
})();
