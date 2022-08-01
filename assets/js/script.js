(function() {
    if (document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0) {
        // webp supported
        Array.prototype.forEach.call(document.querySelectorAll("a[data-lightbox-webp]"), function(node) {
            node.href = node.dataset.lightboxWebp;
        })
    }
}) ()
