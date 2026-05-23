        function openModal(id) {
            const m = document.getElementById('modal-' + id);
            if (m) { m.classList.add('is-open'); document.body.style.overflow = 'hidden'; }
        }
        function closeModal(id) {
            const m = document.getElementById('modal-' + id);
            if (m) { m.classList.remove('is-open'); document.body.style.overflow = ''; }
        }
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                document.querySelectorAll('.route-modal.is-open').forEach(function (m) {
                    m.classList.remove('is-open');
                    document.body.style.overflow = '';
                });
            }
        });