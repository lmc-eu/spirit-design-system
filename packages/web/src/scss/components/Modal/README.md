# Modal

Modal acts as dialog for any content.

```html
<button
  type="button"
  class="Button Button--primary"
  data-toggle="modal"
  data-target="#modal-example-1"
  aria-controls="modal-example-1"
  aria-expanded="false"
>
  Open Modal Example 1
</button>
<dialog id="modal-example-1" class="Modal">
  <div class="Modal__content">
    <div class="Modal__dialog">
      <div class="Modal__header">
        <button
          type="button"
          class="Button Button--tertiary Button--square"
          data-dismiss="modal"
          data-target="#modal-example-1"
          aria-controls="modal-example-1"
          aria-expanded="false"
        >
          <span class="Modal__close" aria-hidden="true"></span>
          <span class="accessibility-hidden">Close</span>
        </button>
      </div>
      <div class="Modal__body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at excepturi laudantium magnam mollitia
          perferendis reprehenderit, voluptate. Cum delectus dicta ducimus eligendi excepturi natus perferendis
          provident unde. Eveniet, iste, molestiae?
        </p>
      </div>
    </div>
  </div>
</dialog>
```

## JavaScript Plugin

For full functionality you need to provide JavaScript which will handle toggling of the Modal dialog component.

```html
<script src="node_modules/@lmc-eu/spirit-web/js/cjs/spirit-web.min.js" async></script>
```

Please consult [main package README][web-readme] for how to include JavaScript plugins.

Or feel free to write controlling scripts yourself.

[web-readme]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web/README.md
